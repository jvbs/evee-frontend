import * as Yup from "yup";

const createCollaboratorValidationSchema = Yup.object().shape({
  nome: Yup.string().required('O campo "Nome" é obrigatório.'),
  cpf: Yup.string().required('O campo "CPF" é obrigatório').length(11),
  email: Yup.string()
    .email("Digite um e-mail válido")
    .required('O campo "E-mail" é obrigatório.'),
  celular: Yup.string().required('O campo "Celular" é obrigatório').length(14),
  departamento_id: Yup.number()
    .moreThan(0, 'O campo "Departamento" é obrigatório.')
    .required('O campo "Departamento" é obrigatório.'),
  cargo_id: Yup.number()
    .moreThan(0, 'O campo "Cargo" é obrigatório.')
    .required('O campo "Cargo" é obrigatório.'),
  tipo_usuario: Yup.string().required(
    'O campo "Tipo de Usuário" é obrigatório.'
  ),
  senha: Yup.string().required('O campo "Senha" é obrigatório.'),
  confirmar_senha: Yup.string().oneOf(
    [Yup.ref("senha"), null],
    "As senhas devem coincidir"
  ),
  status: Yup.string().required('O campo "Status" é obrigatório.'),
});

const adminValidationSchema = Yup.object().shape({
  nome: Yup.string().required('O campo "Nome" é obrigatório.'),
  email: Yup.string()
    .email("Digite um e-mail válido")
    .required('O campo "E-mail" é obrigatório.'),
  celular: Yup.string().required('O campo "Celular" é obrigatório'),
});

const collaboratorValidationSchema = Yup.object().shape({
  nome: Yup.string().required('O campo "Nome" é obrigatório.'),
  cpf: Yup.string().required('O campo "CPF" é obrigatório').length(11),
  email: Yup.string()
    .email("Digite um e-mail válido")
    .required('O campo "E-mail" é obrigatório.'),
  celular: Yup.string().required('O campo "Celular" é obrigatório').length(14),
  departamento_id: Yup.number()
    .moreThan(0, 'O campo "Departamento" é obrigatório.')
    .required('O campo "Departamento" é obrigatório.'),
  cargo_id: Yup.number()
    .moreThan(0, 'O campo "Cargo" é obrigatório.')
    .required('O campo "Cargo" é obrigatório.'),
  tipo_usuario: Yup.string().required(
    'O campo "Tipo de Usuário" é obrigatório.'
  ),
  status: Yup.string().required('O campo "Status" é obrigatório.'),
});

const passwordsValidationSchema = Yup.object().shape({
  senha: Yup.string().required('O campo "Senha" é obrigatório.'),
  confirmar_senha: Yup.string().oneOf(
    [Yup.ref("senha"), null],
    "As senhas devem coincidir"
  ),
});

export {
  adminValidationSchema,
  createCollaboratorValidationSchema,
  collaboratorValidationSchema,
  passwordsValidationSchema,
};
