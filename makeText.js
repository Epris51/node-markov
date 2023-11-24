const fs = require('fs');
const MarkovMachine = require('./markov'); // Import MarkovMachine from markov.js

// Read the content of eggs.txt
fs.readFile('eggs.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  // Create an instance of MarkovMachine with the file content
  let markovMachine = new MarkovMachine(data);

  // Generate and print random text
  console.log(markovMachine.makeText(100));
});


