import React, { useEffect, useState } from "react";
import "./comprar.scss";

interface Categoria {
  id: string;
  nombre: string;
}

function Comprar() {
  // Estados para almacenar
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [productos, setProductos] = useState<any[]>([]);
  const [lotes, setLotes] = useState<any[]>([]);
  const [mostrarProductos, setMostrarProductos] = useState(false);
  const [mostrarLotes, setMostrarLotes] = useState(false);

  // Función para obtener categorías de la API
  async function obtenerCategorias() {
    try {
      const response = await fetch("http://localhost:8000/api/categorias");

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const datos = await response.json();
      console.log("Categorías obtenidas:", datos);

      // Actualizar el estado con los datos obtenidos
      setCategorias(datos.data);
    } catch (error: any) {
      console.error("Error al obtener las categorías:", error.message);
    }
  }

  // Función para obtener productos por categoría
  async function obtenerProductos(categoriaNombre: string) {
    try {
      const response = await fetch(
        `http://localhost:8000/api/productos/${categoriaNombre}`
      );
      if (!response.ok) throw new Error(`Error: ${response.statusText}`);
      const datos = await response.json();
      setProductos(datos.data);
      setMostrarProductos(true);
    } catch (error: any) {
      console.error("Error al obtener los productos:", error.message);
    }
  }

  // Función para obtener lotes por producto
  async function obtenerLotes(productoId: number) {
    try {
      const response = await fetch(
        `http://localhost:8000/api/lotes/${productoId}`
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const datos = await response.json();
      console.log("Lotes obtenidos:", datos);
      setLotes(datos.data);
      setMostrarLotes(true);
    } catch (error: any) {
      console.error("Error al obtener los productos:", error.message);
    }
  }

  // Llamar a la función al montar el componente
  useEffect(() => {
    obtenerCategorias();
  }, []);

  // Función para manejar el click en un botón de categoría
  const handleCategoriaClick = (categoriaNombre: string) => {
    obtenerProductos(categoriaNombre);
  };

  // Función para manejar el click en un botón de categoría
  const handleProductoClick = (productoId: number) => {
    obtenerLotes(productoId);
  };

  return (
    <>
      <div className="row-categiras">
        {categorias.length > 0 ? (
          categorias.map((categoria) => (
            <button
              key={categoria.id}
              // data-id={categoria.nombre}
              className="categoria-btn"
              onClick={() => handleCategoriaClick(categoria.nombre)} // Manejador de eventos
            >
              {categoria.nombre}
            </button>
          ))
        ) : (
          <p>Cargando categorías...</p>
        )}
      </div>
      {mostrarProductos && (
        <div className="row-productos">
          {productos.length > 0 ? (
            productos.map((producto) => (
              <a
                key={producto.id}
                onClick={() => handleProductoClick(producto.id)}
              >
                <h3>{producto.nombre}</h3>
              </a>
            ))
          ) : (
            <p>Cargando productos...</p>
          )}
        </div>
      )}

      {mostrarLotes && (
        <div className="row-lotes">
          {lotes.length > 0 ? (
            lotes.map((lote) => (
              <div key={lote.id}>
                <h3>{lote.stock}</h3>
                {/* <p>{lote.descripcion}</p> */}
              </div>
            ))
          ) : (
            <p>Cargando lotes...</p>
          )}
        </div>
      )}
    </>
  );
}

export default Comprar;
