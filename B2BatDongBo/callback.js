function xinSDT(callback) {
  let sDT;
  console.log("Goi A xin SDT cua B");
  console.log("A dang tim SDT");
  setTimeout(() => {
    console.log("Da tim thay SDT cua B");
    sDT = 123456;
    callback(sDT,goiDien);
  }, 1000);
}

function sacPin(sDt,callbackSacPin){
    console.log("Dang sac pin");
    setTimeout(() =>{
        console.log("Da sac pin xong");
        callbackSacPin(sDt);
    },2000);
} 
function goiDien(sDT){
    console.log("Dang goi dien cho B " + sDT);
}
xinSDT(sacPin);

