import React, { useState } from "react"
import logo from "./logo.svg"
import "./App.css"
import { Navbar, Nav, NavDropdown, Button, Jumbotron } from "react-bootstrap"
import product1 from "./1.png"
import product2 from "./2.png"
import product3 from "./3.png"
import Info from "./data.js"
import Navigation from "./navbar.js"
import Jumbo from "./jumbo.js"
import DetailPage from "./detailPage.js"
import { Link, Route, Switch } from "react-router-dom"
import axios from "axios"

function App() {
  let [product, productChange] = useState(Info)

  let [showDetail, showDetailChange] = []
  let productImg = [product1, product2, product3]
  let moreProduct = []
  showDetail = [...product]
  // const _product = showDetail.map(function (showDetail, i) {
  //   console.log("showDetail[0] : ", showDetail.title)
  //   return (
  //     <div className="col-4" key={i}>
  //       <img src={productImg[i]} alt="p1" width="100%" height="50%" />
  //       <h4>{showDetail.title}</h4>
  //       <p>{showDetail.content}</p>
  //     </div>
  //   )
  // })

  return (
    <div className="App">
      <Navigation />

      <Route exact path="/">
        <Jumbo />
        <div className="container">
          <div className="row">
            {/* {_product} */}
            {showDetail.map(function (a, i) {
              return (
                <Card show={showDetail[i]} i={i} img={productImg[i]} key={i} />
              )
            })}
            {/* <Card show={showDetail[0]} img={productImg[0]} />
          <Card show={showDetail[1]} img={productImg[1]} />
          <Card show={showDetail[2]} img={productImg[2]} /> */}
          </div>
          <button
            className="btn btn-primary"
            onClick={() => {
              // axios.post('서버URL', 전달할 데이터)
              // axios.post('서버URL', {id : 'id' , pw : 1234})
              // 참고 : 요청시의 header설정(캐쉬 등등) 도 가능

              // 로딩중이라는 UI 띄움
              axios
                .get("https://codingapple1.github.io/shop/data2.json") //get요청
                .then((result) => {
                  // 로딩중이라는 UI 삭제 or 안보이게 처리
                  productChange([...product, ...result.data])
                  // result.map(function (result, i) {
                  //   return <div className="_more">{result.data[i].title}</div>
                  // })
                })

                .catch(() => {
                  // 로딩중이라는 UI 삭제 or 안보이게 처리
                  console.log("failed")
                }) //실패할 경우
            }}
          >
            더보기
          </button>
        </div>
      </Route>
      <Switch>
        {/* <Route path="/detail"> */}
        <Route path="/detail/:id">
          {/* 아무 문자나 받겠다는 URL작성법 */}
          <DetailPage _product={product} />
        </Route>
        <Route path="/:id">
          <div>아무거나 적엇을때이거보여줌</div>
        </Route>
      </Switch>
      {/* /'모든문자'라는 경로를 의미 */}

      {/* 한줄에 쓰는 방법 */}
      {/* <Route paht="/어쩌구" component={Modal}></Route> */}
    </div>
  )
}
function Card(props) {
  console.log(props.show)
  return (
    <div className="col-4">
      <img src={props.img} alt="p" width="100%" height="50%" />
      <h4>{props.show.title}</h4>
      <p>
        {props.show.content} & {props.show.price}
      </p>
    </div>
  )
}

export default App
