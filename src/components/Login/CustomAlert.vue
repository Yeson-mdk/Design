<template>
    <!-- 这里仅作为示例，实际上你可能不会直接在这里渲染Element Plus的组件 -->
    <div>
        <!-- 使用Element Plus的MessageBox组件通常是通过编程方式调用，而不是在模板中直接渲染 -->
        <!-- 这里只是展示如何在组件中封装调用逻辑 -->
        <el-button @click="showAlert">显示提示</el-button>
    </div>
</template>

<script setup>
import { ElMessageBox } from 'element-plus';

function showAlert() {
    ElMessageBox.confirm('这是一条消息', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
    }).then(() => {
        // 用户点击了确定  
        console.log('用户点击了确定');
    }).catch(() => {
        // 用户点击了取消或关闭  
        console.log('用户点击了取消或关闭了对话框');
    });
}
</script>

<style scoped>
/* 你的样式 */
</style>