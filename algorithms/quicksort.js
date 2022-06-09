const compareToPivotTitle = (pivot,item2) =>{
    // items with no title instantly return false

  if (pivot.Title > item2.Title){
  
      return true;
  }
  return false;
}


const compareToPivotBedRooms = (pivot,item2) =>{

  if(pivot.Bedrooms > item2.Bedrooms){
      return true;
  }
  return false;

}

const compareToPivotBathRooms =(pivot,item2) =>{

  if(pivot.Bathrooms > item2.Bathrooms){
      return true;
  }
  return false;

}

const compareToPivotGarages =(pivot,item2) =>{

  if(pivot.Garages > item2.Garages){
      return true;
  }
  return false;

}


const callQuickSort = (array,whatToCompare) => {


    if (whatToCompare === 1){
        let returnArray = quickSortTitle(array)
        console.log(returnArray);
        return returnArray;
    } else if (whatToCompare === 2){
        let returnArray = quickSortBedRoom(array)
        console.log(returnArray);
        return returnArray
    } else if (whatToCompare === 3){
        let returnArray = quickSortBathRoom(array)
        console.log(returnArray);
        return returnArray
    } else if (whatToCompare === 4){
        let returnArray = quickSortGarage(array)
        console.log(returnArray);
        return returnArray
    } else{
        return quickSortTitle(array)
    }

}





const quickSortTitle = (array) => {
    console.log("started!")
    if(array.length <=1){
        return array;
    }


    const [pivot, ...remainingArray] = array;

    let lessThan = [];
    let BiggerThan =[];


    for (let i = 0; i < remainingArray.length; i ++){

        if (compareToPivotTitle(pivot,remainingArray[i]) === true){
            lessThan.push(remainingArray[i]);
           
        } 
        else{
            BiggerThan.push(remainingArray[i]);
        }
     
        
    }
    return quickSortTitle(lessThan).concat(pivot).concat(quickSortTitle(BiggerThan));

}




const quickSortBedRoom = (array) => {
    console.log("started!")
    if(array.length <=1){
        return array;
    }


    const [pivot, ...remainingArray] = array;

    let lessThan = [];
    let BiggerThan =[];


    for (let i = 0; i < remainingArray.length; i ++){

        if (compareToPivotBedRooms(pivot,remainingArray[i]) === true){
            lessThan.push(remainingArray[i]);
           
        } 
        else{
            BiggerThan.push(remainingArray[i]);
        }
     
        
    }
    return quickSortBedRoom(lessThan).concat(pivot).concat(quickSortBedRoom(BiggerThan));

}




const quickSortBathRoom = (array) => {
    console.log("started!")
    if(array.length <=1){
        return array;
    }


    const [pivot, ...remainingArray] = array;

    let lessThan = [];
    let BiggerThan =[];


    for (let i = 0; i < remainingArray.length; i ++){

        if (compareToPivotBathRooms(pivot,remainingArray[i]) === true){
            lessThan.push(remainingArray[i]);
           
        } 
        else{
            BiggerThan.push(remainingArray[i]);
        }
     
        
    }
    return quickSortBathRoom(lessThan).concat(pivot).concat(quickSortBathRoom(BiggerThan));

}



const quickSortGarage = (array) => {
    console.log("started!")
    if(array.length <=1){
        return array;
    }


    const [pivot, ...remainingArray] = array;

    let lessThan = [];
    let BiggerThan =[];


    for (let i = 0; i < remainingArray.length; i ++){

        if (compareToPivotGarages(pivot,remainingArray[i]) === true){
            lessThan.push(remainingArray[i]);
           
        } 
        else{
            BiggerThan.push(remainingArray[i]);
        }
     
        
    }
    return quickSortGarage(lessThan).concat(pivot).concat(quickSortGarage(BiggerThan));

}









module.exports = {callQuickSort}