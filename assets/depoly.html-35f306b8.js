import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o,c as r,a as i,d as e,e as t,w as s,b as c}from"./app-c31bf0ab.js";const p={},m=i("div",{class:"hint-container tip"},[i("p",{class:"hint-container-title"},"提示"),i("p",null,"由于原生框架较难上手且作者摆烂已经很久没维护了，所以本文章采用基于原生框架开发的喵喵版本yunzai")],-1),u=i("strong",null,"且nodejs版本大于14",-1),v=c(`<blockquote><p>https://nodejs.org/zh-cn/download 下载最新版nodejs</p></blockquote><p>同时确保你下载了git，方便后续下载</p><blockquote><p>https://git-scm.com/download 下载git</p></blockquote><p>之后前往https://gitee.com/yoimiya-kokomi/Miao-Yunzai 下载框架并安装</p><p>不想前往的可以直接用下面的代码clone</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 使用 Github 
git clone --depth=1 https://github.com/yoimiya-kokomi/Miao-Yunzai.git
cd Miao-Yunzai 
git clone --depth=1 https://github.com/yoimiya-kokomi/miao-plugin.git ./plugins/miao-plugin/


# 使用Gitee
git clone --depth=1 https://gitee.com/yoimiya-kokomi/Miao-Yunzai.git
cd Miao-Yunzai 
git clone --depth=1 https://gitee.com/yoimiya-kokomi/miao-plugin.git ./plugins/miao-plugin/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>务必要全部clone下来,比如gitee的那两行clone命令就要全部执行不然跑不了</p></div><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p>安装pnpm,安装过的可以直接跳过</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 使用npmjs.org安装
npm install pnpm -g

# 指定国内源npmmirror.com安装
npm --registry=https://registry.npmmirror.com install pnpm -g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>安装依赖</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 直接安装
pnpm install -P

# 如依赖安装缓慢或失败，可尝试更换国内npm源后再执行install命令
pnpm config set registry https://registry.npmmirror.com
pnpm install -P
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装redis" tabindex="-1"><a class="header-anchor" href="#安装redis" aria-hidden="true">#</a> 安装redis</h2><p>yunzai启动还需要redis数据库，因此我们现在去下载redis</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>由于原生redis不支持windows端，所以本文选择使用其他人构建的windows版本进行构建，如果你的系统是linux或者macos也或者说愿意折腾WSL的话可以自行尝试，本文不再赘述</p></div><ol><li>前往https://github.com/tporadowski/redis/releases/tag/v5.0.14.1 下载安装镜像，进行安装</li><li>前往你的安装目录，打开<strong>redis-server.exe</strong>这个程序启动redis</li><li>返回你的机器人目录，运行“node app&quot;进行初步配置和启动</li></ol><div class="hint-container warning"><p class="hint-container-title">注意</p><p>如果双击之后闪退有两种原因 第一种是安装完成后redis会自行启动，所以实际上已经打开了，只需要把服务改成手动并重新启动即可<a href="%E8%AF%A6%E7%BB%86%E8%A7%A3%E5%86%B3%E6%96%B9%E6%B3%95%E8%A7%81%EF%BC%9Ahttps://blog.csdn.net/qq_54431167/article/details/116327191">^1</a> 如果不是上述情况解决方法看下面</p></div><p>请先打开文件扩展名！！！！！！！！！！！！！</p><p>然后在 Redis 目录下建一个名称是 start.txt 文本，在新建的 start.txt 文件中加入下面一句话</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>redis-server.exe redis.windows.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>接着将文件名start.txt格式改成start.bat就行了</p>`,21);function g(h,b){const a=n("Badge"),d=n("RouterLink");return o(),r("div",null,[m,i("p",null,[e("首先确保你的电脑下载了nodejs，"),u,t(a,{type:"warning"},{default:s(()=>[e("warning")]),_:1})]),v,i("p",null,[e("双击打开 start.bat 就可以了"),t(d,{to:"/yunzai/%E5%8E%9F%E6%96%87%E5%9C%B0%E5%9D%80%EF%BC%9Ahttps:/jingyan.baidu.com/article/22a299b53ff3b7df18376a1f.html"},{default:s(()=>[e("^2")]),_:1})])])}const y=l(p,[["render",g],["__file","depoly.html.vue"]]);export{y as default};
