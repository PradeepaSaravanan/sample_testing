//total length of characters in a string
function totalLength(str){
  let n=str.length;
  let count=0;
  for(let i=0;i<n;i++){
    if(str[i]!=' '){
        count++;
    }
  }
  return count;
}
console.log("Total number of characters:",totalLength("I am the best"));

function totalpunctuation(str){
    let n=str.length;
    let count=0;
    for(let i=0;i<n;i++){
      if(str[i]==='!'){
          count++;
      }
    }
    return count;
  }
  console.log("punctuation:",totalpunctuation("I!!am! the! best!"));

  function vowelsAndConsonants(str){
    let n=str.length;
    let str1= str.toLowerCase();
    let vC=0,cC=0;
    for(let i=0;i<n;i++){
        if(str[i]=='a'||str[i]=='e' || str[i]=='i'|| str[i]=='o' || str[i]=='u'){
            vC++;
        }else{
            cC++
        }
    }
    console.log("Vowel Consonants:",vC);
    console.log(" Consonant Count:",cC);
  }
vowelsAndConsonants("I am the best person ever");

//anagram

function anagram(str1,str2){
    let n1=str1.length;
    let n2=str2.length;
    let flag=0;
    if(n1!=n2){
        flag=1;
        //return "not a anagram";
    }
    else{
    
        let x=str1.split("").sort().join("");
       let y= str2.split("").sort().join("");
        for(let i=0; i<n1;i++){
            if(x[i]!=y[i]){
                flag=1
                //return "not a anagram";
            }
        }
        // return "Anagram";
        
    }
    if(flag==0){
        return "Anagram";
    }else{
        return "not a anagram";
    }
}
console.log(anagram("keepskdkcvx","psnvmcv eek"));

//Divide into N equal parts
function splitNparts(str, n){
   let len= str.length;
   let equals=Math.floor(len/n);
   console.log("Equals::",equals);
   let  arr=[];
   if(len%n!=0){
    console.log(`This string ${str} can't be split into equal number of parts`);
   }
   else{
     for(let i=0;i<len;i+=n){
        let subs=str.substr(i,n);
        arr.push(subs);
     }
     console.log("Split array", arr.toString());
   }

}
splitNparts("priyadharshini is my frjndvv",4);

//


