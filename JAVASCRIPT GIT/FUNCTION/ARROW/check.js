let cond = (a,b,c,d) =>{
    if(a > b && a > c && a > d){
        return a;
    }else if(b > a && b > c && b > d){
        return b;
    }else if(c > a && c > b && c > d){
        return c
    }else{
        return d;
    }
};

let res = cond(10,23,45,67);
console.log(res);
