
// let date=x.toLocaleDateString();
// let time=x.getHours()+':'+x.getMinutes()+':'+x.getSeconds();



// firstContainer.addEventListener('click',function()
// {
//     document.getElementsByTagName('h1')[0].innerText=date;
//     document.getElementsByTagName('h1')[1].innerText=time;
// }) 

function solve()
{
    x=new Date();
    document.getElementById('box1').innerHTML=x.getHours();
    document.getElementById('box2').innerHTML=x.getMinutes();
    document.getElementById('box3').innerHTML=x.getSeconds();
}

y=setInterval(solve,1000);                 //after every second call this function

