# Web Front 실무 특강 실습 내용

### 09/27(월) - 3주차

-   React 설치 방법
-   React JSX란 무엇인가 ?
-   React Props 설명
-   useState 간단 사용법

### 10/05(월) - 4주차

-   이벤트 버블링
-   이벤트 캡처링 조사
-   vanilla js TodoLIst => react 로 변경

### 10/12(월) - 5주차

useEffect 실습

1. 회원가입 폼을 만듭니다.

2. 회원가입에 필요한 정보는 이름, 이메일, 전화번호, 주소 4가지입니다.

-   이름 input text
-   이메일 input text
-   전화번호 input select (010,041,02 등) + input text를 이용
-   주소 input select (광역시, 도) + input text(이외 주소)로 진행

3. 필요 정보의 제약조건은 다음과 같습니다.

-   이름은 3-5글자로 한다.
-   이메일은 정규식을 통해 검사합니다. ( {userEmail}@{도메인}.{com, net, io 중 하나} )
-   전화번호는 7-8자리로 하며 select로 지역번호를 선택합니다. 지역번호 선택 시, 주소의 광역시, 또는 국번에 맞춰 선택되어집니다. 만약 핸드폰 번호라면 선택하지 않습니다.

4. 유저가 잘못된 정보를 입력한다면 form에서 어디가 잘 못됐는지 화면에 메세지를 출력합니다.

5. 저장하기 버튼을 누르면 alert로 입력한 정보들이 모두 보여집니다.

### 10/18(월) - 6주차

useReducer 수업

-   counter reducer 사용하여 실습

contextAPI 사용법

-   provider, consumer 사용

## 10/25(월) - 7주차

### Mobx 실습

-   개념, 사용법

#### todoList 실습

-   contextAPI 사용
-   useReducer 사용
-   useReducer mobX로 교체

-   useRef : 특정 dom 선택하기
-   useEffect : side effect
-   customHook : useContext(context) 를 커스텀 훅으로 사용

## 11/01(월) - 8주차

## 나만의 메모장 만들어 보기 실습 1

-   메모장 제목, 내용 추가하기
-   메모장 제목, 내용 수정하기
-   메모장 삭제하기
-   로컬 스토리지(localstorage) 사용해서 데이터 유지

## 11/08(월) - 9주차

## 나만의 메모장 만들어 보기 실습 2

-   API Fetch 사용해서 꾸며보기
-   디자인, 애니메이션 추가
