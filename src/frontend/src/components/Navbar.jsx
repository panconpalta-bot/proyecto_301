import React, {useState} from "react";
import { Link } from "react-router-dom";
export default (props) => {
	const [input1, onChangeInput1] = useState('');
	return (
		<div className="items-start bg-white">
			<div className="bg-white w-[1440px]">
				<div className="self-stretch mb-[1px]">
					<div className="flex items-center self-stretch bg-[#EA4335] py-2.5">
						<img
							src={"/src/frontend/src/assets/image 1.png"} 
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
						<div className="flex-1 self-stretch">
						</div>
						<div className="flex flex-col items-start w-24 py-[13px] px-5 mr-[89px] rounded-[10px]" 
							style={{
								background: "linear-gradient(180deg, #979797, #FFFFFF)"
							}}>
							<span className="text-black text-xs" >
								{"ACCEDER"}
							</span>
						</div>
					</div>
					<div className="flex justify-between items-start self-stretch bg-[#808080] py-[21px]">
						<span className="text-black text-xs ml-[76px]" >
							{"FIGURAS"}
						</span>
						<span className="text-black text-xs" >
							{"PELUCHES"}
						</span>
						<span className="text-black text-xs" >
							{"ROPA"}
						</span>
						<span className="text-black text-xs" >
							{"CARTAS"}
						</span>
						<span className="text-black text-xs mr-[118px]" >
							{"OFERTAS"}
						</span>
					</div>
				</div>
				<div className="flex flex-col items-start self-stretch bg-[url('https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f80a78a9-c8fc-4a02-af65-79e26211abe0')] bg-cover bg-center pl-[385px] mb-[147px] mx-[5px]">
					<span className="text-white text-[64px] text-center w-[611px] mt-[196px] mb-[321px]" >
						{"TENEMOS MAS \nDE 100 PRODUCTOS  \nPOKEMON"}
					</span>
				</div>
			</div>
		</div>
	)
}