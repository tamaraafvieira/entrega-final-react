const ContainerContratar = ({children}) => {
    return (
        <div class="container-fluid">
            <div id="contratar">
                <div class="row d-flex justify-content-center contratar">
                    <div class="col-sm-9 col-md-8 col-lg-7 text-center my-5">
                        <h2 class="titulo-principal cor-terciaria">
                            <strong>// PORQUE CONTRATAR PESSOAS NEGRAS PARA SUA EMPRESA?</strong>
                        </h2>
                    </div>
                </div>
                <div class="container">
                    {
                        children
                    }   
                </div>
                <div class="row">
                    <div class="col-12 d-flex justify-content-center footer-contratar py-4">
                        <a class="btn btn-light titulo-principal my-5 px-5 py-3" asp-area="" asp-controller="Categories" asp-action="Categories">Quero contratar</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContainerContratar;