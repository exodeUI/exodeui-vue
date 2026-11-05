# ExodeUI Vue

**Vue 3 runtime for the [ExodeUI](https://exodeui.com/?utm_source=npm&utm_medium=readme&utm_campaign=exodeui-vue) motion engine.** Render interactive, physics-driven UI animation exported from the ExodeUI editor directly inside Vue components, with props, events and a composable that match Vue conventions.

[![npm version](https://img.shields.io/npm/v/exodeui-vue.svg)](https://www.npmjs.com/package/exodeui-vue)
[![license](https://img.shields.io/npm/l/exodeui-vue.svg)](https://www.npmjs.com/package/exodeui-vue)
[![website](https://img.shields.io/badge/docs-exodeui.com-0f172a)](https://exodeui.com/docs?utm_source=npm&utm_medium=readme&utm_campaign=exodeui-vue)

ExodeUI is an AI-native **motion design environment (MDE)**: design on one canvas, animate with a timeline and physics, wire logic with a state machine, then export a portable `.exode` artboard. This package plays those artboards in Vue 3 — Canvas 2D rendering, gestures, physics and data-driven charts included.

---

## Why use it

- **Vue-idiomatic.** `<ExodeUICanvas>` with typed props, reactive `v-model`-style sensor inputs and `@` events, plus a `useExodeUI()` composable.
- **Real interactivity, not a video.** State machines, triggers, drag, hover, keyboard and gamepad bindings run natively.
- **Ships as data.** Artboards are JSON/`.bexode`, so marketing can update motion without shipping a Vue build.
- **Same runtime as every other framework.** Identical behaviour to the [React](https://www.npmjs.com/package/exodeui), [Svelte](https://www.npmjs.com/package/exodeui-svelte), [Solid](https://www.npmjs.com/package/exodeui-solid), [Angular](https://www.npmjs.com/package/exodeui-angular) and [vanilla](https://www.npmjs.com/package/exodeui-vanilla) players.
- **Production details handled.** DPR scaling, `ResizeObserver` sizing, 120Hz pacing, pointer capture, prevented page scroll and cleanup on unmount.

## Installation

```bash
npm install exodeui-vue
# or
pnpm add exodeui-vue
# or
yarn add exodeui-vue
```

Requires Vue `>= 3.3`.

## Quick start

```vue
<template>
  <div style="width: 800px; height: 600px">
    <ExodeUICanvas
      :artboard="artboard"
      fit="Contain"
      alignment="Center"
      @ready="onReady"
      @trigger="onTrigger"
      @navigation="onNavigation"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ExodeUICanvas, useExodeUI } from 'exodeui-vue';
import artboardData from './hero.exode?raw';

const artboard = ref(JSON.parse(artboardData));
const { setEngine, setInputBool, fireTrigger, getInputValue } = useExodeUI();

function onReady(engine: any) {
  setEngine(engine);
  setInputBool('isPlaying', true);
}

function onTrigger(name: string, animation: string) {
  console.log('trigger', name, animation);
}

function onNavigation({ type, value }: { type: string; value: string }) {
  if (type === 'url') window.location.href = value;
}
</script>
```

### Drive motion from your own UI

```vue
<script setup lang="ts">
import { ref } from 'vue';
import { ExodeUICanvas } from 'exodeui-vue';

const canvas = ref<InstanceType<typeof ExodeUICanvas> | null>(null);
const tab = ref(0);

function selectTab(index: number) {
  tab.value = index;
  canvas.value?.engine?.updateInput('activeTab', index);
  canvas.value?.engine?.fireTrigger('TabChange');
}
</script>

<template>
  <ExodeUICanvas ref="canvas" src="/animations/tabs.exode" />
  <button v-for="(label, i) in ['Overview', 'Motion', 'Physics']" :key="label" @click="selectTab(i)">
    {{ label }}
  </button>
</template>
```

### Static preview / scrubbing

```vue
<ExodeUICanvas :artboard="artboard" :auto-play="false" :current-time="1.25" />
```

## Supported features

| Capability | Included |
| --- | --- |
| Canvas 2D renderer with DPR-aware scaling | ✅ |
| State machine + logic nodes (AND / OR / XOR / NOT) | ✅ |
| Boolean, number, text, trigger, array, random inputs | ✅ |
| 2D physics (Rapier): dynamic, static, kinematic bodies | ✅ |
| Spring, drag, joystick, pointer and keyboard sensors | ✅ |
| Responsive layouts, breakpoints and spatial constraints | ✅ |
| Line graphs, bar charts and pie charts with live data | ✅ |
| Text inputs, toggles, dropdowns, sliders and list views | ✅ |
| Scroll-linked and viewport-driven animation | ✅ |
| `.exode` JSON and compressed `.bexode` loading | ✅ |
| Glow, light trails, pattern grids, masks | ✅ |
| Custom effect scripts with `update(env, dt)` hooks | ✅ |

## API

### `<ExodeUICanvas>` props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `artboard` | `Artboard` | — | Parsed artboard JSON |
| `src` | `string` | — | `.exode` / `.bexode` URL or JSON string |
| `buffer` | `ArrayBuffer \| Uint8Array` | — | Pre-read `.bexode` buffer |
| `revision` | `number` | `0` | Bump to force a reload |
| `fit` | `Fit` | `'Contain'` | Fit mode |
| `alignment` | `Alignment` | `'Center'` | Alignment |
| `layoutScaleFactor` | `number` | — | Extra scale for `Fit: 'Layout'` |
| `autoPlay` | `boolean` | `true` | Auto-start the loop |
| `interactive` | `boolean` | `true` | Enable input handling |
| `preventScroll` | `boolean` | `true` | Block page scroll on wheel/touch |
| `highRefreshRate` | `boolean` | `true` | Sub-frame pacing on 120Hz displays |
| `currentTime` | `number` | — | Render a fixed time when `autoPlay` is false |
| `scrollX/Y`, `viewportScrollX/Y` | `number` | — | External scroll sensors |
| `mouseX/Y`, `isMouseDown` | `number \| boolean` | — | External pointer sensors |
| `inputs` | `Record<string, any>` | — | Inputs applied on load |
| `callbacks` | `Record<string, Function>` | — | Named listeners from the editor |

### Events

`@ready`, `@trigger`, `@inputUpdate`, `@componentChange`, `@toggle`, `@inputChange`, `@inputFocus`, `@inputBlur`, `@buttonClick`, `@navigation`, `@graphPointClick`, `@log`, `@logicUpdate`, `@fpsUpdate`

### Exposed on the component ref

`engine`, `play()`, `pause()`, `seek(time)`, `resize()`, `setOptions(options)`, `getArtboard()`

### `useExodeUI()`

| Member | Description |
| --- | --- |
| `engine`, `setEngine` | Hold the engine from `@ready` |
| `updateInput`, `setInputValue` | Set any input by name or id |
| `setInputBool`, `setInputNumber`, `setInputText` | Scalar inputs |
| `setInputNumberArray`, `setInputStringArray` | Array inputs |
| `fireTrigger` | Pulse a trigger |
| `updateObjectOptions` | Replace dropdown / list options |
| `updateConstraint` | Edit a spatial constraint |
| `updateGraphData`, `updateBarChartData`, `updatePieChartData` | Live chart data |
| `setDropdownOptions` | Change dropdown items |
| `getInputValue` | Read a resolved input (including random variables) |

## FAQ

**Can I use ExodeUI motion inside an existing Vue design system?** Yes — the canvas fills its parent, so grid, aspect-ratio or fixed sizing stays in your control, and inputs can be bound to any Vue state.

**Does it work with Nuxt?** Yes. The component touches `window`/`document` only after mount, so it is SSR-safe.

**Is ExodeUI a Rive or Lottie alternative?** It targets interactive UI rather than linear playback. See the [comparison](https://exodeui.com/alternatives/rive/?utm_source=npm&utm_medium=readme&utm_campaign=exodeui-vue).

**What is a `.exode` file?** The portable artboard format exported by the ExodeUI editor — open JSON, or a compressed `.bexode` variant.

**How do I keep bundle size down?** Import only from `exodeui-vue`; the package is tree-shakable and the engine is a single ESM module.

## Related packages

- [exodeui](https://www.npmjs.com/package/exodeui) — React runtime and Vite plugin
- [exodeui-vanilla](https://www.npmjs.com/package/exodeui-vanilla) — framework-free runtime
- [exodeui-svelte](https://www.npmjs.com/package/exodeui-svelte) — Svelte 5 runtime
- [exodeui-solid](https://www.npmjs.com/package/exodeui-solid) — SolidJS runtime
- [exodeui-angular](https://www.npmjs.com/package/exodeui-angular) — Angular 17+ runtime

## Learn more

- [Documentation](https://exodeui.com/docs?utm_source=npm&utm_medium=readme&utm_campaign=exodeui-vue)
- [Examples and templates](https://exodeui.com/examples?utm_source=npm&utm_medium=readme&utm_campaign=exodeui-vue)
- [Component gallery](https://exodeui.com/components?utm_source=npm&utm_medium=readme&utm_campaign=exodeui-vue)
- [Use cases](https://exodeui.com/use-cases?utm_source=npm&utm_medium=readme&utm_campaign=exodeui-vue)
- [Learn motion design](https://exodeui.com/learn?utm_source=npm&utm_medium=readme&utm_campaign=exodeui-vue)

## License

MIT © ExodeUI
