//variables used
var allEnemies = [];
var player;
var movements;
var enemies_postion = [60, 140, 220];
// Enemies our player must avoid
var Enemy = function(x, y, speed) {
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started

  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
  this.x = x;
  this.y = y;
  //assinging the speed to the enemy
  this.speed = speed;

};
//Assinging the random position to the enemy
for (var i in enemies_postion) {
  var enemy = new Enemy(Math.random() * 200, enemies_postion[i], 100);
  allEnemies.push(enemy);
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
  this.x = this.x + (this.speed * dt);
  this.speed = 3 * Math.floor(Math.random() * 100);
  while (this.x >= 505) {
    this.x = 0;

  }
  //2D collision

  if (player.x < this.x + 70 && player.x + 40 > this.x &&
    player.y < this.y + 50 && player.y + 60 > this.y) {
    player.x = 200;
    player.y = 400;
    swal({
      title: "You crashed",


      imageUrl: "./images/crying.gif"

    })
  }

};


// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite = 'images/enemy-bug.png'), this.x, this.y);
};
//Setting the player position and image
var Player = function(x, y) {
  this.x = x;
  this.y = y;
  this.image = 'images/char-cat-girl.png';
}
//Assigining the initial position to the player
var player = new Player(200, 400);

Player.prototype.update = function(dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
  if (this.y < 60) {
    swal({
        title: "Success",
        imageUrl: "./images/tenor.gif"
      },
      function() {
        location.reload();
      }
    );
  }
};
Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.image), this.x, this.y);
};
//Assinging the movements to the player according to the keys
player.handleInput = function(movements) {
  switch (movements) {
    case 'left':
      if (this.x > 0) {
        this.x = this.x - 72;
      }
      break;

    case 'up':
      if (this.y > 0) {
        this.y = this.y - 82;
      }

      break;

    case 'right':
      if (this.x < 400) {
        this.x = this.x + 72;
      }

      break;
    case 'down':
      if (this.y < 400) {
        this.y = this.y + 82;

      }


      break;
  }
}


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
