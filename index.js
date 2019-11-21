
function bouncingBall(h,  bounce,  window) {
    
    if(h>0 && bounce>0 && bounce<1 && window<h){
        let index =0;
        while (h > window) { 
            h = h*bounce;
            index++;
        }
        return (2*index)-1;
    }else{
        return -1;
    }
}

export default bouncingBall
