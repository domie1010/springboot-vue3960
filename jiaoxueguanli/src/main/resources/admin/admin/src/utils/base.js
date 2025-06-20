const base = {
    get() {
        return {
            url : "http://localhost:8080/jiaoxueguanli/",
            name: "jiaoxueguanli",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/jiaoxueguanli/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "教学管理系统"
        } 
    }
}
export default base
