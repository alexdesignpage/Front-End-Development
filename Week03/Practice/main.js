const links = [
    {
        label: "Welcome Alert",
        url: "welcome.html"
    },
    {
        label: "Table",
        url: "table.html"
    },
    {
        label: "Tag",
        url: "tag.html"
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