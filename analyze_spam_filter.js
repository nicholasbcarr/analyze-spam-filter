function analyzeSpamFilter(datas) {
  const spamNums = {
    falsePositives: 0, truePositives: 0, trueNegatives: 0, falseNegatives: 0,
  };
  for (const data of datas) {
    spamNums.falsePositives += data.falsePositives;
    spamNums.falseNegatives += data.falseNegatives;
    spamNums.truePositives += data.truePositives;
    spamNums.trueNegatives += data.trueNegatives;
  }
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
