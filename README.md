# React Native 配置指南

### 1.下载基础配置

[下载](https://github.com/zhouzhongyuan/yesapp/archive/master.zip)，
解压，在yesapp目录下执行`npm install`。

### 2.下载`src`

在yesapp目录下执行如下命令
```bash
svn co http://1.1.2.17:8000/svn/yes/webapp/src
```

### 3.安装`src`所需package
进入`src`
```
npm install
```

### 4.修改`src/.babelrc`

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
- 如果执行`npm install`超过5分钟没有完毕，请自行翻墙。