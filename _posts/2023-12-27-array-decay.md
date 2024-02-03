---
title: "Array decay"
excerpt: ""

categories:
  - Algorithm
tags:
  - [Algorithm, Array decay]

permalink: /Algorithm/Array-decay/

toc: true
toc_sticky: true

date: 2023-12-27
last_modified_at: 2023-12-27
---

> 배열이 수식에서 사용될 때 포인터로 변환되는 현상

Array decay는 한마디로 배열을 포인터와 비슷하게 사용할 수 있다는 것이다.

하나의 예를 들어보자.

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
	int a[3] = { 1, 2, 3 };
	auto b = a;
	cout << "a size: " << sizeof(a) << endl << "b size: " << sizeof(b) << endl;
	return 0;
}
```

위의 코드를 실행시킨 결과는 다음과 같다.

```cpp
sizeof(a) : 12
sizeof(b) : 8
Program ended with exit code: 0
```

즉, array a의 경우에는 크기가 12가 나왔고, 포인터의 경우에는 8이라는 크기를 갖고 있다. 이를 생각해보면, 배열 a의 경우에는 <span style="background-color:#fff5b1"> (배열의 크기 \* 배열의 자료형 크기) </span>의 크기를 갖는 것을 알 수 있다. 포인터의 경우에는 <span style="background-color:#fff5b1"> 아키텍쳐의 크기 </span>를 의미한다.

[[Pointer의 크기는 아키텍쳐의 크기에 따라 다르다 ?]](https://parkhoho.github.io/Algorithm/Pointer/)

즉, Array decay는 Array가 Pointer의 성격을 가지게 되는 과정에서 배열의 크기에 대한 성질을 잊어버리게 되면서 발생하는 것이다. 그렇기에 위와 같은 결과가 출력되는 것이다.
