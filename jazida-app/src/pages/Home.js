import React, {Component} from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import $ from 'jquery';

import ImgMap from '../img/fke/maps.png';
import ImgDashboard from '../img/fke/jazida-dashboard.png';
import ImgTransparent from '../img/fke/jazida-transparent.png';
import ImgFaster from '../img/fke/jazida-faster.png';
import ImgIntegration from '../img/fke/jazida-integration.png';
import ImgTry from '../img/fke/jazida-try.png';

import SectionBrown from '../img/bkg/section-brown.png';
import SectionGreen from '../img/bkg/section-green.png';

import IconDoc from '../img/ico/doc.png';
import IconBell from '../img/ico/bell.png';
import IconMarker from '../img/ico/marker.png';
import IconCloud from '../img/ico/cloud.png';
import IconGear from '../img/ico/gear.png';
import IconLock from '../img/ico/lock.png';

export default class Home extends Component {

  constructor() {
    super();

    this.changeSection = this.changeSection.bind(this);
  }

  changeSection (event) {
    event.preventDefault();
    let element = $(event.currentTarget);
    let parent = element.parents('section');
    let section = [];
    

    if(element.hasClass('btn-floating-bottom')) {
      section = parent.next('section').length ? parent.next('section') : false;
    } else {
      section = parent.prev('section').length ? parent.prev('section') : false;
    }

    console.log(section);
    
    if(section) {
      $('html, body').animate({scrollTop: section.offset().top- 80}, 600);
    }
  }

