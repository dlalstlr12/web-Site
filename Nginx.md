# 웹 서버를 위한 Nginx
HTTP Server를 사용하기 위해 가장 대표적인것이 Nginx,Apache가 있다.

Apache와 Nginx를 비교하여 각각의 특징은 다음과 같다.

|Apache|Nginx|
|--|--|
|Apache 구조는 요청 당 스레드 또는 프로세스가 처리하는 구조이다|비동기 이벤트 기반으로 요청한다.|
|CPU/메모리 자원 낭비가 심하다.|CPU/메모리 자원 사용률이 낮다.|
|Nginx보다 모듈이 다양하다.|Apache에 비해 다양한 모듈이 없다.|
|PHP 모듈 등 직접 적재 가능하다.|많은 접속자들 대응 가능하다.|
|안정성, 확장성, 호환성 우세하다.|성능이 우세하다.|
|동적 컨텐츠 단독 처리 가능하다.|동적 컨텐츠 단독 처리 불가능하다.|




Apache에 비해 Nginx가 모듈이 적지만 속도가 빠르기 때문에 Nginx를 사용할것이다.

그러기 위해선 가장 먼저 새로운 운영체제에 가상환경을 설치하여 거기에 Nginx를 설치해야한다.

# 설치 순서
1. 운영체제를 사용하기 위해 VMWare를 설치하고 그 위에 Ubuntu를 설치한다.
2. ubuntu를 설치 한 후 Docker를 설치한다.
3. Docker 설치 후 docker의 이미지, 컨테이너, 네트워크 등을 쉽게 관리할 수 있게 도와주는 GUI Web 서비스인 portainer를 설치하여준다.
4. Nginx를 설치한다.

# 설치 과정
VMWare 및 Ubuntu는 아래의 링크를 따라하여 똑같이 설치하였다.

(https://catnip-archive.tistory.com/entry/VMware-VMware%EC%97%90-%EA%B0%80%EC%83%81%EB%A8%B8%EC%8B%A0-%EC%B6%94%EA%B0%80%ED%95%98%EA%B8%B0feat-Ubuntu-1804-LTS)

VMWare 설치 후 Ubuntu 실행 시 사진과 같은 오류가 발생하였다.


![우분투 오류](https://user-images.githubusercontent.com/101045853/159724999-88ef0ab2-4c81-4e1d-b305-dbd9a1a84cba.png)


인터넷 검색하여 아래의 링크를 통해 오류를 해결하였다.

(https://jhnyang.tistory.com/236)

Ubuntu 설치 후 Docker 설치는 아래의 링크를 보고 따라하여 똑같이 설치하였다.

(https://blog.dalso.org/linux/ubuntu-20-04-lts/13118)

Docker 설치 과정 중 (Waiting for cache lock: Could not get lock /var/lib/dpkg/lock-frontend. It is held by process 5572 ) 이라는 오류가 계속 출력되면서 진행되지 않는 오류가 발생하였다. 그래서 검색 후 아래의 링크에서 해결하여 진행하였다.

(https://mingyucloud.tistory.com/entry/%EC%98%A4%EB%A5%98-%ED%95%B4%EA%B2%B0-Waiting-for-cache-lock-Could-not-get-lock-varlibdpkglock-frontend)

Portainer까지 설치 후 아래의 링크를 통해 Nginx를 설치하였다.

(https://ko.linux-console.net/?p=721)

Nginx 설치 후 서버 실행하여 웹 페이지에 열어보았다.

![nginx 설치](https://user-images.githubusercontent.com/101045853/159726835-6d18e7d8-32b5-4158-88c8-bef5dc4dc55b.JPG)

---
### 22-03-21
