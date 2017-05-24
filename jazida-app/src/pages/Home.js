import React, {Component} from 'react';

export default class Home extends Component {
  render () {
    return (
      <div>
        <section className="section">
          <div className="center">
            <div className="section__block--left">
              <h2>Democratizar <br /> o setor mineral</h2>

              <div className="section__block--text">
                <p>Esse é o nosso propósito.</p>
                <p>Acreditamos em uma gestão mais eficiente da exploração mineral a partir do amploacesso à informação.</p>
              </div>

              <form className="form">
                <h4>Explore o Jazida</h4>

                <div className="form__group">
                  <input type="text" name="code" className="form__style" value="" placeholder="Digite o número de um processo" />
                </div>
                <button type="submit" className="btn btn-white btn-flat">Consulte</button>
                <span>Exemplo: 864.000/1998</span>
              </form>

              <div className="section__block--result">
                <h3>Conteúdo do resultado. Fazer animação ao submter o formulário</h3>
              </div>
            </div>

            <div className="section__nav">
              <button type="button" className="btn btn-floating btn-floating-bottom btn-brown"><span>&dlcorn;</span></button>
            </div>
          </div>

          <div className="overlay"></div>

          <figure>
            <img src="img/fke/maps.png" alt="Mapa do Brasil" />
          </figure>
        </section>

        <section className="section">
          <div className="section__bg">
            <img src="img/bkg/section-brown.png" alt="" />
          </div>

          <div className="center">
            <div className="section__index">
              <h2>JAZIDA EM NÚMEROS</h2>

              <div className="section__data">
                <div>
                  <p><strong>1.200.300</strong> PROCESSOS CADaSTRADOS</p>
                </div>

                <div>
                  <p><strong>5.700.100</strong> CONSULTAS DE PROCESSOS</p>
                </div>

                <div>
                  <p><strong>650.000</strong> USUÁRIOS CADASTRADOS</p>
                </div>
              </div>

              <div className="section__nav">
                <button type="button" className="btn btn-floating btn-floating-top btn-green"><span>&dlcorn;</span></button>
                <button type="button" className="btn btn-floating btn-floating-bottom btn-green"><span>&dlcorn;</span></button>
              </div>
            </div>
          </div>

          <figure className="section__image">
            <img src="img/fke/jazida-dashboard.png" alt="Jazida Dashboard" />
          </figure>
        </section>

        <section className="section">
          <div className="section__bg">
            <img src="img/bkg/section-green.png" alt="" />
          </div>

          <div className="center">
            <div className="section__index">
              <div className="section__block--left">
                <h2>TRANSPARÊNCIA</h2>

                <div className="section__block--text">
                  <p>Eliminamos barreiras burocráticas e tornamos informações públicas acessíveis aos players do setor.</p>
                </div>
              </div>

              <div className="section__block--right">
                <div className="list">
                  <div className="list__item">
                    <div className="list__item--left">
                      <img src="img/ico/doc.png" alt="Leitura Automática do D.O.U" />
                    </div>

                    <div className="list__item--right">
                      <h5>LEITURA AUTOMÁTICA DO D.O.U.</h5>
                      <p>Todos os prazos, eventos e pendências do DNPM sempre atualizados no seu painel.</p>
                    </div>
                  </div>

                  <div className="list__item">
                    <div className="list__item--left">
                      <img src="img/ico/bell.png" alt="Alertas sobre prazos" />
                    </div>

                    <div className="list__item--right">
                      <h5>Alertas sobre prazos</h5>
                      <p>Notificações antecipadas para apresentação de RPP, RFP, pagar TAH, DIPEM e demais exigências do DNPM.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="section__nav">
                <button type="button" className="btn btn-floating btn-floating-top btn-brown"><span>&dlcorn;</span></button>
                <button type="button" className="btn btn-floating btn-floating-bottom btn-brown"><span>&dlcorn;</span></button>
              </div>
            </div>
          </div>

          <figure className="section__image">
            <img src="img/fke/jazida-transparent.png" alt="Jazida Transparência" />
          </figure>
        </section>

        <section className="section">
          <div className="section__bg">
            <img src="img/bkg/section-brown.png" alt="" />
          </div>

          <div className="center">
            <div className="section__index">
              <div className="section__block--left">
                <h2>RAPIDEZ</h2>

                <div className="section__block--text">
                  <p>Economizamos tempo e trabalho a partir de uma interface automática e intuitiva acessível via internet.</p>
                </div>
              </div>

              <div className="section__block--right">
                <div className="list">
                  <div className="list__item">
                    <div className="list__item--left">
                      <img src="img/ico/marker.png" alt="Georreferenciamento Facilitado" />
                    </div>

                    <div className="list__item--right">
                      <h5>Georreferenciamento Facilitado</h5>
                      <p>SIGMINE e Cadastro Mineiro integrados ao Google Maps™.</p>
                    </div>
                  </div>

                  <div className="list__item">
                    <div className="list__item--left">
                      <img src="img/ico/cloud.png" alt="Dados na nuvem e versão mobile" />
                    </div>

                    <div className="list__item--right">
                      <h5>Dados na nuvem e versão mobile</h5>
                      <p>Acesso a partir de computadores ou dispositivos conectados à internet.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="section__nav">
                <button type="button" className="btn btn-floating btn-floating-top btn-green"><span>&dlcorn;</span></button>
                <button type="button" className="btn btn-floating btn-floating-bottom btn-green"><span>&dlcorn;</span></button>
              </div>
            </div>
          </div>

          <figure className="section__image">
            <img src="img/fke/jazida-faster.png" alt="Jazida Rapidez" />
          </figure>
        </section>

        <section className="section">
          <div className="section__bg">
            <img src="img/bkg/section-green.png" alt="" />
          </div>

          <div className="center">
            <div className="section__index">
              <div className="section__block--left">
                <h2>INTEGRAÇÃO</h2>

                <div className="section__block--text">
                  <p>Unificamos gestão e análise de processos minerários em uma plataforma simples e segura.</p>
                </div>
              </div>

              <div className="section__block--right">
                <div className="list">
                  <div className="list__item">
                    <div className="list__item--left">
                      <img src="img/ico/gear.png" alt="Ferramentas multifunção" />
                    </div>

                    <div className="list__item--right">
                      <h5>Ferramentas multifunção</h5>
                      <p>Consulta, gestão, monitoramento e cruzamento de dados e documentos.</p>
                    </div>
                  </div>

                  <div className="list__item">
                    <div className="list__item--left">
                      <img src="img/ico/lock.png" alt="Informações protegidas" />
                    </div>

                    <div className="list__item--right">
                      <h5>Informações protegidas</h5>
                      <p>Ambiente seguro (HTTPS) e exclusivo protegido por email e senha.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="section__nav">
                <button type="button" className="btn btn-floating btn-floating-top btn-brown"><span>&dlcorn;</span></button>
                <button type="button" className="btn btn-floating btn-floating-bottom btn-brown"><span>&dlcorn;</span></button>
              </div>
            </div>
          </div>

          <figure className="section__image">
            <img src="img/fke/jazida-integration.png" alt="Jazida Integração" />
          </figure>
        </section>

        <section className="section">
          <div className="center">
            <div className="section__index">
              <h3>Experimente<br /> grátis</h3>

              <form className="form"> 
                <div className="form__group">
                  <input type="text" className="form__style" name="name" placeholder="Nome" />
                </div>

                <div className="form__group">
                  <input type="text" className="form__style" name="company" placeholder="Empresa" />
                </div>

                <div className="form__group">
                  <input type="email" className="form__style" name="email" placeholder="E-mail" />
                </div>

                <div className="form__group">
                  <input type="tel" className="form__style" name="phone" placeholder="Telefone" />
                </div>

                <div className="form__group">
                  <button type="submit" className="btn btn-flat btn-white">Criar minha conta</button>
                </div>
              </form>
            </div>
          </div>

          <figure className="section__image">
            <img src="img/fke/jazida-try.png" alt="Jazida Experimente grátis" />
          </figure>
        </section>
      </div>
    )
  }
}