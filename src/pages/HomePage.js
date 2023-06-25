import React from "react";
const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="homeimg">
                <img src="images/home/img01.jpg" alt="avion" />

            </div>

            <div className="columnas" >
                <div className="Bienvenidos">
                    <h2>Bienvenidos</h2>
                    <p>
                        Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
                        dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
                        Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
                        sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.
                    </p>
                    <p>
                        Non etiam tempor id arcu magna ante eget. Nec per posuere cubilia cras porttitor condimentum
                        orci suscipit. Leo maecenas in tristique, himenaeos elementum placerat. Taciti rutrum nostra,
                        eget cursus velit ultricies. Quam molestie tellus himenaeos cubilia congue vivamus ultricies.
                        Interdum praesent ut penatibus fames eros ad consectetur sed.
                    </p>
                </div>

                <div className="testimonio">
                    <span class='cita'> Simplemente excelente</span>
                    <span class='autor'> J.Perez </span>
                </div>
            </div>
        </main>
    );
}
export default HomePage;