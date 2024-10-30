<template>
    <el-table-v2 :columns="columns" :data="data" :row-class="rowClass" :show-header="false" :width="250"
        :height="150" />
</template>

<script lang="tsx" setup>
import { ref } from 'vue'

const data = ref([
    { id: '1', task: '任务 1', taskContent: '任务内容 1' },
    { id: '2', task: '任务 2', taskContent: '任务内容 2' },
    { id: '3', task: '任务 3', taskContent: '任务内容 3' },
    { id: '4', task: '任务 4', taskContent: '任务内容 4' },
    { id: '5', task: '任务 5', taskContent: '任务内容 5' },
]);

const columns = [
    {
        key: 'task',
        title: '任务',
        dataKey: 'task',
        minWidth: 70, // 设置最小宽度，允许自适应
        cellRenderer: ({ cellData: task }) => <span>{task} </span>,
    },
    {
        key: 'taskContent',
        title: '任务内容',
        dataKey: 'taskContent',
        minWidth: 150, // 设置最小宽度，允许自适应
        cellRenderer: ({ cellData: content }) => <span>{content} </span>,
    },
]

const rowClass = ({ rowIndex }) => {
    if (rowIndex % 10 === 5) {
        return 'bg-red-100'
    } else if (rowIndex % 10 === 0) {
        return 'bg-blue-200'
    }
    return ''
}
</script>
