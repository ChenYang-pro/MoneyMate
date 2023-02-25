import type { FC } from "react";
import { useRef, useState } from "react";

import { Dropdown, DropdownRef, Space } from "antd-mobile";
import { CheckOutline } from "antd-mobile-icons";

import styles from "./index.module.less";

type ICategory = {
  text: string;
  value: number;
};

type IProps = {
  moneyCategory: ICategory[];
};

const StatisticalDimension: FC<IProps> = (props) => {
  const { moneyCategory } = props || {};
  const [dropTitle, setDropTitle] = useState(moneyCategory[0]?.text);
  const ref = useRef<DropdownRef>(null);

  const handleClick = (item: ICategory) => {
    setDropTitle(item.text);
    ref.current?.close();
  };

  if (!(Array.isArray(moneyCategory) && moneyCategory.length)) {
    return null;
  }

  return (
    <div>
      <Dropdown ref={ref}>
        <Dropdown.Item key='sorter' title={dropTitle}>
          <div style={{ padding: 8 }}>
            <Space direction='vertical' block>
              {moneyCategory?.map((item) => (
                <div
                  key={item.value}
                  onClick={() => handleClick(item)}
                  className={styles.item}
                >
                  {item.text}
                  {dropTitle === item.text ? <CheckOutline /> : null}
                </div>
              ))}
            </Space>
          </div>
        </Dropdown.Item>
      </Dropdown>
    </div>
  );
};

export default StatisticalDimension;
