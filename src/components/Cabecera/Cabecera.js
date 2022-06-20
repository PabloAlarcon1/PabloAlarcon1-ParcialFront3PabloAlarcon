import React from "react";
import { Header, Span, H1, P } from "../Styles/CabeceraStyles";


// El componente Cabera no tiene componentes hijos.
// ESTADO: Cabecera no tiene estado.
// MÉTODOS: Cabecera no tiene métodos.
// PROPS: Cabecera recibe de su padre la cantidad que va a mostrar dentro del span correpondiente
// Maqueta de Cabecera:
//    h1
//    p > span     (el span mostrará la cantidad recibida por props)

export default function Cabecera({ valueCount }) {
  return (
    <Header className="carrito">
      <H1>Carrito de Compras</H1>
      <P>Cantidad de productos:  {<Span>{valueCount}</Span>}</P>
 
    </Header>
  );
}
