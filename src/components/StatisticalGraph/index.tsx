import { Tabs } from "antd-mobile";
import { FC } from "react";
import { Line } from "@ant-design/plots";

type IMoneyInfo = {
  title: string;
  value: string;
  statisticAmount: { text: string; amount: number }[];
  detailAmount: { date: string; amount: number }[];
};

type IProps = {
  moneyInfo: IMoneyInfo[];
};

const StatisticalGraph: FC<IProps> = (props) => {
  const { moneyInfo } = props || {};

  const defaultActiveTab = () => {
    return moneyInfo?.[moneyInfo.length - 1]?.value;
  };

  if (!(Array.isArray(moneyInfo) && moneyInfo.length)) {
    return null;
  }
  return (
    <Tabs defaultActiveKey={defaultActiveTab()}>
      {moneyInfo.map((info) => {
        const { title, value, statisticAmount, detailAmount } = info || {};
        return (
          <Tabs.Tab title={title} key={value}>
            {statisticAmount?.map((stat) => (
              <div key={stat.text}>
                <span>{stat.text}</span>
                <span>{stat.amount}</span>
              </div>
            ))}

            <Line data={detailAmount} xField='date' yField='amount' />
          </Tabs.Tab>
        );
      })}
    </Tabs>
  );
};

export default StatisticalGraph;
