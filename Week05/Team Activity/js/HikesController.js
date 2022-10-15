import HikeModel from './HikeModel.js';
import HikesView from './HikesView.js';

// HIKE CONTROLLER
export default class HikesController {
    constructor(parentId) {
        this.parentElement = document.getElementById(parentId);
        // this is how our controller will know about the model and view
        this.hikeModel = new HikeModel();
        this.HikesView = new HikesView(parentId);
    }

    showHikeList() {
        // this will get called each time to display oour full hike list.
        const id = document.getElementById('hikes');
        this.HikesView.renderHikeList(this.hikeModel.getAllHikes(), id);
    }

    showOneHike(hikeName) {
        // use this when you need to show just one hike... with full details

    }

    addHikeListener() {
        // for the stretch you will need to attach a listener of each of the listed hikes
    }
}