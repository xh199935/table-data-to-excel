# 起因

老板需要我们把系统中的字典表整理成文档保留在svn上

![image-20240417141631440](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20240417141631440.png)

刚开始就是手动录入，这份工作还挺轻松地，直到看到有张字典表里竟然保留了90多条数据。。。。

感觉这得弄到什么时候，于是就想。能不能写个脚本，让脚本帮我录入。

![image-20240417141922240](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20240417141922240.png)

我开始向chatGPT提问

![image-20240417142043059](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20240417142043059.png)

![image-20240417142142701](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20240417142142701.png)

于是知道了xlsx-populate可以操作excel。接下来就是我的强项了。

- 创建一个项目 npm init
- 安装xlsx-populate   npm install xlsx-populate
- 新建js脚本   mkdir index.js
- 将GPT生成的代码导入index.js
- 最后根据我的规则修改js

# 运行看看效果

![image-20240417142524629](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20240417142524629.png)

# 我真牛逼