# React Native 配置指南

## 下载，配置 （必须严格按照1,2,3,4的顺序操作）

### 1.下载基础配置

[yesdemo-master.zip下载](https://github.com/zhouzhongyuan/yesdemo/archive/master.zip)，
解压为yesdemo文件夹

or(for download)
```
git clone https://github.com/zhouzhongyuan/yesdemo.git
```
or(for developers)
```
git clone git@github.com:zhouzhongyuan/yesdemo.git
```
### 2.下载`src`

在yesdemo目录下执行如下命令
```bash
svn co http://1.1.2.17:8000/svn/yes/webapp/src
```
or
```bash
git svn clone http://1.1.2.17:8000/svn/yes/webapp/src
```


### 3.安装所需package
在`yesdemo`目录
```
npm install
```
如果安装失败，请看下方“注意”中的说明。
预计用时10分钟。

## 运行

### icon

```
react-native link
```

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

## Debug

```
npm run devtools
```


## 错误处理

### 1. `Could not connect to development server`
真机调试时，经常会遇到这种错误。
解决办法：
```
adb reverse tcp:8081 tcp:8081
```
### 2. 真机安装
SAMSUNG
```
adb -s c3c9b66d install android/app/build/outputs/apk/app-release.apk  
```
Redmi
```angular2html
adb -s 33cace327ce3 install android/app/build/outputs/apk/app-release.apk  
```
Failure [INSTALL_FAILED_ALREADY_EXISTS]
```
adb -s c3c9b66d install -r android/app/build/outputs/apk/app-release.apk  

```

### 3.模拟器 
```
emulator -avd Nexus_6_API_25
```

## Android打包发布

```
cd android

./gradlew assembleRelease

./gradlew installRelease
```