const links = [
    {
        label: "WEEK1",
        url: "Week01/index.html"
    },
    {
        label: "WEEK2",
        url: "Week02/index.html"
    },
    {
        label: "WEEK3",
        url: "Week03/index.html"
    },
    {
        label: "WEEK4",
        url: "Week04/index.html"
    },
    {
        label: "WEEK5",
        url: "Week05/index.html"
    },
    {
        label: "WEEK6",
        url: "Week06/index.html"
    },

    {
        label: "WEEK7",
        url: "Week07/index.html"
    },

    {
        label: "WEEK8",
        url: "Week08/index.html"
    },
    {
        label: "WEEK9",
        url: "Week09/index.html"
    },
    {
        label: "WEEK10",
        url: "Week10/index.html"
    },
    {
        label: "WEEK11",
        url: "Week11/index.html"
    },
    {
        label: "WEEK12",
        url: "Week12/index.html"
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


