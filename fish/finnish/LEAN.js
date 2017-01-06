// Sum of: Cod (V2044)
// Stockfish (V2049)
// Fresh frozen saithe (V2040)
// Perch (V2034)
// Pike (V2035)  
// Flounder (V2036)  
// fish, average (V2045)  
// fish in soup, average (V2046) 
// Tuna (V2061) 

var leanFish = ['V2034', 'V2035', 'V2036','V2040','V2044', 'V2045','V2046','V2049', 'V2061'];

var sum = 0;
for (int i = 0; i < leanFish.length; i++){
	sum = sum + leanFish[i];
}

return sum;