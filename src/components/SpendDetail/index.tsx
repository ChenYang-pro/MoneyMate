import type { FC } from "react";
import { KoubeiFill } from "antd-mobile-icons";
import { Empty } from "antd-mobile";

import styles from "./index.module.less";

type IDetails = {
  code: number;
  price: string;
  desc;
};

type IDetailInfo = {
  date: string;
  record: {
    title: string;
    price: string;
  };
  details: IDetails[];
};

type ISpendDetailProps = {
  spendDetails: IDetailInfo[];
};

const SpendDetail: FC<ISpendDetailProps> = (props) => {
  const { spendDetails } = props || {};

  const RenderDetails = (details: IDetails[]) => {
    if (!(Array.isArray(details) && details.length)) {
      return <></>;
    }

    return (
      <>
        {details.map((detail, index) => (
          <div key={`${detail.code}-${index}`} className={styles.detail}>
            <div>
              <KoubeiFill />
              <span style={{ marginLeft: "8px" }}>{detail.desc}</span>
            </div>
            <span>{detail.price}</span>
          </div>
        ))}
      </>
    );
  };

  if (!(Array.isArray(spendDetails) && spendDetails.length)) {
    return (
      <Empty
        style={{ padding: "64px 0" }}
        imageStyle={{ width: 128 }}
        description='暂无数据'
      />
    );
  }
  return (
    <>
      {spendDetails.map((spend) => (
        <div key={spend.date}>
          <div className={styles.date}>
            <span>{spend.date}</span>
            <span>
              {spend.record.title}
              {spend.record.price}
            </span>
          </div>
          <>{RenderDetails(spend.details)}</>
        </div>
      ))}
    </>
  );
};

export default SpendDetail;
