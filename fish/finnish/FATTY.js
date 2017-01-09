// "Sum of: Baltic herring with bones; (V2042)
// Baltic herring; (V2043)
// Salmon;( V2038)
// Salmon salted; (V2051)
// Baltic herring salted with bones; (V2052)
// Herring slated; (V2053)
// Smoked Baltic herring with bones; (V2058)
// Sardine; (V2060)
// Smoked redfish (V2056) 
// Whitefish  (V2041) 
// Vendance, salted with bones (V2050) 
// Smoked vendance with bone (V2054) 
// Vendance, with bones (V2039) 
// Smoked fish average (V2059)"

var fattyFish = ['V2038', 'V2039', 'V2041','V2042', 'V2043','V2050', 'V2051','V2052', 'V2053', 
				'V2054','V2056','V2058', 'V2059','V2060'];

var sum = 0;
for (int i = 0; i < fattyFish.length; i++){
	sum = sum + fattyFish[i];
}

sum;