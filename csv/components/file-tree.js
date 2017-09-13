const React = require('react');
const IdyllComponent = require('idyll-component');

class TreeComponent extends IdyllComponent {

  renderItems(items, level) {
    return (
      <div style={{marginLeft: 20 * level}}>
        {
          items.map((item) => {
            if (item.children) {
              return (
                <div >
                  <svg style={{marginRight: 5}} width={15} height={15} viewBox="0 0 512 512"><polygon fill="#010101" points="512,128 256,128 192,64 0,64 0,448 512,448 "/></svg>
                  {item.name}
                  {this.renderItems(item.children, level + 1)}
                </div>
              )
            }
            return (
              <div style={{marginTop: 3}}>{item.name}</div>
            );
          })
        }
      </div>
    );
  }

  render() {
    return (
      <div className={'filetree'}>
        {this.renderItems(this.props.items || [], 0)}
      </div>
    );
  }
}


module.exports = TreeComponent;
