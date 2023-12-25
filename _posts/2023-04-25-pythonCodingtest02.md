---
title: "큰수의 법칙"
excerpt: ""

categories:
  - Algorithm
tags:
  - [Algorithm, python]

permalink: /Algorithm/law of large numbers/

toc: true
toc_sticky: true

date: 2023-04-21
last_modified_at: 2023-04-21
---

# ☝🏻 문제
> 입력조건
- 첫째 줄에 N(2<= N <= 1,000 ),M(1 <= M <= 10,000), K(1<= K <= 10,000) 의 자연수가 주어지며, 각 자연수는 공백으로 구분된다.
- 둘째 줄에 N개의 자연수가 주어진다. 각 자연수는 공백으로 구분한다. 단, 각각의 자연수는 1이상의 10,000 이하의 수로 주어진다.
- 입력으로 주어지는 K는 항상 M보다 작거나 같다.

>출력조건
- 첫째 줄에 동빈이의 큰 수의 법칙에 따라 더해진 답을 출력한다.




## ✌🏻 How ?

같은 수열이 반복되는 것을 보고 그러면 큰수가 몇번 반복되는지 알면 끝나는거 아닌가? 라는 생각으로 
큰수가 몇번나오는지 계산하려고 했다.

```python
def main():
    N, M, K = map(int, input().split())  # 5,8,3
    data = list(map(int,input().split())) # [2,4,5,4,6]

    data.sort() # [2,4,5,4,6]
    most_one = data[N-1]
    most_second = data[N-2]

    count = M//(K+1) * K + M % (K+1)

    result = 0
    result += count * most_one
    result += (M-count) * most_second

    print(result)

if __name__ == "__main__":
    main()
```






