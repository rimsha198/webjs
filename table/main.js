var arr=[
    {name:"shabana",age:20,color:"red"},
    {name:"rimsha",age:21,color:"green"},
    {name:"areej",age:22,color:"blue"},
    {name:"saman",age:23,color:"orange"}, 

]
var tbody=document.getElementById("tbody")
for( var index= 0; index < arr.length; index++){
    var row=`<tr>
    <td> ${arr[index].name}</td>
    <td> ${arr[index].age}</td>
    <td> ${arr[index].color}</td>
     </tr>`
    console.log(row)
      tbody.innerHTML+=row;


    
}
