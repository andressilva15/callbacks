let empleados =[{
  id:1,
  nombre:'Ernesto'
},{id:2,
  nombre:'Marcelo'
},{id:3,
nombre:'Pedro'}];

let salarios =[{
  id:1,
  salario:1000
},{
  id:2,
  salario:2000
}];
let getEmpleado = (id, callback) => {
  let empleadoDB = empleados.find(empleado => empleado.id==id)
  if(!empleadoDB){
    callback(`No existe un empleado con el id ${id}`)

  } else{
    callback(null,empleadoDB);
  }
}
getEmpleado(1,(err,empleado)=>{
  if(err){
    return console.log(err);
  }
  console.log(empleado);
}
);
let getSalario = (id,callback) => {
  let salarioDB= salarios.find(salarios => salarios.id==id)
  if(!salarioDB){
    callback(`No existe un salario con ese id ${id}`)

  }
  else {
    callback(null,salarioDB);
      }
}
getSalario(1,(err,salarios)=>{
  if(err){
    return console.log(err);
  }
  console.log(salarios);
});
