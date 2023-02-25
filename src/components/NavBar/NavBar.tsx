import type { FC } from "react";
import { NavBar, NavBarProps } from "antd-mobile";

const NavBarCompt: FC<NavBarProps> = (props) => {
  const { children, backArrow, style } = props || {};

  const back = () =>
    console.log({
      content: "点击了返回区域",
      duration: 1000,
    });

  return (
    <NavBar
      onBack={back}
      backArrow={backArrow}
      style={{ "--border-bottom": "1px #eee solid", ...style }}
    >
      {children}
    </NavBar>
  );
};

export default NavBarCompt;
