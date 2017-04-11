// Add: 
// squid (f1098), 
// mussels (f0111), 
// shrimp peeled (f0348), 
// lobster (f0352), 
// crab (f0351), 
// oyster (f0354), 
// shrimp, salted dried (f0702), 
// shrimp paste (f0704), 
// caviar, cod roe raw (f1097), 
// snails (f1101), 
// mussels fried baked (f1583), 
// canned shrimp, natural (f1631)

var nonFish = [$('f0704_85').value(),$('f1101_85').value(),$('f0354_85').value(),
				$('f1583_85').value(),$('f0111_85').value(),$('f0352_85').value(),
				$('f0351_85').value(),$('f1097_85').value(),$('f1098_85').value(),
				$('f0702_85').value(),$('f1631_85').value(),$('f0348_85').value()];

var sum = 0;
for (int i = 0; i < nonFish.length; i++){
	sum = sum + nonFish[i];
}

sum;