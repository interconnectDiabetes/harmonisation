// Add all variables (f0111 to f1631)

var allFish = ['f1096','f0602','f0357','f0355','f0603','f1586','f1255','f0604',
			'f1585','f0349','f0350','f1100','f0347','f0703','f1315','f0822','f1587',
			'f0116','f0356','f0113','f0112','f0353','f0821','f1588','f1610','f0814',
			'f1619','f0918','f0817','f1614','f1621','f0818','f1102','f0919','f0816',
			'f1613','f0819','f1622','f0815','f0115','f0114','f1590','f1589','f0813',
			'f0820','f0704','f1101','f0354','f1583','f0111','f0352','f0351','f1097',
			'f1098','f0702','f1631','f0348'];

var sum = 0;
for (int i = 0; i < allFish.length; i++){
	sum = sum + allFish[i];
}

return sum;