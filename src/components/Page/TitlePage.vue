<template>
    <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="(item, index) in breadcrumbItems" :key="index" :to="item.path">
            {{ item.name }}
        </el-breadcrumb-item>
    </el-breadcrumb>
    <hr>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
    setup() {
        const route = useRoute();

        // 生成面包屑项
        const breadcrumbItems = computed(() => {
            const items = [];
            items.push({ name: '首页', path: { name: 'Home' } }); // 默认首页

            switch (route.name) {
                case 'ComputerList':
                    items.push({ name: '电脑列表', path: { name: 'ComputerList' } });
                    break;
                case 'AnsibleManagement':
                    items.push({ name: 'Ansible管理', path: { name: 'AnsibleManagement' } });
                    break;
                case 'UserManagement':
                    items.push({ name: '用户管理', path: { name: 'UserManagement' } });
                    break;
                case 'Gpt':
                    items.push({ name: 'GPT', path: { name: 'Gpt' } });
                    break;
            }
            return items;
        });

        return {
            breadcrumbItems,
        };
    },
};
</script>

<style>
hr {
    border: none;
    /* 去掉默认的边框 */
    height: 1.2px;
    /* 设置高度 */
    background-color: rgba(128, 128, 128, 0.2);
    /* 半透明灰色 */
}
</style>