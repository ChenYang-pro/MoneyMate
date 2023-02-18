export const data = {
  header: {
    time: {
      basicColumns: [
        [
          { label: "周一", value: "Mon" },
          { label: "周二", value: "Tues" },
          { label: "周三", value: "Wed" },
          { label: "周四", value: "Thur" },
          { label: "周五", value: "Fri" },
        ],
        [
          { label: "上午", value: "am" },
          { label: "下午", value: "pm" },
        ],
      ],
      year: "2023年",
      month: "02",
    },
    money: [
      { title: "收入", fee: 90000 },
      { title: "支出", fee: 30000 },
    ],
  },
  tabBar: [
    { text: "账单", icon: 1 },
    { text: "账单", icon: 2 },
    { text: "账单", icon: 3 },
    { text: "账单", icon: 4 },
    { text: "账单", icon: 5 },
  ],
  spendDetails: [
    {
      date: "02月09日 星期四",
      record: { title: "支出:", price: "-30" },
      details: [
        { code: 2, desc: "吃饭", price: "-15" },
        { code: 2, desc: "吃饭", price: "-15" },
      ],
    },
    {
      date: "02月08日 星期三",
      record: { title: "支出:", price: "-30" },
      details: [
        { code: 2, desc: "吃饭", price: "-15" },
        { code: 2, desc: "吃饭", price: "-15" },
      ],
    },
    {
      date: "02月07日 星期二",
      record: { title: "支出:", price: "-30" },
      details: [
        { code: 2, desc: "吃饭", price: "-15" },
        { code: 2, desc: "吃饭", price: "-15" },
      ],
    },
    {
      date: "02月06日 星期一",
      record: { title: "支出:", price: "-30" },
      details: [
        { code: 2, desc: "吃饭", price: "-15" },
        { code: 2, desc: "吃饭", price: "-15" },
      ],
    },
  ],
};
