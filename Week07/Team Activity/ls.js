export default class ls{
    constructor(key){
        this.key = key;
    }
    getSavedItems(){
        const saved = localStorage.getItem(this.key);
        return JSON.parse(saved);
    }
    setSavedItems(list){
        const stringList = JSON.stringify(list);
        localStorage.setItem(this.key, stringList);
    }
}