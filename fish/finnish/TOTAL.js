// Total fish (sum of all available variables) - (V2034 to V2061) Vvariables are mutually exclusive

var allFish = ['V2034', 'V2035', 'V2036','V2037','V2038', 'V2039','V2040', 'V2041',
			'V2042', 'V2043','V2044', 'V2045','V2046', 'V2047','V2048', 'V2049','V2050', 
			'V2051','V2052', 'V2053','V2054', 'V2055','V2056', 'V2057','V2058', 'V2059',
			'V2060', 'V2061'];

var sum = 0;
for (int i = 0; i < allFish.length; i++){
	sum = sum + allFish[i];
}

return sum;