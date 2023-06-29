import React from "react";
import '../styles/components/pages/ContactoPage.css'
const ContactoPage = (props) => {
    return (
        <main className="contactoPage" >

            <div className="formu">
                <h2>Contacto rapido</h2>
                <form action="" method="" className="formulario">
                    <p className="pForm">
                        <label for="nombre">Nombre </label>
                        <input type="text" name="nombre" value="" />
                    </p>
                    <p className="pForm">
                        <label for="email">Email </label>
                        <input type="text" name="email" value="" />
                    </p>
                    <p className="pForm">
                        <label for="telefono">Telefono </label>
                        <input type="text" name="telefono" value="" />
                    </p>
                    <p className="pForm">
                        <label for="mensaje">Mensaje </label>
                        <textarea rows="5" cols="50" name="mensaje"></textarea>
                    </p>
                    <p className='acciones'>
                        <input type="submit" name="" value="Enviar" />
                    </p>
                </form>

            </div>

            <div className='datos'>
                <h2>Otras vias de comunicacion</h2>

                <ul>
                    <li>Telefono: 4000-4000</li>
                    <li>Email: contacto@transportesx.com</li>
                    <li>Facebook: @transportesx</li>
                </ul>
            </div>

        </main>
    );
}
export default ContactoPage;