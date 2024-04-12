---
title: "[Android] cross compile settings"
excerpt: ""

categories:
  - Security
tags:
  - [cross-compile, Android]

permalink: /Security/cross-compile/

toc: true
toc_sticky: true

date: 2024-04-12
last_modified_at: 2024-04-12
---

## ☝🏻 cross compile

Android에서 동작할 수 있는 바이너리 프로그램을 x64 컴퓨터에서 컴파일할 수 있는 방법에 대해 다룬다.

QtCreator를 이용해서 컴파일 방식을 알 수 있는데, 컴파일 방법은 다음과 같았다.

- arm64
```
/home/hoho/Android/Sdk/ndk/25.1.8937393/toolchains/llvm/prebuilt/linux-x86_64/bin/clang -target aarch64-linux-android23 -o hello-world hello-world.c
```

- arm32
```
/home/hoho/Android/Sdk/ndk/25.1.8937393/toolchains/llvm/prebuilt/linux-x86_64/bin/clang -target armv7a-linux-androideabi23 -o hello-world hello-world.c
```

하지만 매번 이렇게 긴 명령어를 치는 것이 복잡할 뿐만 아니라 번거롭다.
따라서 이를 쉽게 컴파일하기 위한 방식을 다루고자 한다.

cmake,.profile 등 다양한 방법이 있지만, 이번 article 에서는 ~/.bashrc 를 이용한 방법에 대해 설명하고자 한다.

## ☝🏻 간편화(c)
clang과 clang++은 각각 c와 cpp로 된 프로그램을 컴파일하는데 사용된다.
이중에 먼저 c컴파일하기 위해 추가된 것은 다음과 같다.

```
 Android NDK
ANDROID_NDK_ROOT=/home/hoho/Android/Sdk/ndk/25.1.8937393
ANDROID_TOOLCHAIN=$ANDROID_NDK_ROOT/toolchains/llvm/prebuilt/linux-x86_64/bin

function compile_android() {
    local arch=$1
    local compiler=$2
    
    for file in *.c
    do
        filename="${file%.*}"
        case $arch in
            x86_64)
                $compiler $file -o $filename.x86_64
                ;;
            arm64)
                $compiler -target aarch64-linux-android23 $file -o $filename.arm64
                ;;
            arm32)
                $compiler -target armv7a-linux-androideabi23 $file -o $filename.arm32
                ;;
        esac
    done
}
```

NDK 경로를 설정해주고, 아키텍처마다 실행하는 명령어를 달리하여 등록하였다.<br>
그 후에 다음과 같이 명령어를 설정했다.

```
alias android-x86_64-cc="compile_android x86_64 gcc"
alias android-arm64-cc="compile_android arm64 $ANDROID_TOOLCHAIN/clang"
alias android-arm32-cc="compile_android arm32 $ANDROID_TOOLCHAIN/clang"
```

## ☝🏻 간편화(cpp)
cpp는 다음과 같이 설정할 수 있다.

```
ANDROID_NDK_ROOT=/home/hoho/Android/Sdk/ndk/25.1.8937393
ANDROID_TOOLCHAIN=$ANDROID_NDK_ROOT/toolchains/llvm/prebuilt/linux-x86_64/bin

function compile_android_cpp() {
    local arch=$1
    local compiler=$2

    for file in *.cpp
    do
        filename="${file%.*}"
        case $arch in
            x86_64)
                $compiler $file -o $filename.x86_64
                ;;
            arm64)
                $compiler -target aarch64-linux-android23 $file -o $filename.arm64
                ;;
            arm32)
                $compiler -target armv7a-linux-androideabi23 $file -o $filename.arm32
                ;;
        esac
    done
}
```

그 후에 명령어를 다음과 같이 설정했다.

```
alias android-x86_64-cpp="compile_android_cpp x86_64 g++"
alias android-arm64-cpp="compile_android_cpp arm64 $ANDROID_TOOLCHAIN/clang++"
alias android-arm32-cpp="compile_android_cpp arm32 $ANDROID_TOOLCHAIN/clang++"
```

컴파일하면 다음과 같은 결과를 얻을 수 있다.

<img src="/assets/images/android.png" width="180px">

# ☝🏻 결론
cpp 코드의 경우에는 dependency를 따로 추가해야 한다. dependency에 대해서는 다음에 다룰 예정이다.

<img src="/assets/images/cpp_dependency.png" width="180px">
