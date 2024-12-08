document.getElementById('formulirKontak').addEventListener('submit', function(event){
   event.preventDefault();


   var Nama = document.getElementById('nama').value;
   var Email = document.getElementById('email').value;
   var Subject = document.getElementById('subject').value;
   var Teks = document.getElementById('pesan').value;


   emailjs.send("service_9d42nbj", "template_uoopabz", {
      Nama: Nama,
      Email: email,
      Subject: subject,
      Teks: pesan,
   })
   .then(function(response){
      alert("Kontak berhasil dikirim!");
      console.log("SUKSES!!", response.status, response.text);
   }, function(error){
      alert("Terjadi kesalahan teknisi!");
      console.log("GAGAL!!", error)
   });
});