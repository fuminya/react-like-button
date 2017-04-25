import React from 'react';
import ReactDOM from 'react-dom';
import styles from './main.css';

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 999,     // カウント数の状態
            liked: false    // 押したかどうかの状態
        }
    }
    
    /* クリックしたときのイベントハンドラ */
    onClick() {
        this.setState({
            count: this.state.count + (this.state.liked ? -1 : 1),
            liked: !this.state.liked
        });
    }
    
    render() {
        return (
            <span className={styles.container}>
                <span className={styles.like} onClick={(event) => this.onClick()}>
                    {this.state.liked ? '✔︎' : ''}いいね!
                </span>
                <span className={styles.counter}>
                    <span className={styles.counterBefore}>{" "}</span>{this.state.count}
                </span>
            </span>
        );
    }
}

ReactDOM.render(
    <LikeButton />,
    document.getElementById('like-button')
);
