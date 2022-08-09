const url = require('url');

const newUrl = new URL('https://halilullah.com/users/user.html?name=HalilUllah&status=active&age=23')

//General url adress
console.log(newUrl.href);
//hostname?with portname
console.log(newUrl.host);
//domain name
console.log(newUrl.hostname);
//pathname
console.log(newUrl.pathname);
//search query param
console.log(newUrl.search);
//objected
console.log(newUrl.searchParams);
//add new params
newUrl.searchParams.append('newUser', 'Elbek')
console.log(newUrl.searchParams);

//cycle 
console.log(newUrl.searchParams.forEach((name, val) => {
    console.log(`${val}:${name}`);
}));