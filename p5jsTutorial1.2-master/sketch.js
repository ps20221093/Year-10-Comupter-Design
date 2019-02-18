function setup()
{
  createCanvas(700,500);

}

function draw()
{
	background(100,100,100)

	// change the paint brush to a specific color according to RGB values
	// this color applies only to the inside color of a shape
	fill(255,0,255);

	// change the paint brush to a specific color according to RGB values
	// this color applies only to the outside color of a shape
	stroke(30,55,255);

	// modifies the thickness of the border of an object
	strokeWeight(3);


	rect(10,10,50,100);
	rect(10,200,50,100);
  rect(200,200,50,100)
  rect(200,10,50,100)


	fill(50,255,20);
	stroke(255,255,255);
	strokeWeight(10);

	rect(260,50,50,60);
	rect(70,200,50,100);
  rect(260,250,100,50);

}
