import { GlobalProvider } from "./Global";
import { ListaMercadosProvider } from "./ListaMercados";
import { ListaProdutosProvider } from "./ListaProdutos";
import { CarrinhoProvider } from "./Carrinho";
import { UsuarioProvider } from "./Usuario";
import { TokenProvider } from "./Token";
import { ValorSelecionadoProvider } from "./ValorSelecionado";

const Providers = ({ children }) => {
  return (
    <>
      <TokenProvider>
        <UsuarioProvider>
          <CarrinhoProvider>
            <ListaMercadosProvider>
              <ListaProdutosProvider>
                <ValorSelecionadoProvider>
                  <GlobalProvider>{children}</GlobalProvider>
                </ValorSelecionadoProvider>
              </ListaProdutosProvider>
            </ListaMercadosProvider>
          </CarrinhoProvider>
        </UsuarioProvider>
      </TokenProvider>
    </>
  );
};

export default Providers;
