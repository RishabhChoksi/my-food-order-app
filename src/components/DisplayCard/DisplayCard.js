import Card from '../UI/Card'
import styles from './DisplayCard.module.css'

const DisplayCard = () => {
    return <Card className={styles['display-card']}>
        <div className={styles['card-heading']}>Delicious Food, Delivered To You</div>
        <div>Choose your favourite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.</div>
        <div className={styles['card-msg']} > All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!</div>
    </Card >
}

export default DisplayCard