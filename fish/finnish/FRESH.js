// Perch (V2034) 
// Pike (V2035) 
// Bream (V2037) 
// fish, average (V2045)  
// fish in soup, average (V2046) 
// Salmon;( V2038)
// Salmon salted; (V2051) 
// Vendance, salted with bones (V2050) 
// Smoked vendance with bone (V2054)
// Vendance, with bones (V2039)

var freshFish = ['V2034', 'V2035','V2037','V2038', 'V2039', 'V2045','V2046',
			'V2050', 'V2051','V2054'];

var sum = 0;
for (int i = 0; i < freshFish.length; i++){
	sum = sum + freshFish[i];
}

return sum;
