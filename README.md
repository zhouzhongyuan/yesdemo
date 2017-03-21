# React Native 配置指南

## 下载，配置 

### 1.下载基础配置

[下载](https://github.com/zhouzhongyuan/yesapp/archive/master.zip)，
解压，在yesapp目录下执行
```
npm install
```

### 2.下载`src`

在yesapp目录下执行如下命令
```bash
svn co http://1.1.2.17:8000/svn/yes/webapp/src
```

### 3.修改`src/.babelrc`

修改为
```
{
  "presets": ["es2015"]
}
```

## 运行
### 运行调试
```
react-native run-android
```
或者
```
react-native run-ios
```
### 清空缓存
```
watchman watch-del-all &&  ./node_modules/react-native/packager/packager.sh start --reset-cache

```

## 注意
- npm registry `http://dev.bokesoft.com:28080/`。使用方法（临时）`npm install --registry=http://dev.bokesoft.com:28080/`
- 自行下载Android所需SDK。[参考地址](http://www.android-studio.org/)
- 如果执行`npm install`超过5分钟没有完毕，请自行翻墙。