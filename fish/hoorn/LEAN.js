// p37kode = $("p37kode").value();
// p121kode = $("p121kode").value();
// p187kode = $("p187kode").value();
// p190kode = $("p190kode)").value();

// p37kode = $("p37kode").value();
// p121kode = $("p121kode").value();
// p187kode = $("p187kode").value();
// p190kode = $("p190kode)").value();

p37aant = $("p37aant").value();
p187aant = $("p187aant").value();
p121aant = $("p121aant").value();
p190aant = $("p190aant").value();

p37freq = $("p37freq").value();
p187freq = $("p187freq").value();
p121freq = $("p121freq").value();
p190freq = $("p190freq").value();

p37kode = p37aant * p37freq * 20;
p187kode = p187freq * p187aant * 100;
p121kode = p121aant * p121freq * 100;
p190kode = p190aant * p190freq * 100;

sum = p37kode + p121kode + p187kode + p190kode;

