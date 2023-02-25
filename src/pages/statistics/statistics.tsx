import NavContext from "@/context/NavContext";
import { FC, useCallback, useEffect, useContext } from "react";
import { CapsuleTabs } from "antd-mobile";
import StatisticalDimension from "@/components/StatisticalDimension";
import StatisticalGraph from "@/components/StatisticalGraph";
import { KoubeiFill } from "antd-mobile-icons";
import Price from "@/components/Price";
import { ratioToString } from "@/utils/util";

import styles from "./statistics.module.less";
import data from "./data";

const Statistics: FC = () => {
  const { moneyCategory, dailyCategory, moneyInfo, amountRank } = data;

  const navContext = useContext(NavContext);

  useEffect(() => {
    navContext?.setNavBar?.({
      children: <StatisticalDimension moneyCategory={moneyCategory} />,
      backArrow: false,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const RenderDailyCategory = useCallback(() => {
    if (!(Array.isArray(dailyCategory) && dailyCategory.length)) {
      return null;
    }
    return (
      <CapsuleTabs>
        {dailyCategory.map((item) => (
          <CapsuleTabs.Tab title={item.text} key={item.value} />
        ))}
      </CapsuleTabs>
    );
  }, [dailyCategory]);

  return (
    <div className={styles.content}>
      {RenderDailyCategory()}

      <StatisticalGraph moneyInfo={moneyInfo} />

      {Array.isArray(amountRank) && amountRank.length ? (
        <div>
          <p>支出排行榜</p>
          <>
            {amountRank.map((item) => (
              <div key={item.code} className={styles.amountRankItem}>
                <KoubeiFill />
                <div className={styles.itemInfo}>
                  <div className={styles.itemDesc}>
                    <p>
                      {item.desc} {ratioToString(item.ratio)}
                    </p>
                    <Price
                      fee={item.price}
                      priceSize='14px'
                      symbolSize='12px'
                    />
                  </div>
                  <div
                    className={styles.ratioLine}
                    style={{ width: ratioToString(item.ratio) }}
                  ></div>
                </div>
              </div>
            ))}
          </>
        </div>
      ) : null}
    </div>
  );
};

export default Statistics;
