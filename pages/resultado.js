import Layout from "@/ldavis/Componentes/Layout";
import ResultadoEleccion from "@/ldavis/Data/Repositorio/ResultadoEleccion";
import React, { useEffect, useState } from "react";

export default function Resultado() {
  // Sliding Window (iniciando)
  const [resultado, setResultado] = useState([]);
  // Sliding Window (terminando)

  useEffect(() => {
    getResultados();
  }, []);

  // Quarantine (iniciando)
  const getResultados = async () => {
    try {
      const res = await ResultadoEleccion.getResultados();
      console.log(res.data);
      setResultado(res.data[0]);
    } catch (error) {
      console.error("Error al obtener resultados:", error);
      // Aquí aplicamos el Quarantine al encapsular el manejo del error.
      setResultado([]);
    }
  };
  // Quarantine (terminando)

  return (
    // Cookbook (iniciando)
    <Layout pagina="Resultado">
      {resultado.length > 0 ? (
        <table className="table mt-4">
          <thead>
            <tr>
              <th>Id</th>
              <th>Partido</th>
              <th>Presidente</th>
              <th>Nro_Votos</th>
              <th>Logo</th>
            </tr>
          </thead>
          <tbody>
            {resultado.map((e, index) => { // Map-Reduce (iniciando)
              return (
                <tr key={e.id_partido}>
                  <td>{e.id_partido}</td>
                  <td>{e.nombre_partido}</td>
                  <td>{e.nombre + " " + e.apellido}</td>
                  <td>{e.nro_votos}</td>
                  <td>
                    <img
                      src={"/partidos/" + e.nombre_partido + ".png"}
                      alt={"Cargando"}
                      style={{ width: "100px", height: "100px" }}
                    />
                  </td>
                </tr>
              );
              // Map-Reduce (terminando)
            })} 
          </tbody>
        </table>
      ) : (
        <div>Vacio</div>
      )}
    </Layout>
    // Cookbook (terminando)
  );
}
