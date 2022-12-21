import React from "react";
import { Link } from 'react-router-dom';
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';


import SideNav, {

  NavItem,
  NavIcon,
  NavText
} from "@trendmicro/react-sidenav";

// import NavDropdown from 'react-bootstrap/NavDropdown';

class SideNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true
    };
  }

  render() {
    return (

      <div className="">
        <SideNav expanded={this.state.isVisible} style={{ color: "black" }} className="bg-black text-black-50">
          <SideNav.Toggle
            onClick={() => {
              this.setState({ isVisible: !this.state.isVisible });
            }} className="text-black"
          />
          <SideNav.Nav defaultSelected="home" >
            <NavItem eventKey="1" >
              <NavText className="text-black"><Link to='/'>Home</Link></NavText>
              <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
              </NavIcon>


            </NavItem>

            <NavItem eventKey="2" >
              {/* <NavDropdown title="Single Spring Seals"  >
              <NavDropdown.Item href="/ac1">AC-S01</NavDropdown.Item>
              <NavDropdown.Item href="/bellow">
              AC-S02
              </NavDropdown.Item>
              <NavDropdown.Item href="/bellow">
              AC-S03
              </NavDropdown.Item>
              </NavDropdown> */}

              <NavIcon>
                <i
                  className="fa fa-fw fa-line-chart"
                  style={{ fontSize: "1.75em" }}
                />
              </NavIcon>


              <NavText><Link to='/single'>Single Spring Seals</Link></NavText>
            </NavItem>
            <NavItem eventKey="3">

              <NavIcon>
                <i
                  className="fa fa-fw fa-line-chart"
                  style={{ fontSize: "1.75em" }}
                />
              </NavIcon>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>

              <NavText><Link to='/bellow'>Bellow Seals</Link></NavText>
            </NavItem>
            <NavItem eventKey="placed orde">
              <NavIcon>
                <i
                  className="fa fa-fw fa-line-chart"
                  style={{ fontSize: "1.75em" }}
                />
              </NavIcon>

              <NavText><Link to='/multi'>Multispring Seals</Link></NavText>
            </NavItem>
            <NavItem eventKey="placed ord">
              <NavIcon>
                <i
                  className="fa fa-fw fa-line-chart"
                  style={{ fontSize: "1.75em" }}
                />
              </NavIcon>

              <NavText><Link to='/special'>Special Seals For Pumps</Link></NavText>

            </NavItem>
            <NavItem eventKey="placed or">
              <NavIcon>
                <i
                  className="fa fa-fw fa-line-chart"
                  style={{ fontSize: "1.75em" }}
                />
              </NavIcon>

              <NavText><Link to='/catri'>Cartridge Seals</Link></NavText>
            </NavItem>
            <NavItem eventKey="placed ">
              <NavIcon>
                <i
                  className="fa fa-fw fa-line-chart"
                  style={{ fontSize: "1.75em" }}
                />
              </NavIcon>
              <NavText><Link to='/rotary'>Rotary Joint & Union</Link></NavText>
            </NavItem>
            <NavItem eventKey="placed o">

              <NavIcon>
                <i
                  className="fa fa-fw fa-line-chart"
                  style={{ fontSize: "1.75em" }}
                />
              </NavIcon>

              <NavText><Link to='/react'>Reactor Seals</Link></NavText>

            </NavItem>



          </SideNav.Nav>
        </SideNav>
      </div>
    );
  }
}

export default SideNavBar;
