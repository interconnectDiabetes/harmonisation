// "Sum of:
// Salmon salted; (V2051)
// Baltic herring salted with bones; (V2052)
// Herring slated; (V2053)
// Smoked Baltic herring with bones; (V2058)
// Smoked redfish (V2056)
// Vendance, salted with bones (V2050)
// Smoked vendance with bone (V2054)
// Smoked lamprey (V2055)
// Smoked whitefish (V2057)
// Smoked fish average: mean of four species, Baltic herring smoked, Vendace smoked, Whitefish smoked, Bream smoked (V2059)"

var ssdFish = ['V2050', 'V2051','V2052', 'V2053','V2054', 'V2055','V2056', 'V2057','V2058', 'V2059'];

var sum = 0;
for (int i = 0; i < ssdFish.length; i++){
	sum = sum + ssdFish[i];
}

return sum;