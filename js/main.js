//Datos cliente
//Constantes
const clientes = []

//Variables declaradas
let firstName, lastname, age, dni, email, amount, installments, cliente
let continuar = true

function main() {

    while (continuar){
        
        dataCollecting()
        console.table(cliente)
        continuar = confirm("¿Quieres realizar otra consulta?")
        cliente = ""
    }

    alert("Muchas gracias por tu consulta")
}

function dataCollecting() {
firstName = prompt("Ingrese su nombre")
lastname = prompt("Ingrese su apellido")
age = prompt("Ingrese su edad") //si no es mayor no continua el proceso


    if (age < 18) {
       console.log("Necesitas ser mayor de edad para continuar")
       alert("No puedes continuar el proceso")
    } else {
        dni = prompt("Ingrese su DNI")
        email = prompt("Ingrese su correo eléctronico")
        let paymentInstallments = división()
        console.log("El monto total a pagar por cuotas es "+paymentInstallments)  
        alert("El monto total a pagar por cuotas es "+paymentInstallments)
        addElement()
    }
}

//función para saber el monto total a pagar de las cuotas
 function división() {
     amount = parseInt(prompt("Ingrese el monto a prestar"))
     installments = parseInt(prompt("¿En cuántas cuotas quieres pagar?"))
     let totalInstallments = amount / installments

    return totalInstallments
 }
 
//función para añadir otro cliente/consulta

const addElement = () => {
    
    cliente = {
        firstName: firstName,
        lastname: lastname,
        age: age,
        dni: dni,
        email: email,
        amount: amount,
        installments: installments
    }
    clientes.push(cliente)
}

main()

