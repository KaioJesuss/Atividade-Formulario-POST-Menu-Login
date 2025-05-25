import express from "express";

const host = "0.0.0.0";
const port = 3000;
var listafornecedores = [];

const app = express();

app.use(express.urlencoded({extended: true}));

app.get("/", (requisicao, resposta) => {
    resposta.send(`

        <html lang="pt-br">
                    <head>
                        <meta charset="UTF-8">
                        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT" crossorigin="anonymous">
                        <title>Página Inicial</title>
                    </head>
                        <body>
                            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                                <div class="container-fluid">
                                    <a class="navbar-brand" href="#">MENU</a>
                                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                            <span class="navbar-toggler-icon"></span>
                                        </button>
                                    <div class="collapse navbar-collapse" id="navbarNav">
                                        <ul class="navbar-nav">
                                            <li class="nav-item dropdown">
                                                <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Opções
                                                </a>
                                                <ul class="dropdown-menu">
                                                    <li><a class="dropdown-item" href="/cadastrofornecedor">Cadastro de Fornecedor</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </body>
                        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js" integrity="sha384-j1CDi7MgGQ12Z7Qab0qlWQ/Qqz24Gc6BM0thvEMVjHnfYGF0rmFCozFSxQBxwHKO" crossorigin="anonymous"></script>
                </html>
                `)
            resposta.end();
});


app.get("/cadastrofornecedor", (requisicao, resposta) =>{

    resposta.send(` 
                <html lang="pt-br">
                    <head>
                        <meta charset="UTF-8">
                        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT" crossorigin="anonymous">
                        <title>Página Inicial</title>
                    </head>
                        <body>
                            <div class="container w-85 mb-10" >
                                    <div class="Legenda w-20 mb-5 mt-5">
                                        <h2>Cadastro de Fornecedor</h2>
                                    </div>
                                    <form method="POST" action="/cadastrofornecedor" class="row g-3 border p-2">
                                        <div class="form-row row">
                                            <div class="form-group col-md-8">
                                                <label for="inputrazaosocial">Razão Social</label>
                                                <input type="text" class="form-control" id="razaosocial" name="razaosocial" placeholder="Razão Social">
                                            </div>
                                            <div class="form-group col-md-4">
                                                <label for="inputcnpj">CNPJ</label>
                                                <input type="text" class="form-control" id="cnpj" name="cnpj"placeholder="00.000.000/0000-00">
                                            </div>
                                        </div>
                                        
                                        <div class="form-row row">
                                            <div class="form-group col-md-8">
                                                <label for="inputfantasia">Nome Fantasia</label>
                                                <input type="text" class="form-control" id="Nfantasia" name="fantasia" placeholder="Nome Fantasia">
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label for="inputRua">Endereço - Rua</label>
                                            <input type="text" class="form-control" id="inputRua" name="rua" placeholder="Rua, nº">
                                        </div>

                                        <div class="form-row row">
                                            <div class="form-group col-md-6">
                                                <label for="inputCidade">Cidade</label>
                                                <input type="text" class="form-control" id="inputCidade" name="cidade" placeholder="Cidade">
                                            </div>
                                            <div class="form-group col-md-4">
                                                <label for="inputEstado">Estado</label>
                                                <select id="inputEstado" name="estado" class="form-control">
                                                    <option selected>Escolher...</option>
                                                    <option>AC</option><option>AL</option><option>AP</option><option>AM</option>
                                                    <option>BA</option><option>CE</option><option>DF</option><option>ES</option>
                                                    <option>GO</option><option>MA</option><option>MT</option><option>MS</option>
                                                    <option>MG</option><option>PA</option><option>PB</option><option>PR</option>
                                                    <option>PE</option><option>PI</option><option>RJ</option><option>RN</option>
                                                    <option>RS</option><option>RO</option><option>RR</option><option>SC</option>
                                                    <option>SP</option><option>SE</option><option>TO</option>
                                                </select>
                                            </div>
                                            <div class="form-group col-md-2">
                                                <label for="inputCEP">CEP</label>
                                                <input type="text" class="form-control" id="inputCEP" name="cep" placeholder="00000-000">
                                            </div>
                                        </div>

                                        <div class="form-group col-md-5">
                                            <label for="inputEmail">Email</label>
                                            <input type="email" class="form-control" id="inputEmail" name="email" placeholder="exemplo@dominio.com">
                                        </div>

                                        <div class="form-group col-md-3">
                                            <label for="inputTelefone">Telefone</label>
                                            <input type="tel" class="form-control" id="inputTelefone" name="telefone" placeholder="(00) 00000-0000">
                                        </div>

                                        <button class="btn btn-primary" type="submit">Cadastrar</button>
                                        <a class="btn btn-secondary" href="/">Voltar</a>
                                    </form>
                            </div>
                        </body>
                        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js" integrity="sha384-j1CDi7MgGQ12Z7Qab0qlWQ/Qqz24Gc6BM0thvEMVjHnfYGF0rmFCozFSxQBxwHKO" crossorigin="anonymous"></script>
                </html>
        `);
        resposta.end();
});

