import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import "bootstrap/dist/css/bootstrap.css"
import reportWebVitals from "./reportWebVitals"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { createStore } from "redux"

// state초기값
// let store = createStore(() => {
//   return [
//     { id: 1, name: "커피빈 커피", quan: 21 },
//     { id: 2, name: "탐앤탐스 커피", quan: 12 },
//     { id: 3, name: "투썸플레이스 커피", quan: 32 },
//   ]
// })

let 초기값 = [
  { id: 1, name: "커피빈 커피", quan: 21 },
  { id: 2, name: "탐앤탐스 커피", quan: 12 },
  { id: 3, name: "투썸플레이스 커피", quan: 32 },
]

// reducer는 항상 state데이터를 뱉어야 한다.  수정된 state를 퉤 뱉는 함수다.
// state = 기본state default parameter (ES6신 문법)
function reducer(state = 초기값, action) {
  if (action.type === "수량증가") {
    // stae를 변경하기 위한 사본 만들기
    let copy = [...초기값]
    copy[0].quan++

    return copy
  } else if (action.type === "수량감소") {
    let copy = [...초기값]
    copy[0].quan--
    return copy
  } else {
    return state
  }
}
let store = createStore(reducer)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
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
