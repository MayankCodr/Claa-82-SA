var mouseEvent = "empty";
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "black";
radius_of_the_circle = 50;
width_of_the_line = 5;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    color = document.getElementById("color").value;
    radius_of_the_circle = document.getElementById("radius_of_the_circle").value;
    width_of_the_line = document.getElementById("width_of_the_line").value;

    mouseEvent = "mouseDown";

}



canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    if(mouseEvent =="mouseDown"){
        console.log("Last position of x and y coordinates = ");
        console.log("x = "+ current_position_of_mouse_x + "y = "+ current_position_of_mouse_y );  
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth =width_of_the_line;
        ctx.arc (current_position_of_mouse_x, current_position_of_mouse_y, radius_of_the_circle ,0 , 2*Math.PI);
        ctx.stroke();
    }

}



canvas.addEventListener("mouseup", mouse_up);
function mouse_up(){
    mouseEvent = "mouseUP";

}


canvas.addEventListener("mouseleave", mouse_leave);
function mouse_leave(){
    mouseEvent = "mouseleave";

}



function cleararea(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

}

