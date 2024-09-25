const parseEnv = () => {
  const variables = process.env;
  let output = "";

  const targetVars = Object.entries(variables).filter(([key]) =>
    key.startsWith("RSS_")
  );

  targetVars.forEach(([key, value], index) => {
    if (index < targetVars.length - 1) {
      output += `${key} = ${value}; `;
    } else {
      output += `${key} = ${value}`;
    }
  });
  console.log(output);
};

parseEnv();
