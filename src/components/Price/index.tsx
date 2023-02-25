import type { FC } from "react";
import styles from "./index.module.less";

type IPriceProps = {
  fee: string | number;
  color?: string;
  [key: string]: any;
};

const Price: FC<IPriceProps> = (props) => {
  const { fee, color, priceSize, symbolSize } = props || {};
  if (!fee) {
    return null;
  }

  const stringifyPrice = (priceFen: number | string) => {
    const [leftPart, rightPart] = (
      typeof priceFen === "number"
        ? (priceFen / 100).toFixed(2) || ""
        : priceFen
    ).split(".");

    return {
      leftPart: leftPart ? leftPart : "",
      rightPart: rightPart ? "." + rightPart : "",
    };
  };

  return (
    <div className={styles.price} style={{ color: color }}>
      <span className={styles.unit} style={{ fontSize: symbolSize }}>
        &yen;
      </span>
      <span className={styles.integer} style={{ fontSize: priceSize }}>
        {stringifyPrice(fee)?.leftPart}
      </span>
      <span className={styles.decimal} style={{ fontSize: priceSize }}>
        {stringifyPrice(fee)?.rightPart}
      </span>
    </div>
  );
};

export default Price;
