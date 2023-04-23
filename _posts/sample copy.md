---
title: "안드로이드OS 구조"
excerpt: ""

categories:
  - Android
tags:
  - [Android, Security]

permalink: /Android/AndroidOS/

toc: true
toc_sticky: true

date: 2023-04-21
last_modified_at: 2023-04-21
---

# ☝🏻 안드로이드 OS 구조
안드로이드를 딥하게 들어갈수록 기본기가 부족하다고 느껴지기도 하고, 어셈블리 언어 시간에 배운 안드로이드를 복습할 겸 처음부터 정리해봅니다.<br><br>

안드로이드 앱 구조는 위와 같이 리눅스-커널 계층, 어플리케이션 계층, 프레임워크 계층, 안드로이드 런타임, Native Library 계층, 하드웨어 추상화 계층 으로 구분된다. 



## ✌🏻 How ?
> - <mark>리눅스 커널 계층</mark> - 하드웨어 주요기능 제어

저번 시간과 마찬가지로 'JADX-GUI' 툴을 이용하여 APK 파일을 디컴파일하여 분석을 하였다. <br>
또한, 이번 악성코드부터는 에뮬레이터에서 앱 실행을 진행하였다.

### ⭐️ 분석 환경 및 분석 파일
> HOST : MAC OS Macbook Pro M1 <br> Emulator : 안드로이드 에뮬레이터 <br> target : 355cd2b71db971dfb0fac1fc391eb4079e2b090025ca2cdc83d4a22a0ed8f082 .apk

### ⭐️ Setting

**Dowload**

<div>
    <img src="/assets/images/Download2.png" alt=" " width="70%" min-width="700px" itemprop="image">
</div>

다음과 같이 선택된 부분의 파일을 설치하면 된다.

### ⭐️ Analyze
- 정적 분석 결과

이번 APK 파일의 경우에는 디컴파일 시 다음과 같은 구조를 가진다.
<div>
    <img src="/assets/images/FileFormat.png" alt=" " width="70%" min-width="100px" itemprop="image">
</div>

여기서 분석해야 할 파일은 com.XPhantom.id 파일임을 알 수 있다. <br>
따라서 아래 5개의 파일을 위주로 분석을 진행하였다.

⭐️⭐️ BootReceiver
먼저 BootReceiver다. <br>
BootReceiver의 경우 부팅이 완료되는 액션이 진행되면 MyService 클래스파일을 실행하고 있다. 
<br>

<div>
    <img src="/assets/images/BootReceiver.png" alt=" " width="70%" min-width="100px" itemprop="image">
</div>

> BootReceiver 파일은 핸드폰이 켜지면 MyService를 실행시키는 동작을 한다.

⭐️⭐️ MainActivity

MainActivity는 onCreate 메소드를 이용하여 앱이 시작되면 MyService 를 실행한다.

<div>
    <img src="/assets/images/MainActivity.png" alt=" " width="70%" min-width="100px" itemprop="image">
</div>

> MainActivity와 BootReceiver를 통해 MyService에 Model이 담겨 있는 것을 확인할 수 있다.

⭐️⭐️ MyService

MyService 에서는 windowManager 객체를 생성해주고 있다. <br>
이 객체를 생성해주고 이벤트를 생성해주고 있는 것을 확인할 수 있었다. 

<div>
    <img src="/assets/images/UI.png" alt=" " width="70%" min-width="100px" itemprop="image">
</div>

이벤트는 다음과 같은 방식으로 나타난다.
1. 특정 문자열과 같은지 확인한다.
2. 같다면 remove
3. 다르다면 MyService 클래스를 재시작한다.

<div>
    <img src="/assets/images/business logic.png" alt=" " width="70%" min-width="100px" itemprop="image">
</div>


## 🤟🏻 Result
- 앱 분석 마침.

이 앱은 WindowManager 의 객체로 화면을 가리고, 화면을 Lock 해버리는 기능을 한다. <br>
이 기능을 사용함으로써 사용자는 원하는 동작을 하지 못하게 되는 것이다. 
WindowManager를 이용한 램섬웨어의 경우 화면을 lock 하여도 디컴파일하여 분석하면 Lock을 풀기 쉽다.


