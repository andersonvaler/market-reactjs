import { GlobalProvider } from "./Global";
import { ListaMercadosProvider } from "./ListaMercados";
import { ListaProdutosProvider } from "./ListaProdutos";
import { CarrinhoProvider } from "./Carrinho";
import { UsuarioProvider } from "./Usuario";
import { TokenProvider } from "./Token";
import { PedidosProvider } from "./Pedidos";
import { NotificationsProvider } from "./Notifications";

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
                    <PedidosProvider>{children}</PedidosProvider>
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
