---
title: "[AOS] Frida 간단 작성법"
excerpt: ""

categories:
  - Security
tags:
  - [Security, Frida]

permalink: /Security/FridaScript/

toc: true
toc_sticky: true

date: 2022-10-05
last_modified_at: 2022-10-05
---

# 기본 구조 - JS

```javascript

Java.perform(function() {
    	var [변수1] = Java.use("[Hooking할 함수의 클래스]");
        [변수1].[Hooking할 함수].implementation = function (args){
        	[원하는 코드 작성]
        }

    });

```

# 기본 구조 - Python

```python
import frida, sys

def on_message(message, data):
	if message['type'] == 'send':
		print("[*] {0}".format(message['payload']))
	else:
		print(message)

PACKAGE_NAME = "[패키지명]"

jscode = """
    Java.perform(function() {
    	var [변수1] = Java.use("[Hooking할 함수의 클래스]");
        [변수1].[Hooking할 함수].implementation = function (args){
        	[원하는 코드 작성]
        }

    });
"""

try:
    device = frida.get_usb_device(timeout=10)
    pid = device.spawn([PACKAGE_NAME])
    print("App is starting ... pid : {}".format(pid))
    process = device.attach(pid)
    device.resume(pid)
    script = process.create_script(jscode)
    script.on('message',on_message)
    print('[*] Running Frida')
    script.load()
    sys.stdin.read()
except Exception as e:
    print(e)
```

# 모듈 사용법

# so 파일 후킹해서 메모리 변조

```javascript
Interceptor.attach(Module.findExportByName ("후킹해야할 so파일명","함수이름")
```
