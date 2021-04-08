import { GlobalProvider } from "./Global";
import { ListaMercadosProvider } from "./ListaMercados";
import { ListaProdutosProvider } from "./ListaProdutos";
import { CarrinhoProvider } from "./Carrinho";
import { UsuarioProvider } from "./Usuario";
import { TokenProvider } from "./Token";

const Providers = ({ children }) => {
  return (
    <>
      <TokenProvider>
        <UsuarioProvider>
          <CarrinhoProvider>
            <ListaMercadosProvider>
              <ListaProdutosProvider>
                <GlobalProvider>{children}</GlobalProvider>
              </ListaProdutosProvider>
            </ListaMercadosProvider>
          </CarrinhoProvider>
        </UsuarioProvider>
      </TokenProvider>
    </>
  );
};

export default Providers;
