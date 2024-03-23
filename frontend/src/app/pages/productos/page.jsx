import React from 'react'
import {Productscard} from '../../components/productscard'



async function getProducts() {
    const res = await fetch("http://127.0.0.1:8000/api/Productos/");
    const data = await res.json();
    return data;
  }


export default async function Peneproductor() {
    const PS = await getProducts()
  return (
    <section id="Projects" className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
      {PS.map((data)=>(
        <Productscard
        data={data}
        key={data.id}

        />
      ))}
 </section>
);
}
