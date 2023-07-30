# **LAB 9: ESTILOS DE PROGRAMACIÓN**
> Alumno: Nelzon Jorge Apaza Apaza
> Curso Ingeniería de software

Implementación de estilos de programación:

## **En resultado.js**

1. Sliding Window: Implementado en la declaración del estado resultado (línea 6) utilizando el Hook useState, estableciendo su valor inicial como un array vacío.
```bash
    // Sliding Window (iniciando)
    const [resultado, setResultado] = useState([]);
    // Sliding Window (terminando)
```

2. Quarantine: Aplicamos este estilo en la función getResultados (líneas 15 a 25) al usar try-catch para capturar posibles errores al obtener los resultados. Si ocurre un error, establecemos el estado resultado como un array vacío para evitar problemas en la representación de la tabla.

```bash
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
```bash
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

```bash
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

## **En ResultadoEleccion.js**

1. RESTful: Este estilo se aplica en las funciones getResultados y getUserById. La implementación del estilo es en cómo las funciones están diseñadas para realizar operaciones de acceso a recursos a través de una API RESTful. La función getResultados realiza una solicitud HTTP GET a la ruta `/api/services/resultado`, mientras que getUserById realiza una solicitud HTTP GET a la ruta `/api/users/${id}`.

```bash
// RESTful (Inicia Aquí)
import axios from 'axios';
class ResultadoEleccion {
    static async getResultados() {
        try {
            // RESTful (continuando)
            const response = await axios.get('/api/services/resultado');
            return response;
        } catch (error) {
            console.error('Error al obtener resultados base de datos:', error);
            throw error;
        }
    }
    static async getUserById(id) {
        try {
            // RESTful (continuando)
            const response = await axios.get(`/api/users/${id}`);
            return response.data;
        } catch (error) {
            console.error(`Error al obtener el usuario con ID ${id}:`, error);
            throw error;
        }
    }
}

export default ResultadoEleccion;
```

* Go Forth: He implementado este estilo utilizando el efecto de lado (useEffect). En la línea 12, el efecto está configurado para llamar a la función getProfile cuando el componente se monta (porque el arreglo de dependencias está vacío). De esta manera, el código avanza y ejecuta la obtención del perfil del usuario en el momento adecuado.

```bash
    // Go Forth (Aquí inicia)
    useEffect(() => {
        getProfile();
    }, []);
    // Go Forth (Termina Aquí)
```


* Map-Reduce: He aplicado este estilo dentro de la función getProfile. El bloque de código que realiza la solicitud HTTP utilizando Axios representa el enfoque Map-Reduce. Primero, intentamos obtener el perfil del usuario mediante una solicitud HTTP (Map), y luego, en caso de éxito, actualizamos el estado username con los datos obtenidos (Reduce).

```bash
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
```