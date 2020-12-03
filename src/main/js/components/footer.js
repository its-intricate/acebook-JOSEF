import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

class Footer extends React.Component {
    render () {
        return (
            <footer style={{backgroundColor:"#343a40"}} className="page-footer font-small">
              <div className="footer-copyright text-center py-3">© 2020 Copyright:
                <a href="http://localhost:8080/#/"> Acebook </a>
              </div>
            </footer>
        );
    };
};

export default Footer;