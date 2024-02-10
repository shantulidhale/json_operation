let obj = {
    "name": "manavi dhale",
    "mobile": 9067745035,
    "courses": ["C", "CSS", "HTML", "Javascript"]

}
// obj.courses[0] = "Android";
delete obj.courses[1];
for (let i = 0; i < obj.courses.length; i++) {
    console.log(obj.courses[i])
}

// let a = {
//     name: "shantuli dhale",
//     laptop: "MACBook",
//     city: "pune",
//     mobile: 5020321045,
//     bag: "hp",
//     book: "story Book",
//     notebook: ["new", "old", "purana"],
// }
// let data = JSON.stringify(a)
// console.log(data)