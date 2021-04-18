import { GlobalProvider } from "./Global";
import { ListaMercadosProvider } from "./ListaMercados";
import { ListaProdutosProvider } from "./ListaProdutos";
import { CarrinhoProvider } from "./Carrinho";
import { UsuarioProvider } from "./Usuario";
import { TokenProvider } from "./Token";
import { PedidosProvider } from "./Pedidos";
import { NotificationsProvider } from "./Notifications";
import { PedidosRecebidosProvider } from "./PedidosRecebidos";

const Providers = ({ children }) => {
  return (
    <>
      <GlobalProvider>
        <TokenProvider>
          <UsuarioProvider>
            <NotificationsProvider>
              <CarrinhoProvider>
                <ListaMercadosProvider>
                  <ListaProdutosProvider>
                    <PedidosRecebidosProvider>
                      <PedidosProvider>{children}</PedidosProvider>
                    </PedidosRecebidosProvider>
                  </ListaProdutosProvider>
                </ListaMercadosProvider>
              </CarrinhoProvider>
            </NotificationsProvider>
          </UsuarioProvider>
        </TokenProvider>
      </GlobalProvider>
    </>
  );
};

export default Providers;
