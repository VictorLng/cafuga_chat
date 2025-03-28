<template>
  <div class="channels-container">
    <div class="chat-header">
      <h2>Canais</h2>
      <button class="add-channel-btn" @click="$emit('add-channel')">+</button>
    </div>
    <div class="channels-list">
      <div
        v-for="channel in channels"
        :key="channel.id"
        class="channel-item"
        :class="{ 'active': currentChannelId === channel.id }"
        @click="$emit('change-channel', channel.id)"
      >
        <span class="channel-hash">#</span>
        <span class="channel-name">{{ channel.name }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
interface Channel {
  id: number;
  name: string;
}

export default {
  name: 'ChannelsComponent',
  props: {
    channels: {
      type: Array as PropType<Channel[]>,
      required: true
    },
    currentChannelId: {
      type: Number,
      required: true
    }
  }
};
</script>

<style scoped>
.channels-container {
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

.add-channel-btn {
  background: #BE3144;
  color: white;
  border: none;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.add-channel-btn:hover {
  background: #872341;
}

.channels-list {
  flex: 1;
  overflow-y: auto;
  padding: 0.5rem 0;
}

.channel-item {
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;
}

.channel-item:hover {
  background-color: #1A244A;
}

.channel-item.active {
  background-color: #1A244A;
  color: #E17564;
}

.channel-hash {
  opacity: 0.7;
  margin-right: 0.5rem;
}
</style>
