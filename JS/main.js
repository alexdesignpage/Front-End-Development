const links = [
    {
        label: "WEEK1",
        url: "WEEK1/index.html"
    },
    {
        label: "WEEK2",
        url: "WEEK2/index.html"
    },
    {
        label: "WEEK3",
        url: "WEEK3/index.html"
    },
    {
        label: "WEEK4",
        url: "WEEK4/index.html"
    },
    {
        label: "WEEK5",
        url: "WEEK5/index.html"
    },
    {
        label: "WEEK6",
        url: "WEEK6/index.html"
    },

    {
        label: "WEEK7",
        url: "WEEK7/index.html"
    },

    {
        label: "WEEK8",
        url: "WEEK8/index.html"
    },
    {
        label: "WEEK9",
        url: "WEEK9/index.html"
    },
    {
        label: "WEEK10",
        url: "WEEK10/index.html"
    },
    {
        label: "WEEK11",
        url: "WEEK11/index.html"
    },
    {
        label: "WEEK12",
        url: "WEEK12/index.html"
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