---
title: "[REV] 안드로이드 리버싱시 환경 구성 방법"
excerpt: ""

categories:
  - Malware
tags:
  - [Reversing, Malware]

permalink: /Malware/Reversing/

toc: true
toc_sticky: true

date: 2023-01-17
last_modified_at: 2023-01-17
---

## 설치해야 할 툴

1. jadx-gui
2. apktool
3. nox
4. adb 명령어 환경 변수에 설정

### 1. jadx-gui 설치

아래 블로그의 방식을 따라가주세요.<br>

또한, cmd창에서 jadx-gui 명령어로 쉽게 접근하기 위해 환경변수 등록을 하면 편합니다. → 필수 X

[https://github.com/skylot/jadx](https://github.com/skylot/jadx)

[https://dev-huhu.tistory.com/27](https://dev-huhu.tistory.com/27)

### 2. apktool

무조건 환경변수 등록하기. → 앱의 위치와 apktool의 위치가 다른 경우 번거로움.

[https://novvon.tistory.com/213](https://novvon.tistory.com/213)

### 3. nox

nox는 안드로이드 앱을 구동하기 위한 하나의 가상환경입니다. <br>
우리가 윈도우 악성코드를 실행시킬 때 가상환경에서 하는 것처럼 apk파일은 nox에서 구동합니다.

[https://kr.bignox.com/](https://kr.bignox.com/)

### 4. adb

adb 명령어는 안드로이드 분석에서 중요합니다. <br>

logcat을 분석할 수도 있고, 원하는 작업을 명령어를 통해 작업할 수도잇습니다.<br>

다음은 adb 명령어의 예시입니다. 가장 편하게 사용하기 위해서는 adb 도 환경변수 등록 필수.<br>

adb 는 안드로이드 스튜디오 설치햇다면 따로 설치할 필요없음. 안드로이드스튜디오 파일 안에 존재<br>

[https://serendipper16.tistory.com/6](https://serendipper16.tistory.com/6)

[https://nuritech.tistory.com/20](https://nuritech.tistory.com/20)
