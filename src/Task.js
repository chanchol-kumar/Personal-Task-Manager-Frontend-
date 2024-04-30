// function Task(props){
//     return<>
//     <li className="shadow p-2 my-2 col-sm-9">{props.value}</li>
//     <button className="btn btn-danger my-2 col-sm-2 offset-1"
//     onClick={()=>{props.sendData(props.id)}}>X</button>
//     </>
// }
// export default Task;

function Task(props) {
  return (
  <>
    <li className="p-2 my-2 col-sm-9" style={{
        boxShadow: "0.5px 1px 4px 0px #ff014f",
        padding: "2rem",
        marginBottom: "2rem",
        }}>
        {props.value}
      </li>
      <button style={{
        backgroundColor: 'Red',
        borderRadius: "2",
        color: "white",       
        }}
        className="btn px-3  my-2 col-sm-1 ms-3" onClick={() => {
        props.sendData(props.id);
        }}>X</button>
    </>
  );
}
export default Task;
