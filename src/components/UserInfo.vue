<template>
  <div>
    <h3>User Info</h3>
    <p>Username: {{ user.username }}</p>
  </div>
</template>

<script>
export default {
  props: ['user'],
};
</script>
