import { GlobalProvider } from "./Global";
import { ListaMercadosProvider } from "./ListaMercados";
import { ListaProdutosProvider } from "./ListaProdutos";
import { CarrinhoProvider } from "./Carrinho";
import { UsuárioProvider } from "./Usuário";
import { TokenProvider } from "./Token";

const Providers = ({ children }) => {
  return (
    <>
      <GlobalProvider>
        <TokenProvider>
          <UsuárioProvider>
            <CarrinhoProvider>
              <ListaMercadosProvider>
                <ListaProdutosProvider>{children}</ListaProdutosProvider>
              </ListaMercadosProvider>
            </CarrinhoProvider>
          </UsuárioProvider>
        </TokenProvider>
      </GlobalProvider>
    </>
  );
};

export default Providers;
