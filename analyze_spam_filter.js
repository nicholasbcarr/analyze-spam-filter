function analyzeSpamFilter(datas) {
  let truePos = _.pluck(datas, 'truePositives');
  let falsePos = _.pluck(datas, 'falsePositives');
  let trueNeg = _.pluck(datas, 'trueNegatives');
  let falseNeg = _.pluck(datas, 'falseNegatives');
  truePos = _.reduce(truePos, function (memo, num) { return memo + num; });
  falsePos = _.reduce(falsePos, function (memo, num) { return memo + num; });
  trueNeg = _.reduce(trueNeg, function (memo, num) { return memo + num; });
  falseNeg = _.reduce(falseNeg, function (memo, num) { return memo + num; });
  const spamNums = {
    falsePositives: falsePos, truePositives: truePos, trueNegatives: trueNeg, falseNegatives: falseNeg,
  };
  return spamNums;
}

console.log(analyzeSpamFilter([
  {
    truePositives: 1,
    falsePositives: 6,
    trueNegatives: 3,
    falseNegatives: 2,
  },
  {
    truePositives: 6,
    trueNegatives: 4,
    falsePositives: 12,
    falseNegatives: 8,
  },
]));
