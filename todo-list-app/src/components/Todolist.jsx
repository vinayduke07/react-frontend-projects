import React, { useEffect, useState } from "react";

const getLocalData = () => {
  const lists = localStorage.getItem("todo-list-data");
  if (lists) {
    return JSON.parse(lists);
  } else {
    return [];
  }
};

const Todolist = () => {
  const [inputData, setInputData] = useState("");
  const [addData, setAddData] = useState(getLocalData());
  const [isEdited, setIsEdited] = useState();
  const [toggleButton, setToggleButton] = useState(false);

  useEffect(() => {
    localStorage.setItem("todo-list-data", JSON.stringify(addData));
  }, [addData]);

  const addItem = () => {
    if (!inputData) {
      alert("plz Enter The data");
    } else if (inputData && toggleButton) {
      setAddData(
        addData.map((currVal) => {
          if (currVal.id === isEdited) {
            return { ...addData, name: inputData };
          }

          return currVal;
        })
      );

      setInputData("");
      setIsEdited(null);
      setToggleButton(false);
    } else {
      const myInputData = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      setAddData([...addData, myInputData]);
      setInputData("");
    }
  };

  const editItem = (index) => {
    const edited_Item_Todo = addData.find((currVal) => {
      return currVal.id === index;
    });
    setInputData(edited_Item_Todo.name);
    setIsEdited(index);
    setToggleButton(true);
  };

  const removeAllItems = () => {
    setAddData([]);
  };

  const removeElement = (index) => {
    const updateItems = addData.filter((currVal) => {
      return currVal.id !== index;
    });
    setAddData(updateItems);
  };

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./images/check1.webp" alt="todologo" />
            <figcaption>Add Your List Here ✌</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="✍ Add Item"
              className="form-control"
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            {toggleButton ? (
              <i className="far fa-edit add-btn" onClick={addItem}></i>
            ) : (
              <i className="fa fa-plus add-btn" onClick={addItem}></i>
            )}
          </div>
          <div className="showItems">
            {addData.map((currVal) => {
              return (
                <div className="eachItem" key={currVal.id}>
                  <h3>{currVal.name}</h3>
                  <div className="todo-btn">
                    <i
                      className="far fa-edit add-btn"
                      onClick={() => editItem(currVal.id)}
                    ></i>
                    <i
                      className="far fa-trash-alt add-btn"
                      onClick={() => removeElement(currVal.id)}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>

          {/* rmeove all button  */}
          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              onClick={removeAllItems}
            >
              <span> CHECK LIST</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todolist;
