import type { FC } from "react";
import { NavBar } from "antd-mobile";

type INavBarProps = {
  title: string;
};

const NavBarCompt: FC<INavBarProps> = (props) => {
  const { title } = props || {};

  const back = () =>
    console.log({
      content: "点击了返回区域",
      duration: 1000,
    });

  return <NavBar onBack={back}>{title}</NavBar>;
};

export default NavBarCompt;
