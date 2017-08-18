import React from 'react';


class LoadingDots extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      dots: 1,
    };
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        dots: (this.state.dots % 3) + 1,
      });
    }, 300);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    return (
      <div style={{ textAlign: 'center', display: 'inline-block' }}>
        {[...Array(this.state.dots)].map(() => '.')}
      </div>
    );
  }
}


export default LoadingDots;
