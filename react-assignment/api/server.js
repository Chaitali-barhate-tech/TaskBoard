import express from "express";
import path from "path";
import cors from "cors";
import bodyParser from "body-parser";
import fs from "fs";
import fileType from "file-type";

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(express.static('build'));

const port = process.env.PORT || 4000;

const router = express.Router();

app.use("/", router);

// To run frontend build file
app.get('*', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "July", "Aug", "Sept", "Oct", "Nov", "Dec"
];

// To get filename
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

// To get list of all the tasks
router.route("/task-list").get((req, res, next) => {
  fs.readFile("model/tasks-list.json", "utf8", (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data));
  });
});

// To get list of all the users
router.route("/users").get((req, res, next) => {
  fs.readFile("model/users.json", "utf8", (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data));
  });
});

// To add new task
router.route("/add-new-task").post((req, res, next) => {
  let taskObject = {};
  taskObject.id = "task-" + (parseInt(req.body.formJSON.total) + 1);
  taskObject.title = req.body.formJSON.title;
  taskObject.description = req.body.formJSON.description;
  taskObject.priority = req.body.formJSON.priority;
  taskObject.status = "todo";

  taskObject.users = [];
  taskObject.users.push(JSON.parse(req.body.formJSON.user));

  let date = monthNames[new Date().getMonth()] + ", " + new Date().getDate();
  taskObject.notification = date;

  fs.readFile("model/tasks-list.json", "utf8", (err, data) => {
    var TaskList = JSON.parse(data);
    TaskList.push(taskObject);
    TaskList = JSON.stringify(TaskList);
    // Update the file with latest data
    fs.writeFile("model/tasks-list.json", TaskList, function (err) {
      if (err) throw err;
      res.json("success");
    });
  });
});

// To update task's state
router.route("/update-task").post((req, res, next) => {
  let taskId = req.body.id;
  let status = req.body.status;

  fs.readFile("model/tasks-list.json", "utf8", (err, data) => {
    var TaskList = JSON.parse(data);
    for (let i = 0; i < TaskList.length; i++) {
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

// To delete the task
router.route("/delete-task").post((req, res, next) => {
  let taskId = req.body.id;

  fs.readFile("model/tasks-list.json", "utf8", (err, data) => {
    var TaskList = JSON.parse(data);
    for (let i = 0; i < TaskList.length; i++) {
      if (TaskList[i].id === taskId) {
        TaskList.splice(i, 1);
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