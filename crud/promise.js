const rune =async()=> {
    let p1 = new Promise((resolve, reject) => {
        resolve(40)
    });
    let p2 = new Promise((resolve, reject) => {
        resolve(30)
    });
    
    let a = await p1;
    let b = await p2;

    return [a,b];

}
let c = rune()
c.then((value)=>{
    console.log(value[0]+value[1])
})
