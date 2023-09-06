const express = require('express');
const { spawn } = require('child_process');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/double', (req, res) => {
  const { number } = req.body;

  if (number === undefined) {
    res.status(400).json({ error: 'Number is missing in the request body' });
    return;
  }

  const haskellProcess = spawn('./myFunction.exe', [number.toString()]);

  haskellProcess.stdout.on('data', (data) => {
    const result = data.toString();
    res.json({ result });
  });

  haskellProcess.stdin.write(`doubleNumber ${number}\n`);
  haskellProcess.stdin.end();
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
