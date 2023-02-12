import { Component, PropsWithChildren } from "react";
import NavBar from "@components/NavBar/NavBar";

import styles from "./index.module.less";

export default class Index extends Component<PropsWithChildren> {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <div className={styles.content}>
        <NavBar title='首页' />

        <div className={styles.body}>
          <div>body</div>
        </div>
      </div>
    );
  }
}
