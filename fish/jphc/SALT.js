// Add F032 + F034 to F040 + F042 to F045 + F047 + F048

var saltFish = ['F032','F034','F035','F036','F037','F038','F039','F040',
				'F042','F043','F044','F045','F047','F048'];

var sum = 0;
for (int i = 0; i < saltFish.length; i++){
	sum = sum + saltFish[i];
}

return sum;