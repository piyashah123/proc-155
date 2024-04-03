AFRAME.registerComponent("game-play",{
    schema: {
        elementId: { type: "string", default: "#ring1" },
      },
  
update:function(){
    this.isCollided(this.data.elementId);
},
isCollided:function(elementId){
    const element =document.querySelector(elementId);
    if(elementId.includes("#ring")){
        console.log(elementId+"collision");
    } else if (element.includes("#hurdle")) {
        console.log("bird collision");
    } 
}
});