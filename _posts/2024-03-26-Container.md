---
title: "[iOS] iOS에서 container란 뭘까 ?"
excerpt: ""

categories:
  - Security
tags:
  - [Security, iOS]

permalink: /Security/container/

toc: true
toc_sticky: true

date: 2024-03-26
last_modified_at: 2024-03-26
---

## ☝🏻 문제상황
iOS kernel에서 aslr의 변화를 확인하고 싶어서 c로 된 코드를 짰다.</br>
그 후에 clang을 이용해 컴파일했더니 다음이 오류가 발생했다.

<div>
    <img src="/assets/images/aslr.png" alt=""  />
</div>



왜 이러한 상황이 발생한걸까 ?</br>
iOS에서는 탈옥되었더라도 보안을 위해서 바이너리 실행이 불가능한걸까 ?</br>
Codesign을 받아야하는걸까 ?</br>
</br>
다양한 생각이 들었고, 내가 최종적으로 내린 결론을 정리하고자 한다.

## ☝🏻 Container란 뭘까 ?
iOS에서는 다른 os에서도 사용되는 샌드박스라는 개념이 사용된다.</br>
이는 쉽게 말해서 하나의 프로세스에서 시스템 호출을 막아두는 개념이다. </br>
이러한 개념을 통해 권한을 탈취당하더라도 전체 os 및 kernel을 보호하는 방법을 택한 것이다. </br></br>

Container는 iOS(모바일) 에서 사용되는 개념이다.</br>
애플은 iOS에서 앱보호를 위해서 Container를 구축하였다.</br>
이 Container를 /var/mobile/Container 또는 /var/mobile/Application에 적용하면서 샌드박스화했다.</br></br>

## ☝🏻 결론
결론부터 말하면 내가 코드를 컴파일하고 실행한 공간은 컨테이너에 속한다.</br>
그렇기에 /usr/libexec/sandboxd 에서 컨테이너가 적용되지 않은 바이너리라고 판단하고 실행을 거부한 것이다.</br>

<div>
  <img src="/assets/images/error message.png" alt="" />
</div>


따라서 컨테이너에 속하지 않은 디렉토리로 이동해서 실행하면 다음과 같이 동작하는 것을 확인할 수 있다.</br>

<div>
  <img src="/assets/images/aslr_test.png" alt="" />
</div>
