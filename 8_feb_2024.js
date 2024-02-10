// const arr = [
//     {
//         id: 123,
//         desc: "do something",
//         isDone: false
//     },
//     {
//         id: 124,
//         desc: "do something",
//         isDone: true
//     }
// ]

// for (let i in arr) {
//     let { id, desc, isDone } = arr[i]
//     console.log({ id, desc, isDone });
// }

let obj = {
    "name": "manavi Dhale",
    "Mobile": 9067745035,
    "Courses": {
        "course1": "PHP",
        "course2": "Android",
        "course3": "Realmi"
    }
}
for (let i in obj.Courses) {
    let array = obj.Courses[i];
    console.log(array);
}