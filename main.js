
var canvas= new fabric.canvas('myCanvas');

ball_y=0;
ball_x=0;
hole_y=400;
hole_x=800;


block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.formUrl("golf-h1.png", function(Img) {
		hole_obj = Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			top:hole_y,
			left:hole_x	
		});
	});
	new_image();
}

function new_image()
{
	fabric.Image.formUrl("ball.png", function(Img) {
		ball_obj = Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
			top:hole_y,
			left:hole_x	
		});
		canvas.add(ball_obj);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_x==hole_x)&&(ball_y==hole_y)){
		canvas.remove(ball.obj);
		document.getElementById("hd3").innerHTML="You have hit the Gooaaalll!!!";
		document.getElementById("myCanvas").style.borderColer="red";
	}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up(){
		if(player_y>=0)
		{
			player_y=player_y-block_image_height;
			console.log("block image height=" + block_image_height);
			console.log("when up arrow key pressed, X = " + player_x +",Y = " + player_y);
			canvas.remove(player_object);
			player_update();
	
			
		}
	}

	function down(){
		if(player_y<=450)
		{
			player_y=player_y+block_image_height;
			console.log("block image height=" + block_image_height);
			console.log("when down arrow key pressed, X = " + player_x +",Y = " + player_y);
			canvas.remove(player_object);
			player_update();
	
			
		}
	}
	function left(){
		if(player_x>0)
		{
			player_x=player_x-block_image_width;
			console.log("block image width=" + block_image_width);
			console.log("when left arrow key pressed, X = " + player_x +",Y = " + player_y);
			canvas.remove(player_object);
			player_update();
	
			
		}
	}

	function left(){
		if(player_x>0)
		{
			player_x=player_x-block_image_width;
			console.log("block image width=" + block_image_width);
			console.log("when left arrow key pressed, X = " + player_x +",Y = " + player_y);
			canvas.remove(player_object);
			player_update();
	
			
		}
	}
	
}
