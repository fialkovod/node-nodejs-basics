const parseEnv = () => {
  // Write your code here
  const envs = process.env;
  let res = [];
  for (let en in envs) {
    if (en.indexOf("RSS_") === 0) res.push(`${en}=${envs[en]}`);
  }
  console.log(res.join("; "));
};

parseEnv();
