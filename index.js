const obj = {
    userName:"laotie"
}
function fn() {
    a = 12;1
    console.log(this.userName,a);
}
console.log('我是小妖怪');

const myFn = fn.bind(obj);
myFn();