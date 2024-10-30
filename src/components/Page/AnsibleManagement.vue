<template>
    <TitlePage />
    <el-row :gutter="20">
        <el-col :span="12">
            <div class="container">
                <el-table :data="paginatedHosts" style="width: 100%; margin-bottom: 20px;">
                    <el-table-column type="selection" v-model="selectedHosts" width="55" />
                    <el-table-column label="主机名" property="name" width="120" />
                    <el-table-column label="IP 地址" property="ip" width="120" />
                    <el-table-column label="所在组" property="group" width="120" />
                    <el-table-column label="来源" property="source" width="120" />
                </el-table>

                <el-pagination :current-page="currentPage" :page-size="pageSize" :pager-count="11"
                    layout="prev, pager, next" :total="hosts.length" @current-change="handleCurrentChange" />

                <el-form :model="form" label-width="auto" style="max-width: 600px;">
                    <el-form-item>
                        <el-input v-model="form.playbook" type="textarea" rows="6" placeholder="请输入 Playbook 代码"
                            required />
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm">保存并执行 Playbook</el-button>
                        <el-button @click="resetForm">重置</el-button>
                    </el-form-item>
                    <el-form-item v-if="response">
                        <h3>执行日志:</h3>
                        <el-input type="textarea" :value="response" rows="6" readonly />
                    </el-form-item>
                </el-form>
            </div>
        </el-col>
        <el-col :span="12">
            <TaskplaybookTable />
        </el-col>
    </el-row>
</template>

<script>
import { reactive, onMounted, ref } from 'vue';
import TitlePage from './TitlePage.vue';
import TaskplaybookTable from './TaskplaybookTable.vue';

export default {
    components: {
        TitlePage,
        TaskplaybookTable
    },
    setup() {
        const form = reactive({
            playbook: '',
        });

        const hosts = ref([]);
        const paginatedHosts = ref([]);
        const response = ref(null);
        const selectedHosts = ref([]);
        const currentPage = ref(1);
        const pageSize = ref(4); // 初始化页面大小

        const fetchHosts = async () => {
            // 示例主机数据
            hosts.value = [
                { id: 1, name: 'host1', ip: '192.168.1.1', group: 'groupA', source: 'sourceA' },
                { id: 2, name: 'host2', ip: '192.168.1.2', group: 'groupB', source: 'sourceB' },
                { id: 3, name: 'host3', ip: '192.168.1.3', group: 'groupA', source: 'sourceC' },
                { id: 4, name: 'host4', ip: '192.168.1.4', group: 'groupC', source: 'sourceD' },
                { id: 5, name: 'host5', ip: '192.168.1.5', group: 'groupB', source: 'sourceE' },
                { id: 6, name: 'host6', ip: '192.168.1.6', group: 'groupA', source: 'sourceF' },
            ];
            updatePaginatedHosts();
        };

        const updatePaginatedHosts = () => {
            const start = (currentPage.value - 1) * pageSize.value;
            paginatedHosts.value = hosts.value.slice(start, start + pageSize.value);
        };

        const handleCurrentChange = (page) => {
            currentPage.value = page;
            updatePaginatedHosts();
        };

        const submitForm = async () => {
            if (selectedHosts.value.length === 0) {
                response.value = '请至少选择一个主机!';
                return;
            }

            try {
                const saveRes = await fetch('/api/save-playbook', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ playbook: form.playbook }),
                });

                const saveData = await saveRes.json();

                const execRes = await fetch(`/api/execute-playbook/${saveData.id}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ hosts: selectedHosts.value }),
                });

                response.value = await execRes.json();
            } catch (error) {
                response.value = '错误: ' + error.message;
            }
        };

        const resetForm = () => {
            form.playbook = '';
            response.value = null;
            selectedHosts.value = []; // 重置选中的主机
        };

        const updatePageSize = () => {
            const width = window.innerWidth;
            console.log(width)
            if (width >= 1700) pageSize.value = 6; // 大屏幕显示6个
            else if (width >= 800) pageSize.value = 4; // 中屏幕显示4个
            else pageSize.value = 2; // 小屏幕显示2个

            // 更新分页内容
            updatePaginatedHosts();
        };

        onMounted(() => {
            fetchHosts();
            updatePageSize(); // 初始化时计算页面大小
            window.addEventListener('resize', updatePageSize); // 监听窗口大小变化
        });

        return {
            form,
            hosts,
            paginatedHosts,
            response,
            submitForm,
            resetForm,
            selectedHosts,
            currentPage,
            pageSize,
            handleCurrentChange,
        };
    },
};
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    /* 垂直排列 */
}

.el-table {
    border: none;
    /* 去掉边框 */
}

.el-table th,
.el-table td {
    text-align: center;
}

.el-button {
    margin: 0 5px;
}
</style>
