/*
### Task - 2

Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

**Input:**
</br>
The first line of the input is the marks of the five subjects mentioned above, respectively.

**Output:**
</br>
Print the result in 2 decimal places.

---

**Sample Input:**
</br>
75.25, 65, 80, 35.45, 99.50

**Sample Output:**
</br>
71.04
*/
var math = 75.25;
var bio = 65;
var chem = 80;
var phy = 35.45;
var bang = 99.50;

var totalNumber = math + bio + chem + phy + bang;
console.log('Total marks obtained =', totalNumber.toFixed(2));

var avg = totalNumber / 5;
console.log("Average mark is =", avg.toFixed(2));
