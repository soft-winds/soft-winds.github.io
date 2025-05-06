<template>
  <div class="type-writer">
    <span class="text">{{ displayText }}</span>
    <span class="cursor">|</span>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps<{
  text: string;
  speed?: number;
  delay?: number;
  repeat?: boolean;
}>();

const displayText = ref("");
const currentIndex = ref(0);
let timer: number | null = null;
let isDeleting = false;

const type = () => {
  if (isDeleting) {
    // 删除文字
    if (currentIndex.value > 0) {
      displayText.value = props.text.slice(0, currentIndex.value - 1);
      currentIndex.value--;
      timer = window.setTimeout(type, props.speed ? props.speed / 2 : 50);
    } else {
      isDeleting = false;
      timer = window.setTimeout(type, props.delay || 1000);
    }
  } else {
    // 添加文字
    if (currentIndex.value < props.text.length) {
      displayText.value += props.text[currentIndex.value];
      currentIndex.value++;
      timer = window.setTimeout(type, props.speed || 100);
    } else {
      if (props.repeat) {
        isDeleting = true;
        timer = window.setTimeout(type, props.delay || 1000);
      }
    }
  }
};

onMounted(() => {
  setTimeout(() => {
    type();
  }, props.delay || 500);
});

onUnmounted(() => {
  if (timer) {
    clearTimeout(timer);
  }
});
</script>

<style scoped>
.type-writer {
  display: inline-block;
}

.cursor {
  display: inline-block;
  width: 2px;
  height: 1em;
  background-color: var(--c-brand);
  margin-left: 2px;
  animation: blink 1s infinite;
}

@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
</style>
