var b1;
var b2;

function setup()
{
	createCanvas(500,500);
	b1 = new Button(10,10,160,25);
	b1.setText("Take me home daddy");
	b1.setTextOver("GO");
	b1.setButtonOverFill(255,255,50);

	b2 = new Button(10,100,100,25);

	b2.setText("Pretty Not Easy")

}

function draw()
{
	background(125,125,125);

	b1.showButton();


	if (b1.getButtonState() == 1)
	{
		window.open("../../../../buttonList.html","_self");
	}
	if (b2.getButtonState() == 1)
	{
		window.open("Pretty Not Easy/Harderdaddy.html","_self");
	}
}
