<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"
        @select="handleSelect">
        <el-menu-item index="0">
            <el-radio-group v-model="isCollapse" @change="toggleCollapse" index="0">
                <el-radio-button :value="false">
                    <el-icon>
                        <Expand />
                    </el-icon>
                    展开
                </el-radio-button>
                <el-radio-button :value="true">
                    <el-icon>
                        <Fold />
                    </el-icon>
                    收起
                </el-radio-button>
            </el-radio-group>
        </el-menu-item>
        <!-- fullscreen-wrap为全屏内容区域 -->
        <fullScreen />
        <SwitchDark style="padding-top: 0.6%;padding-right: 1%;" />
        <el-menu-item index="1">
            设置
        </el-menu-item>
        <el-sub-menu index="2">
            <template #title>个人中心</template>
            <el-menu-item index="2-1">
                <el-icon>
                    <List />
                </el-icon>
                个人信息‌
            </el-menu-item>
            <el-menu-item index="2-2">
                <el-icon>
                    <BellFilled />
                </el-icon>
                我的消息
            </el-menu-item>
            <el-menu-item index="2-3">
                <el-icon>
                    <RemoveFilled />
                </el-icon>
                登出
            </el-menu-item>
        </el-sub-menu>
    </el-menu>
</template>

<script lang="ts" setup>
import SwitchDark from './SwitchDark.vue';
import fullScreen from './fullScreen.vue';
import { ref, defineEmits } from 'vue';

const value1 = ref(true);
const emit = defineEmits();
const isCollapse = ref(true);

const toggleCollapse = () => {
    emit('toggle-collapse', isCollapse.value);
};

const activeIndex = ref('1');
const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath);
};
</script>

<style scoped>
.el-menu--horizontal .el-menu-item:nth-child(1) {
    margin-right: auto;
}
</style>