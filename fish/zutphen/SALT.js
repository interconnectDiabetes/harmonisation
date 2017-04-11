// All variables not included in 'Freshwater fish'
// Freshwater fish (THESE SHOULD NOT BE IN THE LIST) 
// eel (f0112), 
// fresh salmon raw (f1587), 
// Salmon cooked in microwave (f1610), 
// salmon tinned (f0602), 
// eel smoked (f0603), 
// salmon smoked (f1096),  
// perch red prepared in microwave (f1622)


var saltFish = [$('f0357_85').value(),$('f0355_85').value(),$('f1586_85').value(),$('f1255_85').value(),$('f0604_85').value(),
			$('f1585_85').value(),$('f0349_85').value(),$('f0350_85').value(),$('f1100_85').value(),$('f0347_85').value(),$('f0703_85').value(),$('f1315_85').value(),$('f0822_85').value(),
			$('f0116_85').value(),$('f0356_85').value(),$('f0113_85').value(),$('f0353_85').value(),$('f0821_85').value(),$('f1588_85').value(),$('f0814_85').value(),
			$('f1619_85').value(),$('f0918_85').value(),$('f0817_85').value(),$('f1614_85').value(),$('f1621_85').value(),$('f0818_85').value(),$('f1102_85').value(),$('f0919_85').value(),$('f0816_85').value(),
			$('f1613_85').value(),$('f0819_85').value(),$('f0815_85').value(),$('f0115_85').value(),$('f0114_85').value(),$('f1590_85').value(),$('f1589_85').value(),$('f0813_85').value(),
			$('f0820_85').value(),$('f0704_85').value(),$('f1101_85').value(),$('f0354_85').value(),$('f1583_85').value(),$('f0111_85').value(),$('f0352_85').value(),$('f0351_85').value(),$('f1097_85').value(),
			$('f1098_85').value(),$('f0702_85').value(),$('f1631_85').value(),$('f0348_85').value()];

var sum = 0;
for (int i = 0; i < saltFish.length; i++){
	sum = sum + saltFish[i];
}


sum;