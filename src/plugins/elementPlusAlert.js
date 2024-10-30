import { ElMessageBox } from 'element-plus';

const ElementPlusAlert = {
    install(app, options) {
        // 这里可以定义一些全局方法或混入等  
        // 但对于MessageBox这样的服务，我们可能只是展示如何注册一个调用方法  
        app.config.globalProperties.$showAlert = function (message, title, options = {}) {
            ElMessageBox.confirm(message, title, {
                ...options,
                confirmButtonText: options.confirmButtonText || '确定',
                cancelButtonText: options.cancelButtonText || '取消',
                type: options.type || 'warning'
            }).then(() => {
                // 处理确定  
            }).catch(() => {
                // 处理取消或关闭  
            });
        };
    }
};

export default ElementPlusAlert;  