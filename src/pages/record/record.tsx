import { Component, PropsWithChildren } from "react";
import NavBar from "@components/NavBar/NavBar";

import styles from "./record.module.less";

export default class Index extends Component<PropsWithChildren> {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <div className={styles.content}>
        <NavBar title='记账' />

        <div className={styles.body}>
          <div>record</div>
        </div>
      </div>
    );
  }
}
