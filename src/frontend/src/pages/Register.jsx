import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();

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
      <div
        className="flex flex-col w-[541px]  h-[900px]rounded-[12px]"
        style={{
          background: 'linear-gradient(180deg, #7D7D7D, #D9D9D9)',
        }}
      >
        <div className="flex flex-col items-center self-stretch mt-[134px] mb-[61px]">
          <span className="text-[#010101] text-5xl font-bold">REGISTRARSE</span>
        </div>

        <form
          className="flex flex-col items-center self-stretch px-[26px] pb-[61px]"
          onSubmit={handleSubmit}
        >
          {/* NAME */}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="w-full py-[20px] px-4 mb-[20px] rounded-[15px] border border-solid border-[#C7C7C7]"
            required
          />

          {/* EMAIL */}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full py-[20px] px-4 mb-[20px] rounded-[15px] border border-solid border-[#C7C7C7]"
            required
          />

          {/* PASSWORD */}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full py-[20px] px-4 mb-[40px] rounded-[15px] border border-solid border-[#C7C7C7]"
            required
          />

          {/* ERROR */}
          {error && <p className="text-red-500 mb-4">{error}</p>}

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="w-full py-5 bg-white rounded-[20px] text-black text-[32px] font-bold"
          >
            INGRESAR
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;