//fibonacci
function fibonacci() {
    let first = 0, second = 1;
    let ans;
    let arr = [0, 1];
    for (let i = 0; i < 8; i++) {
        ans = first + second;
        arr.push(ans);
        first = second;
        second = ans;
    }
    return arr;
}
// console.log(fibonacci());

//Prime number

function primeNumber(n) {
    let flag = 0, half = n / 2;
    if (n === 0 || n === 1) {
        console.log(`${n} is not a prime number`);
    }
    else {
        for (let i = 2; i <= half; i++) {
            if (n % i == 0) {
                flag = 1;
                break;
            }
        }
        if (flag === 0) {
            console.log(`${n} is a prime number`);
        }
        else {
            console.log(`${n} is not a prime number`);
        }
    }


}
primeNumber(11)
//series of prime number
function prime(n) {
    // console.log("prime called",n)
    let j = 2, arr=[];
    
    while (j <= n) {
        let flag = 0;;
        for (let i = 2; i <j; i++) {
            if (j% i ==0 ) {
                flag = 1;
                break;  
            }
        }
       if(flag==0){
        arr.push(j);
       }      
       j++;
        }
    
   console.log(arr)
    }

// prime(10);
//Palindrome number

function Palindrome(str){
    let n=str.length;
    let flag=0;
 for(let i=0,j=n-1;i<n/2,j>i;i++,j--){
 if(str[i]!=str[j]){
    flag=1;
    break;
 }
 }
 if(flag==0){
    console.log(`${str} is a palindrome`)
 }
 else{
    console.log(`${str} is not a palindrome`);
 }
}
Palindrome("slevels");
//factorial
function factorial(n){
    if(n==0 ||n==1){
        return 1;
    }
    else{
        return n*factorial(n-1);
    }
}
console.log(`factorial is:`, factorial(5))

//Armstrong number

function armstrongNumber(num){
    let n=num;
    let sum=0;
    while(n>0){
        let digit=Math.floor(n%10);
        sum+=(digit*digit*digit);
        n=n/10;

    }
    if(sum==num){
        console.log(`${num} is a armstrong number`);
    }else{
        console.log(`${num} is not a armstrong number`);
    }
}
armstrongNumber(1153);

//compare two objects in javascript
function compareObjects(){
    let a= {
        "name":"Ezhil",
        "age":23
    }
    let b={
        "name":"Ezhil",
        "age":23
    }
    console.log(JSON.stringify(a)==JSON.stringify(b));
}
compareObjects()


