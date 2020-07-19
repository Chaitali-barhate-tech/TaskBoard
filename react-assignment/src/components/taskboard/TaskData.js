const taskData = [{
    id: "task-1",
    title: "Create an announcement about product launch",
    attachments: 2,
    notification: "Oct, 23",
    comments: 7,
    image: "image.png",
    users: [{
            username: "David",
            usericon: "user.jpg"
        },
        {
            username: "Emily",
            usericon: "user-2.jpg"
        }
    ],
    status: "todo",
    priority: "high"
}, {
    id: "task-2",
    title: "Arrange Meeting with the Stakeholders",
    attachments: 2,
    notification: "Oct, 24",
    comments: 6,
    users: [{
            username: "Sam",
            usericon: "user.jpg"
        },
        {
            username: "John",
            usericon: "user-2.jpg"
        }
    ],
    status: "inProgress",
    priority: "high"
}, {
    id: "task-3",
    title: "Send minutes of the meeting for meeting with stakeholders",
    attachments: 4,
    notification: "Oct, 24",
    comments: 3,
    users: [{
            username: "Sam",
            usericon: "user.jpg"
        },
        {
            username: "David",
            usericon: "user-2.jpg"
        }
    ],
    status: "inReview",
    priority: "medium"
}, {
    id: "task-4",
    title: "Follow up for the MOM with the stakeholders",
    attachments: 5,
    notification: "Oct, 23",
    comments: 2,
    image: "image.png",
    users: [{
            username: "Emily",
            usericon: "user.jpg"
        },
        {
            username: "Sam",
            usericon: "user-2.jpg"
        }
    ],
    status: "done",
    priority: "high"
}, {
    id: "task-5",
    title: "Appoint a product manager for the new project",
    attachments: 6,
    notification: "Oct, 26",
    comments: 8,
    users: [{
            username: "John",
            usericon: "user.jpg"
        },
        {
            username: "Emily",
            usericon: "user-2.jpg"
        }
    ],
    status: "done",
    priority: "high"
}, {
    id: "task-6",
    title: "Appoint Frontend development team",
    attachments: 2,
    notification: "Oct, 26",
    comments: 7,
    users: [{
            username: "Sam",
            usericon: "user.jpg"
        },
        {
            username: "David",
            usericon: "user-2.jpg"
        },
        {
            username: "John",
            usericon: "user-3.jpg"
        }
    ],
    status: "inProgress",
    priority: "high"
}, {
    id: "task-7",
    title: "Appoint Backend Development Team",
    attachments: 2,
    notification: "Oct, 26",
    comments: 7,
    users: [{
            username: "Sam",
            usericon: "user.jpg"
        },
        {
            username: "David",
            usericon: "user-2.jpg"
        }
    ],
    status: "inReview",
    priority: "low"
}, {
    id: "task-8",
    title: "Appoint Quality Assurance Team ",
    attachments: 2,
    notification: "Oct, 28",
    comments: 7,
    users: [{
            username: "Leena",
            usericon: "user.jpg"
        },
        {
            username: "David",
            usericon: "user-2.jpg"
        }
    ],
    status: "todo",
    priority: "low"
}, {
    id: "task-9",
    title: "Allot the tasks to the development team",
    attachments: 2,
    notification: "Oct, 29",
    comments: 7,
    users: [{
            username: "Emily",
            usericon: "user.jpg"
        },
        {
            username: "John",
            usericon: "user-2.jpg"
        }
    ],
    status: "todo",
    priority: "medium"
}, {
    id: "task-10",
    title: "Estimate the overall efforts of the proejct",
    attachments: 2,
    notification: "Oct, 29",
    comments: 7,
    users: [{
            username: "John",
            usericon: "user.jpg"
        },
        {
            username: "Leena",
            usericon: "user-2.jpg"
        }
    ],
    status: "inProgress",
    priority: "medium"
}, {
    id: "task-11",
    title: "Design the homepage",
    attachments: 2,
    notification: "Oct, 29",
    comments: 7,
    image: "image.png",
    users: [{
            username: "David",
            usericon: "user.jpg"
        },
        {
            username: "John",
            usericon: "user-2.jpg"
        }
    ],
    status: "inProgress",
    priority: "low"
}, {
    id: "task-11",
    title: "Estimate the overall efforts of the proejct",
    attachments: 2,
    notification: "Oct, 30",
    comments: 7,
    users: [{
            username: "John",
            usericon: "user.jpg"
        },
        {
            username: "Leena",
            usericon: "user-2.jpg"
        }
    ],
    status: "todo",
    priority: "low"
}, {
    id: "task-12",
    title: "Design the product listing page",
    attachments: 2,
    notification: "Oct, 30",
    comments: 7,
    users: [{
            username: "Sam",
            usericon: "user.jpg"
        },
        {
            username: "David",
            usericon: "user-2.jpg"
        }
    ],
    status: "inReview",
    priority: "high"
}, {
    id: "task-13",
    title: "Design the search result page",
    attachments: 2,
    notification: "Nov, 01",
    comments: 7,
    image: "image.png",
    users: [{
            username: "Emily",
            usericon: "user.jpg"
        },
        {
            username: "John",
            usericon: "user-2.jpg"
        }
    ],
    status: "inProgress",
    priority: "medium"
}, {
    id: "task-14",
    title: "Design the product detail page",
    attachments: 2,
    notification: "Nov, 02",
    comments: 7,
    users: [{
            username: "Sam",
            usericon: "user.jpg"
        },
        {
            username: "David",
            usericon: "user-2.jpg"
        }
    ],
    status: "done",
    priority: "medium"
}, {
    id: "task-15",
    title: "Test the homepage",
    attachments: 2,
    notification: "Nov, 03",
    comments: 7,
    users: [{
            username: "Leena",
            usericon: "user.jpg"
        },
        {
            username: "David",
            usericon: "user-2.jpg"
        }
    ],
    status: "inReview",
    priority: "low"
}, {
    id: "task-16",
    title: "Test the search result page",
    attachments: 2,
    notification: "Nov, 04",
    comments: 7,
    users: [{
            username: "Leena",
            usericon: "user.jpg"
        },
        {
            username: "David",
            usericon: "user-2.jpg"
        }
    ],
    status: "todo",
    priority: "medium"
}, {
    id: "task-17",
    title: "Test the product detail page",
    attachments: 2,
    notification: "Nov, 05",
    comments: 7,
    users: [{
            username: "Leena",
            usericon: "user.jpg"
        },
        {
            username: "David",
            usericon: "user-2.jpg"
        }
    ],
    status: "todo",
    priority: "medium"
}, {
    id: "task-18",
    title: "Design about us page",
    attachments: 2,
    notification: "Nov, 05",
    comments: 7,
    users: [{
            username: "Emily",
            usericon: "user.jpg"
        },
        {
            username: "Sam",
            usericon: "user-2.jpg"
        }
    ],
    status: "done",
    priority: "high"
}, {
    id: "task-19",
    title: "Design the my account page",
    attachments: 2,
    notification: "Nov, 05",
    comments: 7,
    users: [{
            username: "Sam",
            usericon: "user.jpg"
        },
        {
            username: "David",
            usericon: "user-2.jpg"
        }
    ],
    status: "done",
    priority: "medium"
}, {
    id: "task-20",
    title: "Perform Sanity Testing",
    attachments: 2,
    notification: "Nov, 05",
    comments: 7,
    users: [{
            username: "Leena",
            usericon: "user.jpg"
        },
        {
            username: "David",
            usericon: "user-2.jpg"
        }
    ],
    status: "inProgress",
    priority: "low"
}]

export default taskData;