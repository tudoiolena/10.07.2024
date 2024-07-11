/*
1. Напишите функцию myFilter (и обработчики правил для нее) которая будет фильтровать список на основании переданных правил.
*/
const articles = [
  {
    title: "justo. Praesent luctus. Curabitur",
    text: "sapieen, gravida non, sollicitudin a,",
  },
  {
    title: "quam quis diam. Pellentesque",
    text: "eu odio tristique pharetra. Quisque ac",
  },
  {
    title: "quis lectus. Nullam suscipit,",
    text: "bibendum. Donec felis orci, adipiscing non, luctus sit",
  },
  {
    title: "Cras dolor dolor, tempus",
    text: "eget magna. Suspendisse tristique neque",
  },
  {
    title: "ut dolor dapibus gravida.",
    text: "ultricies adipiscing, enim mi tempor lorem, eget mollis",
  },
  {
    title: "elit. Etiam laoreet, libero",
    text: "eget metus eu erat semper rutrum.",
  },
  {
    title: "velit eu sem. Pellentesque",
    text: "Aliquam auctor, velit eget laoreet posuere, enim nisl elementum",
  },
  {
    title: "Aliquam ultrices iaculis odio.",
    text: "ligula consectetuer rhoncus. Nullam velit dui, semper et,",
  },
  {
    title: "a nunc. In at",
    text: "semper cursus. Integer mollis. Integer tincidunt aliquam arcu. Aliquam ultrices",
  },
  {
    title: "iaculis quis, pede. Praesent",
    text: "mi. Aliquam gravida mauris ut mi. Duis risus",
  },
];

const FILTER_OPERATORS = {
  AND: "AND",
  OR: "OR",
};

const textLikeRule = { key: "text", rule: "like", params: ["mollis"] };
const titleStartLikeRule = { key: "title", rule: "sLike", params: ["ve"] };
const titleEndLikeRule = { key: "title", rule: "eLike", params: ["ur"] };
const textRegExpRule = {
  key: "text",
  rule: "regExp",
  params: [new RegExp("[e]{2}")],
};

const handlerLikeRule = (params, value) => {
  return value.includes(params);
};
const handlerSLikeRule = (params, value) => {
  return value.startsWith(params);
};
const handlerELikeRule = (params, value) => {
  return value.endsWith(params);
};
const handlerRegExpRule = (params, value) => {
  const [regex] = params;
  return regex.test(value);
};

const ruleHandlers = {
  like: handlerLikeRule,
  sLike: handlerSLikeRule,
  eLike: handlerELikeRule,
  regExp: handlerRegExpRule,
};

function myFilter(handlers) {
  return function (items, rules, operator = FILTER_OPERATORS.OR) {
    return items.filter((item) => {
      const results = rules.map((ruleElement) => {
        const params = ruleElement.params;
        const itemStringByRuleKey = item[ruleElement.key];
        return handlers[ruleElement.rule](params, itemStringByRuleKey);
      });

      if (operator === FILTER_OPERATORS.AND) {
        return results.every((result) => result);
      } else {
        return results.some((result) => result);
      }
    });
  };
}

myFilter(ruleHandlers)(
  articles,
  [textLikeRule, titleEndLikeRule],
  FILTER_OPERATORS.OR
);

// [{"title":"justo. Praesent luctus. Curabitur","text":"sapieen, gravida non, sollicitudin a,"},{"title":"ut dolor dapibus gravida.","text":"ultricies adipiscing, enim mi tempor lorem, eget mollis"},{"title":"a nunc. In at","text":"semper cursus. Integer mollis. Integer tincidunt aliquam arcu. Aliquam ultrices"}]

myFilter(ruleHandlers)(articles, [textRegExpRule, titleStartLikeRule]); // [{"title":"justo. Praesent luctus. Curabitur","text":"sapieen, gravida non, sollicitudin a,"},{"title":"velit eu sem. Pellentesque","text":"Aliquam auctor, velit eget laoreet posuere, enim nisl elementum"}]

myFilter(ruleHandlers)(
  articles,
  [textRegExpRule, titleEndLikeRule],
  FILTER_OPERATORS.AND
);
// [{"title":"justo. Praesent luctus. Curabitur","text":"sapieen, gravida non, sollicitudin a,"}]

