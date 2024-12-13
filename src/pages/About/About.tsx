import { Helmet } from "react-helmet-async";
import Contador from "../../components/contador";
import "./about.scss";
function About() {
  return (
    <>
      <Helmet>
        <title>Nosotros - Farmagold</title>
        <meta
          name="description"
          content="Conozca más sobre Farmagold, líder en distribución de productos farmacéuticos y de cuidado personal."
        />
        <meta
          name="keywords"
          content="Farmagold, nosotros, distribución, cuidado personal"
        />
      </Helmet>
      <div>
        <div className="relative banner-nosotros">
          <img
            src="https://placehold.co/600x400"
            alt=""
            className="img-banner"
          />
          <h1>Nosotros</h1>
        </div>
        {/* ----------------------- QUIENES SOMOS -------------------------------------------- */}
        <div className="container_quienes_somos container">
          <div className="div_qs">
            <div>
              <h2>¿Quiénes somos?</h2>
              <p>
                Somos una empresa nacional que empezó brindando sus servicios en
                septiembre del 2008 en la ciudad de Lima. A pesar de ello,
                nuestros dueños, los químicos farmacéuticos Javier Cadillo Murga
                y Luz Aurora Rojo, ya contaban con una basta experiencia en el
                rubro farmacéutico.<br></br>Nos dedicamos a distribuir productos
                farmacéuticos, dispositivos médicos y productos sanitarios de
                laboratorios nacionales e internacionales a boticas y farmacias
                independientes dentro del territorio peruano.
              </p>
              <p>
                La experiencia de compra de nuestros clientes comienza con
                nuestros representantes venta y teleoperadoras, quienes
                atenderán sus pedidos de manera profesional y personal. Después
                de ello, la orden de compra es enviada al almacén, donde nuestro
                personal realizará el picking y despacho de los productos
                solicitados de una manera cuidadosa y detallada. En la zona de
                embalaje nos cercioramos que los productos sean guardado, de
                manera adecuada en las cajas para evitar daños durante el
                trayecto del transportista.
              </p>
            </div>
          </div>
          <div className="div_qs">
            <img src="https://placehold.co/600x400" alt="" />
          </div>
        </div>
        {/* ----------------------- HISTORIA -------------------------------------------- */}
        <div className="container-historia container">
          <div className="div-h">
            <img src="https://placehold.co/600x400" alt="" />
          </div>
          <div className="div-h">
            <div>
              <h2>Historia</h2>
              <ul>
                <li>
                  1988: Aperturamos la farmacia María Auxiliadora en Chimbote.
                </li>
                <li>1991: Aperturamos la farmacia Santa María en Chimbote.</li>
                <li>
                  1992:&nbsp; Aperturamos la botica Sistencial en Chimbote.
                </li>
                <li>
                  2001: Fusionamos las farmacias para crear la marca Saludfarma,
                  cadena de boticas al norte del país.
                </li>
                <li>
                  2008: Iniciamos operaciones Droguería y Distribuidora Dicar.
                </li>
                <li>
                  2013: Inauguramos nuestra sede principal propia en el distrito
                  de Chorrillos, Lima.
                </li>
                <li>2014: Implementamos tecnología Sap a nuestro sistema.</li>
                <li>
                  2014: Se obtuvo la certificación de BPA otorgada por DIGEMID.
                </li>
                <li>2015: Nos integramos a la droguería Dicar Logistic.</li>
                <li>
                  2019: Se obtuvo la certificación de BPDT otorgada por DIGEMID.
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* ----------------------- MISION VISION -------------------------------------------- */}
        <div className="container container-mv">
          <div className="div-mv">
            <div>
              <h2>Misión</h2>
              <p>
                Ofrecer a nuestros clientes la mejorar alternativa en
                distribución con productos y servicios de calidad que conlleven
                a mejorar la salud y expectativa de vida de las personas.
                Nuestros esfuerzos están centrados en brindar un excelente
                servicio de distribución a través de un equipo de profesionales
                altamente capacitados y motivados de acuerdo a los valores
                corporativos. Contribuiremos así a la obtención de beneficios
                mutuos con nuestros colaboradores, clientes, proveedores,
                gobierno y sociedad en general, con los cuales pretendemos
                mantener relaciones duraderas
              </p>
              <h2>Visión</h2>
              <p>
                Ser reconocida a nivel nacional como una droguería y
                distribuidora innovadora, creativa y eficiente en la
                comercialización de productos de calidad.
              </p>
            </div>
          </div>
          <div className="div-mv">
            <img src="https://placehold.co/600x400" alt="" />
          </div>
        </div>
        {/* ----------------------- VALORES -------------------------------------------- */}
        <div className="cantainer container-valores">
          <h2>Nuestros valores</h2>
          <p>Somos reconocidos por</p>
          <div>
            <figure>
              <img src="https://placehold.co/600x400" alt="Trulli" />
              <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption>
            </figure>
            <figure>
              <img src="https://placehold.co/600x400" alt="Trulli" />
              <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption>
            </figure>
            <figure>
              <img src="https://placehold.co/600x400" alt="Trulli" />
              <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption>
            </figure>
          </div>
        </div>
        {/* ----------------------- CERTIFICADOS -------------------------------------------- */}
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

        <Contador />
      </div>
    </>
  );
}

export default About;
