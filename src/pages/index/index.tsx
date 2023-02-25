import Money from "@/components/Money";
import SpendDetail from "@/components/SpendDetail";
import TabBarCompt from "@/components/TabBar/TabBar";
import NavContext from "@/context/NavContext";
import TimerPicker from "@components/TimerPicker";
import { Divider } from "antd-mobile";
import { useCallback, useContext, useEffect } from "react";
import { data } from "./data";

import styles from "./index.module.less";

const Index = () => {
  const { time, money } = data.header;

  const navContext = useContext(NavContext);

  useEffect(() => {
    navContext?.setNavBar?.({ children: "首页", backArrow: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const RenderMoney = useCallback(() => {
    return (
      <div className={styles.moneyArray}>
        {money?.map((m) => (
          <Money key={m.title} {...m} />
        ))}
      </div>
    );
  }, [money]);

  return (
    <>
      <div className={styles.content}>
        <TimerPicker {...time} />
        <Divider
          direction='vertical'
          style={{ borderColor: "#333333", fontSize: "36px" }}
        />
        {RenderMoney()}
      </div>
      <div className={styles.tabBar}>
        <TabBarCompt />
      </div>
      <SpendDetail spendDetails={data.spendDetails} />
    </>
  );
};

export default Index;
