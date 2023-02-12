import { Component, PropsWithChildren } from "react";
import NavBar from "@components/NavBar/NavBar";

import styles from "./personal.module.less";

export default class Index extends Component<PropsWithChildren> {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <div className={styles.content}>
        <NavBar title='我的' />

        <div className={styles.body}>
          <div>personal</div>
        </div>
      </div>
    );
  }
}
