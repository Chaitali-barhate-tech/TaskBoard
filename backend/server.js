import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import fs from "fs";
import fileType from "file-type";

const app = express();

app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 4000;

const router = express.Router();

app.use("/", router);

router.route("/file/:filename").get((req, res) => {
  let filename = req.params.filename;
  let imagepath = "./assets/" + filename;
  let image = fs.readFileSync(imagepath);
  let mime = fileType(image).mime;

  res.writeHead(200, {
    "Content-Type": mime,
  });

  res.end(image, "binary");
});

router.route("/task-list").get((req, res, next) => {
  fs.readFile("model/tasks-list.json", "utf8", (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data));
  });
});

router.route("/add-new-task").post((req, res, next) => {
  let taskObject = {};
  taskObject.title = req.body.title;
  taskObject.description = req.body.description;
  taskObject.user = [{
    "username": req.body.user
  }]
  fs.readFile("model/tasks-list.json", "utf8", (err, data) => {
    var TaskList = JSON.parse(data);
    TaskList.push(taskObject);
    TaskList = JSON.stringify(TaskList);
    fs.writeFile("model/tasks-list.json", TaskList, function (err) {
      if (err) throw err;
      res.json("Task added");
    });
  });
});

router.route("/update-task").post((req, res, next) => {
  let taskId = req.body.id;
  let status = req.body.status;

  console.log(req.body);

  fs.readFile("model/tasks-list.json", "utf8", (err, data) => {
    var TaskList = JSON.parse(data);
    for(let i=0; i < TaskList.length; i++) {
      if (TaskList[i].id === taskId) {
        TaskList[i].status = status;
        var temp = TaskList[i];
        TaskList.splice(i, 1);
        TaskList.push(temp);
        break;
      }
    }
    TaskList = JSON.stringify(TaskList);
    fs.writeFile("model/tasks-list.json", TaskList, function (err) {
      if (err) throw err;
      res.json("success");
    });
  });
});

app.listen(port, () => console.log("Server is running on port " + port));