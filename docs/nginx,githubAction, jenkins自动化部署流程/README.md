## Nginx | GithubAction | Jenkins 自动化部署
### 首先购买服务器
* 腾讯云或者阿里云都是可以使用的呐
* 购买玩服务器就开始构建我们的服务器的环境吧
* 然后的话就是下载我们的远程链接服务器的工具
  * putty | windTerm 都是可以使用的呐，连接服务器都是通过 SSH 来实现连接的呐
    * putty 纯粹是我们的命令行操作
    * windTerm 是一个提供了图形化界面的连接服务器的操作吧
  * FileZilla 是一个用来和远程服务器之间进行传输文件的便捷工具吧
  * 或者说使用 vscode 的插件 remote 也是可以的呐

### 安装 nginx
* dnf|yum install nginx 
  * 实现启动我们的 nginx 
    * systemctl start nginx  开始 nginx 服务的
    * systemctl status nginx  查看 nginx 服务的状态
    * systemctl stop nginx  停止 nginx 服务
    * systemctl enable nginx 实现的是开机就启动 nginx 
  * nginx 监听的是我们的 80 端口
    * **服务器地址:80** 实现访问我们的 nginx 服务

### 自动化部署
* 本地开发好我们的项目
  * 然后进行将我们的项目进行打包
  * 手动的上传我们的打包的压缩包到服务器即可
  * 这个就是我们的手动部署项目吧
* 自动化部署
  * dnf install java-17-openjdk 安装java环境
    * 依赖于我们的 java 环境的，jenkins 依赖于他的
  * jenkins 安装
    * 是不可以通过 def 进行安装的
      * 需要使用的是我们的 **wget -O 输出目录 连接的https地址**
  * rmp --import 进行校验我们的 jenkins 的合法性
  * 修改 jenkins.repo
    * 进行编辑我们的 jenkins 配置即可的呐
    * vim 进行我们的编辑即可
      * i 进入编辑模式
      * esc 退出编辑模式
        * shift + : + wq 实现保存并且退出我们的文件编辑的
  * **dnf install jenkins** 就可以实现下载 jenkins 了
    * jenkins 监听的是我们的 8080 端口
    * 开启 jenkins 服务
      * **服务器地址:8080** 就可以实现访问我们的服务器服务了
      * 通过 cat 来实现我们的查看服务器中的密码
  * cd /root
    * 切换服务器目录
    * mkdir 静态资源名
      * 实现创建目录