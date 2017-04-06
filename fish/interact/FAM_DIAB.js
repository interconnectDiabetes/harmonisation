// Family history in parent or sibling. Recommended as general variable, published in PMID: 23052052.
//This is the lowest common denominator, but not the same between each study as some asked 
// about sibling but some didn't
fam_diab = $("famhx_fam").value()

if (fam_diab == 1 || fam_diab == 0){
  outcome = fam_diab;
} else {
  outcome = -1;
}