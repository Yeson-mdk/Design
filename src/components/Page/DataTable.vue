<template>
    <el-table :data="paginatedData" style="width: 100%">
        <el-table-column fixed prop="name" label="主机名" width="150" />
        <el-table-column prop="ip" label="IP 地址" width="150" />
        <el-table-column prop="group" label="所在组" width="150" />
        <el-table-column prop="source" label="来源" width="150" />
        <el-table-column fixed="right" label="操作" min-width="150">
            <template #default="{ row }">
                <el-button type="primary" size="small" @click="editHost(row)">编辑</el-button>
                <el-button type="danger" size="small" @click="deleteHost(row)">删除</el-button>
                <el-button type="info" size="small" @click="selectHost(row)">查看日志</el-button>
            </template>
        </el-table-column>

        <template #empty>
            <div class="flex items-center justify-center h-100%">
                <el-empty description="没有可用数据" />
            </div>
        </template>
    </el-table>

    <el-pagination :current-page="currentPage" :page-size="pageSize" :pager-count="5" layout="prev, pager, next"
        :total="hosts.length" @current-change="handleCurrentChange" style="margin-top: 20px;" />
</template>

<script setup>
import { ref, computed } from 'vue';
import { defineEmits } from 'vue';

const emit = defineEmits();

const hosts = ref([
    { name: 'host1', ip: '192.168.1.1', group: 'groupA', source: 'sourceA' },
    { name: 'host2', ip: '192.168.1.2', group: 'groupB', source: 'sourceB' },
    { name: 'host3', ip: '192.168.1.3', group: 'groupA', source: 'sourceC' },
    { name: 'host4', ip: '192.168.1.4', group: 'groupC', source: 'sourceD' },
    { name: 'host5', ip: '192.168.1.5', group: 'groupB', source: 'sourceE' },
    { name: 'host6', ip: '192.168.1.6', group: 'groupA', source: 'sourceF' },
    { name: 'host7', ip: '192.168.1.7', group: 'groupC', source: 'sourceG' },
    { name: 'host8', ip: '192.168.1.8', group: 'groupA', source: 'sourceH' },
    { name: 'host9', ip: '192.168.1.9', group: 'groupB', source: 'sourceI' },
    { name: 'host10', ip: '192.168.1.10', group: 'groupC', source: 'sourceJ' },
    { name: 'host11', ip: '192.168.1.11', group: 'groupA', source: 'sourceK' },
    { name: 'host12', ip: '192.168.1.12', group: 'groupB', source: 'sourceL' },
    { name: 'host13', ip: '192.168.1.13', group: 'groupC', source: 'sourceM' },
    { name: 'host1', ip: '192.168.1.1', group: 'groupA', source: 'sourceA' },
    { name: 'host2', ip: '192.168.1.2', group: 'groupB', source: 'sourceB' },
    { name: 'host3', ip: '192.168.1.3', group: 'groupA', source: 'sourceC' },
    { name: 'host4', ip: '192.168.1.4', group: 'groupC', source: 'sourceD' },
    { name: 'host5', ip: '192.168.1.5', group: 'groupB', source: 'sourceE' },
    { name: 'host6', ip: '192.168.1.6', group: 'groupA', source: 'sourceF' },
    { name: 'host7', ip: '192.168.1.7', group: 'groupC', source: 'sourceG' },
    { name: 'host8', ip: '192.168.1.8', group: 'groupA', source: 'sourceH' },
    { name: 'host9', ip: '192.168.1.9', group: 'groupB', source: 'sourceI' },
    { name: 'host10', ip: '192.168.1.10', group: 'groupC', source: 'sourceJ' },
    { name: 'host11', ip: '192.168.1.11', group: 'groupA', source: 'sourceK' },
    { name: 'host12', ip: '192.168.1.12', group: 'groupB', source: 'sourceL' },
    { name: 'host13', ip: '192.168.1.13', group: 'groupC', source: 'sourceM' },
]);


const currentPage = ref(1);
const pageSize = ref(12);

const paginatedData = computed(() => {
    const start = (currentPage.value - 1) * pageSize.value;
    return hosts.value.slice(start, start + pageSize.value);
});

// 选择主机事件
const selectHost = (host) => {
    emit('selectHost', host);
};

const editHost = (row) => {
    console.log('Editing host:', row);
};

const deleteHost = (row) => {
    console.log('Deleting host:', row);
};

// 其他逻辑...
</script>

<style scoped>
.el-table th,
.el-table td {
    text-align: center;
}

.el-button {
    margin: 0 5px;
}
</style>