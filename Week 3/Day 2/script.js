// Question 1:
function work() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Done!");
            }, 2000);
    });
    }
    
// Using .then().....
work().then((resolve) => {
    console.log(resolve);
});

// Question 2: Using async/await.....
async function displayWorking() {
    let working = await work();
    console.log(working);
}

displayWorking();

// Question 3: API Call using try/catch.....
function apiCall(shouldSucceed) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(shouldSucceed === true) {
                resolve("Data fetched successfully!");
            } else {
                reject("Data not fetched successfully!");
            }
        }, 1000);
    });
}

async function fetchData(shouldSucceed) {
    console.log("Fetching Data.....");
    try {
        let apiCalling = await apiCall(shouldSucceed);
        console.log(apiCalling);
    } catch(err) {
        console.error(err);
    }
}

let shouldSucceed = true;
fetchData(shouldSucceed);

// Question 4:
function getUser() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("User verified successfully!");
        }, 2000);
    });
}

function getPosts() {
    let Posts = [
        {
            name: 'Post1',
            comments: ['Hi! from post 1.....', 'How are you?']
        },
        {
            name: 'Post2',
            comments: ['Hi! from post 2.....', 'How are you?']
        }
    ];
    
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(Posts);
        }, 2000);
    });
}

function getComments(posts) {
    let comments = posts[0].comments
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(comments);
        }, 2000);
    });
}

function wrapper() {
    console.log("Verifying User.....");
    getUser()
    .then((user) => {
        console.log(user);
        console.log("\nFetching Posts.....");
        return getPosts();
    })
    .then((posts) => {
        console.log(posts);
        console.log("Posts Fetched successfully!");
        console.log("\nFetching comments of first post.....");
        return getComments(posts);
    })
    .then((comments) => {
        let i = 1;
        for(comment of comments) {
            console.log(`Comment ${i}: ${comment}`);
            i++;
        }
        console.log("Comments Fetched successfully!");
    })
    .catch((err) => {
        console.error(err);
    })
    .finally(() => {
        console.log("\nProcess Completed!");
    })
}

wrapper();

async function asyncWrapper() {
    console.log("Verifying User.....");
    try {
        let user = await getUser();
        console.log(user);
        
        console.log("\nFetching Posts.....");
        let posts = await getPosts();
        console.log(posts);
        console.log("Posts Fetched successfully!");
        
        console.log("\nFetching comments of first post.....");
        let comments = await getComments(posts);
        comments.forEach((comment, i) => {
            console.log(`Comments[${i}]: ${comment}`);
        });
        console.log("Comments Fetched successfully!");
    } catch(err) {
        console.error(err);
    }
    console.log("\nProcess Completed!");
}

asyncWrapper();
