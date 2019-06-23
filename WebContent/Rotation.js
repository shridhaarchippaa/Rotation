
function rotateImage() {
	const canvas = document.getElementById('myCanvas');
	if(canvas.getContext) {
		const ctx = canvas.getContext('2d');
		ctx.fillStyle = "blue";
		ctx.rect(10, 10, 100, 100);
		ctx.fill();

		let imageData = ctx.getImageData(60, 60, 60, 60);
		ctx.putImageData(imageData, 150, 60);
		ctx.clear();

	}
}

function rotate() {
	const canvas = document.getElementById("myCanvas");
	if(canvas.getContext) {
		const ctx = canvas.getContext("2d");
	
		ctx.translate(canvas.width/2, canvas.height/2);
	
		for(var x=0;x<canvas.width;x++) {
			ctx.rotate(60 * Math.PI / 180);
			ctx.fillStyle = "blue";
			ctx.fillRect(0, 30, 60, 60); 
		}
	}
	
}