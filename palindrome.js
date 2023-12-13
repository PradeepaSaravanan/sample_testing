function palindrome(str){
  let n= str.length;
  let flag=0;
  for(let i=0, j=n-1;i<n, i<j;i++,j--){
    if(str[i]!=str[j]){
        flag=1;
        break;
    }
  }
  if(flag==0){
    console.log(`${str} is a palindrome`)
  }
  else{
    console.log(`${str} is not a palindrome`)
  }
}
palindrome("levelss");