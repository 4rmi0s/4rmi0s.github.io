var store = [{
        "title": "[Life]블로그 기록 start",
        "excerpt":"☝🏻 블로그 시작 전부터 기술 블로그 하나 만들어보자! 라는 생각을 갖고 있었다. 그전에는 노션, velog, 네이버 블로그 등 많은 블로그를 만들고 사용했지만 뭔가 하나씩 마음에 들지 않았다.그렇게 해서 찾게 된 것이 깃 블로그다. ✌🏻 why 깃블로그 ? 깃블로그 장점 1. 자유 내가 알아본 깃 블로그는 다른 블로그보다 자유가 확보된 느낌이였다.물론...","categories": ["Life"],
        "tags": ["Life","start"],
        "url": "/Life/start/",
        "teaser": null
      },{
        "title": "[UIKit]Pod 설치 방법",
        "excerpt":"설치 방법 코코아팟 설치 sudo gem install cocoapods 프로젝트 경로로 이동하기 프로젝트 경로로 이동하는 방법은 많다. 그중에 나는 Finder 를 이용하는 방법을 사용함. Xcode 키고 → 원하는 project에서 오른쪽 마우스 클릭 or 터치패드 두 손가락으로 클릭 → show in Finder → 다시 Finder에서 원하는 project를 선택한 후 오른쪽 마우스 클릭/터치패드...","categories": ["iOS"],
        "tags": ["iOS","pod"],
        "url": "/ios/pod",
        "teaser": null
      },{
        "title": "[AOS] Frida 환경 구성",
        "excerpt":"[DreamHack 참고] Frida 란 무엇인가 ? Inject JavaScript to explore native apps on Windows, macOS, GNU/Linux, iOS, Android, and QNX. 출처 : https://frida.re/ 번역해보면 자바스크립트를 이용하여 Windows, macOS, GNU/Linux, iOS, Android, QNX 앱을 분석할 수 있게 도와주는 Tool이다. 즉,Frida를 통해 스크립트를 주입하여 원하는 동작을 할 수 있게 만든다. 환경 구성...","categories": ["Security"],
        "tags": ["Security","Mobile"],
        "url": "/Security/Frida1/",
        "teaser": null
      },{
        "title": "[Life] 자바스크립스의 시작",
        "excerpt":"자바스크립트의 시작… iOS, Android 사랑 나는 어렸을 때부터 태블릿 및 핸드폰 기기에 무척 관심이 많았다. 이 관심은 내가 모은 돈 모두를 각종 핸드폰 기기를 사는데 쏟아붓게 했고 이러한 유별난 취미가 각종 모바일 운영체제를 사용할 수 있는 기회를 얻게 만들어줬다. 물론 내가 많은 기기를 사용해본것은 아니다. 어렸을 때의 용돈으로 기기를 산다는...","categories": ["Life"],
        "tags": ["javascript","security"],
        "url": "/Life/javascript/",
        "teaser": null
      },{
        "title": "[UIKit] #colorLiteral()",
        "excerpt":"#colorLiteral()   기존의 색을 설정하는 방법은 UIColor와 colorLiteral이 있었습니다. 하지만 최근 업데이트로 인해 #colorLiteral()에 대해 간략하게 설명해보려 합니다.   사용 방법   사용 방법은 굉장히 쉽습니다.   mainLabel.background = #colorLiteral()   이와 같이 원하는 값을 #colorLiteral를 이용해 넣어주기만 하면 됩니다.          ","categories": ["iOS"],
        "tags": ["iOS","UIKit"],
        "url": "/iOS/colorLiteral/",
        "teaser": null
      },{
        "title": "[AOS] Frida 간단 작성법",
        "excerpt":"기본 구조 - JS Java.perform(function() { var [변수1] = Java.use(\"[Hooking할 함수의 클래스]\"); [변수1].[Hooking할 함수].implementation = function (args){ [원하는 코드 작성] } }); 기본 구조 - Python import frida, sys def on_message(message, data): if message['type'] == 'send': print(\"[*] {0}\".format(message['payload'])) else: print(message) PACKAGE_NAME = \"[패키지명]\" jscode = \"\"\" Java.perform(function() { var [변수1]...","categories": ["Security"],
        "tags": ["Security","Frida"],
        "url": "/Security/FridaScript/",
        "teaser": null
      },{
        "title": "[UIKit] Sound 사용법",
        "excerpt":"시스템 사운드 킬 때   import AVFoundation  AudioServicesPlayAlertSound(SystemSoundID(1322))  ","categories": ["iOS"],
        "tags": ["iOS","SystemSound"],
        "url": "/iOS/Sound/",
        "teaser": null
      },{
        "title": "[AOS] Android Frida",
        "excerpt":"FridaLab is an app to study the framework called Frida. Before I knew this app, I kept coming to Crackme’s Android, but it was difficult because I couldn’t understand exactly how to use the API that Frida pursues. My primary purpose of writing this article is to summarize why Frida...","categories": ["Security"],
        "tags": ["Security","Frida"],
        "url": "/Security/FridaLab/",
        "teaser": null
      },{
        "title": "[Android Malware] Android Malware Analyze - part.1",
        "excerpt":"☝🏻 What ? 어떤 것을 분석하느냐 안드로이드 악성코드를 이렇게 본격적으로 분석하는 것은 처음이다. 따라서 나는 단계별로 구분되어 정리되어 있는 하나의 블로그를 이용할 예정이다. Anroid Malware Sample ✌🏻 How ? 어떤 식으로 분석했느냐 ? 안드로이드 악성코드를 분석하는 방식은 다양하다. 그중에 나는 내가 자주 사용하는 방법인 jadx-gui 툴을 이용하여 디컴파일을 한 후에...","categories": ["Malware"],
        "tags": ["Malware","Android"],
        "url": "/Malware/Android%20Malware/",
        "teaser": null
      },{
        "title": "[REV] 안드로이드 리버싱시 환경 구성 방법",
        "excerpt":"설치해야 할 툴 jadx-gui apktool nox adb 명령어 환경 변수에 설정 1. jadx-gui 설치 아래 블로그의 방식을 따라가주세요. 또한, cmd창에서 jadx-gui 명령어로 쉽게 접근하기 위해 환경변수 등록을 하면 편합니다. → 필수 X https://github.com/skylot/jadx https://dev-huhu.tistory.com/27 2. apktool 무조건 환경변수 등록하기. → 앱의 위치와 apktool의 위치가 다른 경우 번거로움. https://novvon.tistory.com/213 3. nox...","categories": ["Malware"],
        "tags": ["Reversing","Malware"],
        "url": "/Malware/Reversing/",
        "teaser": null
      },{
        "title": "큰수의 법칙",
        "excerpt":"☝🏻 문제 입력조건 첫째 줄에 N(2&lt;= N &lt;= 1,000 ),M(1 &lt;= M &lt;= 10,000), K(1&lt;= K &lt;= 10,000) 의 자연수가 주어지며, 각 자연수는 공백으로 구분된다. 둘째 줄에 N개의 자연수가 주어진다. 각 자연수는 공백으로 구분한다. 단, 각각의 자연수는 1이상의 10,000 이하의 수로 주어진다. 입력으로 주어지는 K는 항상 M보다 작거나 같다. 출력조건...","categories": ["Algorithm"],
        "tags": ["Algorithm","python"],
        "url": "/Algorithm/law%20of%20large%20numbers/",
        "teaser": null
      },{
        "title": "숫자 카드 게임",
        "excerpt":"☝🏻 문제 입력조건 첫째 줄에 숫자 카드들이 놓인 행의 개수 N과 열의 개수 M이 공백을 기준으로 하여 각각 자연수로 주어진다. 둘째 줄부터 N개의 줄에 걸쳐 각 카드에 적힌 숫자가 주어진다. 각 숫자는 1이상 10,000 이하의 자연수이다. 출력조건 첫째 줄에 게임의 룰에 맞게 선택한 카드에 적힌 숫자를 출력한다. ✌🏻 How ?...","categories": ["Algorithm"],
        "tags": ["Algorithm","python"],
        "url": "/Algorithm/a%20number%20card%20game/",
        "teaser": null
      },{
        "title": "S-개발자 1기 2차 후기",
        "excerpt":"S-개발자가 이번년도(2023)에 1기가 끝이 났다. 많은 우여곡절도 있었고, 중간에 포기하려고도 생각했지만 꾸역꾸역 버티다보니 수료를 하게 되었다. 이번 글을 통해 S-개발자에 지원하는 누군가에게 도움이 또는 조언이 되었으면 한다. ☝🏻 지원동기 3학년 1학기가 너무나도 힘들어서 휴학을 생각하고 있었다. 휴학하고 뭘 하는게 좋을까를 가장 많이 생각을 했고, BOB를 지원해보려고 했던 것이 목표였다. 하지만,...","categories": ["Life"],
        "tags": ["Life","S-dev"],
        "url": "/Life/Sdev/",
        "teaser": null
      },{
        "title": "Pointer의 크기는 아키텍쳐의 크기에 따라 다르다.",
        "excerpt":"포인터 Pointer란 먼저 주소를 담는 자료형이다. 즉, 주소 0x00000000를 담기 위해서 필요한 것이다. 이 주소에 접근해서 다양한 계산을 할 수 있다. 여기서 중요한 것은 포인터의 크기이다. 하나의 포인터는 자료형의 크기를 따라가는 것이 아니라 아키텍쳐가 다룰 수 있는 최대 크기를 따라간다는 점을 파악해야 한다. 예를 하나 들어보겠다. #include &lt;bits/stdc++.h&gt; using namespace...","categories": ["Algorithm"],
        "tags": ["Algorithm","Pointer"],
        "url": "/Algorithm/Pointer/",
        "teaser": null
      },{
        "title": "split() 메소드 구현",
        "excerpt":"☝🏻 Split() 메소드 c++에서는 split()메소드를 지원하지 않는다. 즉, 구현을 해야한다. // #include &lt;algorithm&gt; #include &lt;algorithm&gt; #include &lt;string&gt; #include &lt;vector&gt; #include &lt;iostream&gt; using namespace std; vector&lt;string&gt; split(string input,string delimiter){ long long pos; string token = \"\"; vector&lt;string&gt; ret; while((pos = input.find(delimiter)) != string::npos ){ token = input.substr(0,pos); ret.push_back(token); input.erase(0,pos+delimiter.length()); } ret.push_back(input);...","categories": ["C++"],
        "tags": ["tag1","tag2"],
        "url": "/C++/split/",
        "teaser": null
      },{
        "title": "시간복잡도",
        "excerpt":"☝🏻 시간복잡도란 입력크기에 대해 어떠한 알고리즘이 실행되는데 걸리는 시간이며 주요로직의 반복횟수를 중점으로 측정된다. ✌🏻 빅오 표기법 복잡에 가장 영향을 많이 끼치는 항의 상수인자를 빼고 나머지 항을 없애서 복잡도를 나타내는 표기법 빅오 complexity chart O(1) 입력과 출력 곱하기 간단한 비교 if문 배열의 인덱스 참조 example #include &lt;bits/stdc++.h&gt; using namespace std; int...","categories": ["Algorithm"],
        "tags": ["Algorithm","time-complexity"],
        "url": "/Algorithm/time-complexity/",
        "teaser": null
      },{
        "title": "Array decay",
        "excerpt":"배열이 수식에서 사용될 때 포인터로 변환되는 현상 Array decay는 한마디로 배열을 포인터와 비슷하게 사용할 수 있다는 것이다. 하나의 예를 들어보자. #include &lt;bits/stdc++.h&gt; using namespace std; int main() { int a[3] = { 1, 2, 3 }; auto b = a; cout &lt;&lt; \"a size: \" &lt;&lt; sizeof(a) &lt;&lt; endl &lt;&lt;...","categories": ["Algorithm"],
        "tags": ["Algorithm","Array decay"],
        "url": "/Algorithm/Array-decay/",
        "teaser": null
      },{
        "title": "구간합 구하기",
        "excerpt":"☝🏻 prefixSum 구할때 // #include&lt;bits/stdc++.h&gt; #include &lt;algorithm&gt; #include &lt;string&gt; #include &lt;vector&gt; #include &lt;iostream&gt; using namespace std; typedef long long ll; int a[100004],b,c,psum[100004],n,m; int main() { cin &gt;&gt; n &gt;&gt; m; for(int i=1;i&lt;= n;i++) { cin &gt;&gt; a[i]; } for (int i=0; i&lt;m; i++) { cin &gt;&gt; b &gt;&gt; c; int...","categories": ["C++"],
        "tags": ["C++","prefixSum"],
        "url": "/C++/prefixSum/",
        "teaser": null
      },{
        "title": "[iOS] iOS에서 container란 뭘까 ?",
        "excerpt":"☝🏻 문제상황 iOS kernel에서 aslr의 변화를 확인하고 싶어서 c로 된 코드를 짰다. 그 후에 clang을 이용해 컴파일했더니 다음이 오류가 발생했다. 왜 이러한 상황이 발생한걸까 ? iOS에서는 탈옥되었더라도 보안을 위해서 바이너리 실행이 불가능한걸까 ? Codesign을 받아야하는걸까 ? 다양한 생각이 들었고, 내가 최종적으로 내린 결론을 정리하고자 한다. ☝🏻 Container란 뭘까 ? iOS에서는...","categories": ["Security"],
        "tags": ["Security","iOS"],
        "url": "/Security/container/",
        "teaser": null
      },{
        "title": "[iOS] d: warning: -no_pie ignored for arm64",
        "excerpt":"☝🏻 문제상황 aslr를 해제하기 위한 여러가지 방법을 찾는 중에 32bit ios 에서처럼 fno-pie를 적용하면 어떻게 에러가 나올까 하는 생각으로 시작되었다. ld: warning: -no_pie ignored for arm64 위와 같은 에러가 출력되었다. 위의 에러는 당연하게도 64bit 에서는 aslr이 들어가기 때문에 pie를 해제할 수 없다는 컴파일러(clang) 자체의 오류였다. 결론 그렇다면 어떻게 ios 64bit...","categories": ["Security"],
        "tags": ["Security","iOS"],
        "url": "/Security/no_pie/",
        "teaser": null
      }]