  render () {
    return (
      <div>
        <section className="section">
          <ScrollAnimation animateIn="fadeIn" infinityAnimation={false}>
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
                <ScrollAnimation animateIn="fadeIn" delay={1000} infinityAnimation={false}>
                  <button type="button" onClick={this.changeSection} className="btn btn-floating btn-floating-bottom btn-brown"><span dangerouslySetInnerHTML={{__html: `${"&dlcorn;"}`}}></span></button>
                </ScrollAnimation>
              </div>
            </div>

            <div className="overlay"></div>

            <figure>
              <img src={ImgMap} alt="Mapa do Brasil" />
            </figure>
          </ScrollAnimation>
        </section>

        <section className="section">
          <div className="section__bg">
            <img src={SectionBrown} alt="" />
          </div>

          <div className="center">
            <div className="section__index">
              <ScrollAnimation animateIn="fadeIn" infinityAnimation={false}>
                <h2>JAZIDA EM NÚMEROS</h2>
              </ScrollAnimation>

              <div className="section__data">
                <ScrollAnimation animateIn="slideInUp" duration={0.5} infinityAnimation={false}>
                  <div>
                    <p><strong>1.200.300</strong> PROCESSOS CADaSTRADOS</p>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation animateIn="slideInUp" duration={0.5} delay={200} infinityAnimation={false}>
                  <div>
                    <p><strong>5.700.100</strong> CONSULTAS DE PROCESSOS</p>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation animateIn="slideInUp" duration={0.5} delay={300} infinityAnimation={false}>
                  <div>
                    <p><strong>650.000</strong> USUÁRIOS CADASTRADOS</p>
                  </div>
                </ScrollAnimation>
              </div>

              <div className="section__nav">
                <ScrollAnimation animateIn="fadeIn" delay={1000} infinityAnimation={false}>
                  <button type="button" onClick={this.changeSection} className="btn btn-floating btn-floating-top btn-green"><span dangerouslySetInnerHTML={{__html: `${"&dlcorn;"}`}}></span></button>
                  <button type="button" onClick={this.changeSection} className="btn btn-floating btn-floating-bottom btn-green"><span dangerouslySetInnerHTML={{__html: `${"&dlcorn;"}`}}></span></button>
                </ScrollAnimation>
              </div>
            </div>
          </div>

          <figure className="section__image">
            <img src={ImgDashboard} alt="Jazida Dashboard" />
          </figure>
        </section>

        <section className="section">
          <div className="section__bg">
            <img src={SectionGreen} alt="" />
          </div>

          <div className="center">
            <div className="section__index">
              <div className="section__block--left">
                <ScrollAnimation animateIn="slideInLeft" infinityAnimation={false}>
                  <h2>TRANSPARÊNCIA</h2>

                  <div className="section__block--text">
                    <p>Eliminamos barreiras burocráticas e tornamos informações públicas acessíveis aos players do setor.</p>
                  </div>
                </ScrollAnimation>
              </div>

              
              <div className="section__block--right">
                <ScrollAnimation animateIn="slideInRight" infinityAnimation={false}>
                  <div className="list">
                    <div className="list__item">
                      <div className="list__item--left">
                        <img src={IconDoc} alt="Leitura Automática do D.O.U" />
                      </div>

                      <div className="list__item--right">
                        <h5>LEITURA AUTOMÁTICA DO D.O.U.</h5>
                        <p>Todos os prazos, eventos e pendências do DNPM sempre atualizados no seu painel.</p>
                      </div>
                    </div>

                    <div className="list__item">
                      <div className="list__item--left">
                        <img src={IconBell} alt="Alertas sobre prazos" />
                      </div>

                      <div className="list__item--right">
                        <h5>Alertas sobre prazos</h5>
                        <p>Notificações antecipadas para apresentação de RPP, RFP, pagar TAH, DIPEM e demais exigências do DNPM.</p>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
              

              <div className="section__nav">
                <ScrollAnimation animateIn="fadeIn" delay={1000} infinityAnimation={false}>
                  <button type="button" onClick={this.changeSection} className="btn btn-floating btn-floating-top btn-brown"><span dangerouslySetInnerHTML={{__html: `${"&dlcorn;"}`}}></span></button>
                  <button type="button" onClick={this.changeSection} className="btn btn-floating btn-floating-bottom btn-brown"><span dangerouslySetInnerHTML={{__html: `${"&dlcorn;"}`}}></span></button>
                </ScrollAnimation>
              </div>
            </div>
          </div>

          <figure className="section__image">
            <img src={ImgTransparent} alt="Jazida Transparência" />
          </figure>
        </section>

        <section className="section">
          <div className="section__bg">
            <img src={SectionBrown} alt="" />
          </div>

          <div className="center">
            <div className="section__index">
              <div className="section__block--left">
                <ScrollAnimation animateIn="slideInLeft" infinityAnimation={false}>
                  <h2>RAPIDEZ</h2>

                  <div className="section__block--text">
                    <p>Economizamos tempo e trabalho a partir de uma interface automática e intuitiva acessível via internet.</p>
                  </div>
                </ScrollAnimation>
              </div>

              <div className="section__block--right">
                <ScrollAnimation animateIn="slideInRight" infinityAnimation={false}>
                  <div className="list">
                    <div className="list__item">
                      <div className="list__item--left">
                        <img src={IconMarker} alt="Georreferenciamento Facilitado" />
                      </div>

                      <div className="list__item--right">
                        <h5>Georreferenciamento Facilitado</h5>
                        <p>SIGMINE e Cadastro Mineiro integrados ao Google Maps™.</p>
                      </div>
                    </div>

                    <div className="list__item">
                      <div className="list__item--left">
                        <img src={IconCloud} alt="Dados na nuvem e versão mobile" />
                      </div>

                      <div className="list__item--right">
                        <h5>Dados na nuvem e versão mobile</h5>
                        <p>Acesso a partir de computadores ou dispositivos conectados à internet.</p>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>

              <div className="section__nav">
                <ScrollAnimation animateIn="fadeIn" delay={1000} infinityAnimation={false}>
                  <button type="button" onClick={this.changeSection} className="btn btn-floating btn-floating-top btn-green"><span dangerouslySetInnerHTML={{__html: `${"&dlcorn;"}`}}></span></button>
                  <button type="button" onClick={this.changeSection} className="btn btn-floating btn-floating-bottom btn-green"><span dangerouslySetInnerHTML={{__html: `${"&dlcorn;"}`}}></span></button>
                </ScrollAnimation>
              </div>
            </div>
          </div>

          <figure className="section__image">
            <img src={ImgFaster} alt="Jazida Rapidez" />
          </figure>
        </section>

        <section className="section">
          <div className="section__bg">
            <img src={SectionGreen} alt="" />
          </div>

          <div className="center">
            <div className="section__index">
              <div className="section__block--left">
                <ScrollAnimation animateIn="slideInLeft" infinityAnimation={false}>
                  <h2>INTEGRAÇÃO</h2>

                  <div className="section__block--text">
                    <p>Unificamos gestão e análise de processos minerários em uma plataforma simples e segura.</p>
                  </div>
                </ScrollAnimation>
              </div>

              <div className="section__block--right">
                <ScrollAnimation animateIn="slideInRight" infinityAnimation={false}>
                  <div className="list">
                    <div className="list__item">
                      <div className="list__item--left">
                        <img src={IconGear} alt="Ferramentas multifunção" />
                      </div>

                      <div className="list__item--right">
                        <h5>Ferramentas multifunção</h5>
                        <p>Consulta, gestão, monitoramento e cruzamento de dados e documentos.</p>
                      </div>
                    </div>

                    <div className="list__item">
                      <div className="list__item--left">
                        <img src={IconLock} alt="Informações protegidas" />
                      </div>

                      <div className="list__item--right">
                        <h5>Informações protegidas</h5>
                        <p>Ambiente seguro (HTTPS) e exclusivo protegido por email e senha.</p>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>

              <div className="section__nav">
                <ScrollAnimation animateIn="fadeIn" delay={1000} infinityAnimation={false}>
                  <button type="button" onClick={this.changeSection} className="btn btn-floating btn-floating-top btn-brown"><span dangerouslySetInnerHTML={{__html: `${"&dlcorn;"}`}}></span></button>
                  <button type="button" onClick={this.changeSection} className="btn btn-floating btn-floating-bottom btn-brown"><span dangerouslySetInnerHTML={{__html: `${"&dlcorn;"}`}}></span></button>
                </ScrollAnimation>
              </div>
            </div>
          </div>

          <figure className="section__image">
            <img src={ImgIntegration} alt="Jazida Integração" />
          </figure>
        </section>

        <section className="section">
          <div className="center">
            <div className="section__index">
              <ScrollAnimation animateIn="fadeIn" infinityAnimation={false}>
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
              </ScrollAnimation>
            </div>
          </div>

          <figure className="section__image">
            <img src={ImgTry} alt="Jazida Experimente grátis" />
          </figure>
        </section>
      </div>
    )
  }
}