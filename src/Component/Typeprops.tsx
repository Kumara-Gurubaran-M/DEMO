
type data={
    name:string
}
function Typeprops(props:data) {
  return (
    <div>
        <p>welcome {props.name}</p>
    </div>
  )
}

export default Typeprops