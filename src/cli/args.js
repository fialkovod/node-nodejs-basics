const parseArgs = () => {
  // Write your code here
  const ar = process.argv;
  let res = [];
  for (let i = 2; i < ar.length; i = i + 2) {
    if (ar[i].startsWith("--")) {
      res.push(`${ar[i].slice(2)} is ${ar[i + 1]}`);
    }
  }
  console.log(res.join(", "));
};

parseArgs();
