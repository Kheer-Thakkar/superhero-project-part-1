var canvas=new fabric.Canvas("myCanvas");
 player_x=10;
 player_y=10;
 block_image_width=30;
 block_image_height=30;
 var player_object="";
 var block_image_object="";

 function player_update(){
    fabric.Image.fromURL("https://drive.google.com/file/d/1-hMfzjM02r_h02NDgkQk9WmFTB-ZErBt/view?usp=sharing",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        
    });

    canvas.add(player_object);

});
}
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_image_object=Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        
    });

    canvas.add(block_image_object);

});
}
if (keyPressed == '70'){
    new_image("https://i.postimg.cc/hGnyTPLB/ironman-face.png");
    console.log("f");
    
 }

 if (keyPressed == '70'){
    new_image("https://i.postimg.cc/FscwL6M0/spiderman-body.png");
    console.log("b");
    
 }

 if (keyPressed == '70'){
    new_image("https://i.postimg.cc/KzF6GDqt/hulk-legs.png");
    console.log("l");
    
 }

 if (keyPressed == '70'){
    new_image("https://i.postimg.cc/8s8BGtwS/thor-right-hand.png");
    console.log("r");
    
 }

 if (keyPressed == '70'){
    new_image("https://i.postimg.cc/rw7ckW29/captain-america-left-hand.png");
    console.log("h");
    
 }

 if (keyPressed == '38'){
    up();
    console.log("up");

 }
 if (keyPressed == '40'){
   down();
   console.log("down");
   
}
if (keyPressed == '37'){
   left();
   console.log("left");
   
}
if (keyPressed == '39'){
   right();
   console.log("right");
   
}