import headerStyles from '../styles/Header.module.css'

const Header = () => {
    return (
        <div>
            <h1 className={headerStyles.title}>
                <span>DB Test</span> LMF
            </h1>
            <p className={headerStyles.description}>Welcome to LMF creators</p>
        </div>
    )
}

export default Header