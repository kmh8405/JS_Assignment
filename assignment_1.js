// 연산자와 조건문을 활용해 콘솔 계산기 만들기 실습

// 계산 로직 함수 생성
function calculate(num1, op, num2) {
    // 입력 받은 값은 문자형이기 때문에 숫자형으로 변환
    num1 = Number(num1);
    num2 = Number(num2);

    // 0으로 나누기 처리에 대한 로직
    if ((op === '/' || op === '//' || op === '%') && num2 === 0) {
        return "0으로 나눌 수 없습니다.";
    }

    // 연산자에 대해 조건문 적용
    if (op === '+') return num1 + num2;
    if (op === '-') return num1 - num2;
    if (op === '*') return num1 * num2;
    if (op === '/') return num1 / num2;

    // 몫, 나머지 연산 추가
    if (op === '//') return Math.floor(num1 / num2); // 몫
    if (op === '%') return num1 % num2; // 나머지

    return "잘못된 연산자";
}

// 사용자 입력 코드 추가
const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

// 사용자로부터 입력값 받기
// 차례대로 입력 받아야 하므로 중첩
rl.question("첫 번째 숫자: ", function(num1) {
    rl.question("연산자 (+, -, *, /, //, %): ", function(op) {
        rl.question("두 번째 숫자: ", function(num2) {
            // calculate 함수 실행 결과 result에 저장
            const result = calculate(num1, op, num2);
            console.log("결과:", result);

            // readline 사용 후에는 닫아줘야 함.
            rl.close();
        });
    });
});