/*
2.Напишите функцию сжатия ключей коллекции объектов
!Для упрощения, объекты могут быть только одноуровневыми!
*/
const data = [
  { varyLoooongIDFieldName: 1, extremelyLooooooooooooongActiveFiedName: true },
  { varyLoooongIDFieldName: 2, extremelyLooooooooooooongActiveFiedName: false },
  { varyLoooongIDFieldName: 3, extremelyLooooooooooooongActiveFiedName: true },
  { varyLoooongIDFieldName: 4, extremelyLooooooooooooongActiveFiedName: false },
  { varyLoooongIDFieldName: 5, extremelyLooooooooooooongActiveFiedName: false },
  { varyLoooongIDFieldName: 6, extremelyLooooooooooooongActiveFiedName: false },
  { varyLoooongIDFieldName: 7, extremelyLooooooooooooongActiveFiedName: true },
  { varyLoooongIDFieldName: 8, extremelyLooooooooooooongActiveFiedName: true },
  { varyLoooongIDFieldName: 9, extremelyLooooooooooooongActiveFiedName: true },
  { varyLoooongIDFieldName: 10, extremelyLooooooooooooongActiveFiedName: true },
];

const compress = (data) => {
  const uniqueKeys = data.reduce((acc, obj) => {
    Object.keys(obj).forEach((key) => acc.add(key));
    return acc;
  }, new Set());

  const uniqueKeysArray = Array.from(uniqueKeys);

  const compressedData = data.reduce((acc, obj) => {
    const compressedObj = Object.entries(obj).map(([key, value]) => [
      uniqueKeysArray.indexOf(key),
      value,
    ]);
    acc.push(compressedObj);
    return acc;
  }, []);

  return JSON.stringify([(uniqueKeysArray, compressedData)]);
};

console.log(compress(data)); // [["varyLoooongIDFieldName","extremelyLooooooooooooongActiveFiedName"],[[[0,1],[1,true]],[[0,2],[1,false]],[[0,3],[1,true]],[[0,4],[1,false]],[[0,5],[1,false]],[[0,6],[1,false]],[[0,7],[1,true]],[[0,8],[1,true]],[[0,9],[1,true]],[[0,10],[1,true]]]]

/*
3.Напишите функцию которая восстанавливает сжатую коллекцию из задания 3
!Для упрощения, объекты могут быть только одноуровневыми!
*/
const compressedData = [
  ["varyLoooongIDFieldName", "extremelyLooooooooooooongActiveFiedName"],
  [
    [
      [0, 1],
      [1, true],
    ],
    [
      [0, 2],
      [1, false],
    ],
    [
      [0, 3],
      [1, true],
    ],
    [
      [0, 4],
      [1, false],
    ],
    [
      [0, 5],
      [1, false],
    ],
    [
      [0, 6],
      [1, false],
    ],
    [
      [0, 7],
      [1, true],
    ],
    [
      [0, 8],
      [1, true],
    ],
    [
      [0, 9],
      [1, true],
    ],
    [
      [0, 10],
      [1, true],
    ],
  ],
];

const decompress = (data) => {
  const [arrayOfKeys, arrayOfValuesArrays] = data;

  return arrayOfValuesArrays.map((innerArray) => {
    const obj = innerArray.reduce((acc, [keyIndex, value]) => {
      acc[arrayOfKeys[keyIndex]] = value;
      return acc;
    }, {});
    return obj;
  });
};

console.log(JSON.stringify(decompress(compressedData))); // [{"varyLoooongIDFieldName":1,"extremelyLooooooooooooongActiveFiedName":true},{"varyLoooongIDFieldName":2,"extremelyLooooooooooooongActiveFiedName":false},{"varyLoooongIDFieldName":3,"extremelyLooooooooooooongActiveFiedName":true},{"varyLoooongIDFieldName":4,"extremelyLooooooooooooongActiveFiedName":false},{"varyLoooongIDFieldName":5,"extremelyLooooooooooooongActiveFiedName":false},{"varyLoooongIDFieldName":6,"extremelyLooooooooooooongActiveFiedName":false},{"varyLoooongIDFieldName":7,"extremelyLooooooooooooongActiveFiedName":true},{"varyLoooongIDFieldName":8,"extremelyLooooooooooooongActiveFiedName":true},{"varyLoooongIDFieldName":9,"extremelyLooooooooooooongActiveFiedName":true},{"varyLoooongIDFieldName":10,"extremelyLooooooooooooongActiveFiedName":true}]
