<!-- src/components/ChatRoom.vue -->
<template>
  <div>
    <h2>{{ room.name }}</h2>
    <div v-for="(message, index) in messages" :key="index">
      <strong>{{ message.username }}:</strong> {{ message.text }}
    </div>
    <form @submit.prevent="submitMessage">
      <input type="text" v-model="messageText" placeholder="Type your message..." />
      <button type="submit">Send</button>
    </form>
  </div>
</template>

<script>
export default {
  props: ['room'],
  data() {
    return {
      messageText: '',
    };
  },
  computed: {
    messages() {
      return this.$store.state.messages[this.room.id] || [];
    },
  },
  methods: {
    submitMessage() {
      this.$store.commit('addMessage', {
        roomId: this.room.id,
        username: this.$store.state.username,
        text: this.messageText,
      });
      this.messageText = '';
    },
  },
};
</script>
