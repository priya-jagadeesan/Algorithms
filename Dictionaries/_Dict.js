function dictionary(){
    this.dict = {};

    this.add = function(key, value){
        this.dict[key] = value;
    }

    this.show = function(){
        console.log("unsorted");
        for( key in this.dict){
            console.log(key + " --> " + this.dict[key]);
        };
        var keys = Object.keys(this.dict);
        var val; var tempD = {};
        keys.sort();

        for( key in keys){
            tempD[keys[key]] = this.dict[keys[key]];
        }
        this.dict = tempD;
        delete tempD;
        console.log("sorted");
        for( key in this.dict){
            console.log(key + " --> " + this.dict[key]);
        };
    }
}

var dict1 = new dictionary();
dict1.add('x1', 'value1');
dict1.add('z1', 'value2');
dict1.add(1, 'value3');
dict1.add('aa', 'value4');
dict1.add('bb', 'value5');
console.log(dict1.dict);
dict1.show();