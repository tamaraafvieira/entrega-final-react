import React from "react";
import '../styleHome.css';

function InfoBlack() {
    return(
        <article>
            <div class="row container-black-code">
                <div class="col-10 col-sm-9 col-md-6 col-lg-5 col-xl-5 linha-10">
                    <h2 class="titulo-principal cor-terciaria-texto text-center">BLACK CODE BRASIL</h2><br/>
                    <p class="texto-terciario cor-secundaria text-justify mb-5">
                        Conectamos pessoas negras da área de tecnologia com recrutadores e empresas
                        interessadas em contratar essa força de trabalho.<br/><br/>

                        O objetivo é colaborar com a erradicação do racismo sistêmico estrutural enraizado  no mercado de trabalho brasileiro.<br/><br/>

                        Dessa forma pretendemos ampliar a participação da população negra no setor da Tecnologia da Informação e Comunicação (TICs),
                        auxiliando também na redução das desigualdades sociais no Brasil.
                    </p>
                </div>
            </div>
        </article>
    );
}

export default InfoBlack;