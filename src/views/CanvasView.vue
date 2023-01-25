<template>

<div id="canvasCont">
    <canvas id="canvas" style="background-color: white;" height="1000px" width="1000px">


    
    </canvas>
</div>



<!-- template --> 
<div style="display: none; background-color: blue;" data-type="template" data-section="movies" data-movie_id="myid" id="movie-id" class="movie anotherclass">
    
    <div class="aCSSclass">
        <div class="aCSSclass">
            <div class="aCSSclass"></div>
            <div class="aCSSclass">
                <div class="aCSSclass title">
                    Movie title
                </div>

                <div class="details form-group">
                    <a class="aCSSclass">Details</a>
                    <button onclick="SomeFunction" class="aCSSclass">My button</button>
                    <div class="aCSSclass"><span class="icon star"></span><span class="aCSSclass"></span><span class="aCSSclass"></span><span class="aCSSclass"></span><span class="aCSSclass"></span></div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>


<script >
/* eslint-disable no-unused-vars */
export default {
  name: 'CanvasView',

}/*
$(function() {
    const timeID = setInterval(drawAll, 10);
    // canvas related variables
    // references to canvas and its context and its position on the page
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var $canvas = $("#canvas");
    var canvasOffset = $canvas.offset();
    var canvasOffsetX = canvasOffset.left;
    var canvasOffsetY = canvasOffset.top;
    var scrollX = $canvas.scrollLeft();
    var scrollY = $canvas.scrollTop();
    var cw = canvas.width + canvasOffsetX;
    var ch = canvas.height + canvasOffsetY;

    // flag to indicate a drag is in process
    // and the last XY position that has already been processed
    var isDown = false;
    var lastX;
    var lastY;

    // the radian value of a full circle is used often, cache it
    var PI2 = Math.PI * 2;

    // variables relating to existing circles
    var circles = [];
    var stdRadius = 10;
    var draggingCircle = -1;
  
    var drag;

    function Cube(posX, posY,color="red",sizeX= 25,sizeY=25) {
        this.posX = posX;
        this.posY = posY;
        this.sizeX = sizeX;
        this.sizeY = sizeY;
        this.color = color;
        this.draw = function(posX = this.posX,posY = this.posY){
            ctx.beginPath();
            ctx.arc(posX, posY, 5, 0, PI2);
            ctx.closePath();
            ctx.fillStyle = this.color;
            ctx.fill();
        }
        this.hitbox = function(x,y) {
            //returns if pos is in hitbox
            
            if((x > this.posX && x < this.posX+sizeX) && (y > this.posY && y < this.posY+sizeY)){
                return true;
            }
            return false;
        }
        this.changeColor = function() {
            if(this.color == "blue"){
                this.color = "red"
            }else{
                this.color = "blue"
            }
        }
    }
    function Menu(posX, posY,color="red",sizeX= 150,sizeY=100) {
        this.posX = posX;
        this.posY = posY;
        this.sizeX = sizeX;
        this.sizeY = sizeY;
        this.color = color;
        this.exists = false;
        this.myID="PLACEHOLDER";
        this.spawn = function(posX = this.posX, posY = this.posY){
            var docFrag = document.createDocumentFragment();
            var tempNode = document.querySelector("div[data-type='template']").cloneNode(true); //true for deep clone
            tempNode.id = this.myID;
            tempNode.style.position = "absolute";
            tempNode.style.top = ""+this.posX+"px";
            tempNode.style.left = ""+this.posY+"px";
            tempNode.style.height = sizeY+"px";
            tempNode.style.width = sizeX+"px";
            //tempNode.querySelector("div.title").textContent = movies[keys[i]].title;
            //tempNode.querySelector("img").src = movies[keys[i]].imageurl;
            //tempNode.querySelector("button").onclick = window[movies[keys[i]].func];
            //tempNode.querySelector("a").href = movies[keys[i]].details;
            tempNode.style.display = "block";
            docFrag.appendChild(tempNode);
            document.querySelector("#canvasCont").appendChild(docFrag);
            //delete docFrag;
            this.exists = true;
        }
        this.draw = function(posX = this.posX,posY = this.posY){
            if(!this.exists){this.spawn(posX,posY)}
            else{
                document.querySelector("#"+this.myID).style.left = posX+"px";
                document.querySelector("#"+this.myID).style.top = posY+"px";
                

            }
        }
        this.hitbox = function(x,y) {
            //returns if pos is in hitbox
            //console.log("AA");
            
            if((x > this.posX && x < this.posX+this.sizeX) && (y > this.posY && y < this.posY+this.sizeY)){
                return true;
            }
            return false;
        }
        this.changeColor = function() {
            if(this.color == "blue"){
                this.color = "red"
            }else{
                this.color = "blue"
            }
        }
        this.moveTo = function(x,y) {
            if(x<(cw-sizeX)){            
                this.posX = x;
            }else{this.posX=cw-sizeX}
            if(y<(ch-sizeY)){            
                this.posY = y;
            }else{this.posY=ch-sizeY}
        }
    }
    var elements = []
    elements.push(new Cube(50,50))
    elements.push(new Cube(100,100))
    elements.push(new Cube(100,200))
    elements.push(new Cube(150,150))
    elements.push(new Menu(150,150))

    // clear the canvas and redraw all existing circles
    function drawAll() {
        //console.log(drag)
        ctx.clearRect(0, 0, cw, ch);

        
        
        elements.forEach(el => {
            //console.log(el)
            el.draw()
        });



    }

    function handleMouseDown(e) {
        // tell the browser we'll handle this event
        e.preventDefault();
        e.stopPropagation();

        
        // save the mouse position
        // in case this becomes a drag operation
        lastX = parseInt(e.clientX - canvasOffsetX);
        lastY = parseInt(e.clientY - canvasOffsetY);
        hitElements = []
        elements.forEach(el => {
            
            
            if(el.hitbox(e.clientX,e.clientY)){
                el.changeColor()
                drag = el;
                let a = el.posX - lastX;
                let b = el.posY - lastY;
                drag = [el,a,b];
                hitElements.push([el,a,b])
            }
        });


    }

    function handleMouseUp(e) {
        // tell the browser we'll handle this event
        e.preventDefault();
        e.stopPropagation();
        drag = undefined;
        // stop the drag
        isDown = false;
        console.log("BB");
    }

    function handleMouseMove(e) {

        // if we're not dragging, just exit
        //if (!isDown) { return; }

        // tell the browser we'll handle this event
        e.preventDefault();
        e.stopPropagation();
        if (!drag[0]) { return; }

        // get the current mouse position
        mouseX = parseInt(e.clientX - canvasOffsetX);
        mouseY = parseInt(e.clientY - canvasOffsetY);

        // calculate how far the mouse has moved
        // since the last mousemove event was processed
        var dx = mouseX - lastX;
        var dy = mouseY - lastY;

        // reset the lastX/Y to the current mouse position
        lastX = mouseX;
        lastY = mouseY;
        if(drag[0]){
            drag[0].moveTo(mouseX + drag[1],mouseY + drag[2]);
            //drag[0].posX = mouseX + drag[1]
            //drag[0].posY = mouseY + drag[2]
        }
        // change the target circles position by the 
        // distance the mouse has moved since the last
        // mousemove event
        draggingCircle.x += dx;
        draggingCircle.y += dy;

    }

    $(document).mousedown(function(e) { handleMouseDown(e); });
    $(document).mousemove(function(e) { handleMouseMove(e); });
    $(document).mouseup(function(e) { handleMouseUp(e); });
    $(document).mouseleave(function(e) { handleMouseUp(e); });

    //////////////////////
    // Utility functions

    function randomColor(){ 
        return('#' + Math.floor(Math.random()*16777215).toString(16));
    }


}); // end $(function(){});



*/
</script>



