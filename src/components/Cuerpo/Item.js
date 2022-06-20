// El componente Item no tiene componentes hijos.
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)
//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")

/* export default function Item() {

  return (
    <div className='producto'>
      {maquetar Item aquí}
    </div>
  )
} */
import React,{useState} from "react";
import {H3, Div, H5, Span, Button, Img } from "../Styles/ItemStyles";




export default function Item({ data, handlerValueCount }) {
  const [value, setValue]=useState(data.stock)

  const handlerValue =()=>{
    
   if (value>0){
    setValue(prevState=>prevState-1)
    handlerValueCount()
   }
  }
  return (
    <Div className="producto">
      <H3>{data.producto.nombre}</H3>
      <Img src={require(`../img/${data.producto.imagen}`)}></Img>
      <p>{data.producto.descripcion}</p>
      <H5>En stock: {value ===0 ? <Span className="stock">Sin stock</Span> : value}</H5>
      <Button className={value === 0 ? 'sin ' : 'com'} onClick={()=>handlerValue()}>{value===0?"Sin stock":"comprar"}</Button>
      
    </Div>
  );
}
