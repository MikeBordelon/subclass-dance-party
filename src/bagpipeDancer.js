var MakeBagpipeDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  
  this.$node = $('<img class="dancer bagPiper" src="media/bagpipe.png"></img>');
  this.setPosition(top, left);
};

MakeBagpipeDancer.prototype = Object.create(MakeDancer.prototype);
MakeBagpipeDancer.prototype.constructor = MakeBagpipeDancer;


MakeBagpipeDancer.prototype.step = function() {
  var oldStep = MakeDancer.prototype.step.bind(this);

  oldStep();
};