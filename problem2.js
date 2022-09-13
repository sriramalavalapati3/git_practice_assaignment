// Check whether a string is palindrome or not.
let str="aabbcc";
let res="";
for(let i=0;i<str.length;i++)
{
res+=str[str.length-1-i];

}
if(res == str)
{
console.log("string is a Palindrome");
}
else
{
console.log("string is not a Palindrome");
}
