import { Component } from "react";
import TabBar from "@components/TabBar/TabBar";

import "./app.css";

class App extends Component {
  // 可以使用所有的 React 生命周期方法
  componentDidMount() {}

  // 对应 onLaunch
  onLaunch() {}

  // 对应 onShow
  componentDidShow() {}

  // 对应 onHide
  componentDidHide() {}

  render() {
    // 在入口组件不会渲染任何内容，但我们可以在这里做类似于状态管理的事情
    return (
      <div className='app'>
        <div className='body'>{this.props.children}</div>
        <div className='tabBar'>
          <TabBar />
        </div>
      </div>
    );
  }
}

export default App;
