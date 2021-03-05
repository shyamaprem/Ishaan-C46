var bg;
var oasis, desert, plains, swamp;
var knight, knightImg, dragon, dragonImg;
var ground;
var appleImage;
var apple, sprite, applesGroup; 
var score = 0;

function preload(){
    loadBgImages();
    knightImg = loadImage("Knight.png");
    dragonImg = loadImage("dragon.png");
    appleImage = loadImage("fruit.png");
    
}

function setup() {
    createCanvas(1400, 800);

    //knight
    knight = createSprite(200, 650);
    knight.addImage(knightImg);
    knight.setCollider("rectangle", 0,0, 200,200);
    knight.debug = true;
    knight.scale = 0.6;

    //dragon
    dragon = createSprite(150, 200);
    dragon.addImage(dragonImg);
    dragon.scale = 0.6;

    //ground
    ground = createSprite(700, 780, 1400, 20);


    //Group
   // applesGroup = new Group();

    applesGroup = createGroup();
    
    
}

function draw() {
    chooseBackground();
    background(bg);
    knight.collide(ground);
    ground.visibile = false;

    if(keyDown(UP_ARROW) && knight.y >= 600){
        knight.velocityY = -20;
    }
    if(keyDown(DOWN_ARROW)){
        knight.velocityY = 10;
    }
    knight.velocityY += 1;
    
    apples();
    textSize(20);
    textStyle(BOLD);
    fill("green");
    text("Score : " + score, 600, 400);
    if(applesGroup.isTouching(knight)){
        
        //applesGroup.remove(sprite);
        //applesGroup.destroyEach();
        applesGroup.get(0).destroy();
        score += 100;
        //console.log("TOUCHING.." + applesGroup.size());
    }
    drawSprites();
}

function chooseBackground() {
    if(frameCount <= 1000) {
        bg = plains;
    }
    if(frameCount <= 2000 && frameCount > 1000) {
        bg = desert;
    }
    if(frameCount <= 2500 && frameCount > 2000) {
        bg = oasis;
    }
    if(frameCount <= 3000 && frameCount > 2500) {
        bg = desert;
    }
    if(frameCount <= 4000 && frameCount > 3000) {
        bg = swamp;
    }
}

function loadBgImages() {
    oasis = loadImage("oasis.jpg");
    print(oasis);
    desert = loadImage("desert.jpg");
    print(desert);
    plains = loadImage("plains.jpg");
    print(plains);
    swamp = loadImage("swamp.jpg");
    print(swamp);
}

function apples() {
    if(frameCount % 100 === 0) {
        //apple = new Apple();
        sprite = createSprite(1500, random(400, 700));
        sprite.addImage(appleImage);
        sprite.velocityX = -4;
        sprite.lifetime = 1500;
        sprite.scale = 0.1;
        applesGroup.add(sprite);
        //console.log("added.." + applesGroup.size());

    }

   
}
