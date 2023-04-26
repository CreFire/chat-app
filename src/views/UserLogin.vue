<!-- src/views/UserLogin.vue -->
<template>
  <div>
    <LoginForm @login="handleLogin" />
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue';

export default {
  components: {
    LoginForm,
  },
  methods: {
    handleLogin(username) {
      this.$store.commit('setUsername', username);
      this.$router.push('/chat-rooms');
    },
  },
};
</script>