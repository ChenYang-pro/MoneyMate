import type { FC } from "react";
import Price from "../Price";

type IMoneyProps = {
  title: string;
  fee: number;
};

const Money: FC<IMoneyProps> = (props) => {
  const { title, fee } = props || {};
  return (
    <div>
      <div>{title}</div>
      <Price fee={fee} />
    </div>
  );
};

export default Money;
