import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import axios from "axios";
import Dashboard from "./components/Dashboard";

const getGroup = () => {
  if (localStorage.getItem("group")) {
    return localStorage.getItem("group");
  } else {
    return "status";
  }
};

const getOrder = () => {
  if (localStorage.getItem("order")) {
    return localStorage.getItem("order");
  } else {
    return "priority";
  }
};

function App() {
  const [displayButton, setDisplayButton] = useState(false);
  const [GroupBy, setGroupBy] = useState(getGroup);
  const [OrderBy, setOrderBy] = useState(getOrder);

  const handleGroupBy = (e) => {
    // console.log(e.target.value);
    setGroupBy(e.target.value);
    setDisplayButton(!displayButton);
    localStorage.setItem("group", e.target.value);
  };

  const handleOrderBy = (e) => {
    // console.log(e.target.value);
    setOrderBy(e.target.value);
    setDisplayButton(!displayButton);
    localStorage.setItem("order", e.target.value);
  };

  const url = "https://api.quicksell.co/v1/internal/frontend-assignment";

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchInfo();
  }, []);

  const fetchInfo = async () => {
    const res = await axios.get(url);
    return setData(res.data);
  };

  // console.log(data);

  return (
    <div className="Dashboard__Wrapper">
      <div className="Navbar__Backdrop">

      </div>
      <div className="Dashboard__Content">
        <Navbar
          displayButton={displayButton}
          setDisplayButton={setDisplayButton}
          GroupBy={GroupBy}
          OrderBy={OrderBy}
          handleGroupBy={handleGroupBy}
          handleOrderBy={handleOrderBy}
        />

        <Dashboard data={data} GroupBy={GroupBy} OrderBy={OrderBy} />
      </div>
    </div>
  );
}

export default App;
