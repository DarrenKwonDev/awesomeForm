# RingleForm  

turnchat tech interview  
inspired on google form  
<img src="public/favicon-96x96.png" alg="logo" />

## how to start 

npm run start (webpack && webpack server)

## features
1. no CRA  
   - webpack v4.42.0를 사용하였습니다.
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
