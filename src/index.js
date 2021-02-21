import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import "bootstrap/dist/css/bootstrap.css"
import reportWebVitals from "./reportWebVitals"
import { BrowserRouter } from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

// hashRouter
// : #이 추가된다.
// # ? Routing을 보다 안전하게 할 수 있다.
// 주소창은 : server에 페이지를 요청하는 공간
// 잘못해서 서버에 요청을 하지 않기 위해 사용하게 된다.
// BrowseRouter: 라우팅을 리액트가 아니라 서버에게 요청을 할수도 있서서 위험
// 서버 : 그런페이지 없는데요 ?
// 서버에서 서버 라우팅 방지하는 API를 작성해둬야한다.
// 즉, # 뒤에 오는 것들은 서버로 전달하지 않는다.
