/*
* You should write your code inside a function

* Your function should take the input(s) as argument(s)

* Your function should return the answer as a data-structure

* You can validate/test your code by calling your function and printing the data-structure it returns

* Your function should return the same output if it is called multiple times in a row


You are a developer for a university. Your current project is to develop a system for students to find courses they share with friends. The university has a system for querying courses students are enrolled in, returned as a list of (ID, course) pairs.

Sample Input:

student_course_pairs_1 = [
  ["58", "Linear Algebra"],
  ["94", "Art History"],
  ["94", "Operating Systems"],
  ["17", "Software Design"],
  ["58", "Mechanics"],
  ["58", "Economics"],
  ["17", "Linear Algebra"],
  ["17", "Political Science"],
  ["94", "Economics"],
  ["25", "Economics"],
  ["58", "Software Design"],
]

Write a function that takes in a list of (student ID number, course name) pairs and returns, for every pair of students, a list of all courses they share.

Sample Output (pseudocode, in any order):

find_pairs(student_course_pairs_1) =>
{
  [58, 17]: ["Software Design", "Linear Algebra"]
  [58, 94]: ["Economics"]
  [58, 25]: ["Economics"]
  [94, 25]: ["Economics"]
  [17, 94]: []
  [17, 25]: []
}

Additional test cases:

Sample Input:

student_course_pairs_2 = [
  ["42", "Software Design"],
  ["0", "Advanced Mechanics"],
  ["9", "Art History"],
]

Sample output:

find_pairs(student_course_pairs_2) =>
{
  [0, 42]: []
  [0, 9]: []
  [9, 42]: []
}

*/



const studentCoursePairs1 = [
    ["58", "Linear Algebra"],
    ["94", "Art History"],
    ["94", "Operating Systems"],
    ["17", "Software Design"],
    ["58", "Mechanics"],
    ["58", "Economics"],
    ["17", "Linear Algebra"],
    ["17", "Political Science"],
    ["94", "Economics"],
    ["25", "Economics"],
    ["58", "Software Design"]
  
  ];
  
  const studentCoursePairs2 = [
    ["42", "Software Design"],
    ["0", "Advanced Mechanics"],
    ["9", "Art History"],
  ];
  
  
  function find_pairs(studentPairs){
    studentMap = {};
    for (let i = 0; i < studentPairs.length; i++){
      if (studentMap[studentPairs[i][0]]){
        studentMap[studentPairs[i][0]].add(studentPairs[i][1]);
        } else{
        studentMap[studentPairs[i][0]] = new Set();
        studentMap[studentPairs[i][0]].add(studentPairs[i][1]);
        }
    }  
    let finalOverLap = {};
    for (let i = 0; i < Object.keys(studentMap).length; i++){
      let current = Object.keys(studentMap)[i];
      for (let j = i+1; j < Object.keys(studentMap).length; j++){
      let comp = Object.keys(studentMap)[j];
      let overLap = [];
      studentMap[current].forEach(function(course){
        if (studentMap[comp].has(course)){
          overLap.push(course);
        }
      })
      finalOverLap[`${current}, ${comp}`]= overLap;
      }
     }
    
   return finalOverLap;
  }
  
  console.log(find_pairs(studentCoursePairs1));
  console.log(find_pairs(studentCoursePairs2));
  
  