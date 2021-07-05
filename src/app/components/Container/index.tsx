import styles from './Container.module.css'

function Container({ children, ...props }) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}

export default Container;
