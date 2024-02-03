---
title: "[Swift] 02.반복문"
excerpt: ""

categories:
  - Swift
tags:
  - [Swift, Loop]

permalink: /Swift/Loop/

toc: true
toc_sticky: true

date: 2024-02-03
last_modified_at: 2024-02-03
---

## 🧑🏻‍💻Day 02 - 반복문🧑🏻‍💻

```swift
import UIKit

// 콜렉션 : 데이터를 모아둔 것
// 배열, 셋, 딕셔너리
var myArray : [Int] = [0,1,2,3,4,5,6,7,8,9,10]

for item in myArray {
    print("item : \\(item)")
}

for item in myArray where item > 5{
    print("5보다 큰 수 : \\(item)")
}

for item in myArray where item % 2 == 0{
    print("짝수 : \\(item)")
}

for item in myArray where item % 2 != 0{
    print("홀수 : \\(item)")
}
```
