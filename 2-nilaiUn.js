let mtk = 35
let bahasaIndonesia = 90
let bahasaInggris = 89
let ipa =  69

let sum 
let average 



const num = "number"

if(typeof bahasaIndonesia != num || typeof mtk != num || typeof bahasaInggris != num || typeof ipa != num){
  console.log("tolong masukkan angka")
}else if (mtk < 0 || bahasaIndonesia <= 0 || bahasaInggris <= 0 || ipa <= 0){
  console.log("angka harus lebih besar dari 0")
}else if (mtk > 100 || bahasaIndonesia > 100 || bahasaInggris > 100 || ipa > 100){
  console.log("angka harus lebih kecil dari 100")
}else{
  sum =  mtk + bahasaIndonesia + bahasaInggris + ipa
  average = sum/4
  console.log("rata rata =", average)
  if(average <= 100 && average >= 90) {
    console.log("nilai = A")
  }else if(average < 90 && average >= 80) {
    console.log("nilai = B")
  }else if(average < 80 && average >= 70) {
    console.log("nilai = C")
  }else if(average < 70 && average >= 60) {
    console.log("nilai = D")
  }else {
    console.log("nilai = E")
  }
}



