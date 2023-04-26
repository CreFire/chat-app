<!-- src/components/ChatRoomList.vue -->
<template>
  <div>
    <h3>Chat Rooms</h3>
    <ul>
      <li
        v-for="room in chatRooms"
        :key="room.id"
        @click="selectChatRoom(room)"
      >
        {{ room.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['chatRooms'],
  methods: {
    selectChatRoom(room) {
      this.$emit('select-chat-room', room);
    },
  },
};
</script>
