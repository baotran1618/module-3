// const fs = require('fs');
// fs.readFile('./data.txt','utf-8', function(err, data){
// if(err){
//     console.log(err.message)
// }
// else{
//     console.log(data)
// }
// })

// Tim ngay trong tuan

// let dateArray = ["chủ nhật", "thứ hai", "thứ ba", "thứ tư", "thứ năm", "thứ sáu", "thứ bảy"];

// let date = new Date();
// console.log(dateArray[date.getDay()]);

function myFunction(a) {
    console.log(typeof a)
    console.log('Hello world')
};
function callbackFunction(){
    console.log('This callback function is called')
}

myFunction(callbackFunction);