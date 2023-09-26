import "./App.css";
import Counter from "./components/Counter";
import Register from "./components/Register";
import { useGetTodosQuery } from "./redux/services/todo/todo";

function App() {
  const { data, error, isLoading, isSuccess } = useGetTodosQuery();
  // let Data;
  // if (isSuccess) {
  //   Data = data.data;
  // }
  // console.log(Data);
  if(isLoading){
    return(
      <h6>Loading...</h6>
    )
  }
  return (
    <div className="App">
      <header className="App-header">
        {/* <Counter/> */}
        <Register />
     <hr/>

        <h3>Todo List</h3>
        <div className="container mt-4 d-flex">
         
          {/* {isSuccess &&
            Data.map((todo) => {
              return (
                <div
                  className="card ms-2  mt-2 col-lg-2 m-1 p-4"
                  style={{ width: "13rem" }}
                  key={todo._id}
                >
                  <h3>Todo: {todo.todoName}</h3>
                  <h6>TodoId: {todo._id}</h6>

                  <>
                    <label>IsCompleted:</label>
                    <input type="checkbox" checked={todo.isComplete} />
                  </>
                </div>
              );
            })} */}

            {
              data.data.length > 0 ? (
                data.data.map((todo)=>{
                  return(
                    <div
                    className="card ms-2  mt-2 col-lg-2 m-1 p-4"
                    style={{ width: "13rem" }}
                    key={todo._id}
                  >
                    <h3>Todo: {todo.todoName}</h3>
                    <h6>TodoId: {todo._id}</h6>
  
                    <>
                    <div className="d-flex justify-content-center mt-3">
                       <label style={{fontSize:'15px'}}>IsCompleted: </label>
                      <input className="ms-1" type="checkbox" checked={todo.isComplete} />
                    </div>
                     
                    </>
                  </div>
                  )
                })
              ) : <p>no data</p>
            }
        </div>
      </header>
    </div>
  );
}

export default App;
