import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  
  // Para redirigir al usuario después del registro
  const navigate = useNavigate();

  // Función que se ejecuta al enviar el formulario
  const handleSubmit = async (event) => {
    event.preventDefault(); 
    setError(null);

    try {
      const response = await fetch('http://localhost:3000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Error al registrar el usuario');
      }

      console.log('Usuario registrado:', data);
      navigate('/login-success');

    } catch (err) {
      setError(err.message);
    }
  };

  return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100">
			<div className="flex flex-col w-[441px] rounded-[10px]" 
				style={{
					background: "linear-gradient(180deg, #7D7D7D, #D9D9D9)"
				}}>
				<div className="flex flex-col items-center self-stretch mt-[134px] mb-[61px]">
					<span className="text-[#010101] text-5xl font-bold" >
						{"REGISTRARSE"}
					</span>
				</div>
				<div className="flex flex-col items-start self-stretch bg-[#FFFDFD] py-[37px] pl-4 mb-[61px] ml-[26px] mr-[78px] rounded-[15px] border border-solid border-[#C7C7C7]">
					<span className="text-black text-2xl font-bold" >
						{"NAME"}
					</span>
				</div>
				<div className="flex flex-col items-start self-stretch bg-[#FFFDFD] py-[37px] pl-[27px] mb-[61px] ml-[26px] mr-[78px] rounded-[15px] border border-solid border-[#C7C7C7]">
					<span className="text-black text-2xl font-bold" >
						{"EMAIL"}
					</span>
				</div>
				<div className="flex flex-col items-start self-stretch bg-[#FFFDFD] py-[37px] pl-4 mb-[61px] ml-[26px] mr-[78px] rounded-[15px] border border-solid border-[#C7C7C7]">
					<span className="text-black text-2xl font-bold" >
						{"PASSWORD"}
					</span>
				</div>
				<button className="flex flex-col items-center self-stretch bg-white text-left py-5 mb-[87px] ml-[26px] mr-[84px] rounded-[20px] border-0"
					onClick={()=>alert("Pressed!")}>
					<span className="text-black text-[32px] font-bold" >
						{"INGRESAR"}
					</span>
				</button>
			</div>
		</div>
	)
}

export default Register;