import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [token, setToken] = useState(null);

  // Estado para el input del buscador
  const [input1, setInput1] = useState("");

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []); // ← aquí estaba mal

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setToken(null);
  };

  return (
    <div className="items-start bg-white">
      <div className="bg-white w-[1440px]">
        <div className="self-stretch mb-[1px]">
          <div className="flex items-center self-stretch bg-[#EA4335] py-2.5">
            <img
              src={"/src/frontend/public/InicioIcon.svg"}
              className="w-[50px] h-[50px] ml-[50px] mr-5 object-fill"
            />
            <span className="text-black text-xs">{"POKE STORE"}</span>

            <div className="flex-1 self-stretch"></div>

            <div className="flex items-center bg-[#FAFAFAED] w-[300px] px-2 rounded-[10px]">
              <div className="flex flex-col items-start w-7 p-[5px]">
                <span className="text-[#3C3C43] text-lg">{"􀊫"}</span>
              </div>

              <input
                placeholder={"Search"}
                value={input1}
                onChange={(event) => setInput1(event.target.value)}
                className="flex-1 self-stretch text-[#3C3C43] bg-transparent text-[17px] py-[7px] mr-1 border-0"
              />
            </div>

            <div className="flex-1 self-stretch"></div>

            <div
              className="flex flex-col items-start w-24 py-[13px] px-5 mr-[89px] rounded-[10px]"
              style={{
                background: "linear-gradient(180deg, #979797, #FFFFFF)",
              }}
            >
              <Link to="/register" className="text-sm text-center text-gray-600">
                Registrate aqui
              </Link>
            </div>
          </div>

          <div className="flex justify-between items-start self-stretch bg-[#808080] py-[21px]">
            <span className="text-black text-xs ml-[76px]">{"FIGURAS"}</span>
            <span className="text-black text-xs">{"PELUCHES"}</span>
            <span className="text-black text-xs">{"ROPA"}</span>
            <span className="text-black text-xs">{"CARTAS"}</span>
            <span className="text-black text-xs mr-[118px]">{"OFERTAS"}</span>
          </div>
        </div>

        <div className="flex flex-col items-start self-stretch bg-[src] bg-cover bg-center pl-[385px] mb-[147px] mx-[5px]">
          <span className="text-white text-[64px] text-center w-[611px] mt-[196px] mb-[321px]">
            {"TENEMOS MAS \nDE 100 PRODUCTOS  \nPOKEMON"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Home;
