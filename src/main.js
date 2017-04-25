import React from 'react';
import ReactDOM from 'react-dom';

class LikeButton extends React.Component {
    render() {
        return (
          <span>いいねボタン予定地</span>
        );
    }
}

ReactDOM.render(
    <LikeButton />,
    document.getElementById('like-button')
);
