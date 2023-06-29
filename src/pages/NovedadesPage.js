import React from "react";
import '../styles/components/pages/NovedadesPage.css'
const NovedadesPage = (props) => {
    return (
        <section className="novedadesPage">
            <h2>Novedades 2023 </h2>
            <p>Desde el comienzo del año 2023, hemos ampliado nuestras rutas nacionales e internacionales.</p>

            <h3>Via Maritima</h3>
            <img src="/images/home/img03.jpg" alt="barco" />

            <h3>Via Terrestre</h3>
            <img src="/images/home/img04.jpg" alt="camion" />
        </section>
    );
}
export default NovedadesPage;