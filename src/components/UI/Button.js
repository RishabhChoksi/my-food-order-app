import styles from './Button.module.css'

const Button = ({ className, children, onClickHandler }) => {
    return <button className={`${styles['button']} ${className}`} onClick={onClickHandler} >{children}</button>
}

export default Button;