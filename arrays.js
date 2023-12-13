//copy from one array to another
let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

function copyArray(){
    let arr=[1,2,3,4,5,6];
    let arr2=[...arr];
    arr2[4]=33
    console.log("copied array:",arr2);
}
copyArray();

//frequency of a number
function frequency(){
    let arr=[1,1,14,4,5,2,4,6,3,2];

}

//duplicates
function duplicate(){
   let arr=[1,1,14,4,5,2,4,6,3,2];
   arr.sort((a,b)=>a-b);
   let duplicate= new Set();
   for(let i=1;i<arr.length;i++){
    if(arr[i-1]!=arr[i]){
      continue;
    }
    else{
        duplicate.add(arr[i]);
    }
   }
//    return [...duplicate];
// return Array.from(duplicate)
return duplicate;
}
console.log("Duplicated", duplicate());

//reverse array

function reverseArray(){
    let arr=[1,2,3,4,5,6];
    // arr.reverse();
    let n=arr.length;
    let arr1=[];
    for(let i=n-1;i>0;i--){
        arr1.push(arr[i]);
        }
    console.log("reverse::",arr1);
    
}
reverseArray();
//Even odd positions
function evenOdd(){
    let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    let n=arr.length;
    let even=[];
    let odd=[];
    for(let i=0;i<n;i++){
        if(i%2==0){
            even.push(arr[i]);
        }
        else{
            odd.push(arr[i]);
        }
    }
    // return [...even], [...odd];
    console.log("EVen position::", even);
    console.log("Odd position::", odd)
}
evenOdd() ;

function largestSmallest(arr){
     arr.sort((a,b)=>b-a);
     console.log( "Largest:::",arr[0]);
     console.log("Smallest::",arr[arr.length-1]);

}
largestSmallest(arr);

//largest number
 function largest(arr){
    let n=arr.length;
    let max=Number.MIN_VALUE;
    for(let i=0;i<n;i++){
        if(arr[i]>max){
            max=arr[i]
        }
    }
    return max;
 }
 console.log("Largest:::",largest(arr))
//smallest number
 function smallest(arr){
    let n=arr.length;
    let min=Number.MAX_VALUE;
    for(let i=0;i<n;i++){
        if(arr[i]<min){
            min=arr[i]
        }
    }
    return min;
 }
 console.log("smallest:::",smallest(arr))

 function sorting(arr){
    console.log("descending order::",arr.sort((a,b)=>b-a))
    console.log("Ascending order::",arr.sort((a,b)=>a-b));
 }
 sorting(arr)



