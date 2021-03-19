<template>
  <input v-model="peerId" readonly>
  <button>Connect</button>
</template>

<script>
import Peer from "peerjs";

export default {
  name: "App",
  data() {
    return { peer: null, peerId: null };
  },

  created() {
    this.peer = new Peer();
    this.peer.on("open", id => (this.peerId = id));
  }
};
</script>

<style>
input {
  padding: 4px;
}
</style>
