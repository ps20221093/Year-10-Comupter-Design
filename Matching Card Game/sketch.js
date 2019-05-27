var c1;
var c2;
var c3;
var c4;
var c5;
var c6;
var c7;
var c8;
var c9;
var c10;

var delayTimer;
var deck;
let t1 = new Timer(10,400,500,25);

function button()
{
	fill(0,0,255);
	rect(100,450,100,50);

	fill(255,255,255);
	text("Start Timer",120,475);

	if (mouseX > 100 && mouseX < 100+100 && mouseY > 450 && mouseY < 450+50 && mouseIsPressed)
	{
		t1.resetTimer();
	}
}

function preload()
{
}


function setup()
{
	createCanvas(525,600);
	var flippedCard = loadImage('https://raw.githubusercontent.com/ps20221093/Year-10-Comupter-Design/master/Screen%20Shot%202019-05-20%20at%2012.21.30%20PM.png');
	var card1a = loadImage('https://raw.githubusercontent.com/ps20221093/Year-10-Comupter-Design/master/DT%20Maths/2x2.png');
	var card1b = loadImage('https://raw.githubusercontent.com/ps20221093/Year-10-Comupter-Design/master/DT%20Maths/4.png');
	var card2a = loadImage('https://raw.githubusercontent.com/ps20221093/Year-10-Comupter-Design/master/DT%20Maths/6x9.png');
	var card2b = loadImage('https://raw.githubusercontent.com/ps20221093/Year-10-Comupter-Design/master/DT%20Maths/54.png');
	var card3a = loadImage('https://raw.githubusercontent.com/ps20221093/Year-10-Comupter-Design/master/DT%20Maths/7x8.png');
	var card3b = loadImage('https://raw.githubusercontent.com/ps20221093/Year-10-Comupter-Design/master/DT%20Maths/56.png');
	var card4a = loadImage('https://raw.githubusercontent.com/ps20221093/Year-10-Comupter-Design/master/DT%20Maths/6x6.png');
  var card4b = loadImage('https://raw.githubusercontent.com/ps20221093/Year-10-Comupter-Design/master/DT%20Maths/36.png');
  var card5a = loadImage('https://raw.githubusercontent.com/ps20221093/Year-10-Comupter-Design/master/DT%20Maths/7x4.png');
  var card5b = loadImage('https://raw.githubusercontent.com/ps20221093/Year-10-Comupter-Design/master/DT%20Maths/28.png');

	deck = new CardDeck(100,140,2,5,flippedCard);
	deck.addCard(card1a,0);
	deck.addCard(card1b,0);
	deck.addCard(card2a,1);
	deck.addCard(card2b,1);
	deck.addCard(card3a,2);
	deck.addCard(card3b,2);
	deck.addCard(card4a,3);
  deck.addCard(card4b,3);
  deck.addCard(card5a,4);
  deck.addCard(card5b,4);

	// delay timer
	delayTimer = new Timer(0,0,0,0);
	// ------- CUSTOM THE 1 LINE OF CODE BELOW ------
	delayTimer.setMaxTime(5);  // set timer to countdown from 3 seconds
	delayTimer.resetTimer(); 	// reset the timer


}

function draw()
{
	background(0,0,0);
		t1.drawTimer();
	  button();
		t1.startTimer();
		t1.setMaxTime(120);

	// if the game is finished
	if (deck.showDeck() == 1)
	{
		// ------- CUSTOM THE CODE BELOW ------ WHERE TO GO AFTER LAST QUESTION
		window.open("mainmenu/mainmenu.html","_self");
	}

	// everytime a card match has been found DO SOMETHING
	if (deck.checkMatch() >= 1)
	{
		console.log('match found');



		// initiate a delay timer when a question is answered
		delayTimer.startTimer();
		if (delayTimer.isTimerFinished() == true)
		{
			if (deck.checkMatch() == 1)
			{
				deck.checkMatch("reset");
				// -------- GOOD PLACE TO SOUND EFFECT HERE -----------
			}
			else if (deck.checkMatch() == 2)
			{
				deck.checkMatch("remove");
				// -------- GOOD PLACE TO SOUND EFFECT HERE -----------
			}
			delayTimer.resetTimer();
		}
	}

}
