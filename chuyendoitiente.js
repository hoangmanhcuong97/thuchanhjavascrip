function doitien(){
  //Khai bao du lieu
    let soTien = parseInt(document.getElementById("sotien").value);
    let from = parseInt(document.getElementById("from").value);
    let to = parseInt(document.getElementById("to").value);
    //Tinh toan
    let ketqua = soTien*(from/to);
    //Hien thi
    document.getElementById("hienthi").innerHTML=("Hien thi ket qua: "+ketqua);
}
