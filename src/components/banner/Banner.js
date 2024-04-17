import React, {memo} from 'react'

const Banner = (props) => {
    console.log(props);
    let list = props.list?.map((el, i) => (
        <li key={i}>{el}</li>
    ))

    let textColor = "black";
    if (props.isFirst) {
        textColor = "white"
    } else if (props.isLast) {
        textColor = "white"
    }

  return (
    <div style={{ color: textColor, background: `url(${props.bg})`, backgroundRepeat: 'no-repeat', backgroundSize: "100%"}} className='banner container'>
        <h3>{props.title}</h3>
        <ul>
            {list}
        </ul>
        <h2>{props.name}</h2>
        <p>{props.desc}</p>
        <div>
            <button style={{background: textColor, color: textColor === "white" ? "black" : "white"}}>{props.btn}</button>
        </div>
    </div>
  )
}

export default memo(Banner)