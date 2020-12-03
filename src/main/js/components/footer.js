import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

class Footer extends React.Component {
    render () {
        return (
            <footer style={{backgroundColor:"#343a40"}} className="page-footer font-small">
              <div style={{color:"white"}} className="footer-copyright text-center py-3">© 2020 Copyright:
                <a style={{textDecoration:"none", color:"inherit"}} href="http://localhost:8080/#/"> Acebook </a>
              </div>
            </footer>
        );
    };
};

export default Footer;