const comboUsuario = document.querySelector("#comboUsuario");

const listarAlbum=(event)=>{
    event.preventDefault();
    let ingreseid =document.querySelector("#comboUsuario").value;

    window.localStorage.setItem("ingreseid",ingreseid); 
  let uri="https://jsonplaceholder.typicode.com/users/"+ ingreseid +"/albums";

  fetch(uri)
    .then(respuesta=>respuesta.json())
    .then (data=>{

        let contenidoTabla= document.querySelector("#contenidoTabla");
        contenidoTabla.innerHTML = "";
        data.forEach(comentario => {
                    
            contenidoTabla.innerHTML += "<tr><td>"+ '<input type="checkbox">' + "</td>"
                                     + "<td> "+comentario.userId  +"</td>"
                                     + "<td> "+comentario.id +"</td>"
                                     + "<td> "+comentario.title  +"</td>"
                                    + "</tr>"
            })

    })
    .catch(error=> alert("Error con el servidor"));
    
}

comboUsuario.addEventListener("click", listarAlbum);


const llenarcombo=(event)=>{
    event.preventDefault();
  
    const uriPost="https://jsonplaceholder.typicode.com/users";

    fetch(uriPost)
    .then(respuesta=>respuesta.json())
    .then(data=>{
     data.forEach(post=>{
        comboUsuario.innerHTML+="<option value="+ post.id +">"+ post.name+"</option>";
     });

    })
    .catch(error=>alert("Hubo un error al llenar combo"));
  

}
window.addEventListener("load",llenarcombo)
