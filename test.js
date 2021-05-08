const binaryConvert = (val) => {
    const arr = []
    while(true){
        if(val % 2 === 0){
            arr.push(0)
            val=val/2
            if(val ===1){
                break 
            }
        }else{
            arr.push(1)
            val=val/2
            if(val ===1){
                break 
            }
        }
        
        
    }

    return arr
}


console.log(binaryConvert(41))
