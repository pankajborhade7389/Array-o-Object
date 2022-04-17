console.log("working");

//Que-1.

let studentRecords = [{name:"Sky",id:123,marks:98},
    {name:"Nagesh",id:101,marks:23},
    {name:"Vaibhav",id:200,marks:45},
    {name:"Roman",id:115,marks:75}
];

let arr = studentRecords.map(x => x.name.toUpperCase());
console.log(arr);

//Que-2.

let arr1 = studentRecords.filter(x => x.marks > 50);
console.log(arr1);

//Que-3.

let arr2 = studentRecords.filter((x) => x.marks > 50 && x.id > 120);
console.log(arr2);

//Que-4.

let arr3 = studentRecords.reduce((accu, curr) => accu + curr.marks,0);
console.log(arr3);

//Que-5.

let arr4 = studentRecords.filter(x => x.marks > 50);
for(let i = 0; i<arr4.length; i++){
    console.log(arr4[i].name);
}

//Que-6.

let arr5 = studentRecords.filter(x => x.id > 120);
let arr6 = arr5.reduce((accu, curr) => accu + curr.marks,0);
console.log(arr6);

//Que-7.

for(let x of studentRecords){
    if(x.marks < 50){

        x.marks = x.marks + 15;
    }
}

let arr7 = studentRecords.filter(x => x.marks > 50);
let arr8 = arr7.reduce((accu, curr) => accu +curr.marks,0);
console.log(arr8);

//Que-8.

let student1 = {
    name : "Pushpendra singh",
    class : 11,
    roll_no : 10055
}

let student2 = {
    name : "vivek singh",
    class : 12,
    roll_no : 10066
}
let student3 = {
    name : "Rohit sharma",
    class : 13,
    roll_no : 10077
}

let student4 = {
    name : "Ishan kishan",
    class : 14,
    roll_no : 10088
}
let student5 = {
    name : "Raj thakrey",
    class : 15,
    roll_no : 10099
}

let student6 = {
    name : "Narendra Modi",
    class : 16,
    roll_no : 100111
}
let student =[{...student1},{...student2},{...student3},{...student4},{...student5},{...student6}];
console.log(student);

