## React News

### 1 Initialization
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
└── app.js
└──  vendor.js
```
```
README.md  Help
node_modules Module file
package.json Module configuration
webpack.config.js webpack configuration
```

First step：
```
git clone https://github.com/yujialian/react_news.git
```
Second step：
```
npm install
```
Thrid step：
```
webpack --watch
Using Webpack's Hot Module Replacement with React： webpack-dev-server
```
---------------Demo--------------------

### Main page:

![React_news](https://s3.amazonaws.com/poly-screenshots.angel.co/Project/46/675944/02663dfc588078eb04a1653c5cd106b3-original.png)

### Register:

![React_news](https://s3.amazonaws.com/poly-screenshots.angel.co/Project/46/675944/48c4b98ad0a3bed6a6088c05e5ca3dc5-original.png)

### Description:
[1]
![React_news](https://s3.amazonaws.com/poly-screenshots.angel.co/Project/46/675944/1247f393ac28c431f8a49d97feb64f5a-original.png)
[2]
![React_news](https://s3.amazonaws.com/poly-screenshots.angel.co/Project/46/675944/6165055a16b52b9a5e2be08edcb10bd8-original.png)

### Mobile End:

![React_news](https://s3.amazonaws.com/poly-screenshots.angel.co/Project/46/675944/f7466362109efbc1f43aa4ac70ddb374-original.png)

### Mobile Detail:

![React_news](https://s3.amazonaws.com/poly-screenshots.angel.co/Project/46/675944/329043b493d5f6350a8b7ffc06b81a7a-original.png)

### Click for loading more content:

![React_news](https://s3.amazonaws.com/poly-screenshots.angel.co/Project/46/675944/c85c3c737a18c5525bf5c6dd2014819b-original.png)

---------------Notes--------------------

### PC end
Icon source：
https://www.iconfinder.com/
http://www.easyicon.net/

Layout: flex  ant design (24 Grids System)

- fetch （Framework）
Fetch data，just like ajax
```
npm install fetch --save

```

### Mobile end （react-responseive）
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


Overall tech stack:  

```
UI Component ： Ant Design； flex layout  

Develop environment： webpack、react、redux、es6、react-router  

Use Babel and babel-loader to compile jsx、es6  

Use webpack to optimising the application's bundle size,split vendor and application code into separate bundles to achieve better client caching.  

Interact with back end with Fetch,Promise  
```



