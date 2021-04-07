var figlet = require("figlet");

figlet(`xia jie qiong is sb ?`, function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
