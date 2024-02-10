// let a = {
//     "India": {
//         "temperature": 12,
//         "condition": "cloudy"

//     }
// }
// const add = Object.keys(a);
// for (let i = 0; i < add.length; i++) {
//     console.log(add[i]);

// }


// let a = {
//     "key-1": {
//         "nested-key-1": "nested-value",
//         "nested-key-2": "nested-value-2"
//     },
//     "key-2": "d",
//     "key-3": {
//         "shantuli": "dhale",
//     },
//     "key-4": [
//         { "laptop": "asusViviobook", }
//     ]
// }

// const array = Object.keys(a);
// for (let i = 0; i < array.length; i++) {


//     if (i == 0) {
//         console.log(array[i], ":", a["key-1"]);
//     }
//     if (i == 1) {
//         console.log(array[i], ":", a["key-2"]);
//     }
//     if (i == 2) {
//         console.log(array[i], ":", a["key-3"]);
//     }
//     if (i == 3) {
//         console.log(array[i], ":", a["key-4"]);
//     }
// }


let a = {
    "key-1": {
        "nested-key-1": "nested-value",
        "nested-key-2": "nested-value-2"
    },
    "key-2": "d",
    "key-3": 3,

    "key-4": [
        { "laptop": "asusViviobook", }
    ]
}


for (let key in a["key-1"]) {

    console.log("key-1 in keys : ", key);
}

for (let key in a["key-1"]) {

    console.log(key, ": ", a["key-1"][key]);
}

for (let key in a) {

    if (key === "key-2") {

        console.log("key is", key, "Value is string =>", a[key]);
    } else if (key === "key-3") {

        console.log("key is", key, "Value is Number =>", a[key]);
    }
}
