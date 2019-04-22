const db = require('./db')
const Query = {
    greeting:() => {
        return "hello from  TutorialsPoint !!!"
    },
    estudiantes:() => db.estudiantes.list(),
    //resolver function for studentbyId
    estudianteById:(root,args,context,info) => {
        //args will contain parameter passed in query
        return db.estudiantes.get(args.id);
    }
}

const Estudiante = {
    nombreCompleto:(root,args,context,info) => {
       return root.apellido+" "+root.nombre
    },
    universidad:(root) => {
        return db.universidades.get(root.universidadid);
    }
 }

module.exports = {Query, Estudiante}