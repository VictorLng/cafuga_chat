<template>
  <div class="online-users-container">
    <div class="chat-header users-header">
      <h2>Usuários Online</h2>
    </div>
    <div class="users-list">
      <div v-for="user in users" :key="user.id" class="user-item">
        <span class="user-status" :class="{ 'online': user.status === 'online' }"></span>
        <span class="user-name">{{ user.name }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
interface User {
  id: number;
  name: string;
  status: 'online' | 'offline';
}
export default {
  name: 'OnlineUsersComponent',
  props: {
    users: {
      type: Array as PropType<User[]>,
      required: true
    }
  }
};
</script>

<style scoped>
.online-users-container {
  display: flex;
  flex-direction: column;
}

.chat-header {
  padding: 1rem;
  border-bottom: 1px solid #1A244A;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.chat-header h2 {
  margin: 0;
  font-size: 1.2rem;
  color: #E17564;
}

.users-list {
  max-height: 200px;
  overflow-y: auto;
  padding: 0.5rem 0;
}

.user-item {
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
}

.user-status {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #444;
  margin-right: 0.8rem;
}

.user-status.online {
  background-color: #43b581;
}

.user-name {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
