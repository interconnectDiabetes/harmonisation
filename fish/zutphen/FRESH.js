// Add: 
// eel (f0112), 
// fresh salmon raw (f1587), 
// Salmon cooked in microwave (f1610), 
// salmon tinned (f0602), 
// eel smoked (f0603), 
// salmon smoked (f1096),  
// perch red prepared in microwave (f1622)

var freshFish = [$('f1096_85').value(),$('f0602_85').value(),$('f0603_85').value(),$('f1587_85').value(),
				$('f0112_85').value(),$('f1610_85').value(),$('f1622_85').value()];

var sum = 0;
for (int i = 0; i < freshFish.length; i++){
	sum = sum + freshFish[i];
}

sum;