import styles from './Home.module.scss';

export default function Home() {
    return (
        <main>
            <section className="principal">
                <h2 className="titulo-principal">Sobre a Barbearia Alura</h2>

                <p>Localizada no coração da cidade a <strong className="nome-barbearia">Barbearia Alura</strong> traz para o mercado o que há de melhor para o seu cabelo e barba.
                    Fundada em 2019, a Barbearia Alura já é destaque na cidade e conquista novos clientes a cada dia.</p>

                <p><em>Nossa missão é: <strong>"Proporcionar auto-estima e qualidade de vida aos clientes"</strong>.</em></p>

                <p>Oferecemos profissionais experientes e antenados às mudanças no mundo da moda. O atendimento possui padrão de excelência e agilidade,
                    garantindo qualidade e satisfação dos nossos clientes.</p>
            </section>

            <section className="mapa">
                <h3 className="titulo-principal">Nosso estabelecimento</h3>
                <p>Nosso estabelecimento está localizado no coração da cidade</p>

                <div className="mapa-conteudo">
                    
                </div>
            </section>

            <section className="beneficios">
                <h3 className="titulo-principal">Beneficios</h3>
                <div className="conteudo-beneficios">
                    <ul className="lista-beneficios">
                        <li className="itens">Atendimento aos Clientes</li>
                        <li className="itens">Espaço diferenciado</li>
                        <li className="itens">Localização</li>
                        <li className="itens">Profissionais Qualificados</li>
                        <li className="itens">Pontualidade</li>
                        <li className="itens">Limpeza</li>
                    </ul>
                </div>


            </section>
        </main>
    )
}