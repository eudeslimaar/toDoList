var list= []
var input = document.getElementById("input")
var todolist = document.getElementById("todolist")

const users ={nombre: "Ana",  notes: 32, email: "Ana@gmail.com" }
document.getElementById('person').innerHTML ="Olá, " + users.nombre + "!"
document.getElementById('notes').innerHTML ="Notes: " + users.notes      

 let hoy  = new Date() 
 let hour = hoy.getHours()
     if( hour >= 4*3 ){
         dia ="¡Buenas Tardes, " 
     }else { if(hour < 24/2){
         dia = "¡Buenos Días, "
     }else{
         dia = "¡buenas Noches, "
        }
     }
 
document.getElementById('saludo').innerHTML = dia + users.nombre+"!"
console.log(dia)
console.log(hour)
console.log(users.nombre)




document.getElementById("btn").addEventListener("click",function(){
    list.push(input.value)
    input.value=""
    showList()
})
function showList(){
    todolist.innerHTML=""
    list.forEach(function(n,i){
        todolist.innerHTML += "<li> "+n+"<a onclick='editItem("+i+")'>Editar</a>"+"<a onclick='deleteItem("+i+")'>&times;</a></li>"
    })
}
function deleteItem(i){
    list.splice(i,1)
    showList()
}
function editItem(i){
    var newValue = prompt("Poner nuevo valor")
    list.splice(i,1,newValue)
    showList()
}
