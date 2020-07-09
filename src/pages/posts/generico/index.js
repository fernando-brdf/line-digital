import React from 'react';
import NavBarComponent from '../../../component/navbar';
import RodapeComponent from '../../../component/rodape';
import './style.css'

export default function Generico() {


    return (
        <div className="posts">

            <NavBarComponent />

            <div className="conteudo">


                <section className="conteudo-topo">
                    <h1 className="titulo">Mas afinal, o que é marketing digital e como anda o mercado?</h1>
                    <img src="https://picsum.photos/800/400?blur" className="img-fluid rounded" alt="fundo" />
                    <div className="fundo"></div>
                </section>

                <p>- Com licença, Rodolfo, tenho uma pergunta.<br />
                 - Claro, Mia! Qual seria?<br />
                 - Afinal, o que é Marketing Digital e como funciona?<br /><br />
                </p>
                <p> Vamos por partes então! Primeiro, vou me apresentar ao leitor: muito prazer! Me chamo Rodolfo e fiz este texto para ajudar você (e a Mia) a entender mais sobre Marketing Digital! (Ah, e Mia é o nome do cão da imagem de capa)</p>
                <p>Até o final do texto eu irei contar: o que é Marketing Digital, como funciona e como começar a usá-lo. Borá lá?</p>
                <p>Você provavelmente já deve ter ouvido falar sobre o assunto, mas você sabe efetivamente o que é e como funciona o Marketing Digital? Vamos por partes!</p>


                <h3>Como funciona o Marketing Digital?</h3>

                <p>No começo da internet, os sistemas eram ultrapassados e as páginas muito simples. Não existiam canais de interação entre empresa e cliente. A comunicação se dava de forma unilateral, como nos métodos tradicionais de Marketing.</p>
                <p>A internet foi evoluindo e, por volta dos anos 2000, o Marketing Digital passou a ser construído. O crescimento no número de usuários fez com que empresas investissem cada vez mais nesse setor, trazendo grande evolução técnica e tecnológica.</p>
                <p>Conheça as ferramentas de <strong>marketing digital</strong> indispensáveis na sua estratégia!</p>
                <p>Nós acompanhamos todo esse movimento e, assim como o Marketing Digital, estamos em constante evolução, nos adaptando cada vez mais às necessidades das marcas e dos perfis dos públicos.</p>
                <p>Embora ele esteja sempre sendo reinventado, tem uma coisa que não muda: o conteúdo de alta qualidade e extremamente personalizado é a base de todo Marketing Digital de sucesso. Sei que pode parecer mais do mesmo, mas é fundamental falar a coisa certa no momento certo e para o público certo.</p>


                <h3>Como funciona o Marketing Digital?</h3>
                <p>A internet é muito mais dinâmica: basta tomar como exemplo as redes sociais. A empresa cria uma ação específica — ou se posiciona de determinada forma diante de algum acontecimento — e tem o feedback dos consumidores em tempo real. E isso pode ser usado como termômetro para medir como será a aceitação de determinado conteúdo.</p>
                <p>Falando em medir, fazer a mensuração dos resultados das estratégias adotadas em âmbito digital também é muito mais fácil e preciso. É possível, inclusive, ajustar determinadas ações durante sua execução. É simples: se você percebeu que os resultados não estão atendendo sua expectativa, basta adotar novos rumos.</p>
                <p>Por exemplo, graças ao Marketing Digital foi possível fazer um levantamento preciso sobre os resultados das ações realizadas no Projeto de Inbound Marketing da Mapa do Imóvel! Confira o aumento de contatos gerados após o início dos trabalhos:</p>

            </div>
            <RodapeComponent />
        </div>
    );
}