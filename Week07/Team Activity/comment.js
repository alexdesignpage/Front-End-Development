import ls from "./ls.js";
export default class  Comments {
    constructor(type) {
        this.ls = new ls(type);
    }
    addComment(hikeName, comment) {
        const newComment = {
            name: hikeName,
            date: new Date(),
            content: comment
          };
          window.localStorage.setItem(type, newComment);

    }

  
    

    getAllComents() {
       var n = this.ls.getSavedItems();
       console.log(n);

    }
    renderCommentList() {


    }

    filterCommentsByName() {
    }
}