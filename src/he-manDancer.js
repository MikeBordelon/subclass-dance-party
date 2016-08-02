var MakeHeManDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  
  this.$node = $('<img class="dancer heMan" src="media/He-Man.png"></img>');
  this.setPosition(top, left);
};

MakeHeManDancer.prototype = Object.create(MakeDancer.prototype);
MakeHeManDancer.prototype.constructor = MakeHeManDancer;


MakeHeManDancer.prototype.step = function() {
  var oldStep = MakeDancer.prototype.step.bind(this);
 
  oldStep();

};