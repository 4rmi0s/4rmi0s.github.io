---
title: "숫자 카드 게임"
excerpt: ""

categories:
  - Algorithm
tags:
  - [Algorithm, python]

permalink: /Algorithm/a number card game/

toc: true
toc_sticky: true

date: 2023-04-26
last_modified_at: 2023-04-26
---

# ☝🏻 문제
> 입력조건
- 첫째 줄에 숫자 카드들이 놓인 행의 개수 N과 열의 개수 M이 공백을 기준으로 하여 각각 자연수로 주어진다.
- 둘째 줄부터 N개의 줄에 걸쳐 각 카드에 적힌 숫자가 주어진다. 각 숫자는 1이상 10,000 이하의 자연수이다.

>출력조건
- 첫째 줄에 게임의 룰에 맞게 선택한 카드에 적힌 숫자를 출력한다.

## ✌🏻 How ?

1. 입력받기
2. 입력받은 숫자 중 각행마다 가장 작은수를 저장한다. -> 정렬 후 (sort) [0]
3. 그중 가장 큰 수 찾기

```python
def main():

    result = 0
    N, M = map(int, input().split())  # 3 3

    for i in range(N):
        data = list(map(int, input().split()))
        data.sort()
        max = data[0]

        if result < max :
            result = max

    print(result)


if __name__ == "__main__":
    main()

```






