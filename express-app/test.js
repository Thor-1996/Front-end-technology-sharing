var arr1 = [
  {
    code: "1",
    children: [
      {
        code: "11",
        children: [
          {
            code: "111",
            children: [],
          },
          {
            code: "112",
            children: [],
          },
        ],
      },
    ],
  },
  {
    code: "2",
    children: [
      {
        code: "22",
        children: [
          {
            code: "221",
            children: [],
          },
          {
            code: "222",
            children: [],
          },
          {
            code: "223",
            children: [],
          },
        ],
      },
    ],
  },
  {
    code: "3",
    children: [
      {
        code: "33",
        children: [
          {
            code: "333",
            children: [],
          },
        ],
      },
    ],
  },
];
// arr1里面每一项下的层级都一样，如示例都是三级
// 转换后期望输出arr2：

// var aar2 = [
//   { code1: "1", code2: "11", code3: "111" },
//   { code1: "1", code2: "11", code3: "112" },
//   { code1: "2", code2: "22", code3: "221" },
//   { code1: "2", code2: "22", code3: "222" },
//   { code1: "2", code2: "22", code3: "223" },
//   { code1: "3", code2: "33", code3: "333" },
// ];

function getPath(arr = []) {
  const pathList = [];

  function deep(arr, level, item) {
    for (let i = 0; i < arr.length; i++) {
      const obj = {
        [`code${level}`]: arr[i].code,
        ...item,
      };

      if (arr[i].children && arr[i].children.length) {
        deep(arr[i].children, level + 1, obj);
      } else {
        pathList.push(obj);
      }
    }
  }

  deep(arr, 1, {});
  return pathList;
}

getPath(arr1);
