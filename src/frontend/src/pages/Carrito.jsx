import React, { useState } from "react";
import { Link } from "react-router-dom";

export default () => {
  const [input1, setInput1] = useState('');

  return (
    <div className="bg-white">
      <div className="w-full max-w-[1740px] mx-auto">

        <div className="flex justify-between items-center bg-[#EA4335] py-2.5 px-12">
          <div className="flex items-center gap-5">
            <img
              src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ef0bb577-9518-4da9-b1d3-a23bad998d9b"
              alt="Logo"
              className="w-[50px] h-[50px]"
            />
            <span className="text-black text-xs">POKE STORE</span>
          </div>


          <div className="flex items-center bg-[#FAFAFAED] w-[300px] px-2 rounded-[10px]">
            <span className="text-[#3C3C43] text-lg mr-2">🔍</span>
            <input
              placeholder="Search"
              value={input1}
              onChange={(e) => setInput1(e.target.value)}
              className="flex-1 bg-transparent text-[17px] py-[7px] text-[#3C3C43] border-none"
            />
          </div>

          {/* Acceder */}
          <Link
            to="/login"
            className="flex items-center justify-center w-24 py-3 px-5 rounded-[10px] bg-gradient-to-b from-[#979797] to-[#FFFFFF] text-black text-xs"
          >
            ACCEDER
          </Link>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-start self-stretch bg-[#808080] py-[21px]">
                   <Link to="/figuras" className="text-black text-xs ml-[76px] hover:underline">
                     FIGURAS
                   </Link>
                   <Link to="/peluches" className="text-black text-xs hover:underline">
                     PELUCHES
                   </Link>
                   <Link to="/ropa" className="text-black text-xs hover:underline">
                     ROPA
                   </Link>
                   <Link to="/cartas" className="text-black text-xs hover:underline">
                     CARTAS
                   </Link>
                   <Link to="/ofertas" className="text-black text-xs mr-[118px] hover:underline">
                     OFERTAS
                   </Link>
                 </div>
        {/* Carrito */}
        <div className="flex flex-col items-start bg-white px-7 mt-10">
          <h1 className="text-xl mb-6">CARRITO DE COMPRAS</h1>

          <div className="flex gap-6">
            {/* Productos */}
            <div className="flex flex-col w-[1160px] gap-4">
              {/* Header */}
              <div className="flex items-center text-xs font-semibold gap-10 ml-1">
                <span className="w-[330px]">PRODUCTO</span>
                <span className="w-[70px]">PRECIO</span>
                <span className="w-[50px]">CANTIDAD</span>
                <span className="w-[50px]">SUB TOTAL</span>
              </div>
              <div className="h-px bg-gray-400"></div>

              {/* Producto 1 */}
              <div className="flex items-center gap-4">
                <img
                  src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d81fd2aa-582b-4b27-8081-0508d193ecb9"
                  alt="Eliminar"
                  className="w-[19px] h-[19px]"
                />
                <img
                  src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/64ea92a7-2274-469a-b856-88f24e9b8a1a"
                  alt="Producto"
                  className="w-[66px] h-[76px]"
                />
                <span className="w-[226px]">Cartas Pokemon Tcg Destined Rivals Booster</span>
                <span className="w-[50px]">69.90</span>
                <div className="flex flex-col items-center w-[53px]">
                  <img
                    src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b2cab34e-875a-4d80-bcda-260760c2234a"
                    alt="Cantidad"
                    className="w-[30px] h-7"
                  />
                  <span className="text-xs mt-1">1</span>
                </div>
                <span className="w-[50px]">69.90</span>
              </div>

              <div className="h-px bg-gray-400"></div>

              <button
                className="bg-[#609FFF] text-white py-4 px-6 rounded-[20px] border-none mt-4 self-center"
                onClick={() => alert("Pressed!")}
              >
                SEGUIR COMPRANDO
              </button>
            </div>

            {/* Totales */}
            <div className="w-[257px] flex flex-col bg-white shadow-md p-4 gap-4">
              <h2 className="text-xl">Totales del carrito</h2>
              <div className="flex justify-between">
                <span>Subtotales</span>
                <span>139.90</span>
              </div>
              <div className="h-px bg-gray-400"></div>
              <span className="text-center">Tipo de pago</span>
              <img
                src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0d21062c-92d7-42fa-99a8-4c7f12242bac"
                alt="Pago"
                className="w-full h-[71px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
