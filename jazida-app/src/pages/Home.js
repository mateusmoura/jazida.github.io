import React, {Component}       from 'react';
import ScrollAnimation          from 'react-animate-on-scroll';
import $                        from 'jquery';
import PubSubJS                 from 'pubsub-js';

import CustomInput              from '../components/CustomInput';
import NgIf                     from '../components/NgIf';
import ErrorPublish             from '../components/ErrorPublish'

import ImgMap                   from '../img/fke/maps.png';
import ImgDashboard             from '../img/fke/jazida-dashboard.png';
import ImgTransparent           from '../img/fke/jazida-transparent.png';
import ImgFaster                from '../img/fke/jazida-faster.png';
import ImgIntegration           from '../img/fke/jazida-integration.png';
import ImgTry                   from '../img/fke/jazida-try.png';

import SectionBrown             from '../img/bkg/section-brown.png';
import SectionGreen             from '../img/bkg/section-green.png';

import IconDoc                  from '../img/ico/doc.png';
import IconBell                 from '../img/ico/bell.png';
import IconMarker               from '../img/ico/marker.png';
import IconCloud                from '../img/ico/cloud.png';
import IconGear                 from '../img/ico/gear.png';
import IconLock                 from '../img/ico/lock.png';


class ExplorerJazida extends Component {
  
  constructor () {
    super();

    this.state = {
      processNumber : '',
      processData   : [],
      activeTab     : 'basic-data'
    }

    // setTimeout(() => {
    //   $('section .overlay').addClass('overlayAnimate').animate({
    //     width: '96px',
    //     left: '50%'
    //   }, '500');

    //   $('.jAnimateTop').animate({
    //     top: '-360px'
    //   }, '500', function () {
    //     $(this).css('top', 0);
    //   });

    //   $('.jAnimate').fadeOut('500', function () {
    //     this.setState({processData: {nome: 'Mateus'}})
    //   }.bind(this));      
    // }, 2000);

    this.sendForm   = this.sendForm.bind(this);
    //this.changeTab  = this.changeTab.bind(this);
  }

  componentDidMount () {
    PubSubJS.subscribe('update-processData', (topic, resp) => {
      this.setState({processData: resp});
    });
  }

  sendForm (event) {
    event.preventDefault();

    fetch('https://api.greenstone.com.br/processos/'+encodeURIComponent(this.state.processNumber.replace('.', '').trim())+'?incluirEventos=true', {method: 'GET', cache: 'default'})
      .then(resp => resp.json())
      .then(process => {
        console.log(process);

        if(process.erro) {
          new ErrorPublish().ErrorPublish({field: 'process', msg: process.erro});
        } else {
          $('section .overlay').addClass('overlayAnimate').animate({
            width: '96px',
            left: '50%'
          }, '500');

          $('.jAnimateTop').animate({
            top: '-360px'
          }, '500', function () {
            $(this).css('top', 0);
          });

          $('.jAnimate').fadeOut('500', function () {
            PubSubJS.publish('update-processData', process);
          });    
        }
      });
  }

  setData (objName, event) {
    let obj = {};

    obj[objName] = event.target.value;

    this.setState(obj);
  }

  changeTab (tab) {
    this.setState({activeTab: tab});
  }

