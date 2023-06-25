import React from "react";
const ContactoPage = (props) => {
    return (
        <main className="holder contacto" >
            <div>
                <h2>Contacto rapido</h2>
                <form action="" method="" className="formulario">

                    <p>
                        <label for="nombre">Nombre</label>
                        <input type="text" name="" value="" />
                    </p>
                    <p>
                        <label for="email">Email</label>
                        <input type="text" name="" value="" />
                    </p>
                    <p>
                        <label for="telefono">Telefono</label>
                        <input type="text" name="" value="" />
                    </p>
                    <p>
                        <label for="mensaje">Mensaje</label>
                        <textarea rows="" cols="" name=""></textarea>
                    </p>

                    <p class='acciones'>
                        <input type="submit" name="" value="Enviar" />
                    </p>

                </form>

            </div>

            <div class='datos'>
                <h2>Otras vias de comunicacion</h2>
                <p>Puede contactarse con nosotros a traves de estos medios</p>
                <ul>
                    <li>Telefono: 4000-4000</li>
                    <li>Email: contacto@transportesx.com</li>
                    <li>Facebook:</li>
                    <li>Twitter:</li>
                    <li>Skype:</li>
                </ul>
                
            </div>
        </main>
    );
}
export default ContactoPage;