//  Callback stack helps JS to keep track of where its running when multiple
// functions are called. Its How JS knows what function is running
// and what functions are called within that function.
// Js runs one thing at a time i.e cannot multi-task. Thus, the use of promises

// Promise is a JS obeject which represents the eventual completion or failure
// of an asynchronous operation. i.e something that takes time.
// a callback can be attached to promises. Promises are created:

const learnIt = new Promise((resolve, reject) => {
    resolve();
});

// two callbacks are needed, one resolve the other reject.
// resolve which deals with the promise fulfilled
// or rejceted i.e not successful; both are functions and must be written
// resolved() or rejected()
// console.log(learnIt)

// to use promises and get either functions:
const learns = new Promise((resolve, reject) => {
    const randN = Math.random();
    if (randN < 0.5) {
        resolve();
    } else {
        reject();
    }
});
//console.log(learns)

// How to interract with a promise: use .then()
// const learnThen = new Promise((resolve, reject) => {
//     const randN = Math.random();
//     if (randN < 0.5) {
//         resolve();
//     } else {
//         reject();
//     }
// }).then(() => {
//     console.log("YAYYY!!! Learnt then");
// });

// every promise has a then method, which runs if the promise is resolved.
//learnThen;

// .catch() needs to run when there's a reject
const learnCatch = new Promise((resolve, reject) => {
    const randN = Math.random();
    if (randN < 0.5) {
        resolve();
    } else {
        reject();
    }
});
// learnCatch
//     .then(() => {
//         console.log("YAYYY!!! Learnt then");
//     })
//     .catch(() => {
//         console.log(":( Got a reject");
//     });

// we can return the promises
// const learnPromises = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const randN = Math.random();
//             if (randN < 0.5) {
//                 resolve();
//             } else {
//                 reject();
//             }
//         }, 3000);
//     });
// };
// learnPromises()
//     .then(() => {
//         console.log("YAYYY!!");
//     }).catch(() => {
//         console.log(":( Got a reject...");
//     });

// to pass data in reject:
const learnReject = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randN = Math.random();
            if (randN < 0.3) {
                reject({status: 404});
            } else {
                resolve();
            }
        }, 3000);
    });
};
learnReject()
    .then(() => {
        console.log("YAYYY!!");
    }).catch((res) => {
        console.log(res.status)
        console.log(":( Got a reject...");
    });

// you can pass element in resolve like reject
// I kept getting this warning but I'm yet to figure out why
// (node:60027) UnhandledPromiseRejectionWarning: undefined
// (Use `node --trace-warnings ...` to show where the warning was created)
// (node:60027) UnhandledPromiseRejectionWarning: Unhandled promise rejection. 
// This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). 
// To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 1)
// (node:60027) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.