import Card from '../UI/Card'
import MealItem from './MealItem'
import styles from './Meals.module.css'

const Meals = ({ state, setState, setEffect }) => {

    return <Card className={styles['menu-card']}>
        {state.meals.map((mealItem, idx) => <MealItem mealItem={mealItem} key={mealItem.id} state={state} setState={setState} keyAlias={idx} setEffect={setEffect} />)}
    </Card>
}

export default Meals