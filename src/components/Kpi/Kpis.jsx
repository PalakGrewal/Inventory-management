import React from 'react'
import Hgray from "../../Styles/Hgray";
const Kpis = (props) => {
  return (
    <div className="flex flex-col items-start hover:bg-gray-200 w-60 p-4 rounded-lg">
        <Hgray data={props.head} />
        <div className="text-blue-800 text-3xl font-bold">{props.info}</div>
      </div>
  )
}

export default Kpis