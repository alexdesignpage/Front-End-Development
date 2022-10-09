const links = [
    {
        label: "Drum Kit",
        url: "01 - JavaScript Drum Kit/index-START.html"
    },
    {
        label: "Clock",
        url: "02 - JS and CSS Clock/index-START.html"
    },
    {
        label: "CSS Variables",
        url: "03 - CSS Variables/index-START.html"
    }
];


var contents = document.getElementById("contents");

function generateContents() {
    links.forEach(function (item, index) {
        console.log(index, item);
        let listItem = "<div><a href=\"" + item.url + "\" >" + item.label + "</a></div>";
        console.log(listItem);
        contents.innerHTML += listItem;
    })
}

document.addEventListener("load", generateContents());