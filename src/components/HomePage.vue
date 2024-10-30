<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <TopBar @toggle-collapse="updateCollapse" :is-collapse="isCollapse" />
            </el-header>
            <el-container>
                <transition name="slide">
                    <el-aside :style="{ width: isCollapse ? '80px' : '200px' }">
                        <NavBar :is-collapse="isCollapse" @menu-select="handleMenuSelect" />
                    </el-aside>
                </transition>
                <transition name="slide">
                    <el-main :style="mainStyle">
                        <router-view /> <!-- 动态渲染子路由组件 -->
                    </el-main>
                </transition>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import NavBar from './Menu/NavBar.vue';
import TopBar from './Menu/TopBar.vue';
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

export default {
    name: 'HomePage',
    components: {
        NavBar,
        TopBar,
    },
    setup() {
        const isCollapse = ref(true);
        const router = useRouter();

        const updateCollapse = (collapse) => {
            isCollapse.value = collapse;
        };

        const handleMenuSelect = (index) => {
            switch (index) {
                case '1':
                    router.push({ name: 'Home' });
                    break;
                case '2':
                    router.push({ name: 'ComputerList' });
                    break;
                case '3':
                    router.push({ name: 'AnsibleManagement' });
                    break;
                case '4':
                    router.push({ name: 'UserManagement' });
                    break;
                case '5':
                    router.push({ name: 'Gpt' });
                    break;
                default:
                    router.push({ name: 'Home' });
            }
        };

        const mainStyle = computed(() => ({
            width: isCollapse.value ? 'calc(100% - 80px)' : 'calc(100% - 200px)',
        }));

        return {
            isCollapse,
            updateCollapse,
            handleMenuSelect,
            mainStyle,
        };
    },
};
</script>

<style>
/* 你可以在这里添加样式 */
</style>
