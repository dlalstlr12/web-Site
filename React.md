# React 공부 내용 
### 리액트 라우터란?
 -리액트에서 경로에 따라 페이지를 나누도록 해주는 라이브러리이다. 가장 큰 특징으로는 리액트스러운 방법으로 컴포넌트를 사용해서 페이지를 나누는것이 있다.
 
리액트 라우더를 사용하기 위해선 반드시 라우터라는 컴포넌트가 필요하다. 그 중에서 기본적인 방식은 BrowserRouter이다.
다른 여러가지 라우터들은 아래의 링크에 나와있다.

https://reactrouter.com/docs/en/v6/api#browserrouter

이 BrowserRouter 컴포넌트를 최상위 컴포넌트에서 감싸주면 모든 곳에서 사용할 수 있다.

```
import { BrowserRouter } from 'react-router-dom';

function App() {
  return <BrowserRouter> ... </BrowserRouter>;
}
```

### 페이지 나누는 방법
Routes 컴포넌트 안에다가 Route 컴포넌트를 배치해서 각 페이지를 나눠줄 수 있다.
이때 Routes 안에서는 위에서부터 차례대로 Route를 검사하는데 현재 경로와 path prop이 일치하는 Route 를 찾는다.

```
<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="posts" element={<PostListPage />} />
  <Route path="posts/1" element={<PostPage />} />
</Routes>
```

### 링크
리액트 라우터에서는 <a> 태그 대신에 Link 컴포넌트를 사용한다.

to 라는 prop으로 이동할 경로를 정해주면 된다.
 
```
 <Link to="/posts">블로그</Link>
```
 
 ### 하위 페이지 나누기
 Route 컴포넌트 안에다가 Route 컴포넌트를 배치하면 된다.

이때 하위 페이지에서  최상위 경로에 해당하는 경로는 path prop이 아니라

index 라는 prop을 사용하면 된다.
 
```
<Routes>
  <Route path="/"><HomePage /></Route>
  <Route path="posts" element={<PostLayout />} >
    <Route index element={<PostListPage />}  />
    <Route path="1" element={<PostPage />}  />
  </Route>
</Routes>
```

### 동적인 경로 다루기
콜론 (:) 으로 시작하는 문자열을 사용하면 경로에 파라미터를 지정할 수 있다.

예를들어서 아래처럼 /posts/:postId 라는 경로는 /posts/123 이라던지

/posts/abc 라는 주소로 접속하면 123 이나 abc 라는 값을 postId 라는 파라미터로 받는다.
```
<Routes>
  <Route path="/"><HomePage /></Route>
  <Route path="posts" element={<PostLayout />} >
    <Route index element={<PostListPage />}  />
    <Route path=":postId" element={<PostPage />}  />
  </Route>
</Routes>
```
경로 파라미터를 사용하려면 useParams 라는 훅을 사용하면 된다.
```
function PostPage() {
  const { postId } = useParams();
  // ...
}
```

### Navigate 컴포넌트
리턴값으로 Navigate 컴포넌트를 리턴하면 to prop으로 지정한 경로로 이동한다.
```
function PostPage() {
  // ...

  const post = getPost(postId);

  // post가 없는 경우 /posts 페이지로 이동
  if (!post) {
    return <Navigate to="/posts" />;
  }

  // ...
}
```
### useNavigate Hook

useNavigate 라는 hook으로 navigate 함수를 가져오면 이 함수를 통해 페이지를 이동할 수 있다.
```
const navigate = useNavigate();

const handleClick = () => {
  // ... 어떤 작업을 한 다음에 페이지를 이동
  navigate('/wishlist');
}
```

Link, Navigate, useNavigate 모두 다 페이지를 이동할 때 사용한다는 공통점이 있지만 각각 언제 사용하는지는 아래와 같다.

### Link
사용자가 클릭해서 페이지를 이동하도록 할 때

### Navigate
특정 경로에서 렌더링 시점에 다른 페이지로 이동시키고 싶을 때

### useNavigate
특정한 코드의 실행이 끝나고 나서 페이지를 이동시키고 싶을 때

---
### 22-03-23

## 대표적인 렌더링의 종류
### 클라이언트사이드 렌더링(Client-side Rendering) - 웹 브라우저에서 자바스크립트로 HTML을 만드는 것

클라이언트사이드 렌더링은 자바스크립트로 변환된 리액트 코드를 웹 브라우저에서 실행해서 HTML을 만드는 걸 말한다.

리액트로 할 수 있는 가장 기본적인 방식의 렌더링이다. 리액트로 작성한 코드는 자바스크립트로 변환이 가능한데 이런 변환을 트랜스파일링이라고 부른다.

### 서버사이드 렌더링(Server-side Rendering) - 서버에서 HTML을 만들고 리스폰스로 보내주는 것

백엔드 서버에서 리퀘스트를 받으면 상황에 맞는 HTML을 만들어서 리스폰스로 보내주는 방식을 '서버사이드 렌더링'이라고 한다. 

리액트에서도 서버사이드 렌더링을 할 수 있는 기능들을 제공합니다. 이렇게 하면 이미 렌더링 된 것이 웹 브라우저에 도착하니까 훨씬 빨리 화면을 띄워줄 수 있고,검색 엔진에서 좋은 점수를 받아서 검색했을 때 사이트가 잘 노출될 수 있다는 장점이 있다.

### 정적 사이트 생성(Static Site Generation) - 미리 HTML 파일을 만들어서 서버를 배포하는 것

서버에서 렌더링 하는 것도 좋지만, 데이터가 거의 바뀌지 않는다면 매번 새로 만드는 건 낭비가 된다. 그래서 미리 HTML 파일로 만들고 이걸 서버를 배포하는 방법을 사용하는데, 이런 방식을 '정적 사이트 생성'이라고 한다. 서버에서는 리퀘스트가 들어오면 HTML 파일을 읽어서 리스폰스로 보내주는 것이다. 

'정적 사이트 생성'에서 정적이라는 말의 의미는 HTML을 파일로 만든다는 것이다. 개발자가 새로 배포하지 않는다면 서버에서 보내주는 HTML이 달라지지 않는다는 의미이다. 용어가 생소해 보이지만, 쉽게 생각해서 리액트 코드로 HTML 파일을 만든다고 생각하면 된다.

## 렌더링을 활용한 리액트 기술 세 가지
### 1.Next.js
리액트에서는 서버사이드 렌더링을 하는 기능들을 제공하고 있지만 아주 기본적인 방법만 제공한다. 그래서 매번 작성해야 하는 코드의 양도 많고 복잡하다. 그래서 개발자들은 서버사이드 렌더링을 대신 구현해주는 기술들을 만들었는데 그게 Next.js이다.

### 2.Gatsby
Gatsby는 리액트 코드를 미리 렌더링 해서 프로젝트를 빌드할 때 HTML 파일로 만든다.

### 3.React Native
React Native는 리액트로 작성한 코드를 모바일 앱으로 만들 수 있게 해준다. 리액트 코드로 개발하면 웹과 안드로이드와 IOS 앱에서 사용하는 공통적인 코드를 한 번에 개발 할 수 있다는 장점이 있다.

---
### 22-03-31
