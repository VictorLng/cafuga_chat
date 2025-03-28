<template>
  <div class="chat-messages-container">
    <div class="messages-header">
      <h2><span class="channel-hash">#</span>{{ channelName }}</h2>
    </div>

    <div class="messages-list" ref="messagesList">
      <div v-for="(message, index) in messages" :key="index" class="message-item">
        <div class="message-avatar">{{ message.user.charAt(0).toUpperCase() }}</div>
        <div class="message-content">
          <div class="message-header">
            <span class="message-user">{{ message.user }}</span>
            <span class="message-time">{{ formatTime(message.timestamp) }}</span>
          </div>
          <div class="message-text">{{ message.text }}</div>
        </div>
      </div>
    </div>

    <div class="message-input">
      <textarea
        v-model="messageText"
        placeholder="Digite sua mensagem aqui..."
        @keyup.enter="submitMessage"
      ></textarea>
      <button @click="submitMessage" class="send-btn">Enviar</button>
    </div>
  </div>
</template>

<script lang="ts">
interface Message {
  user: string;
  text: string;
  timestamp: Date;
}

export default {
  name: 'MessagesComponent',
  props: {
    channelName: {
      type: String,
      required: true
    },
    messages: {
      type: Array as PropType<Message[]>,
      required: true
    }
  },
  data() {
    return {
      messageText: ''
    };
  },
  watch: {
    messages() {
      this.$nextTick(() => {
        this.scrollToBottom();
      });
    }
  },
  mounted() {
    this.scrollToBottom();
  },
  methods: {
    formatTime(timestamp : Date) {
      const date = new Date(timestamp);
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    },

    submitMessage() {
      if (!this.messageText.trim()) return;
      this.$emit('send-message', this.messageText);
      this.messageText = '';
    },

    scrollToBottom() {
      if (this.$refs.messagesList) {
        this.$refs.messagesList.scrollTop = this.$refs.messagesList.scrollHeight;
      }
    }
  }
};
</script>

<style scoped>
.chat-messages-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.messages-header {
  padding: 1rem;
  border-bottom: 1px solid #1A244A;
}

.messages-header h2 {
  margin: 0;
  font-size: 1.2rem;
  color: white;
  display: flex;
  align-items: center;
}

.channel-hash {
  opacity: 0.7;
  margin-right: 0.5rem;
}

.messages-list {
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.message-item {
  display: flex;
  gap: 0.8rem;
}

.message-avatar {
  width: 40px;
  height: 40px;
  background-color: #BE3144;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-shrink: 0;
}

.message-content {
  flex: 1;
}

.message-header {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  margin-bottom: 0.3rem;
}

.message-user {
  font-weight: bold;
  color: #E17564;
}

.message-time {
  font-size: 0.8rem;
  opacity: 0.7;
}

.message-text {
  word-break: break-word;
}

.message-input {
  padding: 1rem;
  background-color: #121B3E;
  border-top: 1px solid #1A244A;
  display: flex;
  gap: 0.5rem;
}

.message-input textarea {
  flex: 1;
  background-color: #1A244A;
  border: 1px solid #2A3559;
  border-radius: 4px;
  color: white;
  padding: 0.8rem;
  resize: none;
  height: 60px;
  font-family: inherit;
}

.message-input textarea:focus {
  outline: none;
  border-color: #BE3144;
}

.send-btn {
  background-color: #BE3144;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
}

.send-btn:hover {
  background-color: #872341;
}
</style>
