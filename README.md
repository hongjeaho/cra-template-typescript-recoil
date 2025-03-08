# cra-template-typescript-recoil

typescript 기반 react web template이다.
node 20.18.0 version 이상을 사용한다.

## 추가된 라이브러리

- craco
- recoil
- emotion
- date-fns
- eslint
- prettier

## 설치

```
yarn create react-app <YOUR_PROJECT> --template @kansin88/cra-template-typescript-recoil
```

# 이력

## 0.1.2 라이브러리 추가

- react-query
- axios
- reset-css

## 0.1.3 react-query >> TanStack Query

TanStack Query는 비동기 작업 처리를 돕는 라이브러리입니다. v3까지는 React Query라는 이름으로 React만 지원했는데, v4 부터 React 이외의 프레임워크(Vue, Svelte, Solid)에서 사용할 수 있도록 업데이트 되며 TanStack Query로 이름이 변경되었습니다. 이번 포스트에서는 React에서 TanStack Query를 사용하는 방법을 살펴보도록 하겠습니다. TanStack의 react-query를 가져와 사용하는데, 이번 포스트에서는 React Query라는 명칭을 사용하도록 하겠습니다

## 0.1.4 react-query >> TanStack Query

"one of your dependencies babel-preset-react-app~" 해결

## 0.1.5 Add react-icons

React에서 아이콘을 쉽게 사용하기 위해서 라이브러리를 추가 하였다.

## 0.1.6 version update && eslint rules

- eslint rules
  - React import 생량 : "react/react-in-jsx-scope": "off",
- 일부 라이브러리 버전 update
  - react-router-dom: 6.22.3
  - react-icons : 5.1.0
  - tanstack/react-query : 5.29.2
  - emotion: 11.11.X
  - date-fns: 3.6.0

## 0.1.9

- orval 설치를 위해서 node 20.18.0 필요.
- orval 라이브러리 추가
  - yarn add orval -D
- orval 설정
- axios 설정 및 http.ts 코드 추가

### orval 실행

```
yarn orval-fix
```

### 0.2.4

- Add eslint-plugin-simple-import-sort
- eslint upgrade 8.57.1
- mui 라이브러리 추가
- 라이브러리 위치 수정
