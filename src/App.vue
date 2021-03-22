<template>
  <button v-if="peerId && !friendPeerId" @click="sharePeerLink" class="btn-icon call-btn">
    <svg style="width:48px;height:48px" viewBox="0 0 24 24">
      <path fill="#00FF53" d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
    </svg>
  </button>
  <video ref="mainView" class="main-view"></video>
  <video ref="selfView" muted class="self-view"></video>
  <div v-if="wechatSharing && !friendPeerId" class="share">点击右上角分享会话链接</div>
  <div v-if="linkCopied && !friendPeerId" class="share">会话链接已复制</div>
  <div v-if="errorMessage" v-text="errorMessage" class="share"></div>
</template>

<script>
import NativeShare from "nativeshare";
import Peer from "peerjs";

let peer = null;
const nativeShare = new NativeShare();

// Polyfill from https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
// Older browsers might not implement mediaDevices at all, so we set an empty object first
if (navigator.mediaDevices === undefined) {
  navigator.mediaDevices = {};
}

// Some browsers partially implement mediaDevices. We can't just assign an object
// with getUserMedia as it would overwrite existing properties.
// Here, we will just add the getUserMedia property if it's missing.
if (navigator.mediaDevices.getUserMedia === undefined) {
  navigator.mediaDevices.getUserMedia = function(constraints) {
    // First get ahold of the legacy getUserMedia, if present
    var getUserMedia =
      navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia;

    // Some browsers just don't implement it - return a rejected promise with an error
    // to keep a consistent interface
    if (!getUserMedia) {
      return Promise.reject(
        new Error("getUserMedia is not implemented in this browser")
      );
    }

    // Otherwise, wrap the call to the old navigator.getUserMedia with a Promise
    return new Promise(function(resolve, reject) {
      getUserMedia.call(navigator, constraints, resolve, reject);
    });
  };
}

export default {
  name: "App",
  data() {
    const peerIdMatch = location.search.match(/p=([\da-f-]*)/);
    return {
      errorMessage: "",
      friendPeerId: peerIdMatch ? peerIdMatch[1] : null,
      linkCopied: false,
      peerId: null,
      wechatSharing: false
    };
  },

  methods: {
    sharePeerLink() {
      const url = new URL(window.location);
      url.searchParams.set("p", this.peerId);
      nativeShare.setShareData({
        link: url,
        title: "视频通话",
        desc: "您的好友正邀请您进行视频通话"
      });
      try {
        if (navigator.userAgent.indexOf("Windows NT") > -1) {
          this.linkCopied = true;
          navigator.clipboard.writeText(url);
        } else if (navigator.userAgent.indexOf("MicroMessenger") > -1) {
          this.wechatSharing = true;
          window.history.pushState({}, "", url);
        } else nativeShare.call();
      } catch (err) {
        navigator.clipboard.writeText(url);
      }
    }
  },

  mounted() {
    this.$refs.mainView.onloadedmetadata = () => this.$refs.mainView.play();
    this.$refs.selfView.onloadedmetadata = () => this.$refs.selfView.play();

    const bindMainView = call => {
      call.on("stream", mediaStream => {
        this.$refs.mainView.srcObject = mediaStream;
      });
    };

    peer = new Peer();
    peer.on("open", id => (this.peerId = id));
    peer.on("call", call => {
      this.friendPeerId = call.peer;
      call.answer(this.$refs.selfView.srcObject);
      bindMainView(call);
    });
    peer.on("disconnected", () => peer.reconnect());
    peer.on("error", err => {
      this.errorMessage = err.toString();
      this.friendPeerId = null;
    });

    navigator.mediaDevices
      .getUserMedia({ audio: true, video: true })
      .then(mediaStream => {
        this.$refs.selfView.srcObject = mediaStream;

        if (this.friendPeerId) {
          peer.on("open", () => {
            bindMainView(peer.call(this.friendPeerId, mediaStream));
          });
        }
      })
      .catch(err => (this.errorMessage = err.toString()));
  }
};
</script>

<style>
body {
  margin: 0;
  background: black;
}

.btn-icon {
  background: transparent;
  outline: none;
  border-radius: 50%;
  border: none;
  transition: background 0.5s;
}

  .btn-icon:hover {
    background: #222;
  }

  .btn-icon:active {
    background: #333;
  }

.call-btn {
  position: fixed;
  bottom: 50%;
  left: 50%;
  margin-left: -24px;
}

.main-view {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
}

.self-view {
  position: fixed;
  top: 0;
  left: 0;
  max-width: 50vw;
  max-height: 30vh;
  transform: rotateY(180deg);
}

.share {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 2;
  padding: 8px;
  background: rgba(200, 200, 200, 0.5);
  border-radius: 4px;
}
</style>
