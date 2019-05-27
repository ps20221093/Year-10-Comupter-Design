var b1;
var b2;

function setup()
{
	createCanvas(500,500);
	b1 = new Button(10,10,100,25);
	b1.setText("Main Menu");
	b1.setTextOver("GO");
	b1.setButtonOverFill(255,255,50);

	b2 = new Button(10,100,150,25);
	b2.setText("Main Menu thanks dad")

}

function draw()
{
	background(125,125,125);

	fill(0,0,0);
	text("Hello and welcome to my game.",20,70);
  text("Here you can learn about multiplication and lets get CRACKING!!!",20,90);
  text("When you are ready, click the start timer button.",20,150);
	text("Then click on the cards :)",20,170);
	text("Match the questions with the right answers",20,190);
	text("Remember to only click on two answers at a time",20,210);
	text("If they are right they will dissapear.",20,230);
	text("If they are wrong they will flip back over",20,250);
	text("Try and beat your own time!",20,270)
	text("GOOD LUCK AND HAVE FUN LEARNING!!!",20,290)


	b1.showButton();

	if (b1.getButtonState() == 1)
	{
		window.open("../buttonList.html","_self");
	}
	if (b2.getButtonState() == 1)
	{
		window.open("../buttonList.html","_self");
	}
}
