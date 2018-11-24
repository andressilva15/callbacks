let empleados = [{
  id:1,
  nombre: 'Ernesto',
}, {
  id:2,
  nombre:'Pedro'
},{id:3,
   nombre:'Juan'
 }];
let salarios =[{
  id: 1,
  salario: 3000
},{
  id: 2,
  salario:4000
}];

let getEmpleado = (id) => {
  return new Promise((resolve, reject)=>{
    let empleadoDB =empleados.find(empleado => empleado.id==id)
    if(!empleadoDB){
      reject(`No existe el empleado con el ID ${id}`)
      }
      else{resolve(empleadoDB)}
  })
};

let getSalario = (id) => {
  return new Promise((resolve, reject)=> {
    let salarioDB= salarios.find(salarios => salarios.id==id)
    if(!salarioDB){
      reject(`No existe el sueldo con el ID ${id}`)
    }
    else{resolve(salarioDB)}
  })
};

getEmpleado(2)
.then(r => {
  console.log(r);
});
getSalario(2)
.then(s =>{
  console.log(s);
});
