<template>
    <el-button icon="FullScreen" circle class="icon_FullScreen" @click="toggleFullScreen" />
</template>

<script setup>
import { ref } from 'vue';

const isFullScreen = ref(false);

const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
        // 进入全屏
        document.documentElement.requestFullscreen().then(() => {
            isFullScreen.value = true;
        });
    } else {
        // 退出全屏
        if (document.exitFullscreen) {
            document.exitFullscreen().then(() => {
                isFullScreen.value = false;
            });
        }
    }
};

// 监听全屏状态变化
document.addEventListener('fullscreenchange', () => {
    isFullScreen.value = !!document.fullscreenElement;
});
</script>

<style>
.icon_FullScreen {
    margin-right: 1%;
    margin-top: 0.8%;
}
</style>