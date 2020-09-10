// uses the above class and
// performs actions by reading actions.txt file (sample file in the appendix below; each new line is a
// new command)
// Each action should print to stdout the action that was performed and the return value

const fs = require("fs");
const Queue = require("./index");

const queue = new Queue();

// assuming order matters.
try {
  // read contents of the file
  const data = fs.readFileSync("./actions.txt", "UTF-8");

  // split the contents by new line
  const lines = data.split(/\r?\n/);

  // print all lines
  lines.forEach((line) => {
    // split each line by ,
    const split = line.split(",");
    const command = split[0];
    const value = Number(split[1]);
    const value2 = Number(split[2]);

    let result;
    // TODO - write the command logic
    switch (command) {
      case "ADD":
        result = queue.add(value);
        process.stdout.write(`${command} : ${result} -> [${queue['data']}] \n`);
        break;
      case "REMOVE_USER":
        result = queue.removeByUser(value);
        process.stdout.write(`${command} : ${result} -> [${queue['data']}] \n`);
        break;
      case "MOVE":
        result = queue.move(value, value2);
        process.stdout.write(`${command} : ${result} -> [${queue['data']}] \n`);
        break;
      case "REVERSE":
        result = queue.reverse();
        process.stdout.write(`${command} : ${result} -> [${queue['data']}] \n`);
        break;
      case "SWAP":
        result = queue.swap(value, value2);
        process.stdout.write(`${command} : ${result} -> [${queue['data']}] \n`);
        break;
      case "REMOVE_POSITION":
        result = queue.removeByUser(value);
        process.stdout.write(`${command} : ${result} -> [${queue['data']}] \n`);
        break;
      case "PRINT":
        result = queue.print();
        process.stdout.write(`${command} : ${result} -> [${queue['data']}] \n`);
        break;
    }
  });
} catch (err) {
  console.error(err);
}
