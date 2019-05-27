var b1;
var b2;

function setup()
{
	createCanvas(500,500);
	b1 = new Button(10,10,170,25);
	b1.setText("TO THE GAME WE GO!");
	b1.setTextOver("LeTs A gO");
	b1.setButtonOverFill(255,255,50);

	b2 = new Button(10,100,130,25);

	b2.setText("Instructions :)")
	b2.setTextOver("LeTs A gO");

	b3 = new Button(10,190,100,25)

	b3.setText("High scores")

	b4 = new Button(10,280,100,25)

	b4.setText ("How to play")

	b5 = new Button (10,370,100,25)

	b5.setText ("Introduction")



}

function draw()
{
	background(125,125,125);

	b1.showButton();
	b2.showButton();


	if (b1.getButtonState() == 1)
	{
		window.open("Game/Gamer.html","_self");
	}
	if (b2.getButtonState() == 1)
	{
		window.open("Instructions/Instructions.html","_self");

	}
	if (b3.getButtonState() == 1)
	{
		window.open("Highscores/Highscores.html","_self");

	}
	if (b4.getButtonState() == 1)
	{
		window.open("How to play the game/How we play.html","_self");

	}
	if (b5.getButtonState() == 1)
	{
		window.open("Introduction/Introduction.html","_self");

	}


}
