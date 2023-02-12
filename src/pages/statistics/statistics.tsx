import { Component, PropsWithChildren } from "react";
import NavBar from "@components/NavBar/NavBar";

import styles from "./statistics.module.less";

export default class Index extends Component<PropsWithChildren> {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <div className={styles.content}>
        <NavBar title='统计数据' />

        <div className={styles.body}>
          <div>statistics</div>
        </div>
      </div>
    );
  }
}
