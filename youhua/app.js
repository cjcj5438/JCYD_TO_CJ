//小
/*
1, html css js =>减少网路请求
2, 合并a.css b.css => ab.css 文件的体积在28.5k以下
    在同样的域名下 不能超过5个资源;
    控制域名到CDN
    link标签
    MD5后缀.->版本控制->缓存文件
3,  缓存 http的
    强缓存 在服务器中缓存;
    离线缓存
        manifest=>手动刷新,死缓存,各家浏览器都不一样;
        service workers;渐进式的
        web sql 操作关系型数据库
        * indexDB 安卓4.0+ 才能使用;
        * local storage 数据2M一下最好
        session storage 即使性的数据

4, 动架构
index.html .> vue-router > comments > 声明周期 渲染html 异步 js
直出 > php node > 渲染 页面的跳转 a  ---------->| bigpige + ajax

/a/b -> /c/d ->pushstate 页面不涮新
5,页面性能
  获取dom元素 分割成多个曾
  对每个层节点进行分析 计算样式的结果
   对每个节点生成 图形和位置. 重排 回流
    将每个节点绘制填充到图层未图中,重绘 paint
     图层作为纹理上传到GPU
     符合图层

 */

