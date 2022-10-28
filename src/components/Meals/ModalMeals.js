
import ModalMealItem from './ModalMealItem'
import styles from './ModalMeals.module.css'
import ModalMealsTotal from './ModalMealsTotal'

const ModalMeals = ({ children, state, setState }) => {

    const calculateTotal = () => {
        return state.cart.length > 0 ? state.cart.map(item => parseInt(item.qty) * parseFloat(item.amount)).reduce((a, b) => a + b).toFixed(2) : 0
    }

    return <div className={styles['modal-meals-list']} onClick={(e) => { e.stopPropagation() }}>
        {state.cart.map((modalMealItem, idx) => <ModalMealItem modalMealItem={modalMealItem} key={idx} setState={setState} keyAlias={idx} />)}
        <ModalMealsTotal amount={calculateTotal()} />
        {children}
    </div>
}

export default ModalMeals