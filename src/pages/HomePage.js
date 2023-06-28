import React from "react";
import '../styles/components/pages/HomePage.css'
const HomePage = (props) => {
    return (
        <main className="homePage">

            <div className="homeimg">
                <img src="images/home/img01.jpg" alt="avion" />
            </div>

            <div className="bienvenidos">
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


        </main>
    );
}
export default HomePage;