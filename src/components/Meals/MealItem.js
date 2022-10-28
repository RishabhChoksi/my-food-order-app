import Button from '../UI/Button';
import styles from './MealItem.module.css'

const MealItem = ({ mealItem, state, setState, keyAlias, setEffect }) => {

    const addItemHandler = (e) => {
        setState((prevState) => {
            if (prevState.meals[keyAlias].qty > 0) {
                setEffect('cart-button-outer-effect')
                setTimeout(() => {
                    setEffect('')
                }, 50)
                if (prevState.cart.length > 0 && prevState.cart.filter(item => item.id === prevState.meals[keyAlias].id).length > 0) {
                    prevState.cart.filter(item => item.id === prevState.meals[keyAlias].id)[0].qty += parseInt(prevState.meals[keyAlias].qty)
                } else {
                    prevState.cart = [...prevState.cart, prevState.meals[keyAlias]]
                }
                return { ...prevState };
            }
            return prevState;
        })
    }

    const updateQuantityHandler = (e) => {
        setState((prevState) => {
            prevState.meals[keyAlias].qty = e.target.value;
            return { ...prevState };
        })
    }


    const { title, description, amount } = mealItem;
    return <div className={styles['meal-item']}>
        <div className={styles['meal-item-left']}>
            <span className={styles['meal-item-title']}>{title}</span>
            <span className={styles['meal-item-desc']}>{description}</span>
            <span className={styles['meal-item-amount']}>${amount}</span>
        </div>
        <div className={styles['meal-item-right']}>
            <span className={styles['meal-item-qty']}>
                <label htmlFor="amount">Amount</label>
                <input id="amount" type="number" min='0' onChange={updateQuantityHandler} value={state.meals[keyAlias].qty} />
                {/* <input id="amount" type="number" min='0' onChange={updateQuantityHandler} /> */}
            </span>
            <Button className={styles['meal-item-add-btn']} onClickHandler={addItemHandler}>
                <span className="material-symbols-rounded">
                    add
                </span>Add
            </Button>
            <span></span>
        </div>
    </div>
}

export default MealItem;