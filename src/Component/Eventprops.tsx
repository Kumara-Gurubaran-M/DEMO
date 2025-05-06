type EventAct={
    handleClick:(event:React.MouseEvent<HTMLButtonElement>,id:number)=>void
}

function Eventprops(props:EventAct) {
  return (
    <div>
        <button onClick={(event)=>props.handleClick(event,1)}>Click</button>
    </div>
  )
}

export default Eventprops