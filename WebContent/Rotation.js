
function rotate() {
	const canvas = document.getElementById("myCanvas");
	if(canvas.getContext) {
		const ctx = canvas.getContext("2d");

		ctx.translate(canvas.width/2, canvas.height/2);

		for (var i = 0; i < canvas.width; i++) {
			for (var j = 0; j < canvas.width; j++) {
				ctx.rotate(25 * Math.PI / 180);
				ctx.fillStyle = 'rgb(0, ' + Math.floor(255 - 25 * i) + ', ' + Math.floor(255 - 25 * j) + ')';
				ctx.fillRect(j * 25, i * 25, 25, 25);
			}
		}		
	}

}
