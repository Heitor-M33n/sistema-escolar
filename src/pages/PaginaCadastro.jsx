import FormularioAluno from "../components/FormularioAluno";

function PaginaCadastro(props) {
  return (
    <div className="pagina-cadastro">
      <h2>{props.tipo}</h2>
      <FormularioAluno aoSalvar={props.aoSalvar} />
    </div>
  );
}

export default PaginaCadastro;
