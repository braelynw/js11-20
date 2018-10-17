
//write eleventh method
function firstLast6(arr){
    if (arr[0] == 6 || arr[(arr.length)-1] == 6){
        return true;
    }
    return false;
}


//write twelfth method
function has23(arr){
    if (arr.includes(2)|| arr.includes(3)){
        return true;
    }
    return false;
}


//write thirteenth method
function fix23(arr){
    for (var i=0; i<arr.length; i++){

        if(arr[i] == 2 && arr[i+1] == 3){
            arr[i+1] = 0;
        }
    }
    return arr;
}


//write fourteenth method
function countYZ(str){
    var str = str.toLowerCase();
    var sum = 0;
    for (i=0; i<str.length; i++){

        if((str[i] == "y" || str[i] == "z") && str[i+1] == " "){
            sum++;
        }
        if ((str[i] == "y" || str[i] == "z") && i == str.length-1){
            sum++;
        }
    }
    return sum;
}

//write fifteenth method
function endOther(str1, str2){
    var str1 = str1.toLowerCase();
    var str2 = str2.toLowerCase();
    if (str1.length >= str2.length) {
        if (str1.indexOf(str2) == str1.length-str2.length) {
            return true;
        }
        return false;
    }
    if (str2.length >= str1.length) {
        if (str2.indexOf(str1) == str2.length-str1.length) {
            return true;
        }
        return false;
    }

}


//write sixteenth method
function starOut(str){
    var newstring = "";
    for (var i=0; i<str.length; i++){
        if (str[i] != "*" && str[i+1] != "*" && str[i-1] != "*"){
            newstring = newstring + str[i];
        }
    }
    return newstring;
}


//write seventeenth method
function getSandwich(str){
    var breadCount = 0;
    for (var i=0; i< str.length; i++){
        if (str.substring(i,i+5) == "bread"){
            breadCount +=1;
        }
    }
    if (breadCount >=2){
        return str.substring((str.indexOf("bread")+5), str.lastIndexOf("bread"))
    }else{
        return "";
    }
}


//write eighteenth method
function canBalance(num) {
    var sum1 = 0;
    var isEqual = false;
    for (var i = 0; i < num.length; i++) {
        var sum2 = 0;
        sum1 += num[i];
        for (var j = i + 1; j < num.length; j++) {
            sum2 += num[j];

        }
        if (sum1 == sum2) {
            isEqual = true;
        }
    }
    return isEqual;
}


//write nineteenth method
function countClumps(arr){
    var sum = 0;
    for (var i=0; i<arr.length; i++){
        if (arr[i] == arr[i+1]){
            sum++;
            if (arr[i] == arr[i+2]){
                sum--;
            }
            for (var j = i; j<arr.length; j++){
                if (arr[j] != arr[i]){
                    break;
                }
            }
        }

    }
    return sum;

}

//write twentieth method
function evenlySpaced(a,b,c){
    if (a-b == b-c || b-c == c-a || c-a == a-b || c-b == b-a || a-c == c-b || b-a == a-c){
        return true;
    }
    return false;
}



