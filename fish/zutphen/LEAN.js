// cod filled fried/stewed (f1315), 
// fish lean unprepared (f0114), 
// fish moderate fat unprepared (f0115), 
// plaice unprepared (f0813), 
// cod raw (f0820), 
// fish stick raw (f0815), 
// fish stick fried (f0814), 
// plaice fried (f0817), 
// whiting fried (f0818), 
// cod cooked (f0819), 
// plaice cooked (f0918), 
// coalfish cooked (f0919), 
// cod fillet fried (f0816), 
// cod fresh frozed prepared in microwave (f1613), 
// haddock fresh/frozen prepared in microwave (f1614), 
// sole prepared in microwave (f1619), 
// gurnard prepared in microwave (f1621), 
// perch red prepared in microwave (f1622), 
// whiting baked (f1102), 
// stockfish (f0357), 
// smoked halibut (f1585), 
// dried codfish (f0703)

_85var leanFish = [$('f0357_85').value(),$('f1585_85').value(),$('f0703_85').value(),$('f1315_85').value(),
				$('f0814_85').value(),$('f1619_85').value(),$('f0918_85').value(),$('f0817_85').value(),
				$('f1614_85').value(),$('f1621_85').value(),$('f0818_85').value(),$('f1102_85').value(),
				$('f0919_85').value(),$('f0816_85').value(),$('f1613_85').value(),$('f0819_85').value(),
				$('f1622_85').value(),$('f0815_85').value(),$('f0115_85').value(),$('f0114_85').value(),
				$('f0813_85').value(),$('f0820_85').value()];

var sum = 0;
for (int i = 0; i < leanFish.length; i++){
	sum = sum + leanFish[i];
}

sum;
