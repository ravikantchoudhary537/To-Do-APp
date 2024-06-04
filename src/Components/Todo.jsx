import React, { useState, useEffect } from "react";
import "./Todo.css";

const Todo = () => {
  // const [todoData,setTodoData]=useState([]);
  // const [formData, setFormData] = useState({
  //   id:'',
  //   topic: "",
  //   description: "",
  // });

  // const onChangeHandle=(e)=>{
  //   const {name,value}=e.target;
  //   // const newdata={name,value};
  //   // setTodoData((prevTododata)=>[
  //   //     ...prevTododata,newdata
  //   // ]);
  //   setFormData({
  //     ...formData,
  //      [name]:value,
  //   })
  // }
  // // console.log(todoData);

  // const onSubmitHandle=(e)=>{
  //   e.preventDefault();
  //   // if(!todoData.topic){
  //   //     alert("Topic is required");
  //   //     return;
  //   // }
  //   // if(!todoData.description){
  //   //     alert("Description is required");
  //   //     return;
  //   // }
  //   const newTodo={...formData,id:Date.now().toString()}
  //   setTodoData((prevTododata)=>[
  //     ...prevTododata,newTodo
  // ]);
  //   console.log("Data : ")
  //   console.log(todoData);

  //   // let finalTodo=[{...todoData}];
  //   // let final2={...finalTodo,...todoData}
  //   // setTodoData({
  //   //     topic: "",
  //   //     description: "",
  //   // })
  //   // console.log(finalTodo);
  //   // console.log(final2);

  // }

  // const [todoData, setTodoData] = useState([]);
  // const [formData, setFormData] = useState({
  //   id: '1',
  //   topic: "task 1 sample",
  //   description: "task 1 desc sample",
  // });

  // const onChangeHandle = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  // const onSubmitHandle = (e) => {
  //   e.preventDefault();
  //   // if (!formData.topic) {
  //   //   alert("Topic is required");
  //   //   return;
  //   // }
  //   // if (!formData.description) {
  //   //   alert("Description is required");
  //   //   return;
  //   // }
  //   const newTodo = { ...formData, id: Date.now().toString() };
  //   setTodoData((prevTodoData) => [
  //     ...prevTodoData,
  //     newTodo,
  //   ]);
  //   console.log("Data: ", todoData);
  //   setFormData({
  //     id: '',
  //     topic: "",
  //     description: "",
  //   });
  // };

  const [todoData, setTodoData] = useState([]);
  const [formData, setFormData] = useState({
    id: 1,
    topic: "",
    description: "",
  });

  const onChangeHandle = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmitHandle = (e) => {
    e.preventDefault();
    if (!formData.topic) {
      alert("Topic is required");
      return;
    }
    if (!formData.description) {
      alert("Description is required");
      return;
    }
    const newTodo = { ...formData, id: formData.id.toString() };
    setTodoData((prevTodoData) => [...prevTodoData, newTodo]);
    setFormData({
      id: formData.id + 1,
      topic: '',
      description: '',
    });
  };

  const deleteData=(number)=>{
    

    const dataAfterDelete=todoData.filter((item)=>item.id!=number);

    setTodoData(dataAfterDelete);
    // console.log("data deleted");
    // console.log(todoData);

  }

  const editData=(id)=>{
    console.log("Edit function called")
    const selectedEditData=todoData.find((item)=>item.id===id)

    console.log("Before selected : ",formData.topic[1]);
    // setFormData(selectedEditData);
    console.log("After selected : ",formData.topic);




    let oldData=formData;

    let editIndex=formData.index;

    oldData[editIndex]['topic']=formData.topic;
    oldData[editIndex]['description']=formData.description;
    
    // const updatedTodoData = todoData.map((item) =>
    //   item.id === id ? { ...item, ...updatedData } : item
    // );
    // setTodoData(updatedTodoData);

  }

  useEffect(() => {
    console.log("Updated Data:", todoData);
  }, [todoData]);

  return (
    <div className="to-do-app-body">
      <h1>To Do App</h1>
      <hr></hr>
      <div className="to-do-app">
        <div className="input-box">
          <form onSubmit={onSubmitHandle}>
            <table>
             <tbody>
              <tr>
                <td>
                  <label>Topic :</label>
                </td>
                <td>
                  <input
                    type="text"
                    name="topic"
                    value={formData.topic}
                    onChange={onChangeHandle}
                  ></input>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Description :</label>
                </td>
                <td>
                  <input
                    type="text-area"
                    name="description"
                    value={formData.description}
                    onChange={onChangeHandle}
                  ></input>
                </td>
              </tr>
              </tbody>
            </table>
            <button className="add-btn">
              ADD <i className="fa-solid fa-plus"></i>
            </button>
          </form>
        </div>
        <div className="data-table">
          <table className="table">
          <tbody>
            <tr>
              <th>S.No</th>
              <th>Topic</th>
              <th>Description</th>
              <th>Action</th>
            </tr>

            {todoData.map((item, index) => (
              <tr key={index}>
                <td>{index+1}</td>
                <td>{item.topic}</td>
                <td>{item.description}</td>
                <td>
                  <button className="edit-btn" onClick={()=>editData(item.id)} >
                    Edit <i className="fa-solid fa-pencil" ></i>
                  </button>
                  <button className="delete-btn" onClick={()=>deleteData(item.id)}>
                    Delete <i className="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Todo;
