function xinSDT(){
    console.log("Goi cho A xin SST cua B");
    console.log("A dang tim sdt");

    let sDT;
    
    const thaoTacTimKiem = new Promise((resolve, reject) => {
        let timThay;
        setTimeout(() => {
            timThay = true;
            if(timThay) {
                console.log("Da tim thay sdt cua B");
                sDT = 123456;
                resolve(sDT);
            }else{
                console.log("Khong tim thay sdt cua B");
            }
        },1000);
    })
    return thaoTacTimKiem;
}

function sacPin(){
    console.log("Dang sac pin");

    const thaoTacSacPin = new Promise((resolve, reject) => {
        let pinOk;
        setTimeout(() => {
            pinOk
            if(pin){
                console.log("Da sac pin xong");
                resolve();
            }else{
                console.log("Sac hong, ko goi duoc");
            }
        }, 1000);
    })
    return thaoTacSacPin;
}

function goiChoB(sDT){
    console.log("Dang goi cho B " + sDT);
}

xinSDT()
.then(() => {
    sacPin()
    .then (() => {
        goiChoB(sDT);
    })
    .catch ((err) => {console.log(err);});
})
.catch((err) => console.log(err));