<template>
    <el-table-v2 :columns="columns" :data="data" :row-class="rowClass" :show-header="false" :width="700"
        :height="700" />
</template>

<script lang="tsx" setup>
import { ref } from 'vue'

const data = ref([
    { id: '1', task: '代码 1', taskContent: '代码内容解释 1' },
    { id: '2', task: '代码 2', taskContent: '代码内容解释 2' },
    { id: '3', task: '代码 3', taskContent: '代码内容解释 3' },
    { id: '4', task: '代码 4', taskContent: '代码内容解释 4' },
    { id: '5', task: '代码 5', taskContent: '代码内容解释 5' },
]);

const columns = [
    {
        key: 'task',
        title: '代码',
        dataKey: 'task',
        minWidth: 300, // 设置最小宽度，允许自适应
        cellRenderer: ({ cellData: task }) => <span>{task} </span>,
    },
    {
        key: 'taskContent',
        title: '代码注释',
        dataKey: 'taskContent',
        minWidth: 400, // 设置最小宽度，允许自适应
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
