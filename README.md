# 내안의 숲 서비스

#### 개발 환경 실행하기

##### 사전 설치 (필수)
- wsl2 설치: https://www.lainyzine.com/ko/article/how-to-install-wsl2-and-use-linux-on-windows-10/
- wsl2에 docker 설치: https://developern.tistory.com/entry/Windows-10-WSL2%EC%97%90-docker-%EC%84%A4%EC%B9%98%ED%95%98%EA%B8%B0

##### 개발 환경 셋팅
1. 아래 환경설정 파일들을 호루라기 slack에서 다운받아 `앱의 프로젝트 루트`(`package.json`이 위치한 디렉터리)에 저장한다.
- .env.admin
- .env.db
- .env.naver_login
- .env.sms

2. 아래 데이터베이스 백업파일을 호루라기 slack에서 다운받아 `{project_root}/db/inidb.d/`에 저장한다.
- myforest.sql

3. 개발환경구성 스크립트를 실행한다.

```bash
$ chmod +X start_dev_server.sh
$ ./start_dev_server.sh
```