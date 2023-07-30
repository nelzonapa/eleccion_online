import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Head from "next/head";
import Verify from "@/ldavis/Componentes/Verify";

export default function Layout({ children, pagina, time = 10 }) 
{
  const router = useRouter();
  const [username, setUsername] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  // Go Forth (Aquí inicia)
  // Efecto secundario para obtener el perfil del usuario al montar el componente.
  useEffect(() => {
    getProfile();
  }, []);
  // Go Forth (Termina Aquí)

  const getProfile = async () => 
  {
    // Map-Reduce (Aquí inicia)
    try 
    {
      // Hacemos una solicitud GET a la API para obtener el perfil del usuario.
      const res = await axios.get("/api/profile");
      setUsername(res.data.username);
    } 
    catch (error) 
    {
      console.error("Error al obtener el perfil del usuario:", error);
      setUsername(0);
    }
    // Map-Reduce (Termina Aquí)
  };

  const logout = async () => {
    try {
      // Hacemos una solicitud POST a la API para cerrar la sesión del usuario.
      const res = await axios.post("api/auth/logout");
      router.push("/"); // Redirigimos a la página de inicio después de cerrar sesión exitosamente.
    } 
    catch (err) 
    {
      console.log(err);
      router.push("/"); // En caso de error, también redirigimos a la página de inicio.
    }
  };

  return (
    <div>
      <h1>Header</h1>
      <Head>
        <title>{pagina}</title>
      </Head>
      <div>
        <div>{username}</div>
      </div>
      <Verify
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        onConfirm={logout}
        text={"Estas seguro de cerrar sesión?"}
      />
      <button onClick={() => setIsOpen(true)}>Logout</button>
      {children}
      <h1>FOOOOOTEER</h1>
    </div>
  );
}
