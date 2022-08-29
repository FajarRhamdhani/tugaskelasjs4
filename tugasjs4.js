//Nomor 1

// var formData = document.getElementById("formbelajar");
// var newUsername = document.getElementById("username");
// var email = document.getElementById("email");
// var nomorHp = document.getElementById("nomor");
// var pass = document.getElementById("password");
// var divTagAlert = document.getElementById("alerts");
// var proses = document.getElementById("submit");
// var cekNomorHp = /\d/;
// var cekEmail = /.+@.+\..+/;
// var cekPass = /\d\W[A-Z]/;
// var cekPassTwo = /^[A-Z0-9-!@#$%^&*]+$/;
// console.log(cekEmail.test("rhamdhani.fajar3@gmail.com"))
// console.log(cekNomorHp.test("0"))
// console.log(cekPass.test("1@"))
// ^[A-Z\d\-_.,\s]


// var notif = (e) => {
//     if(newUsername.value.trim() === ""){
//         divTagAlert.innerHTML = "Nama, Email, No Hp, Password tidak boleh kosong";
//         divTagAlert.className = "btn btn-danger";
//         e.preventDefault();
//     }else if(email.value.trim() === ""){
//         divTagAlert.innerHTML = "Nama, Email, No Hp, Password tidak boleh kosong";
//         divTagAlert.className = "btn btn-danger";
//         e.preventDefault();
//     }else if(nomorHp.value.trim() === ""){
//         divTagAlert.innerHTML = "Nama, Email, No Hp, Password tidak boleh kosong";
//         divTagAlert.className = "btn btn-danger";
//         e.preventDefault();
//     }else if(pass.value.trim() === ""){
//         divTagAlert.innerHTML = "Nama, Email, No Hp, Password tidak boleh kosong";
//         divTagAlert.className = "btn btn-danger";
//         e.preventDefault();
//     }else if(!cekEmail.test(email.value.trim())){
//         divTagAlert.innerHTML = "Bukan alamat email";
//         divTagAlert.className = "btn btn-danger";
//         e.preventDefault();
//     }else if(!cekNomorHp.test(nomorHp.value.trim())){
//         divTagAlert.innerHTML = "Masukkan No.Hp berupa angka";
//         divTagAlert.className = "btn btn-danger";
//         e.preventDefault();
//     }else if(!cekPassTwo.test(pass.value.trim())){
//         divTagAlert.innerHTML = "Masukkan pass berupa angka, symbol, huruf kapital, dan minimal 6 karakter";
//         divTagAlert.className = "btn btn-danger";
//         e.preventDefault();
//     }else if(pass.value.length < 5){
//         divTagAlert.innerHTML = "Masukkan pass berupa angka, symbol, huruf kapital, dan minimal 6 karakter";
//         divTagAlert.className = "btn btn-danger";
//         e.preventDefault();
//     }
    // else if(!cekPassTwo.test(pass.value.trim())){
    //     divTagAlert.innerHTML = "Masukkan pass berupa angka, symbol, huruf kapital, dan minimal 6 karakter";
    //     divTagAlert.className = "btn btn-danger";
    //     e.preventDefault();
    // }
//     else{
//         divTagAlert.innerHTML = "Anda berhasil login";
//         divTagAlert.className = "btn btn-success";
//         e.preventDefault();
//     }
// }
// console.log(value.match(cekPassTwo))
// proses.addEventListener("click", notif)

//Nomor 2

// test pakai query selector all

// var kalimat = document.getElementById("kalimat");
// var hijau = document.getElementById("hijau");
// var kuning = document.getElementById("kuning");
// var merah = document.getElementById("merah");
// var ubahHijau = (e) => {
//     if(hijau){
//         kalimat.className = "btn btn-success";
//         e.preventDefault();
//     }
// }

// var ubahKuning = (e) => {
//     if(kuning){
//         kalimat.className = "btn btn-warning";
//         e.preventDefault();
//     }
// }

// var ubahMerah = (e) => {
//     if(merah){
//         kalimat.className = "btn btn-danger";
//         e.preventDefault();
//     }
// }

// hijau.addEventListener("click", ubahHijau);
// kuning.addEventListener("click", ubahKuning);
// merah.addEventListener("click", ubahMerah);

// Nomor 2 baru

// var kalimat = document.getElementById("kalimat");
// var warnaSelect = document.querySelectorAll("button");

// var ubahWarna = () => {
//     for (let i = 0; i < warnaSelect.length; i++) { 
//         warnaSelect[i].addEventListener("click", (e) => {
//             if(warnaSelect[i].value === "hijau"){
//                 kalimat.className = "btn btn-success"
//                 e.preventDefault();  
//             }else if(warnaSelect[i].value === "kuning"){
//                 kalimat.className = "btn btn-warning"
//                 e.preventDefault();
//             }else if(warnaSelect[i].value === "merah"){
//                 kalimat.className = "btn btn-danger"
//                 e.preventDefault();
//             }
//         })
//     }
// }

// ubahWarna()


//Nomor 3

// var inputNilai = document.getElementById("nilai");
// var alerts = document.getElementById("alerts");
// var proses = document.getElementById("submit");

// var notif = (e) => {
//     if(inputNilai.value > 90 && inputNilai.value <= 100){
//             alerts.innerHTML = "grade A";
//             alerts.className = "btn btn-info";  
//             e.preventDefault();  
//         }else if(inputNilai.value > 75 && inputNilai.value <= 90){
//             alerts.innerHTML = "grade B";
//             alerts.className = "btn btn-info";  
//             e.preventDefault();  
//         }else if(inputNilai.value > 55 && inputNilai.value <= 75){
//             alerts.innerHTML = "grade C";
//             alerts.className = "btn btn-info";  
//             e.preventDefault();  
//         }else if(inputNilai.value > 40 && inputNilai.value <= 55){
//             alerts.innerHTML = "grade D";
//             alerts.className = "btn btn-info";  
//             e.preventDefault();  
//         }else if(inputNilai.value > 0 && inputNilai.value <= 40){
//             alerts.innerHTML = "grade E";
//             alerts.className = "btn btn-info";  
//             e.preventDefault();  
//         }else {
//             alerts.innerHTML = "grade F";
//             alerts.className = "btn btn-info";  
//             e.preventDefault();  
//     }
// }

// proses.addEventListener("click", notif);