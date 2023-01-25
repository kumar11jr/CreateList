import React, { useState } from "react";

const AddItems = (props) => {
  const [name, setname] = useState("");
  const [desc, setdesc] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!name || !desc) {
      alert("Cant be Empty");
      setname("");
      setdesc("");
    } else {
      props.add(name, desc);
      setname("");
      setdesc("");
    }
  };

  return (
    <>
      <h3 style={{ marginLeft: "3rem", marginTop: "1rem" }}>Add Items</h3>
      <div style={{ width: "60rem", marginLeft: "3rem" }}>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Title"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
          <label for="floatingInput">Name</label>
        </div>
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="floatingPassword"
            placeholder="Description"
            value={desc}
            onChange={(e) => {
              setdesc(e.target.value);
            }}
          />
          <label for="floatingPassword">Description</label>
        </div>
        <button className="btn btn-success my-2 btn-lg" onClick={submit}>
          Add
        </button>
      </div>
    </>
  );
};

export default AddItems;
