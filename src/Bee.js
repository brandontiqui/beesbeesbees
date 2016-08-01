var Bee = function() {
	Grub.call(this); // get attributes
	this.age = 5;
	this.color = 'yellow';
	this.job = 'keep on growing';
};
Bee.prototype = Object.create(Grub.prototype); // get methods
Bee.prototype.constructor = Bee; // restore constructor

