function Canvas(elemID, options={scale: "full", width: 500, height: 500}) {
	this.node    = document.getElementById(elemID);
	this.context = this.node.getContext("2d");
	this.height  = ( options.scale == "full" )
		? this.node.parentNode.offsetHeight
		: height;
	this.width   = ( options.scale == "full" )
		? this.node.parentNode.offsetWidth
		: width;

	this.node.width  = this.width;
	this.node.height = this.height;

	this.test = () => {
		this.context.fillRect(50,50,50,50);
	}

	this.clear = () => {
		this.context.clearRect(0,0,this.width, this.height);
	}
}

function randColor() {
	let r = Math.ceil(Math.random()*255),
		g = Math.ceil(Math.random()*255),
		b = Math.ceil(Math.random()*255);

	return "rgb("+r+","+g+","+b+")";
}