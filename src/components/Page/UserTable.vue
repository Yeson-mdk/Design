<template>
    <el-table :data="paginatedData" style="width: 100%">
        <el-table-column fixed prop="name" label="姓名" width="150" />
        <el-table-column prop="sex" label="性别" width="150" />
        <el-table-column prop="phone" label="手机号" width="150" />
        <el-table-column prop="branch" label="所属部门" width="150" />
        <el-table-column prop="power" label="权限" min-width="150" />
        <el-table-column fixed="right" label="操作" min-width="150">
            <template #default="{ row }">
                <el-button type="primary" size="small" @click="editHost(row)">编辑</el-button>
                <el-button type="danger" size="small" @click="deleteHost(row)">删除</el-button>
            </template>
        </el-table-column>

        <!-- Empty state slot -->
        <template #empty>
            <div class="flex items-center justify-center h-100%">
                <el-empty description="没有可用数据" />
            </div>
        </template>
    </el-table>

    <el-pagination :current-page="currentPage" :page-size="pageSize" :pager-count="5" layout="prev, pager, next"
        :total="hosts.length" @current-change="handleCurrentChange" style="margin-top: 20px;" />
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

const hosts = ref([
    { name: '姓名1', sex: '男', phone: '13632445010', branch: '技术部', power: '一级权限' },
    { name: '姓名1', sex: '男', phone: '13632445010', branch: '技术部', power: '一级权限' },
    { name: '姓名1', sex: '男', phone: '13632445010', branch: '技术部', power: '一级权限' },
    { name: '姓名1', sex: '男', phone: '13632445010', branch: '技术部', power: '一级权限' },
    { name: '姓名1', sex: '男', phone: '13632445010', branch: '技术部', power: '一级权限' },
    { name: '姓名1', sex: '男', phone: '13632445010', branch: '技术部', power: '一级权限' },
    { name: '姓名1', sex: '男', phone: '13632445010', branch: '技术部', power: '一级权限' },
    { name: '姓名1', sex: '男', phone: '13632445010', branch: '技术部', power: '一级权限' },
    { name: '姓名1', sex: '男', phone: '13632445010', branch: '技术部', power: '一级权限' },
    { name: '姓名1', sex: '男', phone: '13632445010', branch: '技术部', power: '一级权限' },
    { name: '姓名1', sex: '男', phone: '13632445010', branch: '技术部', power: '一级权限' },
    { name: '姓名1', sex: '男', phone: '13632445010', branch: '技术部', power: '一级权限' },
    { name: '姓名1', sex: '男', phone: '13632445010', branch: '技术部', power: '一级权限' },
    { name: '姓名1', sex: '男', phone: '13632445010', branch: '技术部', power: '一级权限' },
    { name: '姓名1', sex: '男', phone: '13632445010', branch: '技术部', power: '一级权限' },
    { name: '姓名1', sex: '男', phone: '13632445010', branch: '技术部', power: '一级权限' },
    { name: '姓名1', sex: '男', phone: '13632445010', branch: '技术部', power: '一级权限' },
    { name: '姓名1', sex: '男', phone: '13632445010', branch: '技术部', power: '一级权限' },
    { name: '姓名1', sex: '男', phone: '13632445010', branch: '技术部', power: '一级权限' },
    { name: '姓名1', sex: '男', phone: '13632445010', branch: '技术部', power: '一级权限' },
    { name: '姓名1', sex: '男', phone: '13632445010', branch: '技术部', power: '一级权限' },
    { name: '姓名1', sex: '男', phone: '13632445010', branch: '技术部', power: '一级权限' },
    { name: '姓名1', sex: '男', phone: '13632445010', branch: '技术部', power: '一级权限' },
    { name: '姓名1', sex: '男', phone: '13632445010', branch: '技术部', power: '一级权限' },
]);

const currentPage = ref(1);
const pageSize = ref(12);

const paginatedData = computed(() => {
    const start = (currentPage.value - 1) * pageSize.value;
    return hosts.value.slice(start, start + pageSize.value);
});

// 计算每页显示的数量
const updatePageSize = () => {
    const width = window.innerWidth;
    if (width < 600) {
        pageSize.value = 4; // 小屏幕
    } else if (width < 900) {
        pageSize.value = 8; // 中屏幕
    } else {
        pageSize.value = 12; // 大屏幕
    }
};

const handleCurrentChange = (page) => {
    currentPage.value = page;
};

const editHost = (row) => {
    console.log('Editing host:', row);
    // Implement edit logic here
};

const deleteHost = (row) => {
    console.log('Deleting host:', row);
    // Implement delete logic here
};

onMounted(() => {
    updatePageSize(); // 初始调用
    window.addEventListener('resize', updatePageSize); // 添加事件监听
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', updatePageSize); // 清除事件监听
});
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
