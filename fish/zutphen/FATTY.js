// Add: 
// eel (f0112), 
// fresh herring (f0113), 
// fish, fatty, unprepared (f0116), 
// mackerel (f0353),  
// haddock liver (f0356),  
// bakbokking raw (f0821), 
// fresh salmon raw (f1587), 
// anchovies in oil (f1588), 
// bakbokking fried (f0822), 
// Salmon cooked in microwave (f1610), 
// mackerel tinned (f1255), 
// smoked bokking (f0347), 
// herring filet in tomato sauce (f0349), 
// herring slated (f0350), 
// sardines tinned (f0355), 
// salmon tinned (f0602), 
// eel smoked (f0603), 
// mackerel steamed (f0604), 
// salmon smoked (f1096), 
// herring marinated (f1100), 
// mackerel smoked (f1586)

function add(a,b) {
	return a+b;
}

var fattyFish = [$('f1096_85').value(),$('f0602_85').value(),$('f0355_85').value(),$('f0603_85').value(),
				$('f1586_85').value(),$('f1255_85').value(),$('f0604_85').value(),$('f0349_85').value(),
				$('f0350_85').value(),$('f1100_85').value(),$('f0347_85').value(),$('f0822_85').value(),
				$('f0116_85').value(),$('f0356_85').value(),$('f0113_85').value(),$('f0112_85').value(),
				$('f0353_85').value(),$('f0821_85').value(),$('f1588_85').value(),$('f1610_85').value(),
				$('f1587_85').value()];

var sum = fattyFish.reduce(add,0);
sum;