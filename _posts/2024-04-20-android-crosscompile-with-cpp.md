---
title: "[Android] Android cross-compile with ndk-build(cpp) "
excerpt: ""

categories:
  - Security
tags:
  - [Security, Android]

permalink: /Security/ndk-build-with-cpp/

toc: true
toc_sticky: true

date: 2024-04-19
last_modified_at: 2024-04-19
---

[이전post](https://parkhoho.github.io/Security/ndk-build-with-c/)와 이어지는 내용입니다.<br>
ndk-build 스크립트를 이용한 cpp 코드 빌드 프로젝트는 따로 없어서 정리해봅니다.<br>
<br>
이전 post에서 ndk-build를 이용해서 c코드를 빌드하고, android shell 에서 실행시켜봤습니다.<br>
cpp코드도 비슷하지만 조금 다른 부분도 있고,<br>
이해가 안되는 부분도 있어 기록 남겨봅니다.

# ☝🏻 How to make?
cpp코드를 빌드하기에 앞서 폴더 구성은 다음과 같이 했습니다.

```
tree .                                                                     ─╯
.
├── Android.mk
├── Application.mk
└── hello-world.cpp

1 directory, 3 files
```

폴더 구성의 경우에 전의 c코드 빌드와 같기 때문에 설명은 생략하겠습니다.

각각의 파일은 다음과 같이 작성하였습니다.


## Android.mk
```
LOCAL_PATH := $(call my-dir)

include $(CLEAR_VARS)

LOCAL_MODULE := hello-world
LOCAL_SRC_FILES := hello-world.cpp

include $(BUILD_EXECUTABLE)
```

## Application.mk

```
APP_ABI := armeabi-v7a arm64-v8a
APP_PLATFORM := android-23
APP_STL := c++_shared
```

## hello-world.cpp
```
#include <iostream>

using namespace std;

int main() {
    cout << "hello world" << sizeof(char*) << endl;
}
```

위와 같이 작성해준 후에 jni 상위폴더에서 `ndk-build` 스크립트를 실행해주면 됩니다.<br>
실행 결과는 다음과 같습니다.

```
$ ndk-build
[armeabi-v7a] Install libs/armeabi-v7a/libc++_shared.so:
[arm64-v8a] Install libs/arm64-v8a/libc++_shared.so:
[armeabi-v7a] Compile++ thumb: hello-world <= hello-world.cpp
[armeabi-v7a] Executable     : hello-world
[armeabi-v7a] Install        : hello-world => libs/armeabi-v7a/hello-world
[arm64-v8a] Compile++      : hello-world <= hello-world.cpp
[arm64-v8a] Executable     : hello-world
[arm64-v8a] Install        : hello-world => libs/arm64-v8a/hello-world
```

위에서 선언한대로 `armeabi-v7a`와 `arm64-v8a` 바이너리만 생성한 것을 확인할 수 있습니다.

## 실행
안드로이드 기기에서 각각의 파일을 실행한 결과입니다.

<img src="/assets/images/cpp-64.png">
<img src="/assets/images/cpp-32.png">


[깃허브 소스코드](https://github.com/ParkHoHo/Android-Study/tree/main/cpp-test/jni)
