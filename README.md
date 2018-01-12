## 自学React项目

### 1 项目初始化
```
**project**
├── Readme.md
├── node_modules
├── .gitignore
├── package.json
├── src
│   ├── css
│   ├── images
│   ├── js
│   │   │
│   │	├── components
│   │   │    ├── common_comments.js
│   │   │    ├── mobile_footer.js
│   │   │    ├── mobile_header.js
│   │   │    ├── mobile_index.js
│   │   │    ├── mobile_list.js
│   │   │    ├── mobile_list_pull_refresh.js
│   │   │    ├── mobile_news_details.js
│   │   │    ├── mobile_usercenter.js
│   │   │    ├── pc_footer.js
│   │   │    ├── pc_header.js
│   │   │    ├── pc_index.js
│   │   │    ├── pc_news_block.js
│   │   │    ├── pc_news_details.js
│   │   │    ├── pc_news_image_block.js
│   │   │    ├── pc_newscontainer.js
│   │   │    ├── pc_product.js
│   │   │    ├── pc_products.js
│   │   │    └── pc_usercenter.js
│   │   │
│   │   └──  root.js
│	└── bundle.js
│
├── index.html
└── webpack.config.js
```
```
README.md  帮助文件
node_modules 模块文件夹
package.json 模块配置文件
webpack.config.js webpack配置文件

项目启动第一步：
```
git clone https://github.com/a307420929/react_news_project.git
```
第二步：
```
npm install
```
第三步：
```
启动热加载看配置： webpack-dev-server --hot --inline


--------------我是分割线---------------------

以下是项目随记：（不想看请忽略~~~）
### 2 ant design
```
npm install antd --save
```

### API接口
获取新闻列表 http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=top&count=10

获取新闻详情 http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=161022191707874

获取文章评论 http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=123

新闻添加评论 http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid=1&uniquekey=123&commnet=content

收藏新闻 http://newsapi.gugujiankong.com/Handler.ashx?action=uc&userid=1&uniquekey=123

注册登录接口 http://newsapi.gugujiankong.com/Handler.ashx?action=register&username=userName&password=password&r_userName=r_userName&r_password=r_password&r_confirmPassword=r_confirmPassword

获取用户收藏 http://newsapi.gugujiankong.com/Handler.ashx?action=getuc&userid=1

获取用户发出的评论 http://newsapi.gugujiankong.com/Handler.ashx?action=getusercomments&userid=1


### PC端 （组件开发）
图标网站：
https://www.iconfinder.com/
http://www.easyicon.net/

布局采用flex  ant design （layout）  栅格布局

- fetch （框架）
数据请求，类似ajax
```
npm install fetch --save

```




### 移动端 （react-responseive）
import MediaQuery from 'react-responsive';

```
            <div>
			    <MediaQuery query="(min-device-width:1224px)">
					<PCIndex/>
				</MediaQuery>
				<MediaQuery query="(max-device-width:1224px)">
					<MobileIndex/>
				</MediaQuery>
			</div>
```


综合新闻网站项目
UI组件 ： Ant Design； flex 布局
开发环境： webpack、react、redux、es6 技术栈
CSS Modules；  ； React-Router

使用 Babel 和 babel-loader 编译 jsx、es6

从后台获取数据使用 Fetch  Promise
