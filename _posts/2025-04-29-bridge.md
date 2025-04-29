---
title: "[hacktheon2025] bridge"
excerpt: ""

categories:
  - Security
tags:
  - [ctf, android]

permalink: /Security/bridge/

toc: true
toc_sticky: true

date: 2025-04-29
last_modified_at: 2025-04-29
---

# 👉🏻 문제 분석 

제공된 bridge.apk 파일을 분석해보면 MainActivity에서 WebViewActivity를 호출하는 것을 확인할 수 있다.


<img src="/assets/images/WebViewActivity.png">

WebViewActivity에서는 JsInterface를 이용하여 Java와 Js가 상호작용하도록 한다.


뿐만아니라 Js를 enable한 것으로 보아 엑티비티 이름처럼 웹뷰를 올릴 수 있다.


<img src="/assets/images/JsInterface.png">

JsInterface를 좀 더 분석해보면 내부에서는 encode()와 decode()가 선언되어 있다.


여기서 encode와 decode가 jni로 선언된 외부 라이브러리임을 알고 있다면 풀 수 있는 문제이다.


<img src="/assets/images/jni.png">

추가로 JsInterface는 WebViewActivity에서 Bridge로 접근 가능하게 설정해두었기 때문에 


Bridge.encode() 나 Bridge.decode()로 접근이 가능하다는 점을 확인해두자.

# 👉🏻 문제 풀이
payload 는 다음과 같다.

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>CTF Challenge Solution</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f5f5f5;
        }
        .container {
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        h1 {
            color: #333;
            border-bottom: 1px solid #eee;
            padding-bottom: 10px;
        }
        #result {
            margin-top: 20px;
            padding: 15px;
            background-color: #f9f9f9;
            border: 1px solid #ddd;
            border-radius: 4px;
            white-space: pre-wrap;
            word-break: break-all;
        }
        .status {
            color: #666;
            font-style: italic;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>CTF Challenge Decoder</h1>
        <p class="status" id="status">Initializing decoder...</p>

        <h2>Input:</h2>
        <p id="input">4658hg76&lt;h85eed73ihghidi8ehf&lt;78;</p>

        <h2>Decoded Result:</h2>
        <div id="result">Waiting for decoding...</div>
    </div>

    <script>
        function decodeString() {
            const inputString = '4658hg76<h85eed73ihghidi8ehf<78;';
            const resultElement = document.getElementById('result');
            const statusElement = document.getElementById('status');

            try {
                statusElement.textContent = "Decoding in progress...";

                if (typeof Bridge === 'undefined') {
                    statusElement.textContent = "Error: Bridge interface not found!";
                    resultElement.textContent = "Make sure the WebView has JavascriptInterface properly configured.";
                    return;
                }

                const decodedResult = Bridge.decode(inputString);

                resultElement.textContent = decodedResult;
                statusElement.textContent = "Decoding completed successfully!";

                console.log("Decoded successfully:", decodedResult);

            } catch (error) {
                statusElement.textContent = "Error occurred during decoding!";
                resultElement.textContent = "Error: " + error.message;
                console.error("Decoding failed:", error);
            }
        }

        window.addEventListener('load', function() {
            setTimeout(decodeString, 1000);
        });
    </script>
</body>
</html>
```

해당 페이로드를 안드로이드 로컬 네트워크에서 접근 가능하도록 하였다.
```bash 
adb reverse tcp:8080 tcp:8080
```

그리고 작성한 페이로드를 python를 이용하여 서버에 올렸다. 
```bash 
python3 -m http 8080
```

이제 payload.html에 접근을 하게 되면 flag를 얻을 수 있다.

<img src="/assets/images/bridge.png">


