---
title: "[Security] Frida 환경 구성"
excerpt: ""

categories:
  - Security
tags:
  - [Security, Mobile]

permalink: /Security/Frida1/

toc: true
toc_sticky: true

date: 2022-08-10
last_modified_at: 2022-08-10
---

## 🦥 본문

# Frida 란 무엇인가 ?
> Inject JavaScript to explore native apps on Windows, macOS, GNU/Linux, iOS, Android, and QNX. 

출처 : https://frida.re/

번역해보면 자바스크립트를 이용하여 Windows, macOS, GNU/Linux, iOS, Android, QNX 앱을 분석할 수 있게 도와주는 Tool이다. 즉,Frida를 통해 스크립트를 주입하여 원하는 동작을 할 수 있게 만든다. 


# 환경 구성
[들어가기에 앞서 제가 공부한 환경은 m1 macbook Air임을 밝힙니다.]
## 필요한 환경
- 맥북
- 충분한 용량 
- Xcode

> 기존 ios 모바일 해킹을 하기 위해서는 탈옥이 필수 조건이였다. (Cydia 를 사용해야 하기 때문) 하지만 m1 이후의 버전부터는 xcode의 시뮬레이터를 이용해 모바일 해킹 실습을 진행할 수 있다. 

### Xcode Command Line Tools
```bash
xcode-select --install
```

### homebrew
 [https://brew.sh](https://brew.sh/)

 ![[Pasted image 20220810001516.png]]


```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

이후에 설치 확인하여 설치된 주소가 출력되면 Complete!

```
which brew
```

### git 설치
```
brew install git
```

```
which git
```

git 또한 설치된 주소가 출력되면 Complete


### python3 & pip
frida는 python으로 만들어진 언어다. 그렇기에 설치하기 위해서는 python3 설치는 불가피하다. 

https://www.python.org/

위 경로를 통해 python을 Download한다. 

### 대망의 frida 설치
```
pip install frida
```

```
python -m pip install frida-tools
```


