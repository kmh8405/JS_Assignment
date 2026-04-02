// 지금까지 배운 JS 문법(조건문, 반복문, 함수 등)을 활용하는 실습

// 내가 한 방식
function getAverage(scores) {
    // 평균 = 총합 / 개수
    let sum = 0;

    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    };

    let count = scores.length;
    let avg = sum / count;

    return avg;
};

const scores = [80, 85, 92, 97];
const average = getAverage(scores)
console.log(average);

// 강사님이 한 방식
// function getAverage(scores) {
//     if (scores.length === 0) {
//         return 0;
//     };

//     let sum = 0;

//     for (const score of scores) {
//         sum += score
//     };

//     return sum / scores.length;
// };

// const scores = [80, 85, 92, 97];
// const average = getAverage(scores)
// console.log(average);