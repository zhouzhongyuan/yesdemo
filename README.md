# React Native 配置指南

## 下载，配置 （必须严格按照1,2,3,4的顺序操作）

### 1.下载基础配置

[yesdemo-master.zip下载](https://github.com/zhouzhongyuan/yesdemo/archive/master.zip)，
解压为yesdemo文件夹

### 2.下载`src`

在yesdemo目录下执行如下命令
```bash
svn co http://1.1.2.17:8000/svn/yes/webapp/src
```


### 3.安装所需package
在`yesdemo`目录
```
npm install
```
如果安装失败，请看下方“注意”中的说明。
预计用时10分钟。

### 4.修改`yesdemo/src/.babelrc`

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
## 更改应用名称(*)
yesapp 改为yesdemo
### 1.修改yesapp/package.json
```
	"name": "yesdemo",
```
### 2. 更新代码
```
react-native upgrade
```
一路yes

### 3. 删除旧的yesapp

```
rm -rf android/app/src/main/java/com/yesapp/ && rm -rf ios/yesapp*
```
## 注意
- npm registry `http://dev.bokesoft.com:28080/`。使用方法（临时）`npm install --registry=http://dev.bokesoft.com:28080/`
- 自行下载Android所需SDK。[参考地址](http://www.android-studio.org/)
- 如果执行`npm install`超过5分钟没有完毕，请自行翻墙。