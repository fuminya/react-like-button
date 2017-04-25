import React from 'react';
import ReactDOM from 'react-dom';
import styles from './main.css';

class LikeButton extends React.Component {
    render() {
        return (
            <span className={styles.container}>
                <span className={styles.like}>いいね!</span>
                <span className={styles.counter}>
                    <span className={styles.counterBefore}>{" "}</span>999
                </span>
            </span>
        );
    }
}

ReactDOM.render(
    <LikeButton />,
    document.getElementById('like-button')
);
