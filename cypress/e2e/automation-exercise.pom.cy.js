import cadastro from '../pages/cadastro';
import login from '../pages/login';
import menu from '../pages/menu';
import contato from '../pages/contato';
import logout from '../pages/logout';
import produto from '../pages/produto';
import home from '../pages/home';
import carrinho from '../pages/carrinho';
import pagamento from '../pages/pagamento';

describe('Automation Exercise', () => {

    beforeEach(() => {
        cy.visit('/')
    });

    it('Test Case: 1: Cadastrar um usuario', () => {

        menu
            .verificarSeEstamosNaHome()
            .irParaLoginCadastro()
        login
            .vefificarSeCadastroDeUsuarioEstaVisivel()
        cadastro
            .preencherFormularioComNomeEEndereco()
            .verificaSeHaMensagemDeInformacoesDaConta()
            .preencherFormularioComDetalhes()
            .verificarSeCadastroFoiConcluido()
        menu
            .irParaExclusaoDaConta()
            .verificarSeAContaFoiExcluida()
            
    });

    it('Test Case  2: Login user with correct email and password', () => {
        
        menu
            .irParaLoginCadastro()
        cadastro
            .preencherFormularioComNomeEnderecoParaLogarESerExcluido()
            .preencherFormularioComDetalhes()
        logout
            .deslogar()

        menu
            .irParaLinkPrincipal()
            .verificarSeEstamosNaHome()
            .irParaLoginCadastro()     
        login
            .verificarSeFazerLoginNaContaEstaVisivel()
            .preencherLogin('qa10000@gmail.com', '12345')
            .verificarSeLoginFoiConcluido()
        menu
            .irParaExclusaoDaConta()
            .verificarSeAContaFoiExcluida()

    });

    it('Test Case  3: Login user with incorret email and password', () => {
           
        menu
            .verificarSeEstamosNaHome()
            .irParaLoginCadastro()
        login
            .verificarSeFazerLoginNaContaEstaVisivel()
            .preencherLogin('Testando@gmail.com', '4444')
            .verificarSeLoginPossuiDadoIncorreto()
    });

    it('Test Case  4:  Logout User', () => {

        menu
            .verificarSeEstamosNaHome()
            .irParaLoginCadastro()
        login
            .verificarSeFazerLoginNaContaEstaVisivel()
            .preencherLogin('tester3000@gmail.com', '12345')
            .verificarSeNomeDoUsuarioLogadoEstaCorreto()
        logout
            .deslogar()
            

    });

    it('Test Case  5: Register User with existing email', () => {

        menu
            .verificarSeEstamosNaHome()
            .irParaLoginCadastro()
        login
            .verificarSeCadastroDeNovoUsuarioEstaVisivel()
        cadastro
            .iniciarCadastro('tester3000@gmail.com')
        login.
            verificarSeEmailJaExiste()

    });

    it('Test Case  6: Contact Us Form', () => {

        menu
            .verificarSeEstamosNaHome()
            .irParaNosContate()
        contato
            .vericarSeEntrarEmContaEstaVisivel()
            .preencheContateNos()
            .verificaSeEnvioDeMensagemDeContatoFoiSucedido()
        menu
            .irParaHome()
            .verificarSeEstamosNaHome()

    });

    it('Test Case  8: Verify All Products and product detail page', () => {

        menu
            .verificarSeEstamosNaHome()
            .irParaProdutos()
        produto
            .verificaSeListaTodosProdutos()
            .verificaSeExisteAoMenosUmProduto()
            .verificaSeHaNomeDoProduto()
            .verificarSeHaCategoriaPrecoDisponivelCondicaoBrandDoProduto()
            .verificarSeHaPrecoDoProduto()

    });

    it('Test Case  9: Search Product', () => {

        menu
            .verificarSeEstamosNaHome()
            .irParaProdutos()

        produto
            .verificaSeListaTodosProdutos()
            .preencheNomeDoProdutoParaPesquisa()
            .verificaSeEncontrouProdutoDaPesquisa()
            .verificaSeHaAoMenosUmProdutoEncontradoNaPesquisa()
        
    });

    it('Test Case  10: Verify Subscription in home page', () => {

        menu
            .verificarSeEstamosNaHome()
        home
            .preencheEmailParaInscricaoDeAssinatura()
            .verificaSeOcorreuAssinaturaComSucesso()

    })

    it('Test Case 15: Place Order: Register before Checkout', () => {


        menu
            .verificarSeEstamosNaHome()
            .irParaLoginCadastro()
        cadastro
            .preencherFormularioComNomeEnderecoParaLogarESerExcluido()
            .preencherFormularioComDetalhes()
        home
            .adicionarItemAoCarrinho()
        carrinho
            .realizarCheckOut()
            .verificaSeHaDetalhesDoEnderecoERevisaoDoPedido()
            .adicionarComentarioNoPedido()
            .darInicioARealizacaoDoPedido()
        pagamento
            .preencherDadosParaPagamento()
            .verificarQueAOrdemDoPedidoFoiRealizadoComSucesso()
        menu
            .irParaExclusaoDaConta()
            .verificarSeAContaFoiExcluida()
            .retornarParaAHome()       

    }); 
})