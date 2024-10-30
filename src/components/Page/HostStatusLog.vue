<template>
    <div>
        <h3>主机状态日志 - {{ selectedHost ? selectedHost.name : '无选中主机' }}</h3>
        <el-table v-if="selectedHost && logs.length" :data="logs" style="width: 100%">
            <el-table-column prop="timestamp" label="时间" width="180" />
            <el-table-column prop="message" label="日志信息" />
        </el-table>
        <p v-else>请选择主机以查看日志。</p>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
    selectedHost: {
        type: Object,
        required: false,
    },
});

const logs = ref([]);

// 模拟日志数据
const fetchLogs = () => {
    if (props.selectedHost) {
        logs.value = [
            { timestamp: '2023-10-01 12:00', message: `主机 ${props.selectedHost.name} 启动` },
            { timestamp: '2023-10-02 14:30', message: `主机 ${props.selectedHost.name} CPU 使用率高` },
            // 其他日志...
        ];
    } else {
        logs.value = [];
    }
};

// 监听 selectedHost 的变化
watch(() => props.selectedHost, fetchLogs, { immediate: true });
</script>

<style scoped>
/* 添加样式 */
</style>