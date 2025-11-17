import React, { useState } from "react";
import { Link } from "react-router-dom";

export default (props) => {
  const [input1, onChangeInput1] = useState('');

  return (
    <div className="items-start bg-white">
      <div className="bg-white w-[1740px]">
        <div className="self-full mb-[0px]">
        
          <div className="flex items-full self-stretch bg-[#EA4335] py-1">
            <img
              src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ce85db44-cb3b-47c0-96d0-3d9b6a9b9945"} 
              className="w-[50px] h-[50px] ml-[50px] mr-5 object-fill"
            />
            <span className="text-black text-center text-xs">{"POKE STORE"}</span>
            <div className="flex-1 self-stretch"></div>

          
            <div className="flex items-center bg-[#FAFAFAED] w-[300px] px-2 rounded-[10px]">
              <div className="flex flex-col items-start w-7 p-[5px]">
                <span className="text-[#3C3C43] text-lg">
                  🔍
                </span>
              </div>
              <input
                placeholder={"Search"}
                value={input1}
                onChange={(event) => onChangeInput1(event.target.value)}
                className="flex-1 self-stretch text-[#3C3C43] bg-transparent text-[17px] py-[7px] mr-1 border-0"
              />
            </div>

            <div className="flex-1 self-stretch"></div>

         
            <div
              className="flex flex-col items-start w-24 py-[13px] px-5 mr-[89px] rounded-[10px]" 
              style={{ background: "linear-gradient(180deg, #979797, #FFFFFF)" }}
            >
              <Link to="/Login" className="text-sm text-center text-gray-600">
                ACCEDER
              </Link>
            </div>
          </div>

     
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
        </div>
      </div>
    </div>
  );
};