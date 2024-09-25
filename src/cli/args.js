const parseArgs = () => {
  const args = process.argv.slice(2);
  const parsedArgs = {};
  let output = '';

  for (let i = 0; i < args.length; i += 1) {
    if (args[i].startsWith('--')) {
      const key = args[i].substring(2);
      const value = args[i + 1];
      parsedArgs[key] = value;
      i += 1;
    }
  }
  
  const argsArray = Object.entries(parsedArgs);
  argsArray.forEach(([key, value], index) => {
    if (index < argsArray.length - 1) {
      output += `${key} is ${value}, `
    } else {
      output += `${key} is ${value}.`;
    }
  }) 
  console.log(output)
};

parseArgs();