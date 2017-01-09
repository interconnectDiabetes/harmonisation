// All variables not included in 'Freshwater fish'
// Freshwater fish (THESE SHOULD NOT BE IN THE LIST) 
// eel (f0112), 
// fresh salmon raw (f1587), 
// Salmon cooked in microwave (f1610), 
// salmon tinned (f0602), 
// eel smoked (f0603), 
// salmon smoked (f1096),  
// perch red prepared in microwave (f1622)


var saltFish = ['f0357','f0355','f1586','f1255','f0604',
			'f1585','f0349','f0350','f1100','f0347','f0703','f1315','f0822',
			'f0116','f0356','f0113','f0353','f0821','f1588','f0814',
			'f1619','f0918','f0817','f1614','f1621','f0818','f1102','f0919','f0816',
			'f1613','f0819','f0815','f0115','f0114','f1590','f1589','f0813',
			'f0820','f0704','f1101','f0354','f1583','f0111','f0352','f0351','f1097',
			'f1098','f0702','f1631','f0348'];

var sum = 0;
for (int i = 0; i < saltFish.length; i++){
	sum = sum + saltFish[i];
}


sum;