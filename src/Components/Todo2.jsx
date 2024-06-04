import React, { useState } from "react";
import "./Todo2.css";

let Todo2 = () => {
  let [formData, setFormData] = useState({
    topic: "",
    description: "",
    uTime: "",
    umessage: "",
    index: "",
  });

  let [userData, setuserData] = useState([]);

  let getValue = (event) => {
    let oldData = { ...formData };
    let inputName = event.target.name;
    let inputValue = event.target.value;
    oldData[inputName] = inputValue;
    setFormData(oldData);
  };

  let handleSubmit = (event) => {
    let currentUserFormatData = {
      topic: formData.topic,
      description: formData.description,
      uTime: formData.uTime,
      umessage: formData.umessage,
    };

    setFormData({
      topic: "",
      description: "",
      uTime: "",
      umessage: "",
      index: "",
    });

    if (formData.index === "") {
      let checkFilterUser = userData.filter(
        (v) => v.description == formData.description || v.uTime == formData.uTime
      );

      if (checkFilterUser.length == 1) {
        alert("Description or Time Already Exists !!!!");
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
          (v.uTime == formData.uTime && i != editIndex)
      );

      if (checkFilterUser.length == 0) {
        oldData[editIndex]["topic"] = formData.topic;
        oldData[editIndex]["description"] = formData.description;
        oldData[editIndex]["uTime"] = formData.uTime;
        oldData[editIndex]["umessage"] = formData.umessage;
        setuserData(oldData);
        setFormData({
          topic: "",
          description: "",
          uTime: "",
          umessage: "",
          index: "",
        });
      } 
      else {
        alert("Description or Time Already Exists !!!!");
      }
    }
    event.preventDefault();
  };
  // console.log(userData);

  let deleteRow = (indexNumber) => {
    let filterDataAfterDelete = userData.filter((v, i) => i != indexNumber);
    setuserData(filterDataAfterDelete);
    // alert("nkjnkn")
    // console.log(userData);
  };

  let editRow = (indexNumber) => {
    let editData = userData.filter((v, i) => i == indexNumber)[0];
    editData["index"] = indexNumber;
    setFormData(editData);
  };

  return (
    <div className="container1">
        <h1>TO DO APP</h1>
      <div>
       
        <form onSubmit={handleSubmit} className="crud-form">
          <div className="input-feilds">
            <label>Topic</label>
            <br />
            <input
              type="text"
              onChange={getValue}
              value={formData.topic}
              name="topic"
            ></input>
          </div>
          <div className="input-feilds">
            <label>Description</label>
            <br />
            <input
              type="Description"
              onChange={getValue}
              value={formData.description}
              name="description"
            ></input>
          </div>
          <div className="input-feilds">
            <label>Time</label>
            <br />
            <input
              type="text"
              onChange={getValue}
              value={formData.uTime}
              name="uTime"
            ></input>
          </div>
          <div className="input-feilds">
            <label>Message</label>
            <br />
            <textarea
              type="text"
              onChange={getValue}
              value={formData.umessage}
              name="umessage"
            ></textarea>
          </div>
          <button>{formData.index !== "" ? "Update" : "Save"}</button>
        </form>
      </div>
      <div className="data-table">
        <h1>Form Data</h1>
        <table className="table">
          <thead>
            <tr>
              <th>S NO.</th>
              <th>Topic</th>
              <th>Description</th>
              <th>Time</th>
              <th>Message</th>
              <th>Action</th>
            </tr>

            {userData.length >= 1 ? (
              userData.map((obj, i) => {
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{obj.topic}</td>
                    <td>{obj.description}</td>
                    <td>{obj.uTime}</td>
                    <td>{obj.umessage}</td>
                    <td>
                      <button onClick={() => deleteRow(i)}>Delete</button>
                      <button onClick={() => editRow(i)}>Edit</button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={6} className="colspan">
                  No Data Found
                </td>
              </tr>
            )}
          </thead>
        </table>
      </div>
    </div>
  );
};

export default Todo2;
