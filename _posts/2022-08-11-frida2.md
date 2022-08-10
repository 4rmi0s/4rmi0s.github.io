---
title: "[Security] Frida 기능"
excerpt: ""

categories:
  - Security
tags:
  - [Security, Mobile]

permalink: /Security/Frida2/

toc: true
toc_sticky: true

date: 2022-08-11
last_modified_at: 2022-08-11
---

# 주요 기능
## injection
임의 코드를 메모리나 애플리케이션에 주입
<br>

## Interception
함수가 실행되기 전에 함수의 매개변수나 반환값을 수정
<br>

## stalking
원하는 명령어나 함수를 찾아 메모리 데이터 추출

----
# Frida Tools
>REPL : 컴파일 과정 없이 대화형 인터페이스를 사용한다. 인터프리터 형식과 유사

## 옵션
 - **`frida-ps`**: 프로세스 목록 출력
	+ 프로세스는 쉽게 말하면 메모리 상에 올라간 즉 실행시킨 프로그램을 뜻한다. 
	+ 정리하면 **<mark>frida-ps</mark>**는 실행중인 프로그램을 출력한다.   

- **``frida-trace``**:함수 호출 추적
	+ 매개변수로 들어온 함수를 추적한다.   

- **``frida-ls-device``** : 연결된 기기 출력    

- **``frida-kill``** : 동작중인 프로세스 종료

- ``-U`` : usb로 연결된 기기와 연결할 때 사용하는 옵션   

- ``-D`` : 가상 디바이스 -> 시뮬레이터라고 생각하면 된다.


