import styles from './ModalMealItem.module.css'
import Button from '../UI/Button'

const ModalMealItem = ({ modalMealItem, setState, keyAlias }) => {
    const { title, amount, qty } = modalMealItem;

    const incrementItemFromCart = (e) => {
        setState(prevState => {
            prevState.cart[keyAlias].qty = parseInt(prevState.cart[keyAlias].qty) + parseInt(1)
            return { ...prevState }
        })
    }

    const decrementItemFromCart = (e) => {
        setState(prevState => {
            prevState.cart[keyAlias].qty = parseInt(prevState.cart[keyAlias].qty) - parseInt(1)
            if (parseInt(prevState.cart[keyAlias].qty) === 0) {
                prevState.cart.splice(keyAlias)
            }
            return { ...prevState }
        })
    }

    return <div className={styles['modal-meal-item']} >
        <div className={styles['modal-meal-item-left']}>
            <span className={styles['title-amount']}>
                <span className={styles['title']} onClick={incrementItemFromCart}>{title}</span>
                <span className={styles['amount']} onClick={decrementItemFromCart}>${amount}</span>
            </span>
            <span className={styles['qty']}>
                <div></div>
                <span>X{qty}</span>
            </span>
        </div>
        <div className={styles['modal-meal-item-right']}>
            <Button className={styles['add-sub-btn']} onClickHandler={decrementItemFromCart}>-</Button>
            <Button className={styles['add-sub-btn']} onClickHandler={incrementItemFromCart}>+</Button>
        </div>
    </div >
}

export default ModalMealItem