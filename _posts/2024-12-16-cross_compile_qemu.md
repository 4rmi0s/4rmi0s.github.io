---
title: "[pwnable] QEMU를 이용한 Cross compile 환경세팅"
excerpt: "AArch64 환경에서"

categories:
  - pwn
tags:
  - [pwnable, qemu]

permalink: /pwn/qemu/

toc: true
toc_sticky: true

date: 2024-12-16
last_modified_at: 2024-12-16
---

## 크로스 컴파일 및 디버깅 명령어 모음

내가 보려고 만든 크로스 컴파일 및 디버깅 명령어 모음집

### 환경설정
#### arm 32bit
> sudo apt install gcc-arm-linux-gnueabi

#### arm 64bit
> sudo apt install gcc-aarch64-linux-gnu

#### gdb-multiarch, qemu 설치
> sudo apt install qemu-arm-static gdb-multiarch

### gdb set
#### 32bit
> qemu-arm-static -L /usr/arm-linux-gnueabi/ -g 8888 ./file

> gdb-multiarch

> set arc arm

> target remote :8888

#### 64bit
> qemu-aarch64-static -L /usr/aarch64-linux-gnu/ -g 8888 ./file

> gdb-multiarch

> set arc aarch64

> target remote :8888
