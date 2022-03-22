import React from "react";
import '../styleHome.css';

function Equipe() {
    return(
        <aside class="row container-equipe">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <h2 class="titulo-principal titulo-equipe">
                            <strong>//EQUIPE</strong>
                        </h2>
                    </div>
                </div>
                <div class="row mt-4 d-flex justify-content-center">
                    <div class="col-sm-6 col-md-4 col-lg-2 my-3">
                        <div class="card conteudo-equipe">
                            <img class="card-img-top img-equipe" src="./img/home/equipe/andre.jpg" alt="Card image"/>
                            <div class="card-body">
                                <h4 class="card-title text-center"><a class="link" href="https://www.linkedin.com/in/andrelmmiranda/" target="_blanck">André Miranda</a></h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-2 my-3">
                        <div class="card conteudo-equipe">
                            <img class="card-img-top img-equipe" src="./img/home/equipe/julio.jpg" alt="Card image"/>
                            <div class="card-body">
                                <h4 class="card-title text-center"><a class="link" href="https://www.linkedin.com/in/julio-henrique-diaz-viana-dos-santos-209009201/" target="_blanck">Julio Santos</a></h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-2 my-3">
                        <div class="card conteudo-equipe">
                            <img class="card-img-top img-equipe" src="./img/home/equipe/sandro.jpg" alt="Card image"/>
                            <div class="card-body">
                                <h4 class="card-title text-center"><a class="link" href="https://www.linkedin.com/in/sandro-rodrigues-barros/" target="_blanck">Sandro Barros</a></h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-2 my-3">
                        <div class="card conteudo-equipe">
                            <img class="card-img-top img-equipe" src="./img/home/equipe/tamara.jpg" alt="Card image"/>
                            <div class="card-body">
                                <h4 class="card-title text-center"><a class="link" href="https://www.linkedin.com/in/tamara-vieira-38ba2715a/" target="_blanck">Tamara Vieira</a></h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-2 my-3">
                        <div class="card conteudo-equipe">
                            <img class="card-img-top img-equipe" src="./img/home/equipe/thais.jpg" alt="Card image"/>
                            <div class="card-body">
                                <h4 class="card-title text-center"><a class="link" href="https://www.linkedin.com/in/thais-dos-santos-9858701b2/" target="_blanck">Thais dos Santos</a></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}

export default Equipe;