const React = require('react');
const IdyllComponent = require('idyll-component');
const insertCSS = require('insert-css');

const css = `
.logo-lockup {
  display: block;
  position: fixed;
  top: 10px;
  left: 10px;
}

.logo-lockup a {
  display: block;
  cursor: pointer;
}

.logo-lockup a .logo {
  width: 60px;
  height: 60px;
  background: #EAE7D6;
}

.logo-lockup a small {
  display: block;
  transform: rotate(-90deg);
  margin-top: 0;
  font-size: 1rem;
  line-height: 60px;
  opacity: 0;
  padding: 0 20px;
  top: 60px;
  left: -30px;
  position: fixed;
  z-index: -1;
  transition: all .25s ease-in-out;
}

.logo-lockup a:hover small {
  opacity: 1;
  top: 120px;
}

@media all and (max-width: 700px) {
  .logo-lockup {
    display: none;
  }
}
`;


class Logo extends IdyllComponent {

  componentDidMount() {
    if (super.componentDidMount) {
      super.componentDidMount();
    }
    insertCSS(css.toString('utf8'));
  }
  render() {
    return (
      <div className={'logo-lockup'}>
        <a href="https://idyll-lang.github.io/">
          <img className={'logo'} src={'https://idyll-lang.github.io/images/logo.svg'} />
          <small>Made with Idyll</small>
        </a>
      </div>
    );
  }
}

module.exports = Logo;