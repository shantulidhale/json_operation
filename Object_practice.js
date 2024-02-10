

// let a = {
//     "name": "ram",
//     "lname": "latake",
//     "office": "arraypointer",
//     "title": "Featured collection",
//     "heading_size": "h2",
//     "collection": "all",
//     "products_to_show": 4,
//     "columns_desktop": 4,
//     "show_view_all": true,
//     "color_scheme": "background-1",
//     "image_ratio": "square",
//     "show_secondary_image": false,
//     "show_vendor": false,
//     "show_rating": false,
//     "columns_mobile": "2",
//     "swipe_on_mobile": false,
//     "padding_top": 36,
//     "padding_bottom": 36,
//     "margin": "one",
//     "margin_top": "2rem",
//     "heading_name": "makesthingeasy",
//     "project_name": "bookmark_design",
//     "laptop_name": "asus-vivobook",
//     "mobile_name": "vivo",
//     "headphone": "KDM"
// }

// const keys = Object.keys(a);

// const values = Object.values(a);

// for (let i = 0; i < keys.length; i++) {
//     console.log(` ${keys[i]}: ${values[i]}`);
// }


let a = {
    "name": "ram",
    "lname": "latake",
    "office": "arraypointer",
    "title": "Featured collection",
    "heading_size": "h2",
    "collection": "all",
    "products_to_show": 4,
    "columns_desktop": 4,
    "show_view_all": true,
    "color_scheme": "background-1",
    "image_ratio": "square",
    "show_secondary_image": false,
    "show_vendor": false,
    "show_rating": false,
    "columns_mobile": "2",
    "swipe_on_mobile": false,
    "padding_top": 36,
    "padding_bottom": 36,
    "margin": "one",
    "margin_top": "2rem",
    "heading_name": "makesthingeasy",
    "project_name": "bookmark_design",
    "laptop_name": "asus-vivobook",
    "mobile_name": "vivo",
    "headphone": "KDM"
}
// const add = Object.keys(a);
// for (let i = 0; i < add.length; i++) {

//     console.log(add[i], ":", a[add[i]]);
// }

const shantuli = Object.keys(a);
for (let i = 0; i < shantuli.length; i++) {

    if (i == 5 || i == 10) {
        console.log(shantuli[i], ":", a[shantuli[i]]);
    }
}