const gfname = "Mrsrandom"
export const gfname2 = "Mrsrandomfee"
export const gfnamedf = ()=>{
    return `${~~(Math.random() * 100)}%`;
}
    // module.exports = gfname;
// but if we have type:module 
// there can be only 1 export default in a file 
export default gfname;
