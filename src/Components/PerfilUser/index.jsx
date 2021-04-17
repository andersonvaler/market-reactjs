import { PerfilContainer, EditIcon, Button } from "./style";
import Pagamento from "../Pagamento";
import { useParams } from "react-router-dom";
import { useUsuario } from "../../Providers/Usuario";
import { useState } from "react";
import ModalCard from "../ModalCard";
import ModaEdit, { ModalEdit } from "./modalEdit";

const PerfilUser = () => {
  const params = useParams();
  const [open, setopen] = useState(false);
  const [propriedade, setpropriedade] = useState("name");
  const { usuario } = useUsuario();

  return (
    <PerfilContainer>
      <ModalCard open={open} setOpen={setopen}>
        <ModalEdit propriedade={propriedade} usuario={usuario} />
      </ModalCard>
      {params.userType === "user" ? (
        <>
          <div className="intro">
            <img
              className="imagePerfil"
              alt=""
              src="data:image/jpeg;base64,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"
            />
            <div className="name">
              {usuario && <h2>{usuario.name}</h2>}
              <h2>
                <EditIcon
                  onClick={() => {
                    setpropriedade("name");
                    setopen(true);
                  }}
                />
              </h2>
            </div>
          </div>

          <div className="topic">Endereço:</div>
          <div className="edit">
            {usuario && <h4>{usuario.adress}</h4>}
            <EditIcon
              onClick={() => {
                setopen(true);
                setpropriedade("adress");
              }}
            />
          </div>

          <div className="topic">Telefone:</div>
          <div className="edit">
            {usuario && <h4>{usuario.number}</h4>}
            <EditIcon
              onClick={() => {
                setopen(true);
                setpropriedade("number");
              }}
            />
          </div>

          <div className="topic">Email:</div>
          <div className="edit">
            {usuario && <h4>{usuario.email}</h4>}
            <EditIcon
              onClick={() => {
                setopen(true);
                setpropriedade("email");
              }}
            />
          </div>
          <Button>sair</Button>
        </>
      ) : (
        <>
          <div className="intro">
            <img
              className="imagePerfil"
              alt=""
              src="data:image/jpeg;base64,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"
            />
            <div className="name">
              {usuario && <h2>{usuario.name}</h2>}
              <h2>
                <EditIcon
                  onClick={() => {
                    setpropriedade("name");
                    setopen(true);
                  }}
                />
              </h2>
            </div>
          </div>

          <div className="topic">Endereço:</div>
          <div className="edit">
            {usuario && <h4>{usuario.adress}</h4>}
            <EditIcon
              onClick={() => {
                setpropriedade("adress");
                setopen(true);
              }}
            />
          </div>

          <div className="topic">Telefone:</div>
          <div className="edit">
            {usuario && <h4>{usuario.number}</h4>}
            <EditIcon
              onClick={() => {
                setpropriedade("number");
                setopen(true);
              }}
            />
          </div>

          <div className="topic">Email:</div>
          <div className="edit">
            {usuario && <h4>{usuario.email}</h4>}
            <EditIcon
              onClick={() => {
                setpropriedade("email");
                setopen(true);
              }}
            />
          </div>

          <div className="topic">CNPJ:</div>
          <div className="edit">
            {usuario && <h4>{usuario.cnpj}</h4>}
            <EditIcon
              onClick={() => {
                setpropriedade("cnpj");
                setopen(true);
              }}
            />
          </div>
          <Button>sair</Button>
        </>
      )}
    </PerfilContainer>
  );
};

export default PerfilUser;
