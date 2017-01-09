// Add: 
// smoked halibut (f1585), 
// smoked bokking (f0347), 
// herring slated (f0350), 
// eel smoked (f0603), 
// salmon smoked (f1096), 
// dried codfish (f0703), 
// mackerel smoked (f1586), 
// shrimp, salted dried (f0702)

var ssdFish = ['f1096','f0603','f1586','f1585','f0350','f0347','f0703','f0702'];

var sum = 0;
for (int i = 0; i < ssdFish.length; i++){
	sum = sum + ssdFish[i];
}

sum;