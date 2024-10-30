<template>
    <div class="login-container">
        <div class="login-form">
            <h2>Login</h2>
            <input v-model="loginForm.username" type="text" placeholder="Username" required @keyup.enter="login">
            <input v-model="loginForm.password" type="password" placeholder="Password" required @keyup.enter="login">
            <button @click="login">Login</button>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            loginForm: {
                username: '',
                password: ''
            }
        };
    },
    methods: {
        login() {
            const staticUsername = '123';
            const staticPassword = '123';

            if (this.loginForm.username === staticUsername && this.loginForm.password === staticPassword) {
                console.log('Login successful');
                localStorage.setItem('isLoggedIn', 'true'); // 保存登录状态
                this.$router.replace({ name: 'HomePage' });
            } else {
                console.log('Login failed: Invalid credentials');
                alert('Invalid username or password');
            }
        }
    }
};
</script>
<style scoped>
.login-container {
    background-image: url('../../assets/02.jpg');
    background-size: cover;
    background-position: center;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
}

.login-form {
    max-width: 400px;
    /* 增加最大宽度 */
    width: 100%;
    /* 使其适应不同屏幕 */
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: rgba(255, 255, 255, 0.8);
    /* 增加透明度 */
    text-align: center;
}

.login-form h2 {
    margin-bottom: 20px;
    color: #333;
}

.login-form input[type="text"],
.login-form input[type="password"] {
    width: 90%;
    /* 适应宽度 */
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
    transition: border-color 0.3s;
    /* 过渡效果 */
}

.login-form input[type="text"]:focus,
.login-form input[type="password"]:focus {
    border-color: #42b983;
    outline: none;
    box-shadow: 0 0 5px rgba(66, 185, 131, 0.5);
}

.login-form button {
    width: 100%;
    padding: 10px;
    background-color: #42b983;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.login-form button:hover {
    background-color: #3a9870;
}
</style>



<!-- 动态账号密码 -->
<!-- <script>
import axios from 'axios'

export default {
    data() {
        return {
            loginForm: {
                username: '',
                password: ''
            }
        };
    },
    methods: {
        login() {
            axios.get('/api/auth/login', {
                params: {
                    loginName: this.loginForm.username,
                    password: this.loginForm.password
                }
            }).then(res => {
                console.log('data:' + JSON.stringify(res.data));
                if (res.data.code == '0000') {
                    this.$router.replace({ name: 'Dashboard' });
                } else {
                    this.$showAlert(res.data.message);
                }
            }, err => {
                console.log('error:' + err);
            })
        }
    }
};
</script> -->