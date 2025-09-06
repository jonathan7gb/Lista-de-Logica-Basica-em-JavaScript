function ordenarArray(array = []){
    if(array.every(string => typeof string === 'string')){
        array.sort();
    }else{
        array.sort(function(a,b){
            return a-b;
        })
    }

    console.log(array)
}

ordenarArray([1,2,3,8,4,1,8])
ordenarArray(["Banana", "Maca", "Ameixa"])