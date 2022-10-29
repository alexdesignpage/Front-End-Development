import ls from "./ls.js";
export default class  Comments {
    constructor(type, parentId) {
        this.ls = new ls(type);
        this.parentId = parentId;
        if(this.ls.getSavedItems() === null){
            this.ls.setSavedItems([]);
        }
        this.comments = this.ls.getSavedItems();
    }
    addComment(hikeName, comment) {
        const newComment = {
            name: hikeName,
            date: new Date(),
            content: comment
          };
        this.comments.push(newComment)
        this.saveAllComments(); 
    }
    saveAllComments(){
        this.ls.setSavedItems(this.comments);
    }

    getAllComments() {
        return this.comments;

    }
    renderCommentList(list) {
        document.getElementById(this.parentId).innerHTML = '';
        list.forEach(x => {
            const div = document.createElement("div");
            div.classList.add("comment");
            const hikeHeader = document.createElement("h3");
            hikeHeader.textContent = x.name;
            div.appendChild(hikeHeader);
            const commentParagraph = document.createElement("p");
            commentParagraph.textContent = x.content;
            div.appendChild(commentParagraph);
            document.getElementById(this.parentId).appendChild(div);
        })
    }

    renderCommentCreator(hikeName){
        console.log("s");
        const div = document.getElementById("createCommentContainer");
        const textarea = document.createElement("textarea");
        textarea.placeholder = "Write your comment here!";
        div.appendChild(textarea);
        const button = document.createElement("button");
        button.type = "button";
        button.id = "createComment";
        button.innerText = "Submit";
        button.addEventListener("touchend", (e) => {
            console.log(Date.now());
            this.addComment(hikeName, textarea.value);
            textarea.value = "";
            this.renderCommentList(this.filterCommentsByName(hikeName));
        }, false)
        div.appendChild(button);
    }

    removeCommentCreator(){
        document.getElementById("createCommentContainer").innerHTML = '';
    }

    renderFilteredComments(hikeName){
        document.getElementById(this.parentId).innerHTML = '';
    }

    filterCommentsByName(key) {
        return this.comments.filter(x => x.name === key)
    }
}