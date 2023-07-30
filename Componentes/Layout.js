import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Head from "next/head";
import Verify from "@/ldavis/Componentes/Verify";

export default function Layout({ children, pagina, time = 10 }) {
  const router = useRouter();
  const [username, setUsername] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  // Go Forth (Aquí inicia)
  useEffect(() => {
    getProfile();
  }, []);
  // Go Forth (Termina Aquí)

  const getProfile = async () => {
    // Map-Reduce (Aquí inicia)
    try {
      const res = await axios.get("/api/profile");
      setUsername(res.data.username);
    } catch (error) {
      console.error("Error al obtener el perfil del usuario:", error);
      setUsername(0);
    }
    // Map-Reduce (Termina Aquí)
  };

  const logout = async () => {
    try {
      const res = await axios.post("api/auth/logout");
      router.push("/");
    } catch (err) {
      console.log(err);
      router.push("/");
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
