let count = 0;
const viewCounter = (req,res,next) =>{
 count ++;
 console.log(count)
 next();
}
module.exports = viewCounter;