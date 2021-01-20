

document.getElementById("ingesar").addEventListener("click",()=>{
  if(login())
  {
    bd.login=document.getElementById("Telefono").value;
    localStorage.setItem("miBDp",JSON.stringify(bd));
    location.replace("propietario.html");
  }
  else
  {
    if(login2())
    {
      bd.login=document.getElementById("Telefono").value;
      localStorage.setItem("miBDp",JSON.stringify(bd));
      location.replace("usuario.html");
    }
    else
    {
      alert("La contraseña o el telefono esta mal.");
    }
  }
});


function login(){
  let valid1=false;
  bd.users.prop.forEach(element => {
    if(element.Telefono==document.getElementById("Telefono").value&&element.Password==document.getElementById("Password").value)
    {
      valid1 = true;
    }
    else
    {
      valid1 = false;
    }
  });
  return valid1;
}

function login2(){
  let valid2=false;
  bd.users.user.forEach(element => {
    if(element.Telefono==document.getElementById("Telefono").value&&element.Password==document.getElementById("Password").value)
    {
      console.log(element);
      valid2 = true;
    }
  });
  return valid2;
}

document.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
     event.preventDefault();
     document.getElementById("ingresar").click();
  }
});


document.getElementById("apiexternabtn").addEventListener("click",e=>{
  let ciudad = document.getElementById("NCiudad").value;
  if(ciudad=="")
  {
    alert("Ingrese una ciudad");
  }
  else
  {
    let request = new XMLHttpRequest();
    let data;
    let Element = document.getElementById("InfoCiudad");

    request.open('get',`http://api.weatherstack.com/current?access_key=7023a0f0668c1b8df8501a6e6ecbceb8
    &query=${ciudad}`);

    if(Element.classList.contains("FORHIDE"))
    {
      Element.classList.remove("FORHIDE");
    }
    request.onload=function(){
      data=JSON.parse(this.response);
      console.log(data.location);
      document.getElementById("InfoCiudad").innerHTML=`
      <p>Ciudad: ${data.location.name}</p>
      <p>Temperatura: ${data.current.temperature}°C</p>`;
    }

    request.send();
  }
})