<template>
  <div>
    <h1>User Profile</h1>
    <UserInfo :user="{ username: 'John Doe' }" />
  </div>
</template>

<script>
import UserInfo from '@/components/UserInfo.vue';

export default {
  components: {
    UserInfo,
  },
};
</script>
