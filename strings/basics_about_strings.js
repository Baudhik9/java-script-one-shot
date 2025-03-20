const name="baudhik"
const rep=50
const city="kota"
//console.log(name+rep+"value");//add strings but don't use now
//console.log(`Hello my name is ${name} and I am from ${city}`);//this is more modern and advance to use

const gamename = new String('Baudhik-09')//another way of defining the string variable
//console.log(gamename); //output is string and the value of string

//console.log(gamename[0]);//used to get the output of the particular index element of the string

//console.log(gamename.length);//length of the string
//there are many other functions like to uppercase to lowercase and many more


//console.log(gamename.charAt(5));//element at the position

//console.log(gamename.indexOf('h'));//use to find the index of the particular element

const newstr=gamename.substring(0,5)//used to slice the string with the starting index of the element and the ending index of the element of the new string
//console.log(newstr);
//last element index is not included in this slicing
//we can do slicing in reverse as well by using a negative sign in the index argument

const newstr1="    baudhik    "
// console.log(newstr1)
// console.log(newstr1.trim());//used to remove all the extra spaces given in the string


const url="https://baudhik.com/baudhik%20madan"
// console.log(url);

// console.log(url.replace('%20','-'));//used to replace the first element is searched in the string and it is replaced by the second element

//console.log(url.includes('baudhik'));//used to find weather it is present in the string or not


//console.log(gamename.split('-'));//used to split the string by giving the particular element to split


