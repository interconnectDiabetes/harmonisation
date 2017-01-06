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

var nonFish = ['f0704','f1101','f0354','f1583','f0111','f0352','f0351','f1097','f1098','f0702','f1631','f0348'];

var sum = 0;
for (int i = 0; i < nonFish.length; i++){
	sum = sum + nonFish[i];
}

return sum;