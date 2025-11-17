import React, {useState} from "react";
export default (props) => {
	const [input1, onChangeInput1] = useState('');
	return (
		<div className="items-start bg-white">
			<div className="bg-white w-[1440px]">
				<div className="self-stretch">
					<div className="flex justify-between items-center self-stretch bg-[#EA4335] py-2.5">
						<div className="flex items-center w-[142px] ml-[50px] gap-5">
							<img
								src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ef0bb577-9518-4da9-b1d3-a23bad998d9b"} 
								className="w-[50px] h-[50px] object-fill"
							/>
							<span className="text-black text-xs" >
								{"POKE STORE"}
							</span>
						</div>
						<div className="flex items-center bg-[#FAFAFAED] w-[300px] px-2 rounded-[10px]">
							<div className="flex flex-col items-start w-7 p-[5px]">
								<span className="text-[#3C3C43] text-lg" >
									{"􀊫"}
								</span>
							</div>
							<input
								placeholder={"Search"}
								value={input1}
								onChange={(event)=>onChangeInput1(event.target.value)}
								className="flex-1 self-stretch text-[#3C3C43] bg-transparent text-[17px] py-[7px] mr-1 border-0"
							/>
						</div>
						<div className="flex flex-col items-start w-24 py-3 px-5 mr-[89px] rounded-[10px]" 
							style={{
								background: "linear-gradient(180deg, #979797, #FFFFFF)"
							}}>
							<span className="text-black text-xs" >
								{"ACCEDER"}
							</span>
						</div>
					</div>
					<div className="flex items-start self-stretch bg-[#808080] py-[21px]">
						<div className="flex justify-between items-start w-[874px] ml-[39px] mr-[60px]">
							<span className="text-black text-xs ml-[37px]" >
								{"FIGURAS"}
							</span>
							<span className="text-black text-xs" >
								{"PELUCHES"}
							</span>
							<span className="text-black text-xs mr-48" >
								{"ROPA"}
							</span>
						</div>
						<span className="text-black text-xs" >
							{"CARTAS"}
						</span>
						<div className="flex-1 self-stretch">
						</div>
						<span className="text-black text-xs mr-[118px]" >
							{"OFERTAS"}
						</span>
					</div>
				</div>
				<div className="flex flex-col items-start self-stretch bg-white">
					<span className="text-black text-xl mt-[43px] ml-[27px]" >
						{"CARRITO DE COMPRAS"}
					</span>
					<div className="flex items-start self-stretch mb-[130px] mr-4 gap-1.5">
						<div className="flex flex-col items-start w-[1161px] mt-[30px]">
							<div className="flex items-center ml-[27px]">
								<span className="text-black text-[10px] mr-[330px]" >
									{"PRODUCTO"}
								</span>
								<span className="text-black text-[10px] mr-7" >
									{"PRECIO"}
								</span>
								<span className="text-black text-[10px] mr-[27px]" >
									{"CANTIDAD"}
								</span>
								<span className="text-black text-[10px]" >
									{"SUB TOTAL"}
								</span>
							</div>
							<div className="self-stretch bg-[#C7C7C7] h-[1px] mb-0.5">
							</div>
							<div className="flex items-start mb-[11px] ml-[7px]">
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d81fd2aa-582b-4b27-8081-0508d193ecb9"} 
									className="w-[19px] h-[19px] mt-6 mr-[1px] object-fill"
								/>
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/64ea92a7-2274-469a-b856-88f24e9b8a1a"} 
									className="w-[66px] h-[76px] mr-[7px] object-fill"
								/>
								<span className="text-black text-base w-[226px] mt-[22px] mr-[84px]" >
									{"Cartas Pokemon Tcg Destined Rivals Booster"}
								</span>
								<span className="text-black text-sm mt-[18px] mr-6" >
									{"69.90"}
								</span>
								<div className="flex flex-col items-start w-[53px] mt-4 mr-9">
									<div className="flex flex-col items-end self-stretch">
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b2cab34e-875a-4d80-bcda-260760c2234a"} 
											className="w-[30px] h-7 object-fill"
										/>
									</div>
									<span className="text-black text-xs mb-[13px]" >
										{"1"}
									</span>
								</div>
								<span className="text-black text-xs mt-[17px]" >
									{"69.90"}
								</span>
							</div>
							<div className="self-stretch bg-[#C0BFBF] h-1 mb-1.5">
							</div>
							<div className="flex items-start mb-4 ml-1.5">
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d42033d4-a722-4788-9251-bb164dc2e94d"} 
									className="w-5 h-5 mt-[27px] mr-[1px] object-fill"
								/>
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/41cac288-b497-41c2-88e4-fdc5fc3f924e"} 
									className="w-[66px] h-[76px] mr-1.5 object-fill"
								/>
								<span className="text-black text-base w-[226px] mt-[30px] mr-[82px]" >
									{"Cartas Pokemon Tcg Destined Rivals Booster"}
								</span>
								<span className="text-black text-[13px] mt-[29px] mr-[35px]" >
									{"69.90"}
								</span>
								<div className="flex flex-col items-start w-[53px] mt-[26px] mr-[31px]">
									<div className="flex flex-col items-end self-stretch">
										<img
											src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1a13dde8-7086-436e-84dd-3527ae39e538"} 
											className="w-[30px] h-7 object-fill"
										/>
									</div>
									<span className="text-black text-xs mb-[13px]" >
										{"1"}
									</span>
								</div>
								<span className="text-black text-xs mt-[34px]" >
									{"69.90"}
								</span>
							</div>
							<div className="self-stretch bg-[#C0BFBF] h-1 mb-2">
							</div>
							<button className="flex flex-col items-start bg-[#609FFF] text-left py-[17px] px-3 ml-[452px] rounded-[20px] border-0"
								onClick={()=>alert("Pressed!")}>
								<span className="text-white text-base" >
									{"SEGUIR COMPRANDO"}
								</span>
							</button>
						</div>
						<div className="items-start w-[257px] relative">
							<div className="flex flex-col items-start self-stretch bg-white" 
								style={{
									boxShadow: "0px 4px 4px #00000040"
								}}>
								<span className="text-black text-xl my-3 ml-[38px]" >
									{"totales del carrito"}
								</span>
								<div className="flex justify-between items-start self-stretch mb-[3px] ml-[11px] mr-[26px]">
									<span className="text-black text-sm" >
										{"subtotales"}
									</span>
									<span className="text-black text-sm" >
										{"139.90"}
									</span>
								</div>
								<div className="self-stretch bg-[#C7C7C7] h-[1px] mb-1.5 mx-[1px]">
								</div>
								<div className="flex flex-col items-center self-stretch mb-[17px]">
									<span className="text-black text-[13px]" >
										{"tipo de pago"}
									</span>
								</div>
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0d21062c-92d7-42fa-99a8-4c7f12242bac"} 
									className="w-[230px] h-[71px] mb-[29px] ml-2.5 object-fill"
								/>
								<div className="flex flex-col items-end self-stretch mb-3">
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a3ae6076-ad31-40c7-9f5d-aa9746385a65"} 
										className="w-[152px] h-[86px] mr-11 object-fill"
									/>
								</div>
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c3e3638d-fe6e-4d51-add8-e79be0e49be4"} 
									className="w-[189px] h-[99px] mb-3 ml-8 object-fill"
								/>
								<div className="flex flex-col items-center self-stretch mb-[339px]">
									<img
										src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aea85bd2-8fde-4b78-abcd-8b7a2394eae0"} 
										className="w-[103px] h-[103px] object-fill"
									/>
								</div>
							</div>
							<div className="bg-[#D1D1D1] w-[1184px] h-[1px] absolute top-3 right-60">
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}