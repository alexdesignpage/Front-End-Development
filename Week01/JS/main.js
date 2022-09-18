const links = [
    {
        label: "Story",
        url: "Story/index.html"
    },
    {
        label: "Number",
        url: "Number/index.html"
    },
    {
        label: "Notes",
        url: "Notes/index.html"
    },
    {
        label: "Customers",
        url: "Customers/index.html"
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