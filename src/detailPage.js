import React, { useEffect, useState } from "react"
import "./App.css"
import { Navbar, Nav, NavDropdown, Button, Jumbotron } from "react-bootstrap"
import { useHistory, useParams } from "react-router-dom"
import styled from "styled-components"
import "./Detail.scss"

let 박스 = styled.div`
  padding: 20px;
`

let 제목 = styled.h4`
  font-size: 20px;
  color: ${(props) => props.색상};
`

// class Detail2 extends React.Component {
//   componentDidMount() {}

//   componentWillUnmount() {}

//   shouldComponentUpdate() {}
// }

function DetailPage(props) {
  let [alert, alertSet] = useState(true)
  // 컴포넌트가 mount되었을때, 컴포넌트가 update될때, 특정 코드를 실행할 수 있다.
  useEffect(
    () => {
      let timer = setTimeout(() => {
        alertSet(false)
      }, 2000)
      // setTimeout이 페이지 이동하면서 버그가 생갈 수도 있기 때문에 주의할점 : ㅌ타이머를 제거한다.

      // 사라질때 코드를 실행시킬 수 있음
      return function 어쩌구() {
        // 실행할 코드~~ (<-사라질때 실행됨)

        //타이머를 해제하는 코드
        clearTimeout(timer)
      }
      // return ()=>{}

      // 여러개 사용 가능하고 적은 순서대로 실행된다.
      // useEffect(()=>{}}
    },
    [
      // 업데이트시엔 실행 안되게
    ]
  )

  let history = useHistory() //history라는 오브젝트 생성, 방문기록 등을 저장해놓는 오브젝트
  let { id } = useParams() // 모든 parameter가 들어있다.
  // let productTitle, productContent
  let productTitle, key

  // 1. 원본 데이터 불러오기 find함수 사용
  // let productFind = props._product.find(function (상품) {
  //   return 상품.id == id
  // })

  // 2. 원본 데이터를 반복문으로 불러오기
  for (let i = 0; i < props._product.length; i++) {
    if (Number(id) === props._product[i].id) {
      productTitle = props._product[i].title
      key = props._product[i].id

      // productContent = props._product[i].content
      break
    }
  }

  return (
    <div className="container">
      <박스>
        <제목 색상={"red"}>Detail</제목>
        <제목 색상="blue">Detail</제목>
        <제목 className="red">Detail</제목>
      </박스>
      {alert === true ? (
        <div className="my-alert">
          <p>몇개 안남았어요</p>
        </div>
      ) : null}
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>
        <div className="col-md-6 mt-4">
          {/* <h4 className="pt-5">{props._product[:id자리에 있던 숫자].title}</h4> */}

          {/* <h4 className="pt-5">{productFind.title}</h4> */}
          <h4 className="pt-5" key={key}>
            {productTitle}
          </h4>
          {/* <p>{productFind.content}</p>
          <p>{productFind.price}원</p> */}
          <button className="btn btn-danger">주문하기</button>
          <button
            className="btn btn-danger"
            onClick={() => {
              history.goBack()
              // history.push("/원하는 경로")
            }}
          >
            뒤로가기
          </button>
        </div>
      </div>
    </div>
  )
}

export default DetailPage
