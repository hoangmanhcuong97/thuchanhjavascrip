function nhapdiem() {
   let diem_vat_ly = prompt("Nhap diem vat ly");
   let diem_toan = prompt("Nhap diem toan");
   let diem_hoa = prompt("Nhap diem hoa");
   let a = parseFloat(diem_vat_ly);
   let b = parseFloat(diem_toan);
   let c = parseFloat(diem_hoa);
   let tongdiem3mon = a + b +c;
   let diemtrungbinh3mon = tongdiem3mon/3;
   document.write("Tong diem 3 mon la: "+tongdiem3mon);
   document.write("<br>Diem trung binh 3 mon la: "+diemtrungbinh3mon);
}
function chuyendoi(){
   let gia_tri_do_C = prompt("Nhap gia tri do c");
   let C = parseFloat(gia_tri_do_C);
   let F = 9*C/5 + 32;
   document.write("Gia tri do F da chuyen doi la: " + F);
}
function dientichhinhtron (){
  const pi =3.14;
  let bankinhhinhtron = prompt('Nhap ban kinh hinh tron');
  let r = parseFloat(bankinhhinhtron);
  let cicle = pi*r*r;
  document.write("Dien tich hinh tron la:"+cicle);
}
function chuvihinhtron (){
  const pi =3.14;
  let bankinhhinhtron = prompt('Nhap ban kinh hinh tron');
  let r = parseFloat(bankinhhinhtron);
  let chuvi = 2*pi*r;
  document.write("Dien tich hinh tron la:"+chuvi);
}
