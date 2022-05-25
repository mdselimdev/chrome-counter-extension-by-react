import { useEffect, useState } from "react";

function App() {
  const [number, setNumber] = useState(0);

  const updateDisplayData = () => {
    const mainData = getData();
    return mainData ? JSON.parse(mainData) : 0;
  };

  let path = window.location.href;

  useEffect(() => {
    const dis = updateDisplayData();
    setNumber(dis);
  }, [updateDisplayData]);

  const centerText = {
    textAlign: "center",
    color: "white",
  };
  // const mainBox = {
  //   width: "250px",
  //   margin: "100px auto",
  //   padding: "30px",
  //   borderRadius: "10px",
  // };

  const allPage = {
    width: "250px",
    margin: "0 auto",
    padding: "30px",
    borderRadius: "10px",
    background: "crimson",
  };
  const facebook = {
    width: "250px",
    margin: "0 auto",
    padding: "30px",
    borderRadius: "10px",
    background: "green",
  };

  const innerBox = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const buttonStyle = {
    display: "inline-block",
    height: "50px",
    width: "50px",
    lineHeight: "50px",
    textAlign: "center",
    background: "white",
    color: "crimson",
    borderRadius: "50%",
    cursor: "pointer",
  };

  const decreaseNumber = () => {
    let numTwo = getData();
    if (!numTwo) {
      return;
    } else {
      let myData = JSON.parse(numTwo);
      if (myData === 0) {
        return;
      }
      let newData = myData - 1;
      updataData(newData);
      const savedData = updateDisplayData();
      setNumber(savedData);
    }
  };

  const increaseNumber = () => {
    let num = getData();
    let myData = 1;
    if (!num) {
      myData = 1;
    } else {
      myData = JSON.parse(num);
      const newData = myData + 1;
      myData = newData;
    }
    updataData(myData);
    const savedData = updateDisplayData();
    setNumber(savedData);
  };

  const resetDb = () => {
    localStorage.clear();
    setNumber(0);
  };

  // const removeData = () => {};

  const getData = () => localStorage.getItem("myData");

  const updataData = (data) => {
    localStorage.setItem("myData", JSON.stringify(data));
  };

  return (
    <div style={path === "https://facebook.com" ? facebook : allPage}>
      <h1 style={centerText}>Counter</h1>
      <div style={innerBox}>
        <span style={buttonStyle} onClick={decreaseNumber}>
          <i style={{ fontSize: "18px" }} className="fa-solid fa-minus"></i>
        </span>
        <h3 style={{ fontSize: "25px", color: "white" }}>{number}</h3>
        <span style={buttonStyle} onClick={increaseNumber}>
          <i style={{ fontSize: "18px" }} className="fa-solid fa-plus"></i>
        </span>
      </div>
      <div style={{ textAlign: "center" }}>
        <button
          style={{
            border: "none",
            padding: "5px 10px",
            borderRadius: "3px",
            background: "white",
            color: "crimson",
          }}
          onClick={resetDb}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
