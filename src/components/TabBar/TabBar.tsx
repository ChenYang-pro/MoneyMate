import type { FC } from "react";
import { TabBar } from "antd-mobile";
import { routes } from "@/Routes";
import Taro from "@tarojs/taro";

type ITabBarProps = {};

const TabBarCompt: FC<ITabBarProps> = () => {
  const handleChange = (value: string) => {
    Taro.redirectTo({
      url: value,
    });
  };

  return (
    <TabBar safeArea onChange={handleChange}>
      {routes.map((item) => (
        <TabBar.Item
          key={item.path}
          icon={item.icon}
          title={item.title}
          badge={item.badge}
        />
      ))}
    </TabBar>
  );
};

export default TabBarCompt;
