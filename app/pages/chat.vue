<template>
 <HeaderPages />
  <div class="chat-container">
    <div class="chat-sidebar">
      <ChannelsComponent
        :channels="channels"
        :current-channel-id="currentChannel"
        @change-channel="switchChannel"
        @add-channel="openAddChannelDialog"
      />

      <OnlineUsersComponent
        :users="onlineUsers"
      />
    </div>

    <div class="chat-main">
      <MessagesComponent
        :channel-name="getCurrentChannelName()"
        :messages="messages"
        @send-message="sendMessage"
      />
    </div>


  </div>
  <ModalAddChannel  v-model:dialog="modalAddChannel.dialog" @close-modal="closeAddChannel"/>
</template>

<script lang="ts">
import ChannelsComponent from '../components/chat/ChannelsComponent.vue';
import OnlineUsersComponent from '../components/chat/OnlineUsersComponent.vue';
import MessagesComponent from '../components/chat/MessagesComponent.vue';
import ModalAddChannel from '~/components/chat/modal/ModalAddChannel.vue';

export default {
  name: 'ChatPage',
  layout: 'default',
  components: {
    ChannelsComponent,
    OnlineUsersComponent,
    MessagesComponent,
    ModalAddChannel,
  },
  data() {
    return {
      channels: [
        { id: 1, name: 'geral' },
        { id: 2, name: 'memes' },
        { id: 3, name: 'jogos' },
        { id: 4, name: 'música' },
        { id: 5, name: 'programação' }
      ] as { id: number, name: string }[],
      modalAddChannel: { dialog : false } as { dialog: boolean },
      currentChannel: 1,
      onlineUsers: [
        { id: 1, name: 'DOUGLAS', status: 'online' },
        { id: 2, name: 'FILIF', status: 'online' },
        { id: 3, name: 'GUSTAVO W', status: 'offline' },
        { id: 4, name: 'GUSTAVO V', status: 'online' },
        { id: 5, name: 'HERMANO', status: 'online' },
        { id: 6, name: 'LEO', status: 'offline' },
        { id: 7, name: 'LUCAS', status: 'online' },
        { id: 8, name: 'GABRIEL', status: 'offline' },
        { id: 9, name: 'ALANA', status: 'online' }
      ],
      messages: [] as { user: string, text: string, timestamp: Date }[]
    };
  },
  methods: {
    getCurrentChannelName() {
      const channel = this.channels.find(c => c.id === this.currentChannel);
      return channel ? channel.name : '';
    },

    switchChannel(channelId : number) {
      this.currentChannel = channelId;
    },

    sendMessage(text: string) {
      this.messages.push({
        user: 'Você',
        text: text,
        timestamp: new Date()
      });
    },

    openAddChannelDialog() {
        this.modalAddChannel.dialog = true;
    },
    closeAddChannel() {
        this.modalAddChannel.dialog = false;
    }
  },
  computed: {
  }
};
</script>

<style scoped>
.chat-container {
  display: flex;
  height: calc(100vh - 70px);
  background-color: #09122C;
  color: white;
}

.chat-sidebar {
  width: 280px;
  background-color: #121B3E;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #1A244A;
}

.chat-main {
  flex: 1;
  display: flex;
  flex-direction: column;
}

@media (max-width: 768px) {
  .chat-container {
    flex-direction: column;
  }

  .chat-sidebar {
    width: 100%;
    height: 200px;
    border-bottom: 1px solid #1A244A;
    border-right: none;
  }
}
</style>
