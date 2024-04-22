//Importamos las dependencias que necesitamos
import mongoose from "mongoose";

//Crear una funsion que ns conecte la base de datos
const conexionMongo = async() =>{

await mongoose.connect(process.env.BD_URL,{})

  //CONTROL DE ERRORES CON try - catch
  try{
    console.log("conexion exitosa");

  } catch(error){
    console.log("error de conexion:", error.message);
  }
}

//Tenemos que exportar nuestra funcion para llamarla desde nuestro servidor
export default conexionMongo;