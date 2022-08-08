function xinSDT() {
  console.log("Goi cho A xin sdt cua B");
  console.log("Doi A tim ...");

  let sdt;

  const thaoTacTimKiem = new Promise((resolve, reject) => {
    let isSearched;
    setTimeout(() => {
      isSearched = true;
      if (isSearched) {
        sdt = 123456;
        console.log("Da tim thay so cua B " + sdt);
        resolve(sdt);
      } else {
        console.log("Khong tim thay sdt cua B");
      }
    }, 2000);
  });
  return thaoTacTimKiem;
}

function sacPin(){
    console.log("Doi ti, dang sac pin");

    const thaoTacSacPin = new Promise((resolve, reject) => {
        let isCharged;
        setTimeout(() => {
            isCharged = true;
            if(isCharged) {
                console.log("Da sac pin xong");
                resolve();
            }else{
                console.log("Khong sac pin duoc");
            }
        },2000);
    })
    return thaoTacSacPin;
}

function goiChoB(sdt) {
    console.log("Dang goi dien cho B " + sdt);
}

const hanhDong = async () => {
    try {
        const sdt = await xinSDT();
        try {
            await sacPin();
            goiChoB(sdt);
        } catch (error) {
            console.log(error);
        }

    } catch (error) {
        console.log(error);
    }
};

hanhDong();
