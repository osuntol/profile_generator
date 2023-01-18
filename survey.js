const { memoryUsage } = require('process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
  rl.question('What\'s your name? Nicknames are also acceptable ', (name) => {
    rl.question('What\'s an activity you like doing? ', (answeractivity) => {
      rl.question('What do you listen to while doing that? ', (music) => {
        rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (meal) => {
          rl.question('What\'s your favourite thing to eat for that meal? ', (favThingToEat) => {
            rl.question('Which sport is your absolute favourite? ', (favSport) => {
              console.log(` good answer ${answer}, nice name ${name}, ${answeractivity} sounds fun, ${music} sounds great, now im in the mood for ${meal},${favThingToEat} is yummy
              I also like ${favSport} `);
              rl.close();
            })
          })
        })
      })
    })
  })
});
