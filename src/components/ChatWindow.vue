<template>
  <div class="chat-window">
    <div v-if="error">{{ error }}</div>
    <div v-if="formattedDocuments" ref="messages" class="messages">
      <div v-for="doc in formattedDocuments" :key="doc.id" class="single">
        <span class="created-at">{{ doc.createdAt }}</span>
        <span class="name">{{ doc.name }}</span>
        <span class="message">{{ doc.message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDistanceToNow } from 'date-fns';
import { computed, onUpdated, ref } from 'vue';
import getCollection from '../composables/getCollection';

export default {
  setup() {
    const { error, documents } = getCollection('messages');

    // format timestamp
    const formattedDocuments = computed(() => {
      if (documents.value) {
        return documents.value.map((doc) => {
          let time = formatDistanceToNow(doc.createdAt.toDate());
          return { ...doc, createdAt: time };
        });
      }
    });

    // auto-scroll to bottom of messages
    const messages = ref(null);
    onUpdated(() => {
      messages.value.scrollTop = messages.value.scrollHeight;
    });

    return { error, documents, formattedDocuments, messages };
  },
};
</script>

<style scoped>
.chat-window {
  padding: 30px 20px;
  background: #fafafa;
}
.single {
  margin: 18px 0;
}
.created-at {
  display: block;
  margin-bottom: 4px;
  color: #999;
  font-size: 12px;
}
.name {
  margin-right: 6px;
  font-weight: bold;
}
.messages {
  max-height: 400px;
  overflow: auto;
}
</style>
