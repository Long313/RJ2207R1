const number = [1, 2, 3, 4, 5];

Array.prototype.reduce2 = function(callback,result){
    let i = 0;
        if(arguments.length < 2){
            i = 1;
            result = this[0];
        }
        for(; i<this.length; i++){
            result = callback(result,this[i], i, this)
        }
        return result;
}

var result = number.reduce2(function(initialValue,currentValue,index){
    return initialValue + currentValue;
},10)
console.log(result);