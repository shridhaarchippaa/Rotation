
function Rotator() {
	const canvas = document.getElementById("canvas");
	const ctx = canvas.getContext("2d");
	var angle = 0;
	var image = document.createElement("img"); 
	image.onload = function(){
		ctx.drawImage(image, canvas.width/2-image.width/2, canvas.height/2-image.height/2);
	}
	image.src = "Img.jpg";

	this.rotateClockwise = function() {
		angle += 60;
		var startTime = Date.now();
		rotateImage(angle);
		var endTime = Date.now();
		console.log("Total time in seconds : "+Math.floor((endTime-startTime)/1000));
	}

	this.rotateAntiClockwise = function() {
		angle -= 60;
		rotateImage(angle);
	} 

	this.rotateImage = function(degrees) {
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		// save the unrotated context of the canvas so we can restore it later
		ctx.save();

		// move to the centre of the canvas
		ctx.translate(canvas.width/2, canvas.height/2);

		// rotate the canvas to the specified degrees
		ctx.rotate(degrees * Math.PI/180);

		// draw the image
		// since the context is rotated, the image will be rotated
		ctx.drawImage(image, -image.width/2, -image.width/2);

		// we’re done with the rotating so restore the unrotated context
		ctx.restore();    	
	}

}


