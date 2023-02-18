import type { FC } from "react";
import TimerPicker from "../TimerPicker";

type IProps = {};

const BodyHeader: FC<IProps> = (props) => {
  return (
    <div>
      <TimerPicker />
    </div>
  );
};
export default BodyHeader;
