const links = [
    {
        label: "Practice",
        url: "Practice/hero.html"
    },
    
    {
        label: "Team Activity",
        url: "Team Activity/index.html"
    }
    ,
    {
        label: "30 days of JAVA",
        url: "30 Day Challange/index.html"
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