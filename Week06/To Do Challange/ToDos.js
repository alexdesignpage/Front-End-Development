

function removeItem(item){
    var itemToRemove = document.getElementById(item);
        itemToRemove.parentNode.removeChild(itemToRemove);
    }

function addItem() {
    var aName = document.getElementById("to-do-item").value
    var aState = "new"
    var aList = {
        "task": aName

        
    }

    console.log(aList);
    var allItems = null
    var storedToDoItems = localStorage["all_items"]
    if (storedToDoItems == null) {
        allItems = []
    }
    else {
        allItems = JSON.parse(storedToDoItems)
    }
    allItems.push(aList)
    var allList = JSON.stringify(allItems)
    localStorage["all_items"] = allList
    showAllToDos()

    document.getElementById("to-do-item").value = null
 
}
let count = 0;
function handleClick() {
   return count += 1;
}

function crossedOut(item){
    
    
    if (count%2!==0){
    document.getElementById(item).style.textDecoration = "line-through";
    
    console.log(count);
    }
    else{
    document.getElementById(item).style.textDecoration = "none"; 
    
    console.log(count);
    }
    
}

function showAllToDos() {
    var storedToDoItems = localStorage["all_items"]
    if (storedToDoItems != null) {
        var allItems = JSON.parse(storedToDoItems)
        var ItemsDisplay = document.getElementById("all-todo")
     ItemsDisplay.innerHTML = null
        var numberOfItems = allItems.length
        for (var i = 0; i < allItems.length; i++) {
            var aList = allItems[i]
         ItemsDisplay.innerHTML += '<div id="item' + i + '"><input name="\'item' + i + '\'" type="checkbox" onclick="crossedOut(\'item' + i + '\');handleClick();"><label for="checkbox">'+ aList["task"]+'</label>'+"<p>"
        
         console.log(handleClick());

        }
    }
}

function clearAll(){
localStorage.clear();
    location.reload();

}

