import Nav from './Nav'
import Header from './Header'
import styles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
    return (
        <>
        <Nav />
        <div className={styles.container}>
            <main className={styles.main}>
                <Header />
                {children}
            </main>
            <h1>Local Maker Furniture</h1>
        </div>
        </>
    )
}

export default Layout