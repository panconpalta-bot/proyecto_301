import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const GOOGLE_AUTH_URL = import.meta.env.VITE_GOOGLE_AUTH_URL;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify ({ email, password }),
      });

      const data = await response.json();
      if(!response.ok){
        throw new Error (data.message||"Error al iniciar sesion");
    }

    localStorage.setItem("authToken", data.data.token);
        navigate ("/login-success");
        
    } catch (err) {
        setError(err.message);
    }
  };
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-md p-10 space-x-6 bg-grey-700 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold text-center">ACCEDER</h1>
        <form onSubmit={handleSubmit} className="space-y-10">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Correo Electronico
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          {error && <p className="text-sm text-center text-red-500"></p>}
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-black font-medium bg-white-500 border border-transparent rounded-md shadow-md hover:bg-white-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 "
            >
              Iniciar Sesion
            </button>
          </div>
        </form>
        <div className="flex items-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-sm font-medium text-gray-500">O</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <div className="text-center">
          
          <a
            className="inline-flex items-left justify-center w-full px-4 py-2 text-sm font-medium text-black bg-white-600 border border-transparent rounded-md shadow-sm hover:bg-orange-600"
            href={GOOGLE_AUTH_URL}
          >
            <img src="/src/frontend/public/Google.ico"  width="20" height="20"  gap= "8px"  />
            Iniciar sesion con Google
          </a>
        </div>

        <p className="text-sm text-center text-gray-600">
          No tienes una cuenta?
        </p>
        <Link
          to="/register"
          className="text-sm text-center text-gray-600"
        >
          Registrate aqui
        </Link>
      </div>
    </div>
  );
}

export default Login;