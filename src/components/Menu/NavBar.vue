<template>
    <el-menu default-active="1" class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen"
        @close="handleClose">
        <el-menu-item index="1" @click="selectMenu('1')">
            <el-icon>
                <House />
            </el-icon>
            <span>首页</span>
        </el-menu-item>
        <el-menu-item index="2" @click="selectMenu('2')">
            <el-icon>
                <Monitor />
            </el-icon>
            <span>电脑列表</span>
        </el-menu-item>
        <el-menu-item index="3" @click="selectMenu('3')">
            <el-icon>
                <Connection />
            </el-icon>
            <span>ansible管理</span>
        </el-menu-item>
        <el-menu-item index="4" @click="selectMenu('4')">
            <el-icon>
                <User />
            </el-icon>
            <span>用户权限管理</span>
        </el-menu-item>
        <el-menu-item index="5" @click="selectMenu('5')">
            <el-icon>
                <ChatLineSquare />
            </el-icon>
            <span>GPT</span>
        </el-menu-item>
    </el-menu>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps(['isCollapse']);
const emit = defineEmits();

const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath);
};

const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath);
};

const selectMenu = (index: string) => {
    emit('menu-select', index);
};
</script>

<style>
.el-menu-vertical-demo {
    height: 93vh;
}
</style>
