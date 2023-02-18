import { FC, useState } from "react";
import { Picker } from "antd-mobile";
import { DownFill } from "antd-mobile-icons";

import styles from "./index.module.less";

type ITimerPickerColumn = {
  label: string;
  value: string;
}[];

type ITimerPickerProps = {
  year: string;
  month: string;
  basicColumns: ITimerPickerColumn[];
};

const TimerPicker: FC<ITimerPickerProps> = (props) => {
  const { year, month, basicColumns } = props || {};

  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState<(string | null)[]>(["M"]);
  return (
    <div className={styles.timerPicker}>
      <div className={styles.year}>{year}</div>
      <div onClick={() => setVisible(true)}>
        <span className={styles.month}>{month}</span> 月<DownFill />
      </div>
      <Picker
        columns={basicColumns}
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
        value={value}
        onConfirm={(v) => {
          setValue(v);
        }}
      />
    </div>
  );
};

export default TimerPicker;
