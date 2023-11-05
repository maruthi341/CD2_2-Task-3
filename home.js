import React from "react";
import "./home.css";

function home(){
    return(
        <body>
            <header>
                <a href="/">Home</a>
                <a href="register.html">Register</a>
                <a hef="login.html">Login</a>
            </header>
                <div class="container">
                <h1>Welcome to the Blog Platform</h1>
            </div>
            <footer>
                <p>Contact us at <a href="#contact-us">Contact Us</a></p>
            </footer>
        </body>
    );
}
export default home;