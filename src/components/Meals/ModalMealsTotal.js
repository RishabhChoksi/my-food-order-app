import styles from './ModalMealsTotal.module.css'

const ModalMealsTotal = ({ amount }) => {
    return <div className={styles['modal-meals-total']}>
        <span>Total Amount</span>
        <span>${amount}</span>
    </div>
}

export default ModalMealsTotal