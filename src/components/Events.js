import React, { useContext } from "react"

import Event from "./Event"
import AppContext from '../contexts/AppContext';

const Events = () => {
  const { state } = useContext(AppContext)
  return(
    <>
      <h4 style={{marginTop: '10px'}}>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディー</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          { state.map((event, index) => (<Event key={index} event={event} />))}
        </tbody>
      </table>
    </>
  )
}

export default Events