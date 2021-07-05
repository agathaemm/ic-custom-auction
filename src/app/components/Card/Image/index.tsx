import styles from './Image.module.css'

function Image({ src }) {
    return <div className={styles.image} style={{ 
        backgroundImage: `url(${src})`
     }} />
}

export default Image;