  render () {
    return (
      <div className="section__block--left">
        <h2 className="jAnimate">Democratizar <br /> o setor mineral</h2>

        <div className="section__block--text jAnimate">
          <p>Esse é o nosso propósito.</p>
          <p>Acreditamos em uma gestão mais eficiente da exploração mineral a partir do amploacesso à informação.</p>
        </div>

        <form className="form jAnimateTop" onSubmit={this.sendForm} method="GET">
          <h4>Explore o Jazida</h4>

          <CustomInput mask="999.999/9999" maskChar="_" id="process" className="form__style" type="text" name="process" placeholder="Digite o número de um processo" value={this.state.processNumber} onChange={this.setData.bind(this, 'processNumber')} />
          <button type="submit" className="btn btn-white btn-flat"><i className="fa fa-circle-o-notch fa-spin"></i><span>Consulte</span></button>
          <span>Exemplo: 864.000/1998</span>
        </form>

        <NgIf show={this.state.processData}>
          <div className="section__block--result animated fadeIn">
            <div className="monitor">
              <button type="button" className="btn btn-icon btn-close"><i className="fa fa-times" aria-hidden="true"></i></button>
              <div className="padded">
                <span className="monitor__type"><i className="fa fa-bookmark-o" aria-hidden="true"></i> Monitorar</span>

                <h6>{this.state.processData.idFormatado}</h6>

                <div className="monitor__subtitle">
                  <p>Autorização de Pesquisa</p>
                </div>
              </div>

              <div className="tabs">
                <nav>
                  <a href="#this" className={`tabs__item ${this.state.activeTab === 'basic-data' ? 'active' : ''}`} onClick={this.changeTab.bind(this, 'basic-data')}>Dados básicos</a>
                  <a href="#this" className={`tabs__item ${this.state.activeTab === 'events' ? 'active' : ''}`} onClick={this.changeTab.bind(this, 'events')}>Eventos</a>
                </nav>

                <div className="tabs__container">
                  <div className={`tabs__container--item animated fadeIn ${this.state.activeTab === 'basic-data' ? 'tabs__container--active' : ''}`}>
                    <div className="row">
                      <div className="col-4">
                        <label>Processo</label>
                        <p>{this.state.processData.idFormatado}</p>
                      </div>
                      <div className="col-3">
                        <label>Ativo</label>
                        <p>{this.state.processData.ativoFormatado}</p>
                      </div>
                      <div className="col-3">
                        <label>Área</label>
                        <p>{this.state.processData.areaFormatada}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-10">
                        <label>Nome</label>
                        <p>@TODO: Nome</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-10">
                        <label>Substância</label>
                        <p>{
                          this.state.processData.substancias ? this.state.processData.substancias.map((sub, index) => {
                            return this.state.processData.substanciaPrincipalId === sub.substancia.id ? sub.substancia.nomeFormatado : '';
                          }) : ''  
                        }</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-10">
                        <label>Fase</label>
                        <p>{this.state.processData.ultimaFase ? this.state.processData.ultimaFase.nome : ''}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-10">
                        <label>Último Evento</label>
                        <p>{this.state.processData.ultimoEvento ? this.state.processData.ultimoEvento.evento.descricaoFormatada : ''}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-10">
                        <label>Município</label>
                        <p>{
                          this.state.processData.municipios ? this.state.processData.municipios.map((municipio, index) => {
                            return this.state.processData.municipios.length === index + 1 ?  municipio.nomeFormatado  : municipio.nomeFormatado + ', '
                          }) : ''  
                        }</p>
                      </div>
                    </div>
                  </div>

                  <div className={`tabs__container--item animated fadeIn ${this.state.activeTab === 'events' ? 'tabs__container--active' : ''}`}>
                    <div className="group__list">
                      <div className="group__scroll">
                        {
                          this.state.processData.eventos ? this.state.processData.eventos.map(evento => {
                            return (
                              <div className="group__list--item" key={evento.id}>
                                <p>{evento.evento.descricaoFormatada}</p>
                                <strong>{evento.dataDePublicacaoFormatada}</strong>
                              </div>
                            )
                          }) : ''
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </NgIf>
      </div>
    )
  };
}

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

              <ExplorerJazida />

              <div className="section__nav">
                <ScrollAnimation animateIn="fadeIn" delay={1000} infinityAnimation={false}>
                  <button type="button" onClick={this.changeSection} className="btn btn-floating btn-floating-bottom btn-brown"><span dangerouslySetInnerHTML={{__html: `${"&dlcorn;"}`}}></span></button>
                </ScrollAnimation>
              </div>
            </div>

            <div className="overlay"><div className="bg"></div></div>

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