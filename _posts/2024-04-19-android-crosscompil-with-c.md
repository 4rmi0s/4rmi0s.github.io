---
title: "[Android] Android cross-compile with ndk-build(c)"
excerpt: ""

categories:
  - Security
tags:
  - [Security, Android]

permalink: /Security/ndk-build-with-c/

toc: true
toc_sticky: true

date: 2024-04-19
last_modified_at: 2024-04-19
---

Android 에서 실행시킬 수 있는 바이너리를 생성하는 방법은 여러가지가 있습니다.<br>
Android 공식 페에지에서는 ndk를 이용한 빌드 방법을 3가지 소개합니다.<br>

> NDK로 코드를 빌드하는 방법은 크게 세 가지가 있습니다.
> 
> - Make 기반 [ndk-build](https://developer.android.com/ndk/guides/ndk-build?hl=ko)
> - [CMake](https://developer.android.com/ndk/guides/cmake?hl=ko)
> - [독립 실행형 도구 모음](https://developer.android.com/ndk/guides/standalone_toolchain?hl=ko)(다른 빌드 시스템과 통합하거나 `configure` 기반 프로젝트와 함께 사용)

```
❗ 개인적으로 c/c++ 코드를 빌드하는 방법중 ndk-build를 이용한 방법이 가장 쉬워보여 정리해보고자 합니다.
```

[Android-ndk-build](https://developer.android.com/ndk/guides/build?hl=ko)

# What is NDK-build

ndk-build는 ndk를 이용하여 안드로이드를 target으로 빌드를 진행할 수 있도록 돕는 Tool입니다.<br>
안드로이드 공식페이지에서는 다음과 같이 정의하고 있습니다.<br>

> `ndk-build` 스크립트는 NDK의 Make 기반 빌드 시스템을 사용하는 프로젝트를 빌드합니다.

즉, ndk-build는 c/c++ 프로젝트를 안드로이드 앱 제작에 사용하기 위한 빌드 스크립트라고 볼 수 있습니다. <br>
이러한 ndk-build 스크립트는 ndk를 다운받게되면 사용할 수 있습니다.<br>

[Android-download-ndk](https://developer.android.com/ndk/downloads?hl=ko)

안드로이드에서 직접적으로 ndk-build를 Make기반이라고 설명하고 있습니다.<br>

아래는 ndk-build가 실행될 때 실행되는 명령어 set입니다.<br>

```bash
$GNUMAKE -f <ndk>/build/core/build-local.mk
<parameters>
```

이러한 성질때문에인지 make clean과 유사하게 빌드를 clean할 수 있는 명령어도 이용이 가능합니다.<br>

```bash
ndk-build clean
```

# How to use?
ndk-build를 사용하기 위해 필요한 파일은 다음과 같습니다.<br>

- jni
- Android.mk
- Application.mk

hello.c를 컴파일하는 과정으로 예를 들어보고자 합니다.<br><br>

```bash
$ tree .                                                                     ─╯
.
└── jni
    ├── Android.mk
    ├── Application.mk
    └── hello.c
```

폴더 구성을 위와 같이 jni폴더를 생성하고, 하위 폴더에 빌드하고 싶은 소스코드 파일 , 빌드 속성을 지정할 수 있는 Android.mk, Application.mk를 만들어주면 기본적인 환경구성은 끝입니다.<br><br>

이제 각각을 어떻게 구성했는지 보겠습니다.</br>
먼저 Android.mk는 다음과 같이 작성했습니다.<br>

## Android.mk

```bash
LOCAL_PATH := $(call my-dir)

LOCAL_MODULE := hello

LOCAL_SRC_FILES := hello.c

include $(BUILD_EXECUTABLE)%
```

다음으로 Application.mk 입니다.<br>

## Application.mk

```bash
APP_ABI := armeabi-v7a arm64-v8a x86_64
APP_PLATFORM := android-23
```

```
❗ 각각의 속성에 대해서는 추후에 정리하겠습니다.<br>
```

이제 빌드를 진행하면 됩니다.<br>

빌드는 jni가 존재하는 그리고, Android.mk와 Application.mk가 존재하는 상위폴더에서 진행하면 됩니다.<br>

```bash
ndk-build
```

위와 같이 ndk-build 스크립트를 실행하면 다음의 결과를 볼 수 있습니다.<br>

```bash
[armeabi-v7a] Compile thumb  : hello <= hello.c
[armeabi-v7a] Executable     : hello
[armeabi-v7a] Install        : hello => libs/armeabi-v7a/hello
[arm64-v8a] Compile        : hello <= hello.c
[arm64-v8a] Executable     : hello
[arm64-v8a] Install        : hello => libs/arm64-v8a/hello
[x86_64] Compile        : hello <= hello.c
[x86_64] Executable     : hello
[x86_64] Install        : hello => libs/x86_64/hello
```

# 결론

빌드가 완료되었습니다.<br>
이제 빌드결과를 확인해보겠습니다.

```
❗ 빌드를 진행하면 `obj` 파일과 `libs` 파일이 생성됩니다. 이때, 바이너리 실행파일의 경우 `obj` 폴더 아래 생성됩니다.
```

<img src="/assets/images/file-android.png" >

위에서 지정해준대로 `arm64-v8a`, `armeabi-v7a`, `x86_64` 폴더 아래 바이너리가 **순서대로** 생성되었습니다.

<img src="/assets/images/exec.png">

위에서는 c코드를 빌드했지만, cpp코드도 빌드가 가능합니다. <br>
ndk-build 스크립트 실행 한번을 통해 원하는 아키텍처의 실행파일을 생성할 수 있다는 점이 큰 매력입니다.<br>

cpp 코드 빌드 과정의 경우에는 스포가 될 수 있기 때문에 따로 블로그 링크 추가합니다.

소스코드 : [github](https://github.com/ParkHoHo/Android-Study/tree/main/compile-set)
<br>
cpp ex : [cpp code]()