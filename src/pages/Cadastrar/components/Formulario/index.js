import React from "react";
import './style.css';
import '../../../Home/components/styleHome.css'

function Formulario() {
    return(
        <div class="container-fluid">
            <section>
                <div class="container">
                    <div class="row d-flex justify-content-center">
                        <div class="col-lg-12 d-flex justify-content-center my-2">
                            <h1 class="titulo-principal cor-secundaria-texto my-5">
                                <strong>//CADASTRE-SE</strong>
                            </h1>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <p class="titulo-terciario cor-secundaria text-justify texto-cadastro">
                                <span class="cor-terciaria mr-1">&lt;</span>Pesquisa realizada pela PretaLab constatou que em 32,7% dos casos, não há nenhuma pessoa negra
                                nas equipes de de tecnologia. Em 68,5% das análises, as pessoas negras representam um máximo de 10%
                                das pessoas nas equipes de trabalho em tecnologia Vamos mudar essa história?<span class="cor-secundaria-texto">(!)</span><span class="cor-terciaria">/&gt;</span>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div class="row background d-flex justify-content-center">
                    <div class="col-12 d-flex justify-content-center my-3">
                        <h1 class="titulo-principal my-5 cor-titulo-cadastro">//CADASTRE SEU TALENTO</h1>
                    </div>
                    <div class="row">
                        <div class="container">
                            <div class="col-12 cor-secundaria texto-cadastrar">
                                <form asp-action="Create" enctype="multipart/form-data" class="was-validated">
                                    <div class="form-group">
                                        <label asp-for="Nome" class="control-label">QUAL O SEU NOME?</label>
                                        <input asp-for="Nome" id="Nome" type="text" placeholder="Digite seu nome completo" class="form-control input-md mb-4" required/>
                                        <span asp-validation-for="Nome" class="text-danger"></span>
                                        <div class="valid-feedback">Preechimento válido</div>
                                        <div class="invalid-feedback">Campo Obrigatório</div>
                                    </div>

                                    <div class="form-group">
                                        <label asp-for="Imagem" class="control-label">Anexo</label><br/>
                                        <input asp-for="Imagem" type="file" id="anexo" class="mb-4 form-control" accept="image/*" required/><br/>
                                        <span asp-validation-for="Imagem" class="text-danger"></span>
                                        <div class="valid-feedback">Preechimento válido</div>
                                        <div class="invalid-feedback">Campo Obrigatório</div>
                                    </div>

                                    <div class="form-group">
                                        <label asp-for="Profissao" class="control-label" for="">QUAL A SUA PROFISSÁO / NO QUE VOCÊ TRABALHA?</label>
                                        <select asp-for="Profissao" name="profissao" class="custom-select mb-4" required>
                                            <option selected value="">Escolha uma Profissão</option>
                                            <option value="Artificial Inteligence">Artificial Inteligence</option>
                                            <option value="Business Intelligence">Business Inteligence</option>
                                            <option value="Cloud Computing">Cloud Computing</option>
                                            <option value="Computer Programming">Computer Programming</option>
                                            <option value="Data Science">Data Science</option>
                                            <option value="Devops">Devops</option>
                                            <option value="Information Security">Information Secury</option>
                                            <option value="IoT">IoT</option>
                                        </select>
                                        <span asp-validation-for="Profissao" class="text-danger"></span>
                                        <div class="valid-feedback">Preechimento válido</div>
                                        <div class="invalid-feedback">Campo Obrigatório</div>
                                    </div>

                                    <div class="form-group">
                                        <label asp-for="Localidade" class="control-label">QUAL A SUA LOCALIDADE?</label>
                                        <input asp-for="Localidade" id="localidade" type="text" placeholder="Digite a sua cidade/estado" class="form-control input-md mb-4" required/>
                                        <span asp-validation-for="Localidade" class="text-danger"></span>
                                        <div class="valid-feedback">Preechimento válido</div>
                                        <div class="invalid-feedback">Campo Obrigatório</div>
                                    </div>

                                    <div class="form-group">
                                        <label class="control-label" asp-for="Telefone">QUAL O SEU TELEFONE?</label>
                                        <input id="telefone" asp-for="Telefone" type="text" placeholder="Digite o seu telefone" class="form-control input-md mb-4" required/>
                                        <span asp-validation-for="Telefone" class="text-danger"></span>
                                        <div class="valid-feedback">Preechimento válido</div>
                                        <div class="invalid-feedback">Campo Obrigatório</div>
                                    </div>

                                    <div class="form-group">
                                        <label class="control-label" asp-for="Email">QUAL O SEU E-MAIL?</label>
                                        <input id="email" asp-for="Email" type="email" placeholder="Digite o seu email" class="form-control input-md mb-4" required/>
                                        <span asp-validation-for="Email" class="text-danger"></span>
                                        <div class="valid-feedback">Preechimento válido</div>
                                        <div class="invalid-feedback">Campo Obrigatório</div>
                                    </div>

                                    <div class="form-group">
                                        <label asp-for="Formacao" class="control-label">QUAL A SUA FORMAÇÃO?</label><br/>
                                        <select asp-for="Formacao" class="custom-select mb-4" required>
                                            <option selected value="">Escolha o seu nível de formação</option>
                                            <option value="ensino fundamental incompleto">Ensino fundamental incompleto</option>
                                            <option value="Ensino fundamental completo">Ensino fundamental completo</option>
                                            <option value="ensino medio incompleto">Ensino médio incompleto</option>
                                            <option value="Ensino medio completo">Ensino médio completo</option>
                                            <option value="Ensino tecnico incompleto">Ensino técnico incompleto</option>
                                            <option value="Ensino tecnico completo">Ensino técnico completo</option>
                                            <option value="Ensino superior incompleto">Ensino superior incompleto</option>
                                            <option value="Ensino superio completo">Ensino superio completo</option>
                                        </select>
                                        <span asp-validation-for="Formacao" class="text-danger"></span>
                                        <div class="valid-feedback">Preechimento válido</div>
                                        <div class="invalid-feedback">Campo Obrigatório</div>
                                    </div>

                                    <div class="form-group">   
                                        <label class="control-label titulo-principal" asp-for="Sobre">SOBRE:</label><br/>
                                        <textarea class="text-area-cadastro mb-4" id="Formacao" asp-for="Sobre" maxlength="280" placeholder="Queremos te conhecer, fale um pouco mais sobre vc(280 caracteres)..."></textarea>
                                        <span asp-validation-for="Sobre" class="text-danger"></span>
                                    </div>     

                                        <h1 class="titulo-secundario my-3">EXPERIÊNCIA</h1>

                                    <div class="form-group"> 
                                        <label class="control-label" asp-for="Local1">LOCAL?</label>
                                        <input id="local" asp-for="Local1" type="text" placeholder="Digite qual era o local" class="form-control input-md mb-4"/>
                                        <span asp-validation-for="Local1" class="text-danger"></span>
                                    </div>    

                                    <div class="form-group">
                                        <label class="control-label" asp-for="Funcao1">FUNÇÃO?</label>
                                        <input id="funcao" asp-for="Funcao1" type="text" placeholder="Digite a sua função" class="form-control input-md mb-4"/>
                                        <span asp-validation-for="Funcao1" class="text-danger"></span>
                                    </div>    

                                    <div class="form-group">
                                        <label class="control-label" asp-for="Atividade1">ATIVIDADES?</label>
                                        <input id="atividade" asp-for="Atividade1" type="text" placeholder="Digite a sua atividade" class="form-control input-md mb-4"/>
                                        <span asp-validation-for="Atividade1" class="text-danger"></span>
                                    </div>    

                                        <p class="borda-cadastro">.</p>

                                    <div class="form-group">
                                        <label class="control-label" asp-for="Local2">LOCAL?</label>
                                        <input id="local" asp-for="Local2" type="text" placeholder="Digite qual era o local" class="form-control input-md mb-4"/>
                                        <span asp-validation-for="Local2" class="text-danger"></span>
                                    </div>

                                    <div class="form-group">
                                        <label class="control-label" asp-for="Funcao2">FUNÇÃO?</label>
                                        <input id="funcao" asp-for="Funcao2" type="text" placeholder="Digite a sua função" class="form-control input-md mb-4"/>
                                        <span asp-validation-for="Funcao2" class="text-danger"></span>
                                    </div>

                                    <div class="form-group">
                                        <label class="control-label" asp-for="Atividade2">ATIVIDADES?</label>
                                        <input id="atividade" asp-for="Atividade2" type="text" placeholder="Digite a sua atividade" class="form-control input-md mb-4"/>
                                        <span asp-validation-for="Atividade2" class="text-danger"></span>
                                    </div>

                                        <h1 class="titulo-secundario my-5">CURSOS</h1>

                                    <div class="form-group">
                                        <label class="control-label" asp-for="Instituicao1">INSTITUIÇÃO?</label>
                                        <input id="instituicao" asp-for="Instituicao1" type="text" placeholder="Digite o nome da instituição formadora" class="form-control input-md mb-4"/>
                                        <span asp-validation-for="Instituicao1" class="text-danger"></span>
                                    </div>    

                                    <div class="form-group">
                                        <label class="control-label" asp-for="CargaHoraria1">CARGA HORÁRIA?</label>
                                        <input id="cargaHoraria" asp-for="CargaHoraria1" type="text" placeholder="Digite a carga horária" class="form-control input-md mb-4"/>
                                        <span asp-validation-for="CargaHoraria1" class="text-danger"></span>
                                    </div>    

                                    <div class="form-group">
                                    <label class="control-label" asp-for="Aprendeu1">O QUE APRENDEU?</label>
                                        <input id="oQueAprendeu" asp-for="Aprendeu1" type="text" placeholder="Digite o que aprendeu" class="form-control input-md mb-4"/>
                                        <span asp-validation-for="Aprendeu1" class="text-danger"></span>
                                        <div class="invalid-feedback">Campo Obrigatório</div>
                                    </div>  

                                        <p class="borda-cadastro">.</p>

                                    <div class="form-group">
                                        <label class="control-label" asp-for="Instituicao2">INSTITUIÇÃO?</label>
                                        <input id="instituicao" asp-for="Instituicao2" type="text" placeholder="Digite o nome da instituição formadora" class="form-control input-md mb-4"/>
                                        <span asp-validation-for="Instituicao2" class="text-danger"></span>
                                    </div>    

                                    <div class="form-group">
                                        <label class="control-label" asp-for="CargaHoraria2">CARGA HORÁRIA?</label>
                                        <input id="cargaHoraria" asp-for="CargaHoraria2" type="text" placeholder="Digite a carga horária" class="form-control input-md mb-4"/>
                                        <span asp-validation-for="CargaHoraria2" class="text-danger"></span>
                                    </div>    

                                    <div class="form-group">
                                        <label class="control-label" asp-for="Aprendeu2">O QUE APRENDEU?</label>
                                        <textarea class="text-area-cadastro mb-4" asp-for="Aprendeu2" id="oQueAprendeu" name="textarea" maxlength="280" placeholder="Queremos te conhecer, fale um pouco mais sobre o que aprendeu..."></textarea>
                                        <span asp-validation-for="Aprendeu2" class="text-danger"></span>
                                    </div>    

                                    <div class="form-group">
                                        <label class="control-label" asp-for="Habilidades">HABILIDADES:</label><br/>
                                        <textarea class="text-area-cadastro mb-4" asp-for="Habilidades" id="habilidades" maxlength="280" placeholder="Exemplo: Html; Css; Javascript; Bootstrap; "></textarea>
                                        <span asp-validation-for="Habilidades" class="text-danger"></span>
                                    </div> 

                                    <div class="form-group form-check texto-autorizo">
                                        <label class="form-check-label">
                                            <input class="form-check-input" type="checkbox" name="remember" required/> Concordo com os 
                                            <button type="button" class="btn btn-link cor-secundaria decoracao-texto-form" data-toggle="modal" data-target=".bd-example-modal-lg">Termos, Política de Dados e Política de Cookies.</button>
                                            <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-lg">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h5 class="modal-title cor-principal titulo-principal" id="exampleModalLabel">Política Privacidade</h5>
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>
                                                        <div class="modal-body cor-principal text-justify">                   
                                                            <p class="mx-4">A sua privacidade é importante para nós. É política do Black Code Brasil respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site <a href="www.blackcodebrasil.com.br">Black Code Brasil</a>, e outros sites que possuímos e operamos.</p>                    
                                                            <p class="mx-4">Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.</p>                    
                                                            <p class="mx-4">Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.</p>                    
                                                            <p class="mx-4">Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.</p>                    
                                                            <p class="mx-4">O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas <a href='https://politicaprivacidade.com' target='_BLANK'>políticas de privacidade</a>.</p>                    
                                                            <p class="mx-4">Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.</p>                    
                                                            <p class="mx-4">O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contacto connosco.</p>                    
                                                            <h2 class="mx-4">Política de Cookies Black Code Brasil</h2>                    
                                                            <h3 class="mx-4">O que são cookies?</h3>                    
                                                            <p class="mx-4">Como é prática comum em quase todos os sites profissionais, este site usa cookies, que são pequenos arquivos baixados no seu computador, para melhorar sua experiência. Esta página descreve quais informações eles coletam, como as usamos e por que às vezes precisamos armazenar esses cookies. Também compartilharemos como você pode impedir que esses cookies sejam armazenados, no entanto, isso pode fazer o downgrade ou 'quebrar' certos elementos da funcionalidade do site.</p>                    
                                                            <h3 class="mx-4">Como usamos os cookies?</h3>                    
                                                            <p class="mx-4">Utilizamos cookies por vários motivos, detalhados abaixo. Infelizmente, na maioria dos casos, não existem opções padrão do setor para desativar os cookies sem desativar completamente a funcionalidade e os recursos que eles adicionam a este site. É recomendável que você deixe todos os cookies se não tiver certeza se precisa ou não deles, caso sejam usados ​​para fornecer um serviço que você usa.</p>                    
                                                            <h3 class="mx-4">Desativar cookies</h3>                    
                                                            <p class="mx-4">Você pode impedir a configuração de cookies ajustando as configurações do seu navegador (consulte a Ajuda do navegador para saber como fazer isso). Esteja ciente de que a desativação de cookies afetará a funcionalidade deste e de muitos outros sites que você visita. A desativação de cookies geralmente resultará na desativação de determinadas funcionalidades e recursos deste site. Portanto, é recomendável que você não desative os cookies.</p>                    
                                                            <h3 class="mx-4">Cookies que definimos</h3>                    
                                                            <ul>                        
                                                                <li class="mx-5">
                                                                    Cookies relacionados à conta
                                                                    <br/>
                                                                    <br/> 
                                                                    Se você criar uma conta connosco, usaremos cookies para o gerenciamento do processo de inscrição e administração geral. Esses cookies geralmente serão excluídos quando você sair do sistema, porém, em alguns casos, eles poderão permanecer posteriormente para lembrar as preferências do seu site ao sair.
                                                                    <br/>
                                                                    <br/>                        
                                                                </li>                        
                                                                <li class="mx-5">                            
                                                                    Cookies relacionados ao login
                                                                    <br/>
                                                                    <br/> 
                                                                    Utilizamos cookies quando você está logado, para que possamos lembrar dessa ação. Isso evita que você precise fazer login sempre que visitar uma nova página. Esses cookies são normalmente removidos ou limpos quando você efetua logout para garantir que você possa acessar apenas a recursos e áreas restritas ao efetuar login.
                                                                    <br/>
                                                                    <br/>                        
                                                                </li>                        
                                                                <li class="mx-5">                            
                                                                    Cookies relacionados a boletins por e-mail
                                                                    <br/>
                                                                    <br/> 
                                                                    Este site oferece serviços de assinatura de boletim informativo ou e-mail e os cookies podem ser usados ​​para lembrar se você já está registrado e se deve mostrar determinadas notificações válidas apenas para usuários inscritos / não inscritos.
                                                                    <br/>
                                                                    <br/>                        
                                                                </li>                        
                                                                <li class="mx-5">                            
                                                                    Pedidos processando cookies relacionados
                                                                    <br/>
                                                                    <br/> 
                                                                    Este site oferece facilidades de comércio eletrônico ou pagamento e alguns cookies são essenciais para garantir que seu pedido seja lembrado entre as páginas, para que possamos processá-lo adequadamente.
                                                                    <br/>
                                                                    <br/>                        
                                                                </li>                        
                                                                <li class="mx-5">                            
                                                                    Cookies relacionados a pesquisas
                                                                    <br/>
                                                                    <br/> 
                                                                    Periodicamente, oferecemos pesquisas e questionários para fornecer informações interessantes, ferramentas úteis ou para entender nossa base de usuários com mais precisão. Essas pesquisas podem usar cookies para lembrar quem já participou numa pesquisa ou para fornecer resultados precisos após a alteração das páginas.
                                                                    <br/>
                                                                    <br/>                        
                                                                </li>                        
                                                                <li class="mx-5">                            
                                                                    Cookies relacionados a formulários
                                                                    <br/>
                                                                    <br/> 
                                                                    Quando você envia dados por meio de um formulário como os encontrados nas páginas de contacto ou nos formulários de comentários, os cookies podem ser configurados para lembrar os detalhes do usuário para correspondência futura.
                                                                    <br/>
                                                                    <br/>                        
                                                                </li>                        
                                                                <li class="mx-5">                            
                                                                    Cookies de preferências do site
                                                                    <br/>
                                                                    <br/> 
                                                                    Para proporcionar uma ótima experiência neste site, fornecemos a funcionalidade para definir suas preferências de como esse site é executado quando você o usa. Para lembrar suas preferências, precisamos definir cookies para que essas informações possam ser chamadas sempre que você interagir com uma página for afetada por suas preferências.
                                                                    <br/>                        
                                                                </li>                    
                                                            </ul>                    
                                                            <h3 class="mx-4">Cookies de Terceiros</h3>                    
                                                            <p class="mx-4">Em alguns casos especiais, também usamos cookies fornecidos por terceiros confiáveis. A seção a seguir detalha quais cookies de terceiros você pode encontrar através deste site.</p>                   
                                                            <ul>                        
                                                                <li class="mx-5">                            
                                                                    Este site usa o Google Analytics, que é uma das soluções de análise mais difundidas e confiáveis ​​da Web, para nos ajudar a entender como você usa o site e como podemos melhorar sua experiência. Esses cookies podem rastrear itens como quanto tempo você gasta no site e as páginas visitadas, para que possamos continuar produzindo conteúdo atraente.                        
                                                                </li>                    
                                                            </ul>                    
                                                            <p class="mx-4">Para mais informações sobre cookies do Google Analytics, consulte a página oficial do Google Analytics.</p>                    
                                                            <ul>                        
                                                                <li class="mx-5">                            
                                                                    As análises de terceiros são usadas para rastrear e medir o uso deste site, para que possamos continuar produzindo conteúdo atrativo. Esses cookies podem rastrear itens como o tempo que você passa no site ou as páginas visitadas, o que nos ajuda a entender como podemos melhorar o site para você.
                                                                </li>                        
                                                                <li class="mx-5">                            
                                                                    Periodicamente, testamos novos recursos e fazemos alterações subtis na maneira como o site se apresenta. Quando ainda estamos testando novos recursos, esses cookies podem ser usados ​​para garantir que você receba uma experiência consistente enquanto estiver no site, enquanto entendemos quais otimizações os nossos usuários mais apreciam.
                                                                </li>                        
                                                                <li class="mx-5">
                                                                    À medida que vendemos produtos, é importante entendermos as estatísticas sobre quantos visitantes de nosso site realmente compram e, portanto, esse é o tipo de dados que esses cookies rastrearão. Isso é importante para você, pois significa que podemos fazer previsões de negócios com precisão que nos permitem analizar nossos custos de publicidade e produtos para garantir o melhor preço possível.
                                                                </li>                                            
                                                            </ul>                    
                                                            <h3 class="mx-4">Compromisso do Usuário</h3>                                
                                                            <p class="mx-4">O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o Black Code Brasil oferece no site e com caráter enunciativo, mas não limitativo:</p>                                        
                                                            <ul>                        
                                                                <li class="mx-5">
                                                                    A) Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;
                                                                </li>                        
                                                                <li class="mx-5">
                                                                    B) Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, <a class="decoracao-topico-termo" href='https://jogoshoje.io'>jogos de hoje</a> ou azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;
                                                                </li>                        
                                                                <li class="mx-5">
                                                                    C) Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do Black Code Brasil, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados.
                                                                </li>                    
                                                            </ul>                                        
                                                            <h3 class="mx-4">Mais informações</h3>                    
                                                            <p class="mx-4">Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.</p>                    
                                                            <p class="mx-4">Esta política é efetiva a partir de <strong>January</strong>/<strong>2022</strong>.</p>
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-danger" data-dismiss="modal">Sair</button>                                                    
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="valid-feedback">Li e aceito os Termos, Política de Dados e Política de Cookies.</div>
                                            <div class="invalid-feedback">Por favor, aceito os Termos, Política de Dados e Política de Cookies.</div>
                                        </label>
                                    </div>   

                                    <div class="form-group form-check texto-autorizo">
                                        <label class="form-check-label">
                                            <input class="form-check-input" type="checkbox" name="remember" required/> Autorizo Envio
                                            <div class="valid-feedback">Válido</div>
                                            <div class="invalid-feedback">Por favor, autorize o envio</div>
                                        </label>
                                    </div>

                                    <div class="row">
                                        <div class="col-12 d-flex justify-content-center mb-5">
                                            <input type="submit" value="ENVIAR" class="btn btn-light btn-lg texto-botao texto-secundario" id="botao-enviar"/>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Formulario;