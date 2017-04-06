// Two variables once again.

//hypertension (high blood pressure)
hypertension1 = $("hypert_epic").value();

//InterAct hypertension from any source
hypertension2 = $("anyhypert").value();

// just to lock the NA's into -1s
if (hypertension2 == 0 || hypertension2 == 1){
  outcome = hypertension2;
} else {
  outcome = -1;
}