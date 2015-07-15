let React = require('react');


let MobileTearSheet = React.createClass({

  propTypes: {
    height: React.PropTypes.number
  },

  getDefaultProps() {
    return {
      height: 750
    };
  },

  render() {

    let styles = {
      root: {
        margin: '2% auto',
        width: '80%'
      },

      container: {
        border: 'solid 1px #d9d9d9',
        borderBottom: 'none',
        height: this.props.height,
        overflow: 'hidden'
      },

      bottomTear: {
        backgroundImage: "url('images/bottom-tear.svg')",
        backgroundRepeat: "repeat-x",
        height: 10
      }
    };

    return (
      <div style={styles.root}>
        <div style={styles.container}>
          {this.props.children}
        </div>
        <div style={styles.bottomTear}></div>
      </div>
    );
  }

});

module.exports = MobileTearSheet;
