AFRAME.registerComponent("tour", {
  init: function () {
    this.placesContainer = this.el;
    this.createCards()
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "spider-man",
        title: "Spider Man",
        url: "./assets/thumbnails/spiderman.jpg",
      },
      {
        id: "iron-man",
        title: "Iron Man",
        url: "./assets/thumbnails/ironman.jpg",
      },

      {
        id: "end-game",
        title: "Endgame",
        url: "./assets/thumbnails/endgame.jpg",
      },
      {
        id: "super-man",
        title: "Super Man",
        url: "./assets/thumbnails/superman.jpg",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition +30;
      const posY = 10;
      const posZ = -30;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      const borderEl = this.createBorder(
        position,item.id
      )
      // Thumbnail Element
      const thumbnailsEl = this.createThumbnail(
        item.url
      )
      borderEl.appendChild(thumbnailsEl)
      // Title Text Element
      const titleEl =  this.createTitle(
        position,item.title
      )
      borderEl.appendChild(titleEl)
      this.placesContainer.appendChild(borderEl);
    }
  },
  
  createBorder: function(position,id){
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("position", position)
    entityEl.setAttribute("id", id)
    entityEl.setAttribute("geometry",{primitive:"plane",width:22,height:40})
    entityEl.setAttribute("material",{color:"Red",opacity:0.9})
    entityEl.setAttribute("visible",true)

    //Add cursor-listener component to the ring border entity to change it's color 
    //On Cursor 'mouseenter' and 'mouseleave' entity
    entityEl.setAttribute("cursor-listener", {});
    
    return entityEl
  },
  

  createThumbnail: function(url){
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true)
    entityEl.setAttribute("geometry",{primitive:"plane",width:20,height:28})
    entityEl.setAttribute("position",{x:0,y:5.0,z:0.1})
    entityEl.setAttribute("material",{src:url})
    return entityEl
  },

  createTitle: function(position,title){
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true)
    const elPosition = position
    elPosition.y = -20
    entityEl.setAttribute("position",elPosition)
    entityEl.setAttribute("text",{font:"dejavu",width:70,color:"red",align:"center",value: title})
    return entityEl
  }
});
