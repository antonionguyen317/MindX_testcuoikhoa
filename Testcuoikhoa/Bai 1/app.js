let number1 = parseInt(prompt("nhập vào số a: "));
let number2 ;
 	if(number1 < 2){
 		number1 = 2;
 	}
 	do{
 		number2 = parseInt(prompt("nhập vào số b: "));
 		if(number2 < 0 || number2 < number1);
 		alert("số thứ 2 phải lớn hơn 0 và lớn hơn số thứ nhất");
 	
 	} while(number2 < 0 || number2 < number1 );

let flag = true;
for (let i = number1; i <= number2; ++i){
 	flag = true;
 	for(let j = 2; j < i; j++){
 		if(i % j == 0){
 			flag = false;
 			break;
 		}
 	}
 	if(flag == true){
 		console.log(i)
 	}
}
