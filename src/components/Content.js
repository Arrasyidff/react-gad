import React, { useState } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import Home from "../pages/Home";
import Add from "../pages/Add";

function Content() {
  const [openBar, setOpenBar] = useState(false);

  const handleOpenBar = () => {
    setOpenBar(!openBar);
  };

  return (
    <div className="content flex">
      <i
        class={openBar ? "btn-bar fas fa-times" : "btn-bar fas fa-bars"}
        onClick={handleOpenBar}
      ></i>

      <div className={openBar ? "sidebar bar-open" : "sidebar bar-close"}>
        <NavLink to="/home" onClick={handleOpenBar}>
          <i class="fas fa-home"></i>Beranda
        </NavLink>
        <NavLink to="/add" onClick={handleOpenBar}>
          <i class="fas fa-users"></i>Personnel List
        </NavLink>
        <NavLink to="/test" onClick={handleOpenBar}>
          <i class="fas fa-calendar-alt"></i>Daily Attendance
        </NavLink>
      </div>
      <div className="fill-content">
        <div className="wrap-fill">
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/add">
              <Add />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default Content;
