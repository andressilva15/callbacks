let empleados =[{
  id:1,
  nombre:'Ernesto'
},{id:2,
  nombre:'Pedro'
},{ id:3,
  nombre:'Juan'
}];

let salarios = [{
  id:1,
  salario:3000
},{
  id:2,
  salario:4000
}];

let getEmpleado = async (id) => {
  let empleadoDB = empleados.find(empleado => empleado.id == id)

  if (!empleadoDB) {
    throw new Error(`No existe el empleado con el ID ${id}`)
    }
    else {
      return empleadoDB;

    }
}

let getSalario = async (id) => {
  let salarioDB = salarios.find(empleado => empleado.id == id)

  if(!salarios){
    throw new Error(`No existe el salario con el ID ${id}`)
    }
    else {
      return salarioDB;

    }
}

getEmpleado(1)
.then(v =>{
  console.log(v);
});


getSalario(1)
.then(w =>{
   console.log(w);
});
