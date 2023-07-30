# **LAB 9: ESTILOS DE PROGRAMACIÓN**
> Alumno: Nelzon Jorge Apaza Apaza
> Curso Ingeniería de software

Implementación de estilos de programación:

1. Sliding Window: Implementado en la declaración del estado resultado (línea 6) utilizando el Hook useState, estableciendo su valor inicial como un array vacío.
```
    // Sliding Window (iniciando)
    const [resultado, setResultado] = useState([]);
    // Sliding Window (terminando)
```
2. Quarantine: Aplicamos este estilo en la función getResultados (líneas 15 a 25) al usar try-catch para capturar posibles errores al obtener los resultados. Si ocurre un error, establecemos el estado resultado como un array vacío para evitar problemas en la representación de la tabla.

```
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
```
3. Map Reduce:
Lo implementamos en el bloque de retorno, en la línea 44 , utilizando el método map para generar dinámicamente las filas de la tabla basándonos en los datos del array resultado.
```
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
```

4. Cookbook: Lo aplicamos en el bloque de retorno, entre las líneas 29 y 70, al generar la estructura de la tabla y sus elementos siguiendo un patrón predefinido y común en este tipo de componentes.

```
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
            {resultado.map((e, index) => {
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
            })} 
          </tbody>
        </table>
      ) : (
        <div>Vacio</div>
      )}
    </Layout>
    // Cookbook (terminando)
  );
```
