const yargs = require('yargs');

// node cmd_args_3 start --test=2 --rest=rest

console.log(process.argv[2])

console.log(yargs.argv)