// Creates and returns a new dancer object that can step
var MakeDancer = function(top, left, timeBetweenSteps) {

 
  this.$node = $('<img src="media/Happy.jpg" class="dancer"></img>');
  // use jQuery to create an HTML <span> tag
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();


  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);

};

MakeDancer.prototype.step = function() {
  var stepper = this.step.bind(this);
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
  setTimeout(stepper, this.timeBetweenSteps);
}; 

MakeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left,
    transition: 'all 2s'
  };
  this.$node.css(styleSettings);
  this.style = styleSettings;
};

MakeDancer.prototype.interact = function(friend) {
  var myStyle = this.style;
  var friendStyle = friend.style;
  var myClass = this.$node.attr('class');
  var friendClass = friend.$node.attr('class');
  
  this.$node.css(friendStyle);
  friend.$node.css(myStyle);
  
  friend.style = myStyle;
  this.style = friendStyle;
  
  var swapClass = function() {
    this.$node.attr('class', friendClass);
    friend.$node.attr('class', myClass);
  }.bind(this);
  setTimeout(swapClass, 500);
};