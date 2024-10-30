<!-- <template>
  <div>
    <Home />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Home from './components/HomePage.vue';

@Options({
  components: {
    Home
  },
})
export default class App extends Vue { }
</script>

<style></style> -->

<template>
  <div id="app">
    <router-view />
  </div>
</template>
<style>
/* @font-face {
  font-family: '宋';
  src: url('./assets/fonts/字魂书雅宋-Heavy\(商用需授权\).ttf') format('opentype');
} */

body {
  margin: 0%;
  /* font-family: '宋', sans-serif; */
  /* 简约字体 */

}
</style>