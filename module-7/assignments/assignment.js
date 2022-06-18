const data =
[
    { born: 1870, died: 1924 },
    { born: 1893, died: 1976 },
    { born: 1869, died: 1948 },
    { born: 1901, died: 1989 },
];


const age = data
    .map((data) => {
    return data.died - data.born;
})
console.log(age);

const filtered = age.filter((age) => age > 75);
console.log(filtered);

const oldest = filtered.reduce((max, age) => age > max ? age : max, filtered[0])
console.log(oldest);

const ageData = data
    .map((data) => data.died - data.born)
    .filter((age) => age > 75)
    .reduce ((max, age) => age > max ? age : max, filtered[0]);
console.log(ageData);



 