app.post("/cadastrofornecedor", (requisicao, resposta) => {

    const razaosocial = requisicao.body.razaosocial
    const cnpj = requisicao.body.cnpj
    const fantasia = requisicao.body.fantasia
    const rua = requisicao.body.rua;
    const cidade = requisicao.body.cidade
    const estado = requisicao.body.estado
    const cep = requisicao.body.cep
    const email = requisicao.body.email
    const telefone = requisicao.body.telefone

        if(razaosocial && cnpj && fantasia && rua && cidade && estado && cep && email && telefone)
    {    
        listafornecedores.push({
            razaosocial,
            cnpj,
            fantasia,
            rua,
            cidade,
            estado,
            cep,
            email,
            telefone,
        });
        resposta.redirect("/listafornecedores");
    }
    else
    {
    
        let conteudo = `
                <html lang="pt-br">
                    <head>
                        <meta charset="UTF-8">
                        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT" crossorigin="anonymous">
                        <title>Página Inicial</title>
                    </head>
                        <body>
                            <div class="container w-95 mb-10" >
                                    <div class="Legenda w-20 mb-5 mt-5">
                                        <h2>Cadastro de Fornecedor</h2>
                                    </div>
                                    <form method="POST" action="/cadastrofornecedor" class="row g-3 border p-2">
                                        <div class="form-row row">
                                            <div class="form-group col-md-8"> `;
                   
                                                if (!razaosocial) {
                                                conteudo = conteudo + `
                                                    <label for="razaoSocial">Razão Social</label>
                                                    <input type="text"  class="form-control is-invalid" id="razaoSocial" name="razaoSocial" value="${razaosocial || ''}" placeholder="Razão Social">
                                                    <span class="text-danger">Insira a Razão Social</span>
                                                `;
                                                } else {
                                                conteudo = conteudo + `
                                                    <label for="razaoSocial">Razão Social</label>
                                                    <input type="text" class="form-control" id="razaoSocial" name="razaoSocial" value="${razaosocial}" placeholder="Razão Social">
                                                `;
                                                }
                                        conteudo = conteudo + `</div>

                                            <div class="form-group col-md-4"> `;
                                                if (!cnpj) {
                                                conteudo = conteudo + `
                                                    <label for="cnpj">CNPJ</label>
                                                    <input type="text"  class="form-control is-invalid" id="cnpj" name="cnpj" value="${cnpj || ''}" placeholder="CNPJ">
                                                    <span class="text-danger">Insira o CNPJ</span>
                                                `;
                                                } else {
                                                conteudo = conteudo + `
                                                    <label for="cnpj">CNPJ</label>
                                                    <input type="text" class="form-control" id="cnpj" name="cnpj" value="${cnpj}" placeholder="CNPJ">
                                                `;
                                                }
                                        conteudo = conteudo + `</div>

                                        
                                        <div class="form-row row">
                                            <div class="form-group col-md-8">`;
                                                if (!fantasia) {
                                                conteudo = conteudo + `
                                                    <label for="nomeFantasia">Nome Fantasia</label>
                                                    <input type="text"  class="form-control is-invalid" id="nomeFantasia" name="nomeFantasia" value="${fantasia || ''}" placeholder="Nome Fantasia">
                                                    <span class="text-danger">Insira o nome fantasia</span>
                                                `;
                                                } else {
                                                conteudo = conteudo + `
                                                    <label for="nomeFantasia">Nome Fantasia</label>
                                                    <input type="text" class="form-control" id="nomeFantasia" name="fantasia" value="${fantasia}" placeholder="Nome Fantasia">
                                                `;
                                                }
                                                
                                            conteudo = conteudo + `</div>

                                            </div>

                                            <div class="form-group col-md-4">`;
                                                if (!rua) {
                                                    conteudo = conteudo + `
                                                        <label for="inputRua">Endereço - Rua</label>
                                                        <input type="text" class="form-control is-invalid" id="inputRua" name="rua" value="" placeholder="Rua, nº">
                                                        <span class="text-danger">Insira o endereço</span>
                                                    `;
                                                } else {
                                                    conteudo = conteudo + `
                                                        <label for="inputRua">Endereço - Rua</label>
                                                        <input type="text" class="form-control" id="inputRua" name="rua" value="${rua}" placeholder="Rua, nº">
                                                    `;
                                                }
                                            conteudo = conteudo + `</div>

                                        <div class="form-row row">
                                            <div class="form-group col-md-6">`;
                                            if (!cidade) {
                                                    conteudo = conteudo + `
                                                            <label for="inputCidade">Cidade</label>
                                                            <input type="text" class="form-control is-invalid" id="inputCidade" name="cidade" value="" placeholder="Cidade">
                                                            <span class="text-danger">Insira a cidade</span> 
                                                    `;
                                                } else {
                                                    conteudo = conteudo + `
                                                            <label for="inputCidade">Cidade</label>
                                                            <input type="text" class="form-control" id="inputCidade" name="cidade" value="${cidade}" placeholder="Cidade">
                                                        
                                                    `;
                                                }
                                            conteudo = conteudo + `</div>
                                            <div class="form-group col-md-4">`;
                                                if (!estado) {
                                                    conteudo = conteudo + `
                                                            <label for="inputEstado">Estado</label>
                                                            <select id="inputEstado" name="estado" <select class="form-select is-invalid">>
                                                                <option selected value="">Escolher...</option>
                                                                <option value="AC">AC</option><option value="AL">AL</option><option value="AP">AP</option>
                                                                <option value="AM">AM</option><option value="BA">BA</option><option value="CE">CE</option>
                                                                <option value="DF">DF</option><option value="ES">ES</option><option value="GO">GO</option>
                                                                <option value="MA">MA</option><option value="MT">MT</option><option value="MS">MS</option>
                                                                <option value="MG">MG</option><option value="PA">PA</option><option value="PB">PB</option>
                                                                <option value="PR">PR</option><option value="PE">PE</option><option value="PI">PI</option>
                                                                <option value="RJ">RJ</option><option value="RN">RN</option><option value="RS">RS</option>
                                                                <option value="RO">RO</option><option value="RR">RR</option><option value="SC">SC</option>
                                                                <option value="SP">SP</option><option value="SE">SE</option><option value="TO">TO</option>
                                                            </select>
                                                            <div class="invalid-feedback">Escolha um estado</div>
                                                         </div>
                                                    `;
                                                } else {
                                                    conteudo = conteudo + `
                                                            <label for="inputEstado">Estado</label>
                                                            <select id="inputEstado" name="estado" class="form-control">
                                                                <option value="">Escolher...</option>
                                                                <option value="AC" ${estado === 'AC' ? 'selected' : ''}>AC</option>
                                                                <option value="AL" ${estado === 'AL' ? 'selected' : ''}>AL</option>
                                                                <option value="AP" ${estado === 'AP' ? 'selected' : ''}>AP</option>
                                                                <option value="AM" ${estado === 'AM' ? 'selected' : ''}>AM</option>
                                                                <option value="BA" ${estado === 'BA' ? 'selected' : ''}>BA</option>
                                                                <option value="CE" ${estado === 'CE' ? 'selected' : ''}>CE</option>
                                                                <option value="DF" ${estado === 'DF' ? 'selected' : ''}>DF</option>
                                                                <option value="ES" ${estado === 'ES' ? 'selected' : ''}>ES</option>
                                                                <option value="GO" ${estado === 'GO' ? 'selected' : ''}>GO</option>
                                                                <option value="MA" ${estado === 'MA' ? 'selected' : ''}>MA</option>
                                                                <option value="MT" ${estado === 'MT' ? 'selected' : ''}>MT</option>
                                                                <option value="MS" ${estado === 'MS' ? 'selected' : ''}>MS</option>
                                                                <option value="MG" ${estado === 'MG' ? 'selected' : ''}>MG</option>
                                                                <option value="PA" ${estado === 'PA' ? 'selected' : ''}>PA</option>
                                                                <option value="PB" ${estado === 'PB' ? 'selected' : ''}>PB</option>
                                                                <option value="PR" ${estado === 'PR' ? 'selected' : ''}>PR</option>
                                                                <option value="PE" ${estado === 'PE' ? 'selected' : ''}>PE</option>
                                                                <option value="PI" ${estado === 'PI' ? 'selected' : ''}>PI</option>
                                                                <option value="RJ" ${estado === 'RJ' ? 'selected' : ''}>RJ</option>
                                                                <option value="RN" ${estado === 'RN' ? 'selected' : ''}>RN</option>
                                                                <option value="RS" ${estado === 'RS' ? 'selected' : ''}>RS</option>
                                                                <option value="RO" ${estado === 'RO' ? 'selected' : ''}>RO</option>
                                                                <option value="RR" ${estado === 'RR' ? 'selected' : ''}>RR</option>
                                                                <option value="SC" ${estado === 'SC' ? 'selected' : ''}>SC</option>
                                                                <option value="SP" ${estado === 'SP' ? 'selected' : ''}>SP</option>
                                                                <option value="SE" ${estado === 'SE' ? 'selected' : ''}>SE</option>
                                                                <option value="TO" ${estado === 'TO' ? 'selected' : ''}>TO</option>
                                                            </select>
                                                        </div>
                                                    `;
                                                }
                                                conteudo = conteudo + `</div>
                                            
                                            <div class="form-group col-md-2">`;
                                            if (!cep) {
                                                conteudo = conteudo + `
                                                        <label for="inputCEP">CEP</label>
                                                        <input type="text" class="form-control is-invalid" id="inputCEP" name="cep" value="" placeholder="00000-000">
                                                        <span class="text-danger">Informe o CEP</span>
                                                `;
                                            } else {
                                                conteudo = conteudo + `
                                                        <label for="inputCEP">CEP</label>
                                                        <input type="text" class="form-control" id="inputCEP" name="cep" value="${cep}" placeholder="00000-000">
                                                `;
                                            }
                                            conteudo = conteudo + `</div>

                                        <div class="form-group">`;
                                            if (!email) {
                                            conteudo = conteudo + `
                                                <label for="email">Email</label>
                                                <input type="email"  class="form-control is-invalid" id="email" name="email" value="${email || ''}" placeholder="email@exemplo.com">
                                                <span class="text-danger">Insira um email válido</span>
                                            `;
                                            } else {
                                            conteudo = conteudo + `
                                                <label for="email">Email</label>
                                                <input type="email" class="form-control" id="email" name="email" value="${email}" placeholder="email@exemplo.com">
                                            `;
                                            }
                                        conteudo = conteudo + `</div>

                                        <div class="form-group">`;
                                            if (!telefone) {
                                            conteudo = conteudo + `
                                                <label for="telefone">Telefone</label>
                                                <input type="tel"  class="form-control is-invalid" id="telefone" name="telefone" value="${telefone || ''}" placeholder="(00) 00000-0000">
                                                <span class="text-danger">Insira o telefone</span>
                                            `;
                                            } else {
                                            conteudo = conteudo + `
                                                <label for="telefone">Telefone</label>
                                                <input type="tel" class="form-control" id="telefone" name="telefone" value="${telefone}" placeholder="(00) 00000-0000">
                                            `;
                                            }
                                        conteudo = conteudo + `</div>
                                        <button class="btn btn-primary" type="submit">Cadastrar</button>
                                        <a class="btn btn-secondary" href="/">Voltar</a>
                                    </form>
                            </div>
                        </body>
                        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js" integrity="sha384-j1CDi7MgGQ12Z7Qab0qlWQ/Qqz24Gc6BM0thvEMVjHnfYGF0rmFCozFSxQBxwHKO" crossorigin="anonymous"></script>
                </html>
        `;
        resposta.send(conteudo);
        resposta.end();
    }
});

