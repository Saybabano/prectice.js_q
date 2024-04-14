// 1. Write a program that checks if a given number is even or odd.
function check_number(num){
    if (num%2==0){
        return "even"
    }
    else{
        return "odd"
    }  
}
console.log(`this number is ${check_number(3)}.`)

// 2. Create a function that takes two numbers as parameters and returns the larger one.
function larger_number(a,b){
    if (a>b){
        return a;
    }
    else{
        return b;
    }
}
console.log(`The larger one is ${larger_number(34,60)}.`)
// 3. Write a function that determines if a given year is a leap year.
// 4. Implement a program that checks whether a given character is a vowel or consonant.
function check_char(character){
    const arr=["a","e","i","o","u","A","E","I","O","U"]
    if (character==arr){
        return "Vowel"
    }
    else{
        return "Consonat"
    }
}
console.log(`This character is ${check_char("k")}.`)
// 5. Create a function that takes three numbers as input and returns the largest among them.
function largest_num(a,b,c){
    if ((a>b) && (a>c)){
        return a
    }
    else if ((b>a) && (b>c)){
        return b
    }
    else{
        return c
    }
}
console.log(`The largest among number is ${largest_num(30,444,89)}.`)
// 6. Write a program that checks if a given number is positive, negative, or zero.
function check_num(num){
    if ((num==0)){
        return "Zero"
    }
    else if ((num>0)){
        return "Positive"
    }
    else{
        return "negative"
    }
}
console.log(`This number is ${check_num(-20)}.`)

// 7. Implement a function that calculates the grade of a student based on their score.
function grade(Math,science,hindi,english,history){
    let sum=0;
    let Avg;
    sum=(Math+science+hindi+english+history)
    Avg=sum/5
    if (Avg<=90 && Avg>=100){
        return "A"
    }
    else if (Avg>=80 && Avg<90){
        return "B"
    }
    else if (Avg>=70 && Avg<80){
        return "C"
    }
    else if (Avg>=60 && Avg<70){
        return "D"
    }
    else{
        return "F"
    }
}
console.log(`This is grade ${grade(56,72,20,30,22)}.`)
// 8. Create a program that determines if a given string is a palindrome.
function palindrome(str){
    let store =str;
    let revese ="";

    for(let i=str.length-1;i>=0;i--){
        revese+=str[i]
    }

    if (store==revese){
        return "Yes"
    }  
    else{
        return "No"
    }
}
console.log(`This is ${palindrome("mama")} palindrome.`)
// 9. Write a function that checks whether a person is eligible to vote based on their age.
function vote(Fname,age){
    if (age>=18){
    console.log(`${Fname},your age is ${age} so you are eligible vote.`)
    }
    else{
        console.log(`Hey ${Fname},your age is ${age} so you aren't eligible vote.`)
    }
}    
vote("sayba bano",20);
// 10. Implement a program that determines the type of a triangle based on the lengths of its sides.
function check_triangle(a,b,c){
    if ((a===b)&&(b===c)){
        return "Equilateral triangle"
    } 
    else if ((a===b)||(a===c)||(b===c)){
        return "Isosceles triangle"
    }
    else{
        return "Scalene triangle"
    }
}
console.log(`this triangle is ${check_triangle(4,4,5)}`)