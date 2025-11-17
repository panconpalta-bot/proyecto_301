import React, {useState} from "react";
import { Link } from "react-router-dom";
export default (props) => {
	const [input1, onChangeInput1] = useState('');
	const [input2, onChangeInput2] = useState('');
	return (
		<div className="items-start bg-white">
			<div className="bg-white w-[1740px]">
				<div className="self-stretch mb-[0px]">
					<div className="flex items-center self-stretch bg-[#EA4335] py-2.5">
						<img
							src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fbfd6699-16ee-4038-85c9-4855e194e56a"} 
							className="w-[50px] h-[50px] ml-[50px] mr-5 object-fill"
						/>
						<span className="text-black text-xs" >
							{"POKE STORE"}
						</span>
						<div className="flex-1 self-stretch">
						</div>
						<div className="flex items-center bg-[#FAFAFAED] w-[300px] px-2 rounded-[10px]">
							<div className="flex flex-col items-start w-7 p-[5px]">
								<span className="text-[#3C3C43] text-lg" >
									🔍
								</span>
							</div>
							<input
								placeholder={"Search"}
								value={input1}
								onChange={(event)=>onChangeInput1(event.target.value)}
								className="flex-1 self-stretch text-[#3C3C43] bg-transparent text-[17px] py-[7px] mr-1 border-0"
							/>
						</div>
						<div className="flex-1 self-stretch">
						</div>
						<div className="flex flex-col items-start w-24 py-[13px] px-5 mr-[89px] rounded-[10px]" 
							style={{
								background: "linear-gradient(180deg, #979797, #FFFFFF)"
							}}>
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
				<div className="flex items-start self-stretch mb-5 ml-[3px] mr-[59px]">
					<div className="flex flex-col items-center bg-white w-[234px] mr-3 rounded-[20px]" 
						style={{
							boxShadow: "0px 4px 4px #00000040"
						}}>
						<div className="flex items-center self-stretch bg-[#FAFAFAED] px-2 mb-2.5 rounded-[10px]">
							<div className="flex flex-col items-start w-7 p-[5px]">
								<span className="text-[#3C3C43] text-lg" >
									🔍
								</span>
							</div>
							<input
								placeholder={"Search"}
								value={input2}
								onChange={(event)=>onChangeInput2(event.target.value)}
								className="flex-1 self-stretch text-[#3C3C43] bg-transparent text-[17px] py-[7px] mr-1 border-0"
							/>
						</div>
						<span className="text-black text-sm mb-2.5" >
							{"catalogo"}
						</span>
						<div className="flex justify-between items-start self-stretch mb-2.5">
							<span className="text-black text-[11px]" >
								{"figura armable"}
							</span>
							<span className="text-[#D5D5D5] text-[11px]" >
								{"(1)"}
							</span>
						</div>
						<div className="self-stretch bg-[#E7E7E7] h-[1px] mb-2.5">
						</div>
						<div className="flex justify-between items-start self-stretch mb-2.5">
							<span className="text-black text-[11px]" >
								{"estatua"}
							</span>
							<span className="text-[#E1E1E1] text-[11px]" >
								{"(1)"}
							</span>
						</div>
						<div className="self-stretch bg-[#E7E7E7] h-[1px] mb-2.5">
						</div>
						<div className="flex justify-between items-start self-stretch mb-2.5">
							<span className="text-black text-[11px]" >
								{"set de figuras"}
							</span>
							<span className="text-[#E2E0E0] text-[11px]" >
								{"(2)"}
							</span>
						</div>
						<div className="self-stretch bg-[#E7E7E7] h-[1px] mb-2.5">
						</div>
						<div className="flex justify-between items-start self-stretch mb-2.5">
							<span className="text-black text-[11px]" >
								{"Model kit"}
							</span>
							<span className="text-[#DCDADA] text-[11px]" >
								{"(3)"}
							</span>
						</div>
						<div className="self-stretch bg-[#E7E7E7] h-[1px] mb-2.5">
						</div>
						<div className="flex justify-between items-start self-stretch mb-2.5">
							<span className="text-black text-[11px]" >
								{"figuras"}
							</span>
							<span className="text-[#D4D3D3] text-[11px]" >
								{"(3)"}
							</span>
						</div>
						<div className="self-stretch bg-[#E7E7E7] h-[1px] mb-2.5">
						</div>
						<span className="text-black text-[11px] mb-2.5" >
							{"MARCAS"}
						</span>
						<div className="flex justify-between items-start self-stretch mb-2.5">
							<span className="text-black text-[11px]" >
								{"BANDAI"}
							</span>
							<span className="text-[#D3D3D3] text-[11px]" >
								{"(3)"}
							</span>
						</div>
						<div className="self-stretch bg-[#E8E8E8] h-[1px] mb-2.5">
						</div>
						<div className="flex justify-between items-start self-stretch mb-2.5">
							<span className="text-black text-[11px]" >
								{"JAZWARES"}
							</span>
							<span className="text-[#C4C4C4] text-[11px]" >
								{"(4)"}
							</span>
						</div>
						<div className="self-stretch bg-[#D9D9D9] h-[1px] mb-2.5">
						</div>
						<div className="flex justify-between items-start self-stretch mb-2.5">
							<span className="text-black text-[11px]" >
								{"MEGA CONSTRUX"}
							</span>
							<span className="text-[#BFBFBF] text-[11px]" >
								{"(1)"}
							</span>
						</div>
						<div className="self-stretch bg-[#D7D7D7] h-[1px] mb-2.5">
						</div>
						<div className="flex justify-between items-start self-stretch mb-2.5">
							<span className="text-black text-[11px]" >
								{"PLATINUM"}
							</span>
							<span className="text-[#DEDEDE] text-[11px]" >
								{"(2)"}
							</span>
						</div>
						<div className="self-stretch bg-[#CCCCCC] h-[1px] mb-2.5">
						</div>
						<span className="text-black text-[11px] mb-2.5" >
							{"FILTRAR POR PRECIO"}
						</span>
						<button className="flex flex-col items-start bg-[#9B9B9B] text-left p-2.5 mb-2.5 rounded-[10px] border-0"
							onClick={()=>alert("Pressed!")}>
							<span className="text-white text-base" >
								{"mayor a menor"}
							</span>
						</button>
						<button className="flex flex-col items-start bg-[#9B9B9B] text-left p-2.5 mb-[449px] rounded-[10px] border-0"
							onClick={()=>alert("Pressed!")}>
							<span className="text-white text-base" >
								{"menor a mayor"}
							</span>
						</button>
					</div>


					<div className="flex flex-col w-[200px] mt-[41px] mr-[34px] gap-[43px]">
						<div className="flex flex-col items-start self-stretch bg-white py-[25px] rounded-[10px]" 
							style={{
								boxShadow: "0px 4px 4px #00000040"
							}}>
							<img
								src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eadf5f43-5bc3-44a1-95b1-6941bb4fcc85"} 
								className="w-[150px] h-[211px] mb-8 ml-[23px] object-fill"
							/>
							<span className="text-black text-[15px] font-bold w-[121px] mb-[29px] ml-[27px]" >
								{"Figura de Acción Pokémon Wartortle\n\n\n39.90"}
							</span>
							<button className="flex flex-col items-center self-stretch bg-[#1E88E5] text-left py-[7px] mx-10 rounded-[20px] border-0"
								onClick={()=>alert("Pressed!")}>
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2b8c965d-4b01-4d13-9e78-40e6e94fe0e5"} 
									className="w-[50px] h-[38px] object-fill"
								/>
							</button>
						</div>


						<div className="flex flex-col w-[200px] mt-[41px] mr-[34px] gap-[43px]" 
							style={{
								boxShadow: "0px 4px 4px #00000040"
							}}>
							<img
								src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3793e89c-3f04-4ef0-a15a-2b594f7a65b7"} 
								className="w-[185px] h-[185px] mt-[85px] mb-[3px] ml-2 object-fill"
							/>
							<span className="text-black text-[15px] font-bold w-[100px] mb-[11px] ml-[23px]" >
								{"Bandai Spirits Model Kit Pokemon Psyduck\n\n\n49.90"}
							</span>
							<button className="flex flex-col items-center self-stretch bg-[#1E88E5] text-left py-[7px] mb-[22px] mx-10 rounded-[20px] border-0"
								onClick={()=>alert("Pressed!")}>
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/59fb27c0-a2d8-4139-a587-7daf6835dff0"} 
									className="w-[50px] h-[38px] object-fill"
								/>
							</button>
						</div>
					</div>
					<div className="flex flex-col w-[200px] mt-[41px] mr-[25px] gap-[43px]">
						<div className="flex flex-col items-start self-stretch bg-white rounded-[10px]" 
							style={{
								boxShadow: "0px 4px 4px #00000040"
							}}>
							<img
								src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2f77cbbf-b3a3-4051-80cc-d17a7dad67ac"} 
								className="w-[174px] h-[210px] mt-[54px] mb-[9px] ml-2 object-fill"
							/>
							<span className="text-black text-[15px] font-bold w-[120px] mb-7 ml-[27px]" >
								{"Pokemon Pack X3 Figuras De Batalla Pokemon 6 Cm\n\nS/ 59.90"}
							</span>
              <Link to="/carrito">
              <button className="flex flex-col items-start self-stretch bg-[#1E88E5] py-[8px] pl-[30px] mb-[22px] mx-10 rounded-[20px]">
              <img
              src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/14b3b541-d8d1-416c-ab53-214745f55571"
              className="w-[70px] h-[38px] object-fill"
              />
              </button>
              </Link>
						</div>
						<div className="flex flex-col items-start self-stretch bg-white rounded-[10px]" 
							style={{
								boxShadow: "0px 4px 4px #00000040"
							}}>
							<img
								src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cdb53941-f2ca-41f4-a39e-db3244b9d497"} 
								className="w-[182px] h-[182px] mt-[58px] mb-[33px] ml-[9px] object-fill"
							/>
							<span className="text-black text-[15px] font-bold w-[111px] mb-7 ml-[17px]" >
								{"Pokemon Mega Pikachu Exclusivo\n\n\nS/ 89.00"}
							</span>
							<button className="flex flex-col items-center self-stretch bg-[#1E88E5] text-left py-[7px] mb-[22px] mx-10 rounded-[20px] border-0"
								onClick={()=>alert("Pressed!")}>
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/14b3b541-d8d1-416c-ab53-214745f55571"} 
									className="w-[50px] h-[38px] object-fill"
								/>
							</button>
						</div>
					</div>
					<div className="flex flex-col w-52 mt-[41px] mr-[33px] gap-[43px]">
						<div className="flex flex-col items-start self-stretch bg-white rounded-[10px]" 
							style={{
								boxShadow: "0px 4px 4px #00000040"
							}}>
							<img
								src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5928023c-7c6b-4037-a02a-2edfe49cd03f"} 
								className="w-[165px] h-[183px] mt-[57px] mb-8 ml-[22px] object-fill"
							/>
							<span className="text-black text-[15px] font-bold w-[116px] mb-[27px] ml-[27px]" >
								{"Pokemon Figura Vinil Piplup\n\n\n\nS/ 49.90"}
							</span>
							<button className="flex flex-col items-center self-stretch bg-[#1E88E5] text-left py-[7px] mb-[22px] mx-10 rounded-[20px] border-0"
								onClick={()=>alert("Pressed!")}>
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a45fa7be-8c0c-45b6-be04-ba05cfa6ff7e"} 
									className="w-[50px] h-[38px] object-fill"
								/>
							</button>
						</div>
						<div className="flex flex-col items-start self-stretch bg-white rounded-[10px]" 
							style={{
								boxShadow: "0px 4px 4px #00000040"
							}}>
							<img
								src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/93529780-d7f3-485c-aeee-ea194da5b29f"} 
								className="w-[182px] h-[182px] mt-[58px] mb-8 ml-1 object-fill"
							/>
							<span className="text-black text-[15px] font-bold w-[115px] mb-[27px] ml-[27px]" >
								{"Bandai Spirits Model Kit Pokemon Eevee Dormido\n\nS/ 49.00"}
							</span>
							<button className="flex flex-col items-center self-stretch bg-[#1E88E5] text-left py-[7px] mb-[22px] mx-10 rounded-[20px] border-0"
								onClick={()=>alert("Pressed!")}>
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e40ddae8-9157-43cf-8ee7-5e8d36c37669"} 
									className="w-[50px] h-[38px] object-fill"
								/>
							</button>
						</div>
					</div>
					<div className="flex flex-col w-[200px] mt-[41px] mr-8 gap-[43px]">
						<div className="flex flex-col items-start self-stretch bg-white rounded-[10px]" 
							style={{
								boxShadow: "0px 4px 4px #00000040"
							}}>
							<img
								src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/513bbecc-ef17-4183-bdd2-33d3098b6063"} 
								className="w-[175px] h-[175px] mt-[71px] mb-[26px] ml-4 object-fill"
							/>
							<span className="text-black text-[15px] font-bold w-[100px] mb-[27px] ml-[27px]" >
								{"Bandai Spirits Model Kit Pokemon Fuecoco\n\nS/ 49.00"}
							</span>
							<button className="flex flex-col items-center self-stretch bg-[#1E88E5] text-left py-[7px] mb-[22px] mx-10 rounded-[20px] border-0"
								onClick={()=>alert("Pressed!")}>
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f11dc51c-7e34-4c9a-a01b-cdc4ad860c88"} 
									className="w-[50px] h-[38px] object-fill"
								/>
							</button>
						</div>
						<div className="flex flex-col items-start self-stretch bg-white rounded-[10px]" 
							style={{
								boxShadow: "0px 4px 4px #00000040"
							}}>
							<img
								src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8369c8b4-0373-4203-8312-7c91b0534bde"} 
								className="w-[168px] h-[168px] mt-[72px] mb-[33px] ml-4 object-fill"
							/>
							<span className="text-black text-[15px] font-bold w-[117px] mb-2.5 ml-[27px]" >
								{"Pokemon Select Venusaur Bulbasaur Ivysaur\n\n\nS/ 199.90"}
							</span>
							<button className="flex flex-col items-center self-stretch bg-[#1E88E5] text-left py-[7px] mb-[22px] mx-10 rounded-[20px] border-0"
								onClick={()=>alert("Pressed!")}>
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/520afc24-7af0-4bee-93e2-c23b0c1a6e08"} 
									className="w-[50px] h-[38px] object-fill"
								/>
							</button>
						</div>
					</div>
					<div className="flex flex-col w-[200px] mt-[41px] gap-[43px]">
						<div className="flex flex-col items-start self-stretch bg-white rounded-[10px]" 
							style={{
								boxShadow: "0px 4px 4px #00000040"
							}}>
							<img
								src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a0a2315c-75bd-4f75-8cec-036d5c73277e"} 
								className="w-[179px] h-[179px] mt-[61px] mb-8 ml-[11px] object-fill"
							/>
							<span className="text-black text-[15px] font-bold w-[126px] mb-9 ml-[27px]" >
								{"Pokémon Jazwares Estatua Coleccionista Mewtwo\n\n\nS/ 399.00"}
							</span>
							<button className="flex flex-col items-center self-stretch bg-[#1E88E5] text-left py-[7px] mb-[22px] mx-10 rounded-[20px] border-0"
								onClick={()=>alert("Pressed!")}>
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a79226c4-fb34-43c5-b986-42ce5057736e"} 
									className="w-[50px] h-[38px] object-fill"
								/>
							</button>
						</div>
						<div className="flex flex-col items-start self-stretch bg-white rounded-[10px]" 
							style={{
								boxShadow: "0px 4px 4px #00000040"
							}}>
							<img
								src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a8cb53dc-1c53-421a-8514-8efb8621608e"} 
								className="w-[179px] h-[179px] mt-[66px] mb-7 ml-[11px] object-fill"
							/>
							<span className="text-black text-[15px] font-bold w-[117px] mb-[11px] ml-[27px]" >
								{"Pokemon Set de 8 Figuras de Batalla Edicion Hunter\n\n\n149.90"}
							</span>
							<button className="flex flex-col items-center self-stretch bg-[#1E88E5] text-left py-[7px] mb-[22px] mx-10 rounded-[20px] border-0"
								onClick={()=>alert("Pressed!")}>
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/817f2548-222d-40d1-b6d8-1c1025856422"} 
									className="w-[50px] h-[38px] object-fill"
								/>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}