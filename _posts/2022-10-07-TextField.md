---
title: "[iOS] TextField Delegate"
excerpt: ""

categories:
  - iOS
tags:
  - [TextField, Delegate]

permalink: /iOS/TextFieldDelegate/

toc: true
toc_sticky: true

date: 2022-10-07
last_modified_at: 2022-10-07
---

## TextField Delegate 준비조건
```swift
textField.delegate = self
```

## TextField 사용하기
#### ❗️ 텍스트필드의 입력이 시작될 때 호출 ❗️


```swift
// 텍스트 필드의 입력을 시작할 때 호출(시작할지 말지 여부 허락하는 것)

func textFieldShouldBeginEditing(textField: UITextField) -> Bool {

        return true

}
```


#### ❗️ 시작 시점을 알 수 있다.. ❗️


```swift
// 시작 시점 

    func textFieldDidBeginEditing(textField:UITextField) {
    
        print("유저가 텍스트필들의 입력을 시작했다.")

}
```


#### ❗️ 한글자 한글자 입력되는 경우 ❗️


```swift
 // 텍스트 필드의 글자 내용이 입력되거나 지워질 때 호출이 되고 허락

    func textField(textField: UITextField, shouldChangeCharactersIn range: NSRange, replacementString string: String) -> Bool {

        print(string)

        return true

}
```


#### ❗️ 엔터키가 눌러지면 다음 동작 허락 ❗️


```swift
// 텍스트필드의 엔터키가 눌러지면 다음 동작을 허락할 것인지 말것인지

    func textFieldShouldReturn(textField: UITextField) -> Bool {

        return true

    }
```


#### ❗️ 프로토콜이용해서 10글자 & 숫자 입력 안되게 하기 ❗️


```swift
func textField(textField:UITextField, shouldChangeCharactersIn range: NSRange, replacementString string:String) -> Bool {

//        print(#function)

//        print(string)

        if Int(string) !=  nil {

            return false

        } else {

            guard let text = textField.text else { return true }

            let newLength = text.count + string.count - range.length

            return newLength <= 10

        }

    }
```


#### ❗️ 앱 시작하자마자 텍스트필드 키보드 on - viewDidLoad에 추가가능 ❗️


```swift
textField.becomeFirstResponder()
```


#### ❗️ 텍스트 필드 키보드 off하기 ❗️


```swift
textField.resignFirstResponder()
```


#### ❗️ 텍스트 필드 바깥 터치시 키보드 off ❗️


```swift
// 화면의 탭을 감지하는 메소드

override func touchesBegan(touches: Set<UITouch>, with event:UIEvent?) {
        self.view.endEditing(true)
}
```


#### ❗️ 텍스트 필드에 숫자 입력만 받기 ❗️


```swift
func textField(textField: UITextField, shouldChangeCharactersIn range: NSRange, replacementString string: String) -> Bool {

        if textField == getHeight {

            if Int(string) != nil || string == "" {

                return true

            }

        }

        return false

    }
```


#### ❗️ 텍스트 필드 키보드 내리기 ❗️


```swift
public func textFieldShouldReturn(textField: UITextField) -> Bool {

        if getHeight.text != "" , getWeight.text != "" {
// 응답자를 해제시키겠다.
            getWeight.resignFirstResponder()

            return true

        } else if getHeight.text != "" {

            getWeight.becomeFirstResponder()

            return true

        }

        return false

    }
```


