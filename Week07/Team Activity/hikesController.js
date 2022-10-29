// The controller needs access to both the model and the view...so let's import them
import HikeModel from './hikeModel.js';
import HikesView from './hikesView.js';
import Comments from './comment.js';

// Just like with the view we should organize the functions we need to our controller. Let's use a class for this one

//CommentsController.getAllComments();
//CommentsController.addComment("Hike1", "lore spfovm ");
//CommentsController.addComment("Hike2", "lore nviovoeiv ");
//CommentsController.renderCommentList(CommentsController.getAllComments());


export default class HikesController {
  // a class needs a constructor
  constructor(parentId) {
    this.parentElement = document.getElementById(parentId);
    this.hikeModel = new HikeModel();
    this.hikesView = new HikesView(parentId);
    this.commentsController = new Comments('comment', 'commentsContainer');
  }
  showHikeList() {
    // the list of hikes will come from the model now...
    const hikeList = this.hikeModel.getAllHikes();
    // send the list of hikes and the element we would like those placed into to the view.
    this.hikesView.renderHikeList(this.parentElement, hikeList);
    this.commentsController.renderCommentList(this.commentsController.getAllComments())
    // after the hikes have been rendered...add our listener
    this.addHikeListener();
  }
  showOneHike(hikeName) {
    const hike = this.hikeModel.getHikeByName(hikeName);
    this.commentsController.renderCommentCreator(hike.name);
    this.commentsController.renderCommentList(this.commentsController.filterCommentsByName(hike.name));
    this.hikesView.renderOneHikeFull(
      this.parentElement,
      hike
    ).ontouchend = () => {
      this.showHikeList();
      this.commentsController.removeCommentCreator();
    };
  }
  // in order to show the details of a hike ontouchend we will need to attach a listener AFTER the list of hikes has been built. The function below does that.
  addHikeListener() {
    // We need to loop through the children of our list and attach a listener to each, remember though that children is a nodeList...not an array. So in order to use something like a forEach we need to convert it to an array.
    const childrenArray = Array.from(this.parentElement.children);
    childrenArray.forEach(child => {
      child.addEventListener('touchend', e => {
        // why currentTarget instead of target?
        this.showOneHike(e.currentTarget.dataset.name);
      });
    });
  }
}