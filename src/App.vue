<template>
  <button v-if="peerId && !friendPeerId" @click="copyPeerLink" class="btn-icon call-btn">
    <svg style="width:48px;height:48px" viewBox="0 0 24 24">
      <path fill="#00FF53" d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
    </svg>
  </button>
  <video ref="mainView" class="main-view"></video>
  <video ref="selfView" muted class="self-view"></video>
</template>

<script>
import Peer from "peerjs";

export default {
  name: "App",
  data() {
    const peerIdMatch = location.search.match(/p=([\da-f-]*)/);
    return {
      peer: null,
      peerId: null,
      friendPeerId: peerIdMatch ? peerIdMatch[1] : null
    };
  },

  computed: {
    peerLink() {
      if (!this.peerId) return "";
      return location.origin + location.pathname + "?p=" + this.peerId;
    }
  },

  methods: {
    copyPeerLink() {
      navigator.clipboard.writeText(this.peerLink);
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

    this.peer = new Peer();
    this.peer.on("open", id => (this.peerId = id));
    this.peer.on("call", call => {
      this.friendPeerId = call.peer;
      call.answer(this.$refs.selfView.srcObject);
      bindMainView(call);
    });
    this.peer.on("disconnected", () => this.peer.reconnect());
    this.peer.on("error", err => console.log(err));

    navigator.mediaDevices
      .getUserMedia({ audio: true, video: true })
      .then(mediaStream => {
        this.$refs.selfView.srcObject = mediaStream;

        if (this.friendPeerId) {
          this.peer.on("open", () => {
            bindMainView(this.peer.call(this.friendPeerId, mediaStream));
          });
        }
      });
  }
};
</script>

<style>
body {
  margin: 0;
  background: black;
}

.btn-icon {
  background: #333;
  outline: none;
  border-radius: 50%;
}

.call-btn {
  position: fixed;
  bottom: 50%;
  right: 50%;
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
  right: 0;
  max-width: 50vw;
  max-height: 30vh;
  transform: rotateY(180deg);
}
</style>
