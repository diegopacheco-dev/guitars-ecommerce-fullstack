import Image from "next/image";
import Layout from "../components/Layout";

const Nosotros = () => {
  return (
    <Layout pagina="Nosotros">
     
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>

        <div>

          <Image />

          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ea expedita reiciendis voluptate quia, assumenda quibusdam culpa, officiis iusto quisquam quasi amet! At ut necessitatibus vitae. Aut placeat cum inventore.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium beatae odio, asperiores ad perferendis quo animi, eius recusandae maxime cupiditate dolore vitae error tenetur veritatis odit minus officiis dicta rem?
            </p>
          </div>

        </div>
      </main>
    </Layout>
  );
};

export default Nosotros;
