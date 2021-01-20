

let userNom,
  i = 0;
let userCharg = [];
let userPaym = [];
let userChargTot = 0;
let userPaymTot = 0;
let pagados = 0;


if (validpageloadlogin(bd.login) == true) {
} else {
  location.replace("index.html");
}

function validpageloadlogin(info) {
  let valid1 = false;
  bd.users.user.forEach((element) => {
    if (info == element.Telefono) {
      valid1 = true;
      userNom = element.Nombre;
    }
  });
  return valid1;
}

document.getElementById("CloseSesion").addEventListener("click", () => {
  bd.login = "";
  localStorage.setItem("miBDp", JSON.stringify(bd));
});



bd.charges.forEach((element) => {
  if (element.Nombre == userNom) {
    userCharg[i] = element.amount;
    i++;
  }
});

i = 0;

bd.payments.forEach((element) => {
  if (element.Nombre == userNom) {
    userPaym[i] = element.amount;
    i++;
  }
});

function Payment() {
  for (let j = 0; j < userPaym.length; j++) {
    userPaymTot += parseInt(userPaym[j]);
  }
  pagados = userPaymTot;
  return userPaym;
}

document.getElementById("root").innerHTML = `
    <h1>¡Bienvenido, </h1>
    <h2>${userNom}!</h2>
    <div class='payments-container'>
  <h2>
    Cobros
  </h2>
  <p id="cobro">
      $${Charge()}
  </p>
  <h2>
    Tus deudas
  </h2>
    <p>
      $${userChargTot - userPaymTot}
    </p></div>
    <h2>
    Pagos que has realizado
  </h2>
  <p >
    $${Payment()}
  </p>
`;

function Charge() {
  for (let j = 0; j < userCharg.length; j++) {
    userChargTot += parseInt(userCharg[j]);
    if (userCharg[j] <= pagados) {
      userCharg[j] += " pagado";
      pagados -= parseInt(userCharg[j]);
    }
  }
  return userCharg;
}
