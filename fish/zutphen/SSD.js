/$(/ Add:_85 ).value()
// smoked halibut (f1585), 
// smoked bokking (f0347), 
// herring slated (f0350), 
// eel smoked (f0603), 
// salmon smoked (f1096), 
// dried codfish (f0703), 
// mackerel smoked (f1586), 
// shrimp, salted dried (f0702)

var ssdFish = [$('f1096_85').value(),$('f0603_85').value(),$('f1586_85').value(),
			$('f1585_85').value(),$('f0350_85').value(),$('f0347_85').value(),$('f0703_85').value(),
			$('f0702_85').value()];

var sum = 0;
for (int i = 0; i < ssdFish.length; i++){
	sum = sum + ssdFish[i];
}

sum;