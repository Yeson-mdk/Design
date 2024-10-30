<template>
    <div class="dashboard-container">
        <h1>欢迎来到仪表盘</h1>
        <p>这是您的个人信息：</p>
        <ul class="info-list">
            <li>用户名: {{ userName }}</li>
            <li>角色: {{ userRole }}</li>
        </ul>

        <!-- 侧边栏或导航栏 -->
        <nav class="sidebar">
            <ul>
                <li><router-link to="/">首页</router-link></li>
                <li><router-link to="/profile">个人资料</router-link></li>
                <li><router-link to="/settings">设置</router-link></li>
            </ul>
        </nav>
    </div>
</template>

<script>
// 你可以通过props、Vuex、或者Context API（在Composition API中）来获取用户信息  
// 这里为了简化，我们直接在data中返回静态数据  
export default {
    data() {
        return {
            userName: '张三',
            userRole: '管理员'
        };
    }
    // 你可以在这里添加methods、computed properties、watch等  
}  
</script>

<style scoped>
.dashboard-container {
    display: flex;
    /* 使用flex布局 */
    justify-content: space-between;
    /* 子元素之间的间隔 */
    align-items: flex-start;
    /* 子元素垂直方向顶部对齐 */
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    background-color: #71e4ae;
}

h1 {
    color: #333;
    text-align: center;
    margin-bottom: 20px;
}

.info-list {
    list-style-type: none;
    /* 移除列表项前的标记 */
    padding: 0;
}

.info-list li {
    margin-bottom: 10px;
    font-size: 16px;
    color: #666;
}

.sidebar {
    width: 200px;
    /* 侧边栏宽度 */
    background-color: #f4f4f4;
    /* 侧边栏背景色 */
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.sidebar ul {
    list-style-type: none;
    padding: 0;
}

.sidebar li {
    margin-bottom: 10px;
}

.sidebar a {
    color: #333;
    text-decoration: none;
    font-size: 16px;
    display: block;
    /* 使链接占据整行 */
    padding: 8px;
    border-radius: 4px;
    transition: background-color 0.3s;
    /* 平滑过渡效果 */
}

.sidebar a:hover {
    background-color: #c6ec97;
    /* 鼠标悬停时的背景色 */
}
</style>