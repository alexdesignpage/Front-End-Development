const links = [
    {
        label: "WEEK1: Localstorage",
        url: "Week01/index.html"
    },
    {
        label: "WEEK2: Arrays and Functions",
        url: "Week02/index.html"
    },
    {
        label: "WEEK3: Objects",
        url: "Week03/index.html"
    },
    {
        label: "WEEK4: Forms",
        url: "Week04/index.html"
    },
    {
        label: "WEEK5: Testing and Debugging",
        url: "Week05/index.html"
    },
    {
        label: "WEEK6: To Do List",
        url: "Week06/index.html"
    },

    {
        label: "WEEK7: Callbacks",
        url: "Week07/index.html"
    },

    {
        label: "WEEK8: Transforms and Transitions",
        url: "Week08/index.html"
    },
    {
        label: "WEEK9: API",
        url: "Week09/index.html"
    },
    {
        label: "WEEK10: Using Fetch",
        url: "Week10/index.html"
    },
    {
        label: "WEEK11: Authentication with JWT",
        url: "Week11/index.html"
    },
    {
        label: "WEEK12: Final Project Discussion",
        url: "https://cdnapisec.kaltura.com/p/1157612/sp/115761200/embedIframeJs/uiconf_id/42438272/partner_id/1157612?iframeembed=true&playerId=kaltura_player&entry_id=1_qn4xhbkl&flashvars[streamerType]=auto&amp;flashvars[localizationCode]=en&amp;flashvars[leadWithHTML5]=true&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_rv51o1ix"
    },
    {
        label: "Final Project",
        url: "FinalProject/index.html"
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