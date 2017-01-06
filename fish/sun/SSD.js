// Salted or smoked fish/day (psaladdi)
// "For total fish and total seafood, source data are in g/d. 
// For the reminder, source data are in portion/day. Information on average portion size in grams is available. 
// For Lean fish: multiply portion/day*150g
// For fatty fish: multiply portion/day*150g
// For Salted/smoked/dried fish: multiply portion/day*50g
// "

ssdFish = $('psaladdi').value();
ssdFish = ssdFish * 50; // to turn into g/d
ssdFish;


