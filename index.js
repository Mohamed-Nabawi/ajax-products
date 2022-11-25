//     var data=[];

// const { parse } = require("path");
// const { json } = require("stream/consumers");

// function add(){
// var name =document.getElementById("name").value;
// var task =document.getElementById("task").value;
// var opration={soso : name, task : task};
// data.push(opration);
// console.log(opration.soso)
// show()


// }
// function show(){
//     var all ='';
//     for(var i=0;i<data.length; i++){
// all += "<div calss='container'> <h2>" + data[i]['soso'] + "</h2><h4>" + data[i]['task']+ "</h4>"+"<button onclick='deleteElement("+ i +")'>Delete</button>"+"<button onclick='updateElement("+ i +")'>Update</button></div>";
// localStorage.setItem('data',all)

// }
// document.getElementById('output').innerHTML =all;
// all =localStorage.getItem('data')
// soso.value='';
// task.value='';
// }
// function deleteElement(x){
//     data.splice(x);
//     show()
// }
// function updateElement(x){
//     var Update='<input  id="updatename" placehoolder="please enter new name" value= '+ data[x]['name'] + '> <input id="updatetask" placehoolder="please enter new task"  value= '+data[x]['task']+ '> <button onclick="doupdate('+ x +')"> update </button>';
//     document.getElementById('update').innerHTML=Update
// }
// function doupdate(x){
//     var name=document.getElementById('updatename').value;
//         var task=document.getElementById('updatetask').value;
//         data[x]['name']=name
//         data[x]['task']=task
//         show()
//     document.getElementById('update').innerHTML=''

// }

// // document.getElementById('send').onclick =function(){
//     var input=document.querySelectorAll('.all input')
// console.log(input)
// // alert('say hello')

// input.forEach((input=>{
//     if(input.value ==''){

//     input.style.borderColor='red';
// }else{
// document.getElementById('res').innerHTML+=`<h5> Your full name is:- ${input.value}</h5> `
// input.value='';

// }
// }
// ))}


    


// function change(color){
//         localStorage.setItem('color',color)
//             all.style.backgroundColor=localStorage.getItem('color')


// }
// window.onload =function (){
//             all.style.backgroundColor=localStorage.getItem('color')


// }
// // function remove(x){
// //     all.classList.remove(x)
// // }
// var allimges =document.querySelectorAll('.item img');
// var selectedImage=document.querySelector('.backBox');
// var innerImage=document.querySelector('.backBoximage')
// for(var i=0; i<allimges.length; i++){
//     allimges[i].addEventListener('click',function(e){
//     var image= e.target.src;
//     console.log(image)
//     selectedImage.style.display="flex"
// innerImage.style.backgroundImage= 'url('+image +')'
//     })
// }
// var data =[];
// var table='';

// function addme(){

//     var firstname =document.getElementById('firstname').value;
//     var secondname =document.getElementById('secondname').value;
//     var address =document.getElementById('address').value;
//     var age =document.getElementById('age').value;
//     var salary =document.getElementById('salary').value;
//     var ocupation =document.getElementById('ocupation').value;
// var alldata ={me:firstname ,father:secondname ,address:address,age:age,salary:salary,ocupation:ocupation}
// data.push(alldata)

// for(var i=0;i<=data.length;i++){
// table +='<tr>'
//    table += '<td>'+data[i]?.me+'</td><td>'+data[i]?.father+'</td><td>'+data[i]?.address+' </td><td>'+data[i]?.age+'</td><td>'+data[i]?.salary+'</td><td>'+data[i]?.ocupation+'</td><td><button onclick="delet('+i+')">Delet</button></td>';
//     table +='</tr>'
//   }

// document.getElementById("restf").innerHTML = table;
//       firstname.value = '';


// }


// function delet(x){
//     data.splice(x)

// }

// caluator

// function inTable(first,second){
//     document.write("<table border=10px><colgroup><col>")
// for(var i=1; i<=first; i++){
// document.write('<tr><td>'+second + 'x'  + i + '=' + second*i+'</td></tr>');
// }
//  document.write("</colgroup></table>")

// }

// var all =`<div class=table>${inTable(10,5)} ${ inTable(10,8)} ${inTable(10,9)}${inTable(10,10)}</div>`

// document.write(all)
// show and hide password

// document.getElementById("sen").onclick =function(){
//     var nput=document.getElementById("input")
//          if(nput.type =="password"){
//                 nput.type ="text";
//                 document.getElementById("sned").innerText = "hide";
//     }
//     else{
//     nput.type ="password";
// document.getElementById("sned").innerText = "show";

//         console.log('true')

    
//     }
    
// }
// document.getElementById("send").onclick =function(){
//         var nput=document.getElementById("input")

//     if(nput.value ==''){
//         nput.classList.add("rowdata");
//     }else{
//         nput.classList.remove("rowdata")
//     }
// }
//     var nput=document.getElementById("input")
// nput.onkeyup =function(){
//     document.getElementById("res").innerHTML =this.value.length
//

// var chat='';
// for(var row=1; row<=8;row++){
//     chat +="<tr>"
//     for(var col=1; col<=8; col++){
//         if((col+row)%2){
//         chat+="<td width='100px' height='100px' ></td>"
//     }
//     else{
//         chat+="<td width='100px' height='100px' bgcolor='black'></td>"

//     }

// }
// chat +="</tr>"
// }
// document.getElementById('mytable').innerHTML=chat



// var end =new Date("Nov 20,2022 23:59:59").getTime()
// let counter =setInterval(() => {
//     var start=new Date().getTime()
// var resttime=end-start
// var days=Math.floor(resttime/(1000*60*60*24))
// var hours =Math.floor((resttime %(1000*60*60*24))/(1000*60*60))
// var minutes=Math.floor((resttime %(1000*60*60))/(1000*60))
// var seconds=Math.floor((resttime%(1000*60)/(1000)))
// document.getElementById("timer").innerHTML="<tr><td>"+days+"<h4>Days</h4></td><td>"+hours+"<h4>Hours</h4></td><td>"+minutes+"<h4>Minutes</h4></td><td>"+seconds+"<h4>Secondes</h4></td></tr>" 
// if(resttime>=0){
//     clearInterval()
// }   
// }, 1000);
// var my=''
// for(var o=1; o<=10; o++){
//     my +="<tr>"
// for(var y=1; y<=10; y++){
//     if( (y +o)%2){
//         my+="<td width='50px' height='50px'></td>"
//     }else{
//         my+="<td bgcolor='black'></td>"

//     }
// }
// my +="</tr>"
// }
// document.getElementById("my").innerHTML=my
// let mucomt= setTimeout(() => {
//     prompt("are you good?")
    
// }, 4000);
// ajax function
function getcontent(){
    // var user=document.getElementById('user').value
    var api=new XMLHttpRequest();
    api.open("GET","products.json");
    api.send();
    api.onreadystatechange =function(){
        if(api.readyState==4 && api.status==200){
            console.log(JSON.parse(api.response))
            var mydata =JSON.parse(api.response)
            var res='';
            for(var i=0; i<=mydata.length; i++){
         res +='<div class="product"><img src='+mydata[i]?.images[1]+'><h5>'+ mydata[i]?.title+'</h5><span>'+ mydata[i]?.price+'</span><p>'+ mydata[i]?.description
+'</p></div>';
            }
        document.getElementById("res").innerHTML=res;

        }

    }
}