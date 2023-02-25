import { useState } from "react";
import NavBar from "@components/NavBar";
import TabBar from "@components/TabBar";
import NavContext from "./context/NavContext";

import "./app.css";

const App = (props) => {
  const [navBar, setNavBar] = useState({ children: "记账" });

  return (
    <div className='app'>
      <NavContext.Provider
        value={{
          setNavBar: setNavBar,
        }}
      >
        <NavBar {...navBar} />
        <div className='body'>{props.children}</div>
        <div className='tabBar'>
          <TabBar />
        </div>
      </NavContext.Provider>
    </div>
  );
};

export default App;
