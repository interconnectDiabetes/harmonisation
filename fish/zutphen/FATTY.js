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

var fattyFish = ['f1096','f0602','f0355','f0603','f1586','f1255','f0604','f0349','f0350','f1100','f0347','f0822',
			'f0116','f0356','f0113','f0112','f0353','f0821','f1588','f1610','f1587'];

var sum = 0;
for (int i = 0; i < fattyFish.length; i++){
	sum = sum + fattyFish[i];
}

return sum;