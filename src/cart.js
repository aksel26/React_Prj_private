import React from "react"
import { Table } from "react-bootstrap"
import { connect } from "react-redux"

function Cart(props) {
  return (
    <div>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경</th>
          </tr>
        </thead>
        {props.state.map(function (a, i) {
          return (
            <tr key={i}>
              <td>{a.id}</td>
              <td>{a.name}</td>
              <td>{a.quan}</td>
              <td>
                <button
                  onClick={() => {
                    props.dispatch({
                      type: "수량증가",
                    })
                  }}
                >
                  +
                </button>
                <button
                  onClick={() => {
                    props.dispatch({ type: "수량감소" })
                  }}
                >
                  -
                </button>
              </td>
            </tr>
          )
        })}
      </Table>
      <Table></Table>
      {props.alertOn === true ? (
        <div className="my-alert2">
          <p>지금 구매하시면 20% 할인</p>
          <button
            onClick={() => {
              props.dispatch({ type: "닫기" })
            }}
          >
            닫기
          </button>
        </div>
      ) : null}
    </div>
  )
}

// redux store 데이터를 가져와서 props로 변환해주는 함수 state를 props화
function state를props화(state) {
  return {
    state: state.reducer,
    alertOn: state.reducer2,
  }
}

export default connect(state를props화)(Cart)
