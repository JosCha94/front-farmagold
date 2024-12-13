import { useState } from "react";
import { Helmet } from "react-helmet-async";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";

import "./home.scss";
// rfce
function Home() {
  // const [count, setCount] = useState(0);
  return (
    <>
      <Helmet>
        <title>Inicio - Farmagold</title>
        <meta
          name="description"
          content="Bienvenido a Farmagold, su mejor opción para medicamentos y productos de tocador."
        />
        <meta
          name="keywords"
          content="Farmagold, medicamentos, productos de tocador, droguerías"
        />
      </Helmet>
      <div>
        <img src="https://placehold.co/600x400" alt="" className="img-banner" />

        <div className="container-div-servicios container">
          <h2>Servicios</h2>
          <div className="div-servicios">
            <div className="card-servicios">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="512"
                height="512"
                viewBox="0 0 128 128"
              >
                <path d="M122.25,33.753H102.33l-2.163-10.587A19.819,19.819,0,0,0,80.816,7.37H47.184a19.819,19.819,0,0,0-19.351,15.8L25.67,33.753H5.75A5.757,5.757,0,0,0,0,39.5V114.88a5.756,5.756,0,0,0,5.75,5.75h116.5a5.756,5.756,0,0,0,5.75-5.75V39.5A5.757,5.757,0,0,0,122.25,33.753ZM31.263,23.867a16.306,16.306,0,0,1,15.921-13H80.816a16.306,16.306,0,0,1,15.921,13l2.021,9.887H94.165l-1.836-8.986a11.791,11.791,0,0,0-11.513-9.4H47.184a11.791,11.791,0,0,0-11.513,9.4l-1.836,8.986H29.242Zm59.329,9.886H37.408L39.1,25.468a8.278,8.278,0,0,1,8.083-6.6H80.816a8.278,8.278,0,0,1,8.083,6.6ZM3.5,39.5a2.253,2.253,0,0,1,2.25-2.25h116.5a2.253,2.253,0,0,1,2.25,2.25V58.8a16.269,16.269,0,0,1-16.25,16.25H19.75A16.269,16.269,0,0,1,3.5,58.8ZM88.812,78.55h9.25v10.2A1.251,1.251,0,0,1,96.812,90h-6.75a1.252,1.252,0,0,1-1.25-1.25Zm-58.875,0h9.25v10.2A1.251,1.251,0,0,1,37.937,90h-6.75a1.252,1.252,0,0,1-1.25-1.25ZM124.5,114.88a2.253,2.253,0,0,1-2.25,2.25H5.75a2.253,2.253,0,0,1-2.25-2.25V70A19.735,19.735,0,0,0,19.75,78.55h6.687v10.2a4.756,4.756,0,0,0,4.75,4.75h6.75a4.755,4.755,0,0,0,4.75-4.75V78.55H85.312v10.2a4.756,4.756,0,0,0,4.75,4.75h6.75a4.755,4.755,0,0,0,4.75-4.75V78.55h6.688A19.735,19.735,0,0,0,124.5,70Z"></path>
              </svg>
              <p>Ventas</p>
            </div>
            <div className="card-servicios">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="512"
                height="512"
                viewBox="0 0 128 128"
              >
                <path d="M122.25,33.753H102.33l-2.163-10.587A19.819,19.819,0,0,0,80.816,7.37H47.184a19.819,19.819,0,0,0-19.351,15.8L25.67,33.753H5.75A5.757,5.757,0,0,0,0,39.5V114.88a5.756,5.756,0,0,0,5.75,5.75h116.5a5.756,5.756,0,0,0,5.75-5.75V39.5A5.757,5.757,0,0,0,122.25,33.753ZM31.263,23.867a16.306,16.306,0,0,1,15.921-13H80.816a16.306,16.306,0,0,1,15.921,13l2.021,9.887H94.165l-1.836-8.986a11.791,11.791,0,0,0-11.513-9.4H47.184a11.791,11.791,0,0,0-11.513,9.4l-1.836,8.986H29.242Zm59.329,9.886H37.408L39.1,25.468a8.278,8.278,0,0,1,8.083-6.6H80.816a8.278,8.278,0,0,1,8.083,6.6ZM3.5,39.5a2.253,2.253,0,0,1,2.25-2.25h116.5a2.253,2.253,0,0,1,2.25,2.25V58.8a16.269,16.269,0,0,1-16.25,16.25H19.75A16.269,16.269,0,0,1,3.5,58.8ZM88.812,78.55h9.25v10.2A1.251,1.251,0,0,1,96.812,90h-6.75a1.252,1.252,0,0,1-1.25-1.25Zm-58.875,0h9.25v10.2A1.251,1.251,0,0,1,37.937,90h-6.75a1.252,1.252,0,0,1-1.25-1.25ZM124.5,114.88a2.253,2.253,0,0,1-2.25,2.25H5.75a2.253,2.253,0,0,1-2.25-2.25V70A19.735,19.735,0,0,0,19.75,78.55h6.687v10.2a4.756,4.756,0,0,0,4.75,4.75h6.75a4.755,4.755,0,0,0,4.75-4.75V78.55H85.312v10.2a4.756,4.756,0,0,0,4.75,4.75h6.75a4.755,4.755,0,0,0,4.75-4.75V78.55h6.688A19.735,19.735,0,0,0,124.5,70Z"></path>
              </svg>
              <p>Distribución</p>
            </div>
          </div>
        </div>
        <div className="container-div-certificados container">
          <h2>Certificados</h2>
          <p>
            Desde el 2014 conseguimos reunir todos los criterios solicitados por
            la DIGEMID para obtener el Certificado de las Buenas Prácticas de
            Almacenamiento (BPA) y en el 2019 obtuvimos el certificado de las
            Buenas Prácticas de Distribución y Transporte (BPDT)
          </p>
          <div className="div-certificados">
            <img
              src="https://drogueriadicar.com.pe/wp-content/uploads/2019/10/certificado2.png"
              alt=""
            />
            <img
              src="https://drogueriadicar.com.pe/wp-content/uploads/2019/10/certificado2.png"
              alt=""
            />
          </div>
        </div>
        <div className="container-div-contacto">
          <div className="container">
            <h2>Contacto</h2>
            <div className="div-contacto">
              <a href="tel:+123456789" target="_blank">
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3"
                    />
                  </svg>
                </i>
                123456
              </a>
              <a href="mailto:m.bluth@example.com" target="_blank">
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7.175q.125 0 .263-.038t.262-.112L19.6 8.25q.2-.125.3-.312t.1-.413q0-.5-.425-.75T18.7 6.8L12 11L5.3 6.8q-.45-.275-.875-.012T4 7.525q0 .25.1.438t.3.287l7.075 4.425q.125.075.263.113t.262.037"
                    />
                  </svg>
                </i>
                m.bluth@example.com
              </a>
            </div>
          </div>
          <div className="map-responsive">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.9691948539603!2d-71.52147132574481!3d-16.42639083883288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424b221e19f183%3A0x8862234543f4d82f!2sDistribuidora%20Farmagold!5e0!3m2!1ses-419!2spe!4v1732585779717!5m2!1ses-419!2spe"
              width="1200"
              height="450"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
            ></iframe>
          </div>
        </div>

        {/* --------------------------------------------------------------------------- */}
        {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count - 1)}>
          count is {count}
        </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p> */}
      </div>
    </>
  );
}

export default Home;
