import { GlobalProvider } from "./Global";
import { ListaMercadosProvider } from "./ListaMercados";
import { ListaProdutosProvider } from "./ListaProdutos";
import { CarrinhoProvider } from "./Carrinho";
import { UsuarioProvider } from "./Usuario";
import { TokenProvider } from "./Token";
import { PedidosProvider } from "./Pedidos";

const Providers = ({ children }) => {
  return (
    <>
      <TokenProvider>
        <UsuarioProvider>
          <CarrinhoProvider>
            <ListaMercadosProvider>
              <ListaProdutosProvider>
                <PedidosProvider>
                  <GlobalProvider>{children}</GlobalProvider>
                </PedidosProvider>
              </ListaProdutosProvider>
            </ListaMercadosProvider>
          </CarrinhoProvider>
        </UsuarioProvider>
      </TokenProvider>
    </>
  );
};

export default Providers;
