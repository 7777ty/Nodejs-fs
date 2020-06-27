const { program } = require('commander');
const api =require('./index.js');

program
  .option('-x, --x', 'xxxxx');
program
  .command('add <taskName>')
  .description('add a task')
  .action((source) => {
    api.add(source).then(()=>{console.log('添加成功')},()=>{console.log('添加失败')});
  });
program
  .command('clear')
  .description('clear all tasks')
  .action(() => {
    api.clear().then(()=>{console.log('清除完毕')},()=>{console.log('清除失败')});

  });
program
    .command('showAll')
    .description('show all tasks && operate it')
    .action(() => {
        api.showAll();
    });

program.parse(process.argv);



