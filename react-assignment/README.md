# react-full-stack

- [react-full-stack](#react-full-stack)
- [Introduction](#introduction)
- [Documentation](#documentation)
- [Folder Structure](#folder-structure)
- [Setup](#Setup)
- [Unit Testing](#installation-guide)

## Introduction
This is a small full stack app developed in React.js and Express.js which shows the dashboard with different project tasks. The dashboard includes:

1. Four different states of task (ToDo, In progress, In review and Done).
2. Each task can be dragged and drop to different state.
3. New task can be added on click of plus icon(+).
4. The task can be removed on click on cross.

Each task has below details: 

1. Name of the task.
2. Description of the task.
3. Creation date of the task.
4. Number of comments and attachments on each task
5. List of users assigned to the task

The data is stored in json files.

## Documentation

### Folder Structure

react-assignment/ 
├── api/  
    ├── server.js     # Contains backend code.  
├── assets/
├── build/            # Contains frontend production build code. 
    ├── static      
        ├── css  
        ├── js  
        ├── media  
├── model/            # Contains JSON files to store tasks data. 
├── public/  
├── src               # Contains frontend code.  

└── README.md  

### Setup
1. Open the root directory of the project.
2. Go to "react-assignment" folder.
3. Open bash / command prompt at same level.
4. run npm install
5. Once the installation is completed, run "npm start command", which will start express server and run frontend production build code.
6. After the server is listening, hit "http://localhost:4000/" to start the unit testing.


### Unit Testing

| Step | Result |
|------------------------------------------------------------------------------ |-------------------------------------------------------------------------- |
| Hit "http://localhost:4000/" | The browser should open a page which matches the given wireframe. |
| Drag the task-card and drop in any of the four states | The dragged task should move to dropped state column. |
| Click on the plus icon which is at right-bottom corner | The popup should open with form to add new task |
| Fill the data in form and click on "Add task" button | New task should be added in the "ToDo" section. |
| Click on the cross icon of the task | The card should be removed from the list |
