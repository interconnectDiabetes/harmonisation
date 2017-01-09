// Sum all variables:  
// Fish - steamed, grilled or baked  (fishgri_00)  
// + Fried fish including take away (fishfri_00)   
// + Fish - tinned (salmon, tuna, sardines etc.) (fishtin_00)

fishgri_00 = $('fishgri_00').value();
fishfri_00 = $('fishfri_00').value();
fishtin_00 = $('fishtin_00').value();

total = fishgri_00 + fishfri_00 + fishtin_00;
total;
