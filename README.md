# React Native 配置指南

## 下载基础配置

[下载地址](https://github.com/zhouzhongyuan/yesapp/archive/master.zip)

## 下载src

```bash
svn co http://1.1.2.17:8000/svn/yes/webapp/src
```

## 配置yes-common

进入`src/js/lib/yes-common`
```
npm install
```

```
webpack
```

## 安装`src`所需package
进入`src`
```
npm install
```

## 修改`src/.babelrc`

修改为
```
{
  "presets": ["es2015"]
}

```
## 运行调试
```
react-native run-android
```
或者
```
react-native run-ios
```
## 清空缓存
```
watchman watch-del-all &&  ./node_modules/react-native/packager/packager.sh start --reset-cache

```

## 注意
- 如果执行`npm install`超过5分钟没有完毕，请自行翻墙。