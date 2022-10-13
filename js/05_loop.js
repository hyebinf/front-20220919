/*
    for문 : (초기값 변수; 조건식 ; 증감식)
    조건식이 참이라면 코드블록을 실행하고 증감식을 실행한다. => 반복
*/

for (var i = 1; i <= 5; i++) {
  console.log(`i: ${i}번째 실행 `);
  for (var j = 0; j < 3; j++) {
    console.log(`j: ${j}번째 실행`);
  }
}

/*
    문제 구구단 출력해보기 (9단 까지)
    힌트 : 중첩 for문 활용 초기값 설정(몇부터 시작해야할지)

    2단~ 9단까지
    각 단마다 1~9를 곱하기

*/
for (var i = 2; i <= 9; ++i) {
  console.log(i + "단 시작");
  for (var j = 1; j <= 9; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

/*
 while : ( ) 안의 조건식이 true라면 반복 실행 => false일 때까지 실행
 반복 횟수가 불명확 할 때 사용한다. 
 while문을 멈추는 방법 2가지
 1. 밖에 변수에 true를 할당한 후 특정 조건에서 false 변경
 2. 특정 조건에서 break를 통해서 반복문 탈출
*/

console.log("-----------------");

//var isTrue = true;
var i = 0;
while (true) {
  //사용자가 숫자를 입력할 때까지 반복
  //숫자가 아닌 문자를 넣으면 반복해서 입력창을 출력
  var value = prompt("숫자를 입력해주세요.");
  console.log(parseInt(value));
  //숫자를 넣으면 반복문을 끝낸다.
  if (!isNaN(parseInt(value))) break;
}
