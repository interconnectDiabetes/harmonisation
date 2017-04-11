// p34kode = $("p34kode").value();
// p123kode = $("p123kode").value();
// p189kode = $("p189kode").value();

p34aant = $("p34aant").value();
p123aant = $("p123aant").value();
p189aant = $("p189aant").value();

p34freq = $("p34freq").value();
p123freq = $("p123freq").value();
p189freq = $("p189freq").value();

p34kode = p34aant * p34freq * 20;
p123kode = p123freq * p123aant * 100;
p189kode = p189aant * p189freq * 100;

sum = p34kode + p189kode + p123kode
