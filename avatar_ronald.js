'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
    //   return 'Funcionou!';
    let img = document.createElement("IMG");
     img.src = "https://avatars3.githubusercontent.com/u/33934560?s=400&u=f0be2b4c2705f65658ae5899869d98465e3846cd&v=4";
     img.style.width = "55%";
    //  img.style.height = '50%';
    document.getElementById('avatar_ronald').appendChild(img);
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      '',
    )}
};

const domContainer = document.querySelector('#avatar_ronald');
ReactDOM.render(e(LikeButton), domContainer);