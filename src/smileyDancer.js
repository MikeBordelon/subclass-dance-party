var MakeSmileyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="dancer blink" src="media/Happy.jpg"></img>');

  this.setPosition(top, left);
  
};

MakeSmileyDancer.prototype = Object.create(MakeDancer.prototype);
MakeSmileyDancer.prototype.constructor = MakeSmileyDancer;


MakeSmileyDancer.prototype.step = function() {
  var oldStep = MakeDancer.prototype.step.bind(this);

  oldStep();
  
};