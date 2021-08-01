class elements {

    //Home
    home_botao_entrar =             "[data-testid='btnEntrar']"
    home_botao_cadastrar =          "[data-testid='btnAgendarDemo']"

    //Login
    login_campo_email =             "[data-testid='fieldEmail']"
    login_campo_senha =             "[data-testid='fieldSenha']"
    login_botao_entrar =            "[data-testid='loginBtnEntrar']"

    //Cadastro Empresa
    cadastro_empresa_botao_solicitacao = "[data-testid='btnAgendarDemo']"
    cadastro_empresa_campo_empresa = "[data-testid=fieldEmpresa]"
    cadastro_empresa_campo_cnpj = "[data-testid=fieldCNPJ]"
    cadastro_empresa_campo_solicitante_nome = "[data-testid=fieldNomeSolicitante]"
    cadastro_empresa_campo_solicitante_email = "[data-testid=fieldEmailSolicitante]"
    cadastro_empresa_campo_solicitante_celular = "[data-testid=fieldCelularSolicitante]"
    cadastro_empresa_campo_solicitante_senha = "[data-testid=fieldSenhaSolicitante]"
    // cadastro_empresa_botao_finalizar = "[data-testid=fieldEmpresa]"
    
    //Cadastro Empresa
    cadastro_colaboradores_botao_menu = "[data-testid='btnMenuCadastroColaboradores']"
    cadastro_colaborador_campo_nome = "[data-testid=fieldNome]"
    cadastro_colaborador_campo_cpf = "[data-testid=fieldCPF]"
    cadastro_colaborador_campo_email = "[data-testid=fieldEmail]"
    cadastro_colaborador_campo_celular = "[data-testid=fieldCelular] > .MuiInputBase-root > .MuiInputBase-input"
    cadastro_colaborador_campo_departamento = "#mui-component-select-departamento_id"
    cadastro_colaborador_campo_cargo = "#mui-component-select-cargo_id"
    cadastro_colaborador_campo_usuario = "#mui-component-select-tipo_usuario"
    cadastro_colaborador_campo_senha = "[data-testid=fieldSenha]"
    cadastro_colaborador_campo_confirma_senha = "[data-testid=fieldConfirmarSenha]"

    //Colaboradores
    colabores_botao_menu = "[data-testid=btnMenuColaboradores] > li"

}
export default elements;