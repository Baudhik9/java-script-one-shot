let mydate= new Date()
//console.log(mydate);//output is in unreadable manner 
//console.log(mydate.toString());//convert the output into date day year and all
//console.log(mydate.toLocaleString());

//console.log(typeof mydate);//type of the date is an object


let mycreated=new Date(2023,1,23)//we can create our own date (i) year, (ii)month(next month), (iii) date
//console.log(mycreated.toDateString());
//month starts with 0 in javaScript
//we can add time as well by adding comma in it

let mycre=new Date("2023-01-14")//another way of creating the date in javaScript
//console.log(mycre.toLocaleString());

let mytimes=Date.now()
// console.log(mytimes);
// console.log(mytimes.getTime());