app.get("/listafornecedores", (requisicao, resposta) => {
    let conteudo=`
            <html lang="pt-br">
                    <head>
                        <meta charset="UTF-8">
                        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT" crossorigin="anonymous">
                        <title>Página Inicial</title>
                    </head>
                        <body>
                            <div class="container w-95 mb-10" >
                                    <div class="Legenda2 w-20 mb-5 mt-5">
                                        <h2>Fornecedores Cadastrados</h2>
                                    </div>
                                <table class="table table-striped table-dark table-hover">
                                    <thead>

                                        <tr>
                                            <th scope="col">Razão Social</th>
                                            <th scope="col">CNPJ</th>
                                            <th scope="col">Nome Fantasia</th>
                                            <th scope="col">Rua</th>
                                            <th scope="col">Cidade</th>
                                            <th scope="col">UF</th>
                                            <th scope="col">CEP</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Telefone</th>
                                        </tr>
                                    </thead>
                                    <tbody>`;
                                        for(let i=0; i < listafornecedores.length; i++)
                                        {
                                            conteudo = conteudo + `
                                            </tr>
                                                <td>${listafornecedores[i].razaosocial}</td>
                                                <td>${listafornecedores[i].cnpj}</td>
                                                <td>${listafornecedores[i].fantasia}</td>
                                                <td>${listafornecedores[i].rua}</td>
                                                <td>${listafornecedores[i].cidade}</td>
                                                <td>${listafornecedores[i].estado}</td>
                                                <td>${listafornecedores[i].cep}</td>
                                                <td>${listafornecedores[i].email}</td>
                                                <td>${listafornecedores[i].telefone}</td>
                                            </tr>
                                            `;
                                        }
         conteudo=conteudo + `    </tbody>
                                </table>
                                <a class="btn btn-secondary" href="/cadastrofornecedor">Continuar Cadastrando</a>
                            </div>
                        </body>
                        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js" integrity="sha384-j1CDi7MgGQ12Z7Qab0qlWQ/Qqz24Gc6BM0thvEMVjHnfYGF0rmFCozFSxQBxwHKO" crossorigin="anonymous"></script>
            </html>`
    resposta.send(conteudo);
    resposta.end();
});

app.listen(port, host, () => {
    console.log(`Servidor em execução em http://${host}:${port}/`);
});
