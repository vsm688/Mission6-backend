const quickSort = (array) => {
    console.log("started!")
    if(array.length <=1){
        return array;
    }


    const [pivot, ...remainingArray] = array;

    let lessThan = [];
    let BiggerThan =[];


    for (let i = 0; i < remainingArray.length; i ++){

        if (compareToPivot(pivot,remainingArray[i]) === true){
            lessThan.push(remainingArray[i]);
           
        } 
        else{
            BiggerThan.push(remainingArray[i]);
        }
     
        
    }
    return quickSort(lessThan).concat(pivot).concat(quickSort(BiggerThan));

}


const compareToPivot = (pivot,item2) =>{
      // items with no title instantly return false
    if(item2.title === null){
        
        return false;
    } 
  

    if (pivot.title > item2.title){
    
        return true;
    }
    return false;
}


module.exports = {quickSort}