// Add: 
// eel (f0112), 
// fresh salmon raw (f1587), 
// Salmon cooked in microwave (f1610), 
// salmon tinned (f0602), 
// eel smoked (f0603), 
// salmon smoked (f1096),  
// perch red prepared in microwave (f1622)

var freshFish = ['f1096','f0602','f0603','f1587','f0112','f1610','f1622'];

var sum = 0;
for (int i = 0; i < freshFish.length; i++){
	sum = sum + freshFish[i];
}

return sum;