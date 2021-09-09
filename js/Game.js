class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      
      }
      form = new Form()
      form.display();
    

    player1 = createSprite(100,650);
    player1.addImage(players1);
    player1.scale=0.5
    player2 = createSprite(100,550);
    player2.addImage(players2);
    player2.scale=1
    players = [player1, player2];
  }}

  play(){
    form.hide();
    image(bg1,0,0,1500,1000);
      
   Player.getPlayerInfo();
    if(allPlayers !== undefined){

      var index = 0;
      var x = 175 ;
      var y;
      for(var plr in allPlayers){
        index = index + 1 ;
        x = x + 200;
        x= displayWidth - allPlayers[plr].distance;
        players[index-1].x = x;
    
    }}
    if(frameCount%80===0){
      
      enemy = createSprite(random(100,1000),Math.round(random(400,490)),10,10);
      enemy.addImage(enemies);
      enemy.scale=0.5
      enemy.velocityX=random(-10,10);
           enemy.depth-=1
           enemyG.add(enemy)
      }
      players.depth=enemyG.depth 
     players.depth=enemyG.depth+50
 console.log(enemyG.depth)
    
   drawSprites();
  
    if(keyIsDown(LEFT_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }
    if(keyIsDown(RIGHT_ARROW) && player.index !== null){
      player.distance -=10
      player.update();
    }}}