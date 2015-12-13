var Cylon = require('cylon');

Cylon.robot({
  connections: [
{ name: 'ardrone', adaptor: 'ardrone', port: '192.168.1.1' },
{ name: 'keyboard', adaptor: 'keyboard' }
],
devices: [
{name: 'drone', driver: 'ardrone', connection: 'ardrone'},
{name: 'keyboard', driver: 'keyboard', connection:'keyboard'}
],

work: function(my) {

  my.keyboard.on('t', function(key) { 
    my.drone.takeoff();
  });

  my.keyboard.on('space', function(key) { 
    my.drone.stop();
  });

  my.keyboard.on('m', function(key) { 
    my.drone.land();
  });

  my.keyboard.on('c', function(key) { 
    my.drone.calibrate(1);
  });

  my.keyboard.on('o', function(key) { 
    my.drone.up(0.5);
  });

  my.keyboard.on('l', function(key) { 
    my.drone.down(0.5);
  });

  my.keyboard.on('1', function(key) { 
    my.drone.wave();
  });

  my.keyboard.on('2', function(key) { 
    my.drone.frontFlip();
  });

  my.keyboard.on('3', function(key) { 
    my.drone.backFlip();
  });

  my.keyboard.on('5', function(key) { 
    my.drone.rightFlip();
  });

  my.keyboard.on('4', function(key) { 
    my.drone.leftFlip();
  });

  my.keyboard.on('d', function(key) {
    my.drone.right(0.1);
  });

  my.keyboard.on('q', function(key) { 
    my.drone.counterClockwise(1);
  });

  my.keyboard.on('e', function(key) { 
    my.drone.clockwise(1);
  });

  my.keyboard.on('a', function(key) { 
    my.drone.left(0.1);
  });

  my.keyboard.on('w', function(key) { 
    my.drone.front(0.1);
  });

  my.keyboard.on('s', function(key) { 
    my.drone.back(0.1);
  });

}
}).start();
