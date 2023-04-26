// src/store/index.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    username: null,
    messages: {},
  },
  mutations: {
    setUsername(state, username) {
      state.username = username;
    },
    addMessage(state, { roomId, username, text }) {
      if (!state.messages[roomId]) {
        state.messages[roomId] = [];
      }
      state.messages[roomId].push({ username, text });
    },
  },
});
