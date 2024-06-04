import React, { useState, useEffect } from "react";
import "./Todo.css";

const Todo = () => {
  // const [userData,setuserData]=useState([]);
  // const [formData, setFormData] = useState({
  //   id:'',
  //   topic: "",
  //   description: "",
  // });

  // const onChangeHandle=(e)=>{
  //   const {name,value}=e.target;
  //   // const newdata={name,value};
  //   // setuserData((prevuserData)=>[
  //   //     ...prevuserData,newdata
  //   // ]);
  //   setFormData({
  //     ...formData,
  //      [name]:value,
  //   })
  // }
  // // console.log(userData);

  // const onSubmitHandle=(e)=>{
  //   e.preventDefault();
  //   // if(!userData.topic){
  //   //     alert("Topic is required");
  //   //     return;
  //   // }
  //   // if(!userData.description){
  //   //     alert("Description is required");
  //   //     return;
  //   // }
  //   const newTodo={...formData,id:Date.now().toString()}
  //   setuserData((prevuserData)=>[
  //     ...prevuserData,newTodo
  // ]);
  //   console.log("Data : ")
  //   console.log(userData);

  //   // let finalTodo=[{...userData}];
  //   // let final2={...finalTodo,...userData}
  //   // setuserData({
  //   //     topic: "",
  //   //     description: "",
  //   // })
  //   // console.log(finalTodo);
  //   // console.log(final2);

  // }

  // const [userData, setuserData] = useState([]);
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
  //   setuserData((prevuserData) => [
  //     ...prevuserData,
  //     newTodo,
  //   ]);
  //   console.log("Data: ", userData);
  //   setFormData({
  //     id: '',
  //     topic: "",
  //     description: "",
  //   });
  // };

  const [formData, setFormData] = useState({
    id: 1,
    topic: "",
    description: "",
  });
  
  const [userData, setuserData] = useState([]);

  const onChangeHandle = (event) => {
    let oldData = { ...formData };
    let inputName = event.target.name;
    let inputValue = event.target.value;
    oldData[inputName] = inputValue;
    setFormData(oldData);
  };


  let onSubmitHandle = (event) => {
    let currentUserFormatData = {
      topic: formData.topic,
      description: formData.description,
      // uphone: formData.uphone,
      // umessage: formData.umessage,
    };

    setFormData({
      topic: "",
      description: "",
      // uphone: "",
      // umessage: "",
      // index: "",
    });

    if (formData.index === "") {
      let checkFilterUser = userData.filter(
        (v) => v.description == formData.description 
      );

      if (checkFilterUser.length == 1) {
        alert("Email or Phone Already Exists !!!!");
      } else {
        let oldUserData = [...userData, currentUserFormatData];
        setuserData(oldUserData);
      }
    } else {
      let editIndex = formData.index;
      let oldData = userData;

      let checkFilterUser = userData.filter(
        (v, i) =>
          v.description == formData.description ||
          ( i != editIndex)
      );

      if (checkFilterUser.length == 0) {
        oldData[editIndex]["topic"] = formData.topic;
        oldData[editIndex]["description"] = formData.description;
        // oldData[editIndex]["uphone"] = formData.uphone;
        // oldData[editIndex]["umessage"] = formData.umessage;
        setuserData(oldData);
        setFormData({
          topic: "",
          description: "",
          // uphone: "",
          // umessage: "",
          // index: "",
        });
      } 
      else {
        alert("Email or Phone Already Exists !!!!");
      }
    }
    event.preventDefault();
  };







  // const onSubmitHandle = (e) => {
  //   // e.preventDefault();
  //   let currentUserFormatData = {
  //     topic: formData.topic,
  //     description: formData.description,
  //   };
  //   setFormData({
  //     id: formData.id + 1,
  //     topic: '',
  //     description: '',
  //   });

  //   if (formData.index === "") {
  //     let checkFilterUser = userData.filter(
  //       (v) => v.topic == formData.topic 
  //     );
  //     if (checkFilterUser.length == 1) {
  //       alert("Topic Already Exists !!!!");
  //     } else {
  //       let oldUserData = [...userData, currentUserFormatData];
  //       setuserData(oldUserData);
  //     }

  //   } else {
  //     let editIndex = formData.index;
  //     let oldData = userData;

  //     let checkFilterUser = userData.filter(
  //       (v, i) =>
  //         v.topic == formData.topic ||( i != editIndex)
  //     );
  //     if (checkFilterUser.length == 0) {
  //       oldData[editIndex]["topic"] = formData.topic;
  //       oldData[editIndex]["description"] = formData.description;
        
  //       setuserData(oldData);
  //       setFormData({
  //         topic: "",
  //         description: "",
  //       });
  //     } 
  //     else {
  //       alert("Topic Already Exists !!!!");
  //     }
  //   }
  //   e.preventDefault();
  // };






    // if (!formData.topic) {
    //   alert("Topic is required");
    //   return;
    // }
    // if (!formData.description) {
    //   alert("Description is required");
    //   return;
    // }
    // const newTodo = { ...formData, id: formData.id.toString() };
    // setuserData((prevuserData) => [...prevuserData, newTodo]);
    
  

  const deleteData=(number)=>{
    

    const dataAfterDelete=userData.filter((item)=>item.id!=number);

    setuserData(dataAfterDelete);
    // console.log("data deleted");
    // console.log(userData);

  }


  const editData=(id)=>{
    console.log("Edit function called")

   let selectedEditData=userData.filter((v,i)=>i==id)[0];
    setFormData(selectedEditData);
    console.log(selectedEditData);

  }


  useEffect(() => {
    // console.log("Updated Data:", userData);
  }, [userData]);

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

            {userData.map((item, index) => (
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
