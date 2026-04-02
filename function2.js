// 함수를 값처럼 다루기
// 1) 함수를 변수에 할당할 수 있다

// 함수 정의 -> 설명서/설계도
function sayHello() {
    console.log("Hello");
};
// return 없으면 undefined 리턴

// 함수 실행 -> 기능 실제로 사용 (호출)
// 함수가 실행되어 "Hello"가 출력이 됨
// 즉, "이 함수 실행해!" 라는 뜻
// 비유하자면 리모컨
sayHello()

// 함수 -> 기능 그 자체 (값으로 취급)
// 함수 실행이 안되고 그냥 함수 자체를 가리키는 것
// 즉, "이 함수 자체를 가져온다"는 의미
// 비유하자면 버튼 눌러서 TV 조작
sayHello

// 왜 중요한가?
// 1) 자바스크립트에서는 함수도 값(value)이라서 변수에 넣을 수 있음
const fn = sayHello;
fn();

// 2) 함수를 다른 함수의 인자로 전달할 수 있음
function run(fn) {
    console.log("start function run...")
    fn();
    console.log("end function run...")
}

run(sayHello);

// run(sayHello()) 는 에러 발생
// sayHello 함수에 return을 명시하지 않으면 자동으로 undefined 반환
// 그러면 run(sayHello())는 run(undefined)와 동일
// 그래서 에러 발생.
// 좀 더 세부적으로 말하면 run(fn) 함수 내부에 fn(); 부분에서 에러 발생

// (기본) 함수를 선언한 곳에서 직접 호출
// (응용) 함수를 선언한 곳과 호출하는 곳이 달라짐