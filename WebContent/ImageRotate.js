/*
 * Rotator is a constructor which has 24 variables and 3 functions
 * Primitive values are much faster than creating objects.
 */

function Rotator() {
	const canvas = document.getElementById("canvas");
	const ctx = canvas.getContext("2d");
	this.angle = 0;
	this.myImageData;
	var image = document.createElement("img"); 
	image.onload = function(){
		ctx.drawImage(image, canvas.width/2-image.width/2, canvas.height/2-image.height/2);
	}
	image.src = "Img.jpg";

	this.rotateClockwise = function() {
		this.angle += 60;
		var startTime = new Date().getTime();
		rotateImage(this.angle);
		var endTime = new Date().getTime();
		console.log("Total time in milli-seconds : "+(endTime-startTime));
	}

	this.rotateAntiClockwise = function() {
		this.angle -= 60;
		rotateImage(this.angle);
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

	this.getImageData = function(x, y, w, h) {
		if(w == 0 || h == 0) throw "Index Size Error";
		this.myImageData = ctx.getImageData(x, y, w, h);
	}
	
	this.createImageData = function(width, height) {
		if(width == 0 || height == 0) throw "Index Size Error";
		this.myImageData = ctx.createImageData(width, height);
	}
	
	this.putImageData = function(imageData, dx, dy) {
		if(imageData == undefined) throw "No ImageData available";
		var data = imageData.data;
		var height = imageData.height;
		var width = imageData.width;
		for (var y = 0; y < height; y++) {
			for (var x = 0; x < width; x++) {
				var pos = y * width + x;
				ctx.fillStyle = 'rgba(' + data[pos * 4 + 0]
								  + ',' + data[pos * 4 + 1]
								  + ',' + data[pos * 4 + 2]
								  + ',' + (data[pos * 4 + 3] / 255) + ')';
				ctx.fillRect(x + dx, y + dy, 1, 1);
			}
		}
	}

}


