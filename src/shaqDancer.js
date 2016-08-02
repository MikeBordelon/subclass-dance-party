var MakeShaqDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
 
  this.$node = $('<img class="dancer spinner" src="media/Shaq.jpg"></img>');
  this.setPosition(top, left);
};

MakeShaqDancer.prototype = Object.create(MakeDancer.prototype);
MakeShaqDancer.prototype.constructor = MakeShaqDancer;


MakeShaqDancer.prototype.step = function() {
  var oldStep = MakeDancer.prototype.step.bind(this);
  
  oldStep();
};