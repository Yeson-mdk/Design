<template>
    <el-switch v-model="switchvalue" size="large" @change="changeswitch" :active-action-icon="Moon"
        :inactive-action-icon="Sunny" />
</template>
<script setup>
import { ref } from 'vue'

import { Hide, Moon, Sunny, View } from '@element-plus/icons-vue'

let switchvalue = ref(false)

//3 添加方法
const changeswitch = () => {
    //获取根节点
    let html = document.documentElement
    console.log(switchvalue.value)
    //判断
    switchvalue.value ? (html.className = 'dark') : (html.className = '')
}
</script>
