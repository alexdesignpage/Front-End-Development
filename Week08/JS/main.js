const links = [
    {
        label: "Reading",
        url: "Reading/index.html"
    },
       
    {
        label: "Team Activity",
        url: "TeamActivity/swapi.html"
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