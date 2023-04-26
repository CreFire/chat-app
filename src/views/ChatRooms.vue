<!-- src/views/ChatRooms.vue -->
<template>
  <div>
    <UserInfo :user="{ username: 'John Doe' }" />
    <ChatRoomList :chatRooms="chatRooms" @select-chat-room="selectChatRoom" />
    <ChatRoom v-if="selectedRoom" :room="selectedRoom" />
  </div>
</template>

<script>
import UserInfo from '@/components/UserInfo.vue';
import ChatRoomList from '@/components/ChatRoomList.vue';
import ChatRoom from '@/components/ChatRoom.vue';

export default {
  components: {
    UserInfo,
    ChatRoomList,
    ChatRoom,
  },
  data() {
    return {
      chatRooms: [
        { id: 1, name: 'General' },
        { id: 2, name: 'Random' },
      ],
      selectedRoom: null,
    };
  },
  methods: {
    selectChatRoom(room) {
      this.selectedRoom = room;
    },
  },
};
</script>
