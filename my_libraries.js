var getRandomInt = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

//takes an array of numbers and chooses one of the array elements randomly.
Array.prototype.chooseRandom = function() {
  return this[getRandomInt(0, this.length)];
};

//Finds dot product of two arrays.
Array.prototype.dotProduct = function(arr) {
  return this.reduce(function(sum, element, index) {
    return sum + element * arr[index];
  }, 0);
};

//returns true if each element of the array contains the single value argument
Array.prototype.all = function(test){
  return this.reduce(function(sofar,element){
    return (sofar && (element === test));
  },true);
  
//returns new array from extracted elements of orginal array
//argument is an array containing index of elements that need
//to be extracted.
 Array.prototype.subArray = function(arr1){
  var arr = [];
  for(var i = 0; i < arr1.length; i++){
    arr.push(this[arr1[i]]);
  }
  return arr;
};

//returns the array with an elment added to its beginning
Array.prototype.unshiftIt = function(it){
    this.unshift(it);
    return this;
  };
  
 //returns the array with an element added to its tail
 Array.prototype.pushIt = function(it){
    this.push(it);
    return this;
 };
 
 String.prototype.reverse = function(){
	 return this.split('').reverse().join('');
 };
 
 Function.prototype.times = function(num){
	 for(var i = 0;i<num;i++){
		 this();
	 }
 };
 
 Function.prototype.once = function(){
	 this.times(1);
 };
 
 Function.prototype.twice = function() {
	 this.times(2);
 };
 
 Function.prototype.threetimes = function(){
	 this.times(3);
 };
 
 Function.prototype.fourtimes = function() {
	 this.times(4);
 };
 
 Function.prototype.fivetimes = function() {
	 this.times(5);
 };
 
 Function.prototype.sixtimes = function() {
	 this.times(6);
 };
 
 Function.prototype.seventimes = function() {
	 this.times(7);
 };
 
 Function.prototype.eighttimes = function() {
	 this.times(8);
 };
 
 Function.prototype.ninetimes = function() {
	 this.times(9);
 };
 Function.prototype.tentimes = function() {
	 this.times(10);
 };
 
 //calls function unless a condition is met
 Function.prototype.unless = function(condition){
	 if(!condition) this();
 };
 
 //calls function until a condition is met
 Function.prototype.until = function(condition){
	 while(!condition){
		 this();
	 }
 };
 
 
 
 
 