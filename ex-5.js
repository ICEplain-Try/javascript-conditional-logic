function calculateStudentGrade(score) {
  // Start writing your solution here
  if (score >= 0 && score <= 59) {
    return 'F';
  } else if (score >= 60 && score <= 69) {
    return 'D';
  } else if (score >= 70 && score <= 79) {
    return 'C';
  } else if (score >= 80 && score <= 89) {
    return 'B';
  } else if (score >= 90 && score <= 100) {
    return 'A';
  } else {
    return 'F'; // กรณีที่ไม่ตรงกับเงื่อนไขใด ๆ เลย
  }
}

// Example case
let johnGrade = calculateStudentGrade(30);
let lisaGrade = calculateStudentGrade(73);
let janeGrade = calculateStudentGrade(80);
let jjGrade = calculateStudentGrade(60);
let alexGrade = calculateStudentGrade(90);

// ผลลัพธ์ที่ควรได้จาก Example case
console.log(`John grade is ${johnGrade}`); //'John grade is F'
console.log(`Lisa grade is ${lisaGrade}`); //'Lisa grade is C'
console.log(`Jane grade is ${janeGrade}`); //'Jane grade is B'
console.log(`JJ grade is ${jjGrade}`); //'JJ grade is D'
console.log(`Alex grade is ${alexGrade}`); //'Alex grade is A'