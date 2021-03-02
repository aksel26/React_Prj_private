import React from "react"
import { Table } from "react-bootstrap"
import { connect } from "react-redux"

function Cart(props) {
  let show = props.state.map(function (a, i) {
    return (
      <>
        <tr key={i}>
          <td>{a.id}</td>
          <td>{a.name}</td>
          <td>{a.quan}</td>
          <td>
            <button
              onClick={() => {
                props.dispatch({ type: "수량증가" })
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
      </>
    )
  })
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
        <tbody>{show}</tbody>
      </Table>
    </div>
  )
}

// redux store 데이터를 가져와서 props로 변환해주는 함수 state를 props화
function state를props화(state) {
  return {
    state: state,
  }
}

export default connect(state를props화)(Cart)
