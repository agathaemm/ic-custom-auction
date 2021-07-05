import { Container } from 'app/components'
import styles from './Navbar.module.css'

import phoneAsset from 'assets/images/phone.svg'
import caretAsset from 'assets/images/caret.svg'
import brandAsset from 'assets/images/logo.png'
import userAsset from 'assets/images/user.svg'

function Navbar() {
    return (
        <div className={styles.navbar}>
            <Container>
                <div className={styles.innerContent}>
                    <img className={styles.brandAsset} src={brandAsset} />
                    <div className={styles.phoneAsset}>
                        <img src={phoneAsset} />
                        <span>(11) 3569-3465</span>
                    </div>
                    <div className={styles.userAsset}>
                        <span className={styles.caret}>
                            <img src={caretAsset} />
                        </span>
                        <img className={styles.userImage} src={userAsset}/>
                        <span className={styles.userText}>
                            User Test
                        </span>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Navbar;
