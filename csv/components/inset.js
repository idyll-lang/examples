const React = require('react');
const IdyllComponent = require('idyll-component');

class Inset extends IdyllComponent {
  render() {
    return (
      <div className={'inset'} {...this.props} />
    );
  }
}

module.exports = Inset;