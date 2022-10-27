import React from "react";

import { FcNext, FcPrevious } from "react-icons/fc";

function Header({ currentMonth, handleIconClick }: any) {
  return (
    <div data-testid="header" className="calendar-header">
      <h2>{currentMonth}</h2>
      <div>
        <button
          type="button"
          onClick={() => handleIconClick("prev")}
          className="btn"
        >
          <FcPrevious size={25} />
        </button>
        <button
          onClick={() => handleIconClick("next")}
          type="button"
          className="btn"
        >
          <FcNext size={25} />
        </button>
      </div>
    </div>
  );
}

export default Header;
