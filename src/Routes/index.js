import {
  CollectMoneyOutline,
  CompassOutline,
  HistogramOutline,
  UserOutline,
  AddCircleOutline,
} from "antd-mobile-icons";

export const routes = [
  {
    key: "index",
    path: "pages/index/index",
    title: "明细",
    icon: <CollectMoneyOutline />,
    // badge: Badge.dot,
  },
  {
    key: "statistics",
    path: "pages/statistics/statistics",
    title: "图表",
    icon: <HistogramOutline />,
    badge: "5",
  },
  {
    key: "record",
    path: "pages/record/record",
    title: "记账",
    icon: <AddCircleOutline />,
  },
  {
    key: "community",
    path: "pages/community/community",
    title: "社区",
    icon: <CompassOutline />,
    badge: "99+",
  },
  {
    key: "personal",
    path: "pages/personal/personal",
    title: "我的",
    icon: <UserOutline />,
  },
];
