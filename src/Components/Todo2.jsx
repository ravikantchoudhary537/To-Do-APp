import React, { useState } from "react";
import "./Todo2.css";
import { getValue } from "@testing-library/user-event/dist/utils";

let Todo2 = () => {
  let [formData, setFormData] = useState({
    uname: "",
    umail: "",
    uphone: "",
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
      uname: formData.uname,
      umail: formData.umail,
      uphone: formData.uphone,
      umessage: formData.umessage,
    };

    setFormData({
      uname: "",
      umail: "",
      uphone: "",
      umessage: "",
      index: "",
    });

    if (formData.index === "") {
      let checkFilterUser = userData.filter(
        (v) => v.umail == formData.umail || v.uphone == formData.uphone
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
          v.umail == formData.umail ||
          (v.uphone == formData.uphone && i != editIndex)
      );

      if (checkFilterUser.length == 0) {
        oldData[editIndex]["uname"] = formData.uname;
        oldData[editIndex]["umail"] = formData.umail;
        oldData[editIndex]["uphone"] = formData.uphone;
        oldData[editIndex]["umessage"] = formData.umessage;
        setuserData(oldData);
        setFormData({
          uname: "",
          umail: "",
          uphone: "",
          umessage: "",
          index: "",
        });
      } 
      else {
        alert("Email or Phone Already Exists !!!!");
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
            <label>Name</label>
            <br />
            <input
              type="text"
              onChange={getValue}
              value={formData.uname}
              name="uname"
            ></input>
          </div>
          <div className="input-feilds">
            <label>Email</label>
            <br />
            <input
              type="email"
              onChange={getValue}
              value={formData.umail}
              name="umail"
            ></input>
          </div>
          <div className="input-feilds">
            <label>Phone</label>
            <br />
            <input
              type="text"
              onChange={getValue}
              value={formData.uphone}
              name="uphone"
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
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Message</th>
              <th>Action</th>
            </tr>

            {userData.length >= 1 ? (
              userData.map((obj, i) => {
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{obj.uname}</td>
                    <td>{obj.umail}</td>
                    <td>{obj.uphone}</td>
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
