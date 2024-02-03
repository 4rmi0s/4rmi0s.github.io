---
title: "[Swift] 01.조건문"
excerpt: ""

categories:
  - Swift
tags:
  - [Swift, condition]

permalink: /Swift/condition/

toc: true
toc_sticky: true

date: 2024-02-03
last_modified_at: 2024-02-03
---

## 🦥 본문

## 🧑🏻‍💻Day 01 - 조건문🧑🏻‍💻

```swift
import UIKit

// 다크모드 여부
var isDarkMode : Bool = false

//if(isDarkMode == true){
//    print("다크모드 입니다.")
//} else {
//    print("다크모드가 아닙니다.")
//}

//isDarkMode == true
//if !isDarkMode {
//    print("다크모드가 아닙니다.")
//} else {
//    print("다크모드 입니다.")
//}

var title : String = isDarkMode ? "다크모드 입니다." : "다크모드가 아닙니다."
print("title: \\(title)")
```
