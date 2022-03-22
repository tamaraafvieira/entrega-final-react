import React from "react";
import '../header_footer.css';

function Footer() {
    return(
        <footer id="foot" class="footer text-muted estilos-gerais-footer">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-6 col-lg-6 my-2 cor-secundaria-texto d-lg-flex flex-lg-column align-items-lg-center">
                        <h3 class="titulo-terciario mt-3 ml-2 ml-lg-5 pt-5">Links Rápidos</h3>
                        <ul class="texto-terciario link-header-footer">
                            <li>
                                <a class="nav-link hover-link">Home</a>
                            </li>
                            <li>
                                <div class="btn-group dropright hover-link">
                                    <button type="button" class="btn btn-link cor-secundaria-texto texto-terciario hover-link dropdown-toggle text-decoration-none" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Conteúdos
                                    </button>
                                    <div class="dropdown-menu cor-fundo-dropdown">
                                        <a class="nav-link hover-link">Matérias</a>
                                        <a class="nav-link hover-link">Podcasts</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a class="nav-link hover-link">Contratar</a>
                            </li>
                            <li>
                                <a class="nav-link hover-link">Talentos</a>
                            </li>
                            <li>
                                <a class="nav-link hover-link">Cadastre-se</a>
                            </li>
                        </ul>
                    </div>
                    
                    <div class="col-sm-12 col-md-6 col-lg-6 my-2 cor-secundaria-texto d-lg-flex flex-lg-column align-items-lg-center">
                        <h3 class="mx-3 titulo-terciario pt-5">Redes Sociais</h3>
                        <ul class="texto-terciario link-header-footer ml-3">
                            <li class="hover-link mt-4 mt-sm-3 mt-md-0 mt-lg-2 fab fa-github-square">
                                <a href="" target="_blank" class="hover-link texto-terciario text-decoration-none">&nbsp;GitHub do Projeto</a>
                            </li><br/>
                            <li class="my-2 hover-link fab fa-facebook-square">
                                <span class="texto-terciario">&nbsp;Facebook</span>
                            </li><br/>
                            <li class="mb-3 hover-link fab fa-twitter-square">
                                <span class="texto-terciario">&nbsp;Twitter</span>
                            </li><br/>
                            <li class="mb-3 hover-link fab fa-instagram">
                                <span class="texto-terciario">&nbsp;Instagram</span>
                            </li><br/>
                            <li class="hover-link fab fa-linkedin">
                                <span class="texto-terciario">&nbsp;Linkedin</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <p class="borda-footer">.</p>

                <div class="row">
                    <div class="col-12 d-flex justify-content-center mt-3">
                        <img src="./img/logo/logo-completa.png" class="logo-header mb-3" alt=""/>
                    </div>
                    <div class="col-12 d-flex justify-content-center texto-footer cor-secundaria">
                        <p>&copy; 2022 - BLACK CODE BRASIl - sq58.recodepro@gmail.com</p>                     
                    </div>
                    <div class="col-12 d-flex justify-content-center texto-footer cor-secundaria">
                    <a class="nav-link hover-link">Administrador</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;