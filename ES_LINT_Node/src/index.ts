import express from "express";

const app = express();

const x = 1;

app.get("/", (req, res) => {
  res.json({
    message: "Hi there"
  });
});

function withSpaceRequired (x : number) {
  console.log(x);
  const y = (1 + 2) * x;
  console.log(y);
}

withSpaceRequired(x);
/*
 Run npx eslint . --fix to let eslint fix the code automatically 
*/