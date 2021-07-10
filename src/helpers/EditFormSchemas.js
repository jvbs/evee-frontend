import * as Yup from "yup";

const adminValidationSchema = Yup.object().shape({
  nome: Yup.string().required('O campo "Nome" é obrigatório.'),
  email: Yup.string()
    .email("Digite um e-mail válido")
    .required('O campo "E-mail" é obrigatório.'),
  celular: Yup.string().required('O campo "Celular" é obrigatório').length(14),

  senha: Yup.string().required('O campo "Senha" é obrigatório.'),
  confirmar_senha: Yup.string().oneOf(
    [Yup.ref("senha"), null],
    "As senhas devem coincidir"
  ),
});

export { adminValidationSchema };
