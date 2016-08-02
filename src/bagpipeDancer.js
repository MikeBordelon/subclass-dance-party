var MakeBagpipeDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node = $('<img class="dancer bagPiper" src="media/bagpipe.png"></img>');
  this.setPosition(top, left);
};

MakeBagpipeDancer.prototype = Object.create(MakeDancer.prototype);
MakeBagpipeDancer.prototype.constructor = MakeBagpipeDancer;


MakeBagpipeDancer.prototype.step = function() {
  var oldStep = MakeDancer.prototype.step.bind(this);
  // call the old version of step at the beginning of any call to this new version of step
  //setTimeout(this.step, timeBetweenSteps);
  oldStep();
  
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  
};