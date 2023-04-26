import { createRouter, createWebHistory } from 'vue-router';
import ChatRooms from '@/views/ChatRooms.vue';
import UserProfile from '@/views/UserProfile.vue';
import UserLogin from '@/views/UserLogin.vue';


const routes = [
  { path: '/', component: UserLogin },
  { path: '/chat-rooms', component: ChatRooms },
  { path: '/user-profile', component: UserProfile },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
