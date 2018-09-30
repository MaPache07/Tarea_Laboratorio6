var Conversiones = {
    longitud: ["Metros", "Centimetros", "Kilometros", "Pies"],
    temperatura: ["Celsius", "Fahrenheit", "Kelvin"],
    l: ["L", ["Metros", "Centimetros", "Kilometros", "Pies"]],
    t: ["T", ["Celsius", "Fahrenheit", "Kelvin"]],
    Converison: function convertir(medida, unidad1, unidad2, tipom){
        if (!((this.longitud.includes(unidad1) && this.longitud.includes(unidad2)) || (this.temperatura.includes(unidad1) && this.temperatura.includes(unidad2)))){
            console.log("Las unidades que ha ingresado no concluyen entre si");
            return null;
        }
        if (!((this.l.includes(tipom) && this.l[1].includes(unidad1)) || (this.t.includes(tipom) && this.t[1].includes(unidad1)))){
            console.log("El tipo de medida ingresado no concuerda con las medidas");
            return null;
        }
        if (unidad1 == unidad2){
            console.log("Las unidades son las mismas, ¿Qué rayos tratabas de hacer?")
            return null;
        }
        if (this.l.includes(tipom)){
            if (unidad1 == "Metros"){
                if (unidad2 == "Centimetros"){
                    return medida*(100);
                }
                if (unidad2 == "Kilometros"){
                    return medida*(1/1000);
                }
                if(unidad2 == "Pies"){
                    return medida*3.28084;
                }
            }
            if (unidad1 == "Centimetros"){
                if (unidad2 == "Metros"){
                    return medida*(1/100);
                }
                else {
                    console.log("Esa conversion no esta disponible en esta version");
                    return null;
                }
            }
            if (unidad1 == "Kilometros"){
                if (unidad2 == "Metros"){
                    return medida*1000;
                }
                else {
                    console.log("Esa conversion no esta disponible en esta version");
                    return null;
                }
            }
            if (unidad1 == "Pies"){
                if (unidad2 == "Metros"){
                    return medida*(1/3.28084);
                }
                else {
                    console.log("Esa conversion no esta disponible en esta version");
                    return null;
                }
            }
        }
        else {
            if (unidad1 == "Celsius"){
                if (unidad2 == "Fahrenheit"){
                    return (medida*(9/5)+32);
                }
                if (unidad2 == "Kelvin"){
                    return medida+273.15;
                }
            }
            if (unidad1 == "Fahrenheit"){
                if (unidad2 == "Celsius"){
                    return (5/9)*(medida-32);
                }
                if (unidad2 == "Kelvin"){
                    return (5/9)*(medida-32)+273.15;
                }
            }
            if (unidad1 == "Kelvin"){
                if (unidad2 == "Celsius"){
                    return medida-273.15;
                }
                if (unidad2 == "Fahrenheit"){
                    return ((medida-273.15)*(9/5)+32);
                }
            }
        }
    }
}