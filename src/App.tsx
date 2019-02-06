import React, { Component, AnchorHTMLAttributes } from 'react';
import logo from './logo.svg';
import './App.css'
import { 
  Navbar,
  NavbarBrand,
  NavbarToggler
} from 'reactstrap';
import Collapse from 'reactstrap/lib/Collapse';
import Nav from 'reactstrap/lib/Nav';
import NavItem from 'reactstrap/lib/NavItem';
import NavLink from 'reactstrap/lib/NavLink';
import Mission from './Mission';
import { any } from 'prop-types';
import Vision from './Vision';
import Home from './Home';

interface AppState {
  isNavbarOpen: boolean,
  activeView: string
}

interface NavBarItemDefinition {
  key: string,
  text: string
}

class App extends Component<any, AppState> {

  private static readonly NAV_BAR_DEFINITIONS: NavBarItemDefinition[] = [
    {
      key: "home", 
      text:"Inicio"
    },
    {
      key: "mission", 
      text:"Misión"
    },
    {
      key: "vision", 
      text:"Visión"
    },
    {
      key: "about-us", 
      text:"Un poco de nosotros"
    },
    {
      key: "contact", 
      text:"Contactános"
    }
  ];

  private toggleNavBar(): void {
    this.setState({
      isNavbarOpen: !this.state.isNavbarOpen
    });
  }

  private constructor(props: any){
    super(props);
    this.toggleNavBar = this.toggleNavBar.bind(this);
    this.state = { isNavbarOpen: false, activeView: "home" };
    this.changeView = this.changeView.bind(this);
  }

  private changeView(evt: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void {
    const DATA_VIEW: string = evt.currentTarget.getAttribute('data-view') || '';
    DATA_VIEW.length > 0 && 
      DATA_VIEW !== this.state.activeView && 
      this.setState((prevState: Readonly<AppState>) => Object.assign(prevState, { activeView: DATA_VIEW, isNavbarOpen: !prevState.isNavbarOpen }));
  }
  
  public render(): JSX.Element {
    return (
      <div className="App">
        <Navbar color="primary" expand="md">
          <NavbarBrand className="brand-text" href="#">Escuela de Salamanca</NavbarBrand>
          <NavbarToggler className="app-collapse" onClick={this.toggleNavBar}>
            <i className="fas fa-bars"></i>
          </NavbarToggler>
          <Collapse isOpen={this.state.isNavbarOpen} navbar>
            <Nav className="ml-auto" navbar>
              {
                App.NAV_BAR_DEFINITIONS.map((definition: NavBarItemDefinition, index: number) => (
                  <NavItem  key={index} 
                            className={(definition.key === this.state.activeView && 'active') || ''}>
                    <NavLink  className={`eds-nav-link ${this.state.activeView === definition.key && 'active'}`} 
                              href={`#/${definition.key}`}
                              data-view={definition.key}
                              onClick={this.changeView}>{definition.text}</NavLink>
                  </NavItem>
                ))
              }
            </Nav>
          </Collapse>
        </Navbar>
        {this.state.activeView === 'home' && <Home />}
        {this.state.activeView === 'mission' && <Mission />}
        {this.state.activeView === 'vision' && <Vision />}
      </div>
    );
  }
}

export default App;
