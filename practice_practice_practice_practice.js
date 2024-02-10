var obj = {
    "name": "shantuli Dhale",
    "courses": [
        { "catname": "Website Development", "cname": ["PHP,ASP.NET", "Node JS"] },
        { "catname": "Mobile App Development", "caname": ["Android", "Flutter"] },
        { "catname": "Digital Marketing", "caname": ["SEO", "SEM", "SMO"] }

    ]
};
for (let key in obj.courses) {
    var a = obj.courses[key].catname;
    console.log(a)

    for (let j in obj.courses[key].cname) {
        var a = obj.courses[key].cname[j];
        console.log(a);
    }

}
