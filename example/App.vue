<template>
  <main class="container">
    <h1>ExodeUI Vue Demo</h1>
    <div class="canvas-wrapper">
      <ExodeUICanvas
        :artboard="sampleArtboard"
        fit="Contain"
        alignment="Center"
        :interactive="true"
        @ready="onReady"
        @trigger="onTrigger"
      />
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ExodeUICanvas, useExodeUI } from 'exodeui-vue';

// Replace with your own exported .exode or .bexode artboard
const sampleArtboard = ref({
  version: 1,
  canvas: { width: 800, height: 600, background: '#0f172a' },
  objects: []
});

const { setEngine } = useExodeUI();

function onReady(engine: any) {
  setEngine(engine);
  console.log('ExodeUI canvas ready');
}

function onTrigger(name: string, animation: string) {
  console.log('Trigger fired:', name, animation);
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: sans-serif;
  padding: 2rem;
}
.canvas-wrapper {
  width: 800px;
  height: 600px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
}
</style>
