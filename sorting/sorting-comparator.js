function sortComparator(a) {
  const comparator = (a, b) => {
    if (a.score > b.score) {
      return b.score - a.score;
    } else if (a.score === b.score) {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
    }
  };

  a.sort(comparator);
  console.log(a);
}

sortComparator([
  { name: "smith", score: 20 },
  { name: "jones", score: 15 },
  { name: "jones", score: 20 },
]);

sortComparator([
  { name: "amy", score: 100 },
  { name: "david", score: 100 },
  { name: "heraldo", score: 50 },
  { name: "aakansha", score: 75 },
  { name: "aleska", score: 150 },
]);
