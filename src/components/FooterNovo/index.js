import React from "react";
import './style.css';
import '../header_footer.css';

function FooterNovo() {
    return(
        <footer id="myFooter">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-3 col-lg-3">
                        <a><img src="./img/logo/logo-completa.png" class="logo-footer mt-4" alt=""/></a>
                    </div>
                    <div class="col-sm-12 col-md-2 col-lg-2">
                        <h5>Links Rápidos</h5>
                        <ul>
                            <li><a href="http://localhost:3000/Home">Home</a></li>
                            <li><a href="http://localhost:3000/Materias">Matérias</a></li>
                            <li><a href="http://localhost:3000/Podcasts">Podcasts</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-12 col-md-2 col-lg-2">
                        <h5>Links Rápidos</h5>
                        <ul>
                            <li><a href="http://localhost:3000/Contratar">Contratar</a></li>
                            <li><a href="http://localhost:3000/Talentos">Talentos</a></li>
                            <li><a href="http://localhost:3000/Cadastrar">Cadastre-se</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-12 col-md-2 col-lg-2">
                        <h5>Apoiador</h5>
                        <ul>
                            <li><a target={"_blanck"} href="https://recodepro.org.br/">Recode Pro</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-12 col-md-3 col-lg-3">
                        <div class="social-networks">
                            <a href="#" class="twitter"><i class="fa fa-github"></i></a>
                            <a href="#" class="facebook"><i class="fa fa-linkedin"></i></a>
                            <a href="#" class="instagram"><i class="fa fa-instagram"></i></a>
                        </div>
                        <a href="#">
                            <button type="button" class="btn btn-default">Contato</button>
                        </a>
                    </div>
                </div>
        </div>
        <div class="footer-copyright">
            <p>© 2022 Copyright - Black Code Brasil</p>
        </div>
    </footer>
    );
}

export default FooterNovo;