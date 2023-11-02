import React, { useEffect, useRef } from "react";
import { LuSettings2, LuChevronDown } from "react-icons/lu";
import "./Navbar.css";
const Navbar = ({
  displayButton,
  setDisplayButton,
  GroupBy,
  OrderBy,
  handleGroupBy,
  handleOrderBy,
}) => {
  console.log(displayButton);
  const divRef = useRef();

  const handleClickOutside = (e) => {
    if (divRef.current && !divRef.current.contains(e.target)) {
      // Do something when clicked outside the div
      setDisplayButton(!displayButton);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const refOne = useRef(null);

  return (
    <div className="Navbar__Body">
      <div className="Display__Dropdown">
        <button
          className="Display__Button"
          onClick={() => setDisplayButton(!displayButton)}
        >
          <LuSettings2 className="Display__Icon" />
          <h5>Display</h5>
          <LuChevronDown />
        </button>
        {displayButton && (
          <div
            ref={divRef}
            className={`Display__Content`}
            style={{ zIndex: "1" }}
          >
            <div className="Display__Items">
              <h5>Group By</h5>
              <select
                value={GroupBy}
                onChange={(e) => handleGroupBy(e)}
                className="SelectGroupBy"
              >
                <option value="status">Status</option>
                <option value="user">User</option>
                <option value="priority">Priority</option>
              </select>
            </div>
            <div className="Display__Items">
              <h5>Order By</h5>
              <select
                value={OrderBy}
                onChange={(e) => handleOrderBy(e)}
                className="SelectOrderBy"
              >
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
