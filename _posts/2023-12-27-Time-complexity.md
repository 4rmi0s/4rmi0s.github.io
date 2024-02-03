---
title: "시간복잡도"
excerpt: ""

categories:
  - Algorithm
tags:
  - [Algorithm, time-complexity]

permalink: /Algorithm/time-complexity/

toc: true
toc_sticky: true

date: 2023-12-27
last_modified_at: 2023-12-27
---

# ☝🏻 시간복잡도란

> 입력크기에 대해 어떠한 알고리즘이 실행되는데 걸리는 시간이며 주요로직의 반복횟수를 중점으로 측정된다.

# ✌🏻 빅오 표기법

> 복잡에 가장 영향을 많이 끼치는 항의 상수인자를 빼고 나머지 항을 없애서 복잡도를 나타내는 표기법
> 빅오 complexity chart

## O(1)

- 입력과 출력
- 곱하기
- 간단한 비교 if문
- 배열의 인덱스 참조

## example

```cpp
#include <bits/stdc++.h>

using namespace std;



int n ,cnt;

int main() {

cin >> n;

int a = 0;

for (int i = 0;i < n ; i++ ) {

for (int j = 0; j < i; j++) {

a+= i+j;

cnt++;

}

}



cout << a << '\n';

cout << "cnt : " << cnt << '\n';

return 0;

}
```

위의 코드에서의 시간복잡도는 얼마일까 ? <br/>
구할 수 있는 여러가지 방법이 있겠지만, <br/>
나의 경우에는 시그마를 이용했다.

cnt 는 j보다 작은 경우를 모두 포함하기 때문에<br/>
다음과 같이 생각할 수 있다.

<br/>

$$\sum_{k=1}^{n-1} k$$

<br/>

즉, 위의 계산결과는 다음과 같다.

<br/>

$$ \frac{n^2-n}{2} $$

<br/>

즉, 위의 코드의 시간복잡도를 빅오로 표현하면

<br/>

$$O(n^2)$$

<br/>

임을 알 수 있다.

<br/>

---

## example2

```cpp
#include<bits/stdc++.h>
using namespace std;

int n,a[1004],cnt;

int go(int l,int r) {
    cnt ++ ;
    if( l == r) return a[l];
    int mid = (l + r ) / 2;
    int sum = go(l, mid) + go(mid +1, r);

    return sum;
}

int main() {
    cin >> n ;
    for(int i = 1;i<=n;i++) {
        a[i-1] = i;
    }
    int sum = go(0, n-1);
    cout << sum << '\n';
    cout << "cnt : " << cnt << '\n';
}
```

위의 코드에서 시간복잡도는 얼마일까 ? <br/>
위의 코드는 재귀함수를 이용하여 sum을 구하는 코드이다. <br/>
mid(중간값)을 구하여 그 중간값을 이용한 계산을 이용하는 것이다. <br/>

이때, cnt라는 변수를 선언하여 go가 몇번 호출되었는지 확인하였다.<br/>
여기서 go함수를 check하는 이유는 빅오 표기법을 이용한 시간복잡도를 구하기 위해서이다.<br/>

위를 실행시킨 결과는 다음과 같았다.<br/>

```
10
55
cnt : 19
Program ended with exit code: 0
```

```
5
15
cnt : 9
Program ended with exit code: 0
```

이를 통해 10일때 cnt는 19가 5일때 cnt가 9가 나오는 것을 확인하였고,<br/>
점화식으로 표현하면 다음과 같다.<br/>

<br/>

$$2n + 1 $$

<br/>

즉, 빅오표기법으로 표현하면

<br/>

$$ O(2n + 1), $$

<br/>

$$ 즉, O(n) 이다. $$

<br/>

이다.

## sample3

```cpp
#include<bits/stdc++.h>
using namespace std;

int N,cnt;
void solve(int N) {
    int a =0 ,i = N;
    while(i>0) {
        a += i;
        i /= 2;
        cnt++;
    }

    cout << a << '\n';

}

int main() {
    cin >> N;
    solve(N);
    cout << "cnt : " << cnt << '\n';
    return 0;
}
```

위의 코드는 입력값인 N을 0보다 클때까지 계속해서 2로 나눈다. <br/>
이때, N은 int형 이기때문에 소수점으로 들어가게 된다면 0을 return 해준다.<br/>
따라서 <span style="background-color:#fff5b1"> 위의 코드는 1이 나올때까지 2로 나누는 로직임을 알 수 있다.</span>

그렇다면 위의 `시간복잡도`는 어떻게 될까 ? <br/>
먼저 위의 시간복잡도는 다음과 같다.

<br/>

$$ \log_2 N + 1 $$

<br/>

이를 빅오표기법으로 계산하면 다음과 같다.

<br/>

$$O(\log_2 N)$$

<br/>

## example4

```cpp
#include<bits/stdc++.h>
using namespace std;

int N,cnt,call;
void solve(int N) {
    cnt++;
    call++;

    if(N==0) return;
    for(int i=0;i<3;i++) {
        solve(N-1);
    }
    return;
}

int main() {
    cin >> N;
    solve(N);
    cout << "call : " << call << '\n';
    return 0;
}
```

위 코드의 로직은 다음과 같다.

<br/>

1. solve(N) call
2. solve(N-1) 3번 호출
3. solve(N-2) 3번 호출
4. ...

<br/>
이와 같은 방식으로 코드가 동작한다.<br/><br/>

따라서 call이라는 변수를 선언하고, call변수의 값이 어떻게 변하는지 확인하였다.<br/>

```
1
call : 4
Program ended with exit code: 0
```

```
2
call : 13
Program ended with exit code: 0
```

```
3
call : 40
Program ended with exit code: 0
```

```
4
call : 121
Program ended with exit code: 0
```

```
5
call : 364
Program ended with exit code: 0
```

위와 같은 값을 통해 점화식을 구할 수 있었다.

<br/>

$$4*3^n$$

<br/>

이를 빅오표기법으로 표현하면 다음과 같다.

<br/>

$$O(3^n)$$

<br/>
