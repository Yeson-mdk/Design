<template>
    <TitlePage />
    <SearchForKeywords style="margin-top: 2%;" />
    <el-row :gutter="20">
        <el-col :span="15">
            <DataTable @selectHost="selectHost" style="margin-top: 2%;" />
        </el-col>
        <el-col :span="9">
            <HostStatusLog v-if="selectedHost" :selectedHost="selectedHost" />
        </el-col>
    </el-row>
</template>

<script setup>
import TitlePage from './TitlePage.vue';
import SearchForKeywords from './SearchForKeywords.vue';
import DataTable from './DataTable.vue';
import HostStatusLog from './HostStatusLog.vue';
import { ref } from 'vue';

const selectedHost = ref(null);

const selectHost = (host) => {
    selectedHost.value = host; // 更新选中的主机
};
</script>

<style></style>