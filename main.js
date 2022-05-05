const create = document.getElementById("create");
var id = '1';
create.addEventListener("click",()=>{
    let input = document.querySelector("input").value;
    
    for(let i=1;i<=5;i++){
        let x = generator();
        let d = document.createElement("div");
        d.innerHTML +=" <div  id='"+id+"' class='item' ><span> " + x + " </span>  <div> <span class='copy' onclick='copy(this)'>  Copy </span>  <span onclick='remove(this)' class='remove'> &times;  </span>  </div> </div>" ;
        document.querySelector(".list").prepend(d);
        id++;
    }

})


const  generator = () =>{
    var output = [] ;
    var a = ['a','e','o','u','i'];
    var b = ['f','z','m','t','y','p','q','v','k','l'];
    let length =  4 +  Math.floor(Math.random()*4);
    for (let i=1;i<=length;){
        output.push(b[Math.floor(Math.random()*b.length)]);
        output.push(a[Math.floor(Math.random()*a.length)]);
        i=i+2;
    }
    return output.join("");
}


// const remove = (e) =>{
//     console.log(e.parentChild);
// //   (; ((

function remove (e) {
      e.parentElement.parentElement.remove();
}
document.getElementById('clear').addEventListener("click",()=>{
    document.querySelector(".list").innerHTML = "";
})

function copy(e){
     e.innerHTML = "Copied";
     setTimeout(()=>{
         e.innerHTML="Copy";
     },1000)
}