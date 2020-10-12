# RingleForm  

turnchat tech interview  
inspired on google form  
<img src="public/favicon-96x96.png" alg="logo" />

## 시작시간/끝시간

시작 시간 : 2020/10/12 오후 9:25  
휴식 시간 : 2020/10/13 오전 1:10 ~ 1: 30  
종료 시간 : 2020/10/13 오전 2:45  
total : 5시간

## how to start  

npm run start (webpack && webpack server)

## features  
1. no CRA  
   - webpack v4.42.0를 사용해보았습니다.
2. Redux 대신 Context API를 사용해보았습니다.
3. useCallback을 통한 일부 함수 최적화
4. styled-components
   - themeProvider를 활용한 디자인 시스템
5. mobile-first!
6. atomic design (atom => molecule => components => pages)의 흐름
   - https://darrengwon.tistory.com/759


## lessons learned  

1. API first
  - Schma부터 시작해서 하향식 접근을 했어야 했는데, 마구잡이로 하다보니 Schema 부분이 상당히 지저분해졌다  
2. radio 컴포넌트를 분리해서 중복 선택이 가능하게 되었습니다. 수정하고 싶으니 제한 시간이 다 되었습니다.  