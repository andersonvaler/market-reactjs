import { GlobalProvider } from "./Global";
import { ListaMercadosProvider } from "./ListaMercados";
import { ListaProdutosProvider } from "./ListaProdutos";
import { CarrinhoProvider } from "./Carrinho";
import { UsuarioProvider } from "./Usuario";
import { TokenProvider } from "./Token";

const Providers = ({ children }) => {
  return (
    <>
      <GlobalProvider>
        <TokenProvider>
          <UsuarioProvider>
            <CarrinhoProvider>
              <ListaMercadosProvider>
                <ListaProdutosProvider>{children}</ListaProdutosProvider>
              </ListaMercadosProvider>
            </CarrinhoProvider>
          </UsuarioProvider>
        </TokenProvider>
      </GlobalProvider>
    </>
  );
};

export default Providers;
