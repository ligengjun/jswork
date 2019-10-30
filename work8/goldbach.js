function goldbach(){
    var value = document.getElementById('odd').value
    if(value % 2 !== 0 || value == 2){
        alert('请输入一个大于2的偶数')
        return false
    }
    var goldbach = document.getElementById('goldbach')
    var arr = [],b
    for(var i=2;i<=value;i++){
        b = 0
        for(var j=2;j<i;j++){
            if(i%j==0){
                ++b
            }
        }
        if(b==0){
            arr.push(i)
        }      
    }
    var str = ''
    for(let i=0;i<arr.length/2;i++){
       for(let j=0;j<arr.length;j++){
           if((arr[i]+arr[j])==Number(value)){
               str += '<div>' + value + "可以拆分为两个质数" + arr[i] + "与" + arr[j] + "的和" + '</div>'
           }
       }
    }
    goldbach.innerHTML = str
}