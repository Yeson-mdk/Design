<template>
    <div class="timeline-container">
        <ul v-infinite-scroll="load" class="infinite-list">
            <li v-for="(log, index) in logs" :key="index" class="infinite-list-item">
                <el-timeline-item :timestamp="log.timestamp" placement="top">
                    <el-card>
                        <h4>{{ log.title }}</h4>
                        <p>{{ log.content }}</p>
                    </el-card>
                </el-timeline-item>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const logs = ref([
    { timestamp: "2018/4/12", title: "Update Github template", content: "Tom committed 2018/4/12 20:46" },
    { timestamp: "2018/4/3", title: "Update Github template", content: "Tom committed 2018/4/3 20:46" },
    { timestamp: "2018/4/2", title: "Update Github template", content: "Tom committed 2018/4/2 20:46" },
    // 这里可以添加更多日志
]);

const isLoading = ref(false); // 防止重复加载

const load = () => {
    if (logs.value.length < 100 && !isLoading.value) {
        isLoading.value = true; // 开始加载
        setTimeout(() => { // 模拟异步加载
            const newLogs = [
                { timestamp: "2018/4/1", title: "Update Github template", content: "Tom committed 2018/4/1 20:46" },
                { timestamp: "2018/3/31", title: "Update Github template", content: "Tom committed 2018/3/31 20:46" },
            ];
            logs.value.push(...newLogs);
            isLoading.value = false; // 加载完成
        }, 1000); // 模拟加载时间
    }
}
</script>

<style>
html,
body {
    height: 100%;
    /* 确保 body 填充整个视口 */
    margin: 0;
    overflow: hidden;
    /* 禁止主页面滚动 */
}

.timeline-container {
    height: 100vh;
    /* 设置为视口高度 */
    overflow-y: auto;
    /* 仅允许纵向滚动 */
}

.infinite-list {
    padding: 0;
    margin: 0;
    list-style: none;
}

.infinite-list .infinite-list-item {
    margin-bottom: 20px;
    /* 时间线条目间距 */
}

/* 隐藏时间线的滚动条 */
.timeline-container::-webkit-scrollbar {
    display: none;
    /* Chrome, Safari 和 Opera */
}

.timeline-container {
    scrollbar-width: none;
    /* Firefox */
}
</style>