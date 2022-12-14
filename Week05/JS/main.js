const links = [
   
    
    {
        label: "Team Activity",
        url: "Team Activity/hiking-start.html"
    },
    {
        label: "To-Do Challange",
        url: "To Do Challange/design.html"
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