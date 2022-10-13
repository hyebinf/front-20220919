var currentYear = 2022;
var birth = 1984;
var age = currentYear - birth + 1;

/* 
    if : ()안의 조건문이 true일 때 실행되고, false인 경우 실행 x
    else if : if문의 조건이 false 경우 else if의 조건을 확인 후 true이면 실행  => 필수 x
    else : 모든 조건이 해당하지 않을 때 실행(무조건) =>  필수 x
    
    논리 연산자를 통해서 정확한 조건을 작성.
*/
if (age >= 30 && age < 40) {
  console.log("30대 입니다.");
} else if (age >= 20 && age < 30) {
  console.log("20대 입니다.");
} else {
  console.log("30대도 20대도 아닙니다.");
}

// address의 값이 서울, 인천, 경기라면 수도권에 살고 있습니다를 출력
// 그렇지 않은 경우 지방에 살고 있습니다를 출력

var adress = "서울";

if (adress === "서울" || adress === "인천" || adress === "경기") {
  console.log("수도권에 살고 있습니다");
} else {
  console.log("지방에 살고 있습니다.");
}

/* 
    변수 num의 값이 짝수라면 짝수 입니다. 출력
    홀수라면 홀수 입니다 출력
    힌트 : 짝수의 정의? => 2로 나누어 떨어지는지?
*/
var num = 5;

if (num % 2 === 0) console.log("짝수입니다.");
else console.log("홀수 입니다.");

console.log("----------------------------------------------");

/*
    swich : ()안의 값을 각 case 값과 비교하여 해당 하는 case를 실행.
    break : 탈출, break를 하지 않으면 해당하는 case 이후의 case를 모두 실행.
    default : 기본으로 실행되는 코드.
*/

var data = [1, 2, 3];
switch (typeof data) {
  case "string": {
    console.log("String 타입입니다.");
  }
  case "number": {
    console.log("number 타입입니다.");
    break;
  }
  case "boolean": {
    console.log("boolean 타입니다.");
  }
  default: {
    console.log("모두 해당하지 않습니다.");
  }
}

/*
    점수가 90점 이상이면 A
    89~80 : B
    79~70 : C
    69~90 : D 
    그 이외는 F

*/

var score = 59;

switch (parseInt(score / 10)) {
  case 10:
  case 9:
    console.log("A등급입니다.");
    break;
  case 8:
    console.log("B등급입니다.");
    break;
  case 7:
    console.log("C등급입니다.");
    break;
  case 6:
    console.log("D등급입니다.");
    break;
  default:
    console.log("F등급입니다.");
}
