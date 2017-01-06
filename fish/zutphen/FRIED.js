// bakbokking fried (f0822), 
// fish stick fried (f0814), 
// plaice fried (f0817),
// whiting fried (f0818), 
// cod fillet fried (f0816)

var friedFish = ['f0822','f0814','f0817','f0818','f0816'];

var sum = 0;
for (int i = 0; i < friedFish.length; i++){
	sum = sum + friedFish[i];
}

return sum;