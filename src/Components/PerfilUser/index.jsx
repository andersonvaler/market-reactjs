import { PerfilContainer, EditIcon, Button } from "./style";
// import Pagamento from "../Pagamento";
import { useParams } from "react-router-dom";
import { useUsuario } from "../../Providers/Usuario";
import { useState } from "react";
import ModalCard from "../ModalCard";
import { ModalEdit } from "./modalEdit";
import { PersonAvatar, Store } from "../Header/style";

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
            <PersonAvatar profilePage>
              {usuario?.name[0].toUpperCase()}
            </PersonAvatar>
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
            <PersonAvatar profilePage>
              <Store profilePage />
            </PersonAvatar>
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
          <Button>sair</Button>
        </>
      )}
    </PerfilContainer>
  );
};

export default PerfilUser;
