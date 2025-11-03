import { userEffect } from "react";
import { replace, useSearchParams, userNavigate} from "react-router-dom"

function LoginSuccess(){
    const [ SearchParams ] = useSearchParams();
    const navigate = userNavigate();

    userEffect (()=>{
        const token = SearchParams.get("token");
    

    if(token){
        console.log("Token recibido y guardado", token);
        localStorage.setItem("authToken", token);

        navigate("/", {replace: true});
    } else{
        console.log("NO hay token se envia de nuevo a login")
        console.error ("no se recibio ningun token");
        navigate("/login", {replace:  true});
    }
 },[navigate, SearchParams]);
}
 return(
    <div className="flex items center justify-center min-screen">
        <p className="text-xl">autenticando porfavor espere</p>
    </div>
 );

export default LoginSuccess;