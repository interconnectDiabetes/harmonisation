// "Sum of: Baltic herring with bones; (V2042) 
// Tuna (V2061)
// Baltic herring; (V2043)
// Baltic herring salted with bones; (V2052)
// Herring slated; (V2053)
// Cod (V2044)
// Stockfish (V2049)
// Fresh frozen saithe (V2040)
// Flounder (V2036)
// Smoked redfish (V2056)
// Sardine; (V2060) 
// Smoked fish average (V2059)"

var saltFish = ['V2036','V2040','V2042','V2053','V2043','V2044','V2049','V2052','V2056','V2059','V2060', 'V2061'];

var sum = 0;
for (int i = 0; i < saltFish.length; i++){
	sum = sum + saltFish[i];
}

sum;