import { NavBarProps } from "antd-mobile";
import { createContext } from "react";

type INavContext = {
  setNavBar?: (value: NavBarProps) => void;
};

const NavContext = createContext<INavContext>({});

export default NavContext;
