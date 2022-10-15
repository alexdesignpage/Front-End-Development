//  HIKE VIEW HANDLER
export default class HikesView {
    constructor(listElement) {
        //  will need this
        this.imgBasePath = '//byui-cit.github.io/cit261/examples/';

    }
    renderHikeList(hikeList, listElementId) {
        // loop through our list of hikes building out the appropriate HTML for each and append
        hikeList.forEach(hike => {
            listElementId.appendChild(this.renderOneHikeLight(hike));
        })
     
    
    }
    renderOneHikeLight(hike) {
        // this mehtod will be used to create the list of hikes with less detail: name, image,
        const item = document.createElement('li');
        item.innerHTML = `<h3>${hike.name}</h3>
                        <img src='${this.imgBasePath}${hike.imgSrc}' alt='${hike.imgAlt}'>
                        <p>Distance: ${hike.distance}</p>
                        <p>Difficulty: ${hike.difficulty}</p>`
        return item;
         
    }
    renderOneHikeFull(hike, parentElement) {
        // this method will be used to one hike full detail... you will need this for the
        
    }
}