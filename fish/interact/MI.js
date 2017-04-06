// two variables heart attack or angina

angina = $("angina_epic").value();
heart_attack = $("heart_epic").value();

if (angina == 1 || heart_attack == 1){
  outcome = 1;
} else if (angina == 2 && heart_attack == 2){
  outcome = -1;
} else if (angina == 0 && heart_attack == 2) {
  outcome = -1;
} else if (angina == 2 && heart_attack == 0) {
  outcome = -1;
} else {
  outcome = 0;
}
