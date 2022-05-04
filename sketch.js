var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
   
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(79,580,200,30);
    block1.shapeColor = "blue";

    block2 = createSprite(285,580,200,30);
    block2.shapeColor = "orange";

    block3 = createSprite(775,580,360,30);
    block3.shapeColor = "green";

    block4 = createSprite(490,580,200,30);
    block4.shapeColor = "red";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX = 8;
    ball.velocityY = 8;
    

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball)){
        ball.shapeColor = "blue";
        
    }



    if(block2.isTouching(ball)){
        ball.shapeColor = "orange";

        

        
    }

    if(block3.isTouching(ball)){
        ball.shapeColor = "green";
        

        
    }

    if(block4.isTouching(ball)){
        ball.shapeColor = "red";
        

        
    }

    drawSprites();
}
