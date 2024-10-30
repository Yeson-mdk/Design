<template>
    <TitlePage />
    <el-row :gutter="20">
        <el-col :span="10">
            <el-card>
                <div class="card_user_data">
                    <el-row :gutter="20">
                        <el-col :span="10">
                            <img src="../../assets/ycz.jpg" width="100%" />
                        </el-col>
                        <el-col :span="14">
                            <p class="text">姓名:叶成卓</p>
                            <p class="text">工号:20205539143</p>
                            <p class="text">职务:云平台运维</p>
                            <TaskVirtualTable />
                        </el-col>
                    </el-row>
                </div>
            </el-card>
        </el-col>
        <el-col :span="7">
            <div class="demo-progress">
                <p class="demo-progress-text">任务进度</p>
                <el-progress :text-inside="true" :stroke-width="26" :percentage="70" />
                <p class="demo-progress-text">在线主机</p>
                <el-progress :text-inside="true" :stroke-width="24" :percentage="100" status="success" />
                <p class="demo-progress-text">故障主机</p>
                <el-progress :text-inside="true" :stroke-width="22" :percentage="80" status="warning" />
                <p class="demo-progress-text">在线时长</p>
                <el-progress :text-inside="true" :stroke-width="20" :percentage="50" status="exception" />
            </div>
        </el-col>
        <el-col :span="7">
            <el-row>
                <el-col :span="12" class="num_card">
                    <el-statistic title="Daily active users" :value="268500" />
                </el-col>
                <el-col :span="12" class="num_card">
                    <el-statistic :value="138">
                        <template #title>
                            <div style="display: inline-flex; align-items: center">
                                Ratio of men to women
                                <el-icon style="margin-left: 4px" :size="12">
                                    <Male />
                                </el-icon>
                            </div>
                        </template>
                        <template #suffix>/100</template>
                    </el-statistic>
                </el-col>
                <el-col :span="12" class="num_card">
                    <el-statistic title="Total Transactions" :value="outputValue" />
                </el-col>
                <el-col :span="12" class="num_card">
                    <el-statistic title="Feedback number" :value="562">
                        <template #suffix>
                            <el-icon style="vertical-align: -0.125em">
                                <ChatLineRound />
                            </el-icon>
                        </template>
                    </el-statistic>
                </el-col>
            </el-row>
        </el-col>
    </el-row>
    <hr>
    <TimeLine />
</template>

<script>
import TitlePage from './TitlePage.vue';
import TaskVirtualTable from './TaskVirtualTable.vue';
import TimeLine from './TimeLine.vue';
import { ref } from 'vue'
import { useTransition } from '@vueuse/core'
import { ChatLineRound, Male } from '@element-plus/icons-vue'
export default {
    components: {
        TitlePage,
        TaskVirtualTable,
        TimeLine
    },
}
const source = ref(0)
const outputValue = useTransition(source, {
    duration: 1500,
})
source.value = 172000
</script>

<style>
.el-row {
    margin-bottom: 20px;
}

.el-row:last-child {
    margin-bottom: 0;
}

.text {
    margin: 2%;
}

.list_demo {
    width: 100%;
}

.demo-progress .el-progress--line {
    margin-bottom: 3%;
}

.demo-progress-text {
    margin-bottom: 2%;
}

.num_card {
    margin-top: 17%;
    text-align: center;
}
</style>
