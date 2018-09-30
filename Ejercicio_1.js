var productos = [];
var codigos = [];
var ventas = [];
function Menu(){
    let flag = true;
    while(flag){
        console.log("----------Tienda Jefecita----------");
        console.log("Hola Michelle");
        console.log("1. Agregar Producto.");
        console.log("2. Modificar Stock");
        console.log("3. Registrar venta");
        console.log("4. Mostrar Promedio de ventas realizadas");
        console.log("5. Mostrar productos acabados")
        console.log("6. Salir \n")
        let o = prompt("Ingrese una opción");
        switch (o){
            case "1":
                Agregar();
                break;
            case "2":
                ModificarStock();
                break;
            case "3":
                RegistrarVenta();
                break;
            case "4":
                MostrarPromedio();
                break;
            case "5":
                MostrarProductosAcabados();
                break;
            case "6":
                flag = false;
                break;
            default:
                console.log("Ingreso una opción no valdia \n")
        }
    }
}

function Agregar(){
    while(true){
        var Codigo = prompt("Ingrese el codigo del producto");
        if (!codigos.includes(Codigo)){
            codigos.push(Codigo);
            break;
        }
        console.log("Ese codigo ya existe");
    }
    let Descripcion = prompt("Ingrese una descripción");
    let Tipo = prompt("Ingrese el tipo de producto");
    while(true){
        var PrecioCompra = parseFloat(prompt("Ingrese el precio de compra"));
        var PrecioVenta = parseFloat(prompt("Ingrese el precio de venta"));
        if(PrecioVenta > PrecioCompra){
            break;
        }
        console.log("El precio de compra es mayor o igual al precio de venta, ¿Te quieres quedar pobre?");
    }
    while(true){
        var Stock = parseInt(prompt("Ingrese la cantidad de unidades"));
        if (Stock > 0){
            break;
        }
        console.log(`¿Como puedes tener ${Stock} unidades?`);
    }
    productos.push({Codigo, Descripcion, Tipo, PrecioCompra, PrecioVenta, Stock});
    console.log("Producto agregado con exito \n");
}

function Buscar(mensaje){
    if (productos.length == 0){
        console.log("No tienes ningun producto registrado");
        return null;
    }
    let c = prompt(mensaje);
    if (codigos.includes(c)){
        return c;
    }
    console.log("El producto ingresado no se encuentra registrado \n");
    return null;
}

function ModificarStock(){
    let c = Buscar("Ingrese el codigo del producto a modificar su Stock");
    if (c == null){
        return null;
    }
    while(true){
        var s = parseInt(prompt("Ingrese el nuevo numero de unidades"));
        if (s > productos[codigos.indexOf(c)].Stock){
            break;
        }
        let o = prompt("El nuevo numero de Stock es menor, ¿Acaso perdiste unidades? 1. Si, 2. No");
        if (o == "1"){
            console.log("Que sad tu vida :'v")
            break;
        }
    }
    productos[codigos.indexOf(c)].Stock = s;
    console.log("Se ha modificado el Stock exitosamente \n");
}

function RegistrarVenta(){
    let c = Buscar("Ingrese el codigo del producto a vender");
    if (c == null){
        return null;
    }
    while(true){
        var s = parseInt(prompt("Ingrese el numero de unidades a vender"));
        if(s <= productos[codigos.indexOf(c)].Stock){
            break;
        }
        console.log("Quieres vender mas unidades de las que tienes, lo cual es imposible \n")
    }
    productos[codigos.indexOf(c)].Stock -= s;
    for (let i = 0; i < s; i++) {
        ventas.push(productos[codigos.indexOf(c)].PrecioVenta);
    }
    console.log("Venta realizada con exito \n");
}

function MostrarPromedio(){
    if (ventas.length == 0) {
        console.log("No haz realizado ninguna venta \n");
        return null;
    }
    let acum = 0;
    let cont = 0;
    for (let i of ventas){
        acum += i;
        cont += 1;
    }
    console.log(`El promedio de ventas realizado es: ${acum/cont} \n`);
}

function MostrarProductosAcabados(){
    if (productos.length == 0){
        console.log("Ni siquiera tienes productos");
        return null;
    }
    console.log("Los productos sin unidades son: \n")
    for (let i of productos){
        if (i.Stock == 0){
            console.log(i);
        }
    }
}