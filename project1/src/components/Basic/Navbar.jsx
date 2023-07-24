import React from "react";

const Navbar = ({ filterItem, menuList }) => {
  return (
    <>
      <div className="navbarCard">
        <div className="btn-group">
          {menuList.map((currVal) => {
            return (
              <button
                onClick={() => filterItem(currVal)}
                className="btn-group-item"
                type="button"
              >
                {currVal}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navbar;
