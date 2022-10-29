import HikesController from './hikesController.js';
import Comments from './comment.js';
//on load grab the array and insert it into the page
const myHikesController = new HikesController('hikes');
const CommentsController = new Comments('comment');
window.addEventListener('load', () => {
  myHikesController.showHikeList();
  CommentsController.getAllComents();
});
