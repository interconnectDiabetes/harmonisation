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

var leanFish = ['f0357','f1585','f0703','f1315','f0814','f1619','f0918','f0817','f1614',
				'f1621','f0818','f1102','f0919','f0816','f1613','f0819','f1622','f0815',
				'f0115','f0114','f0813','f0820'];

var sum = 0;
for (int i = 0; i < leanFish.length; i++){
	sum = sum + leanFish[i];
}

sum;
