// bakbokking fried (f0822), 
// fish stick fried (f0814), 
// plaice fried (f0817),
// whiting fried (f0818), 
// cod fillet fried (f0816)

var friedFish = [$('f0822_85').value(),$('f0814_85').value(),$('f0817_85').value(),
				$('f0818_85').value(),$('f0816_85').value()];

var sum = 0;
for (int i = 0; i < friedFish.length; i++){
	sum = sum + friedFish[i];
}

sum;