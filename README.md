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

---------------some notes--------------------

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


Overall tech stack  
UI Component ： Ant Design； flex layout  
Develop environment： webpack、react、redux、es6  
CSS Modules  
React-Router  


Use Babel and babel-loader to compile jsx、es6
Use webpack to optimising the application's bundle size,split vendor and application code into separate bundles to achieve
better client caching. 
Interact with back end with Fetch,Promise
