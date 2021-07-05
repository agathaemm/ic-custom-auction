import styles from './Card.module.css'

import Image from './Image'
import Body from './Body'

function Card({ children }) {
    return <div className={styles.card}>{children}</div>
}

Card.Image = Image;
Card.Body = Body;

export default Card;
