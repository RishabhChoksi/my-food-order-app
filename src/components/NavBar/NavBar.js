import Button from '../UI/Button';
import Modal from '../UI/Modal';
import styles from './NavBar.module.css'
import ReactDOM from 'react-dom'
import { useContext } from 'react';
import ModalContext from '../../store/modal-context';
import ImageBackground from '../UI/ImageBackground';

const NavBar = ({ state, setState, effect }) => {

    const modalContext = useContext(ModalContext);

    const buttonClickHandler = () => {
        if (state.cart.length > 0) {
            modalContext.disableScroll();
            modalContext.setShowModal(true)
        }
    }


    return (
        <header>
            {ReactDOM.createPortal(<ImageBackground />, document.getElementById("bg-img"))}
            <nav className={styles['nav-bar']}>
                <div className={styles['nav-bar__branding']}>ReactMeals</div>
                <span></span>
                <Button className={`${styles['cart-button-outer']} ${styles[effect]}`} onClickHandler={buttonClickHandler}>
                    <span className="material-symbols-outlined">
                        shopping_cart
                    </span>
                    <span>Your Cart</span>
                    <div className={styles['cart-button-inner']}>{state.cart.length > 0 ? state.cart.map(mealItem => parseInt(mealItem.qty)).reduce((a, b) => a + b, 0) : 0}</div>
                </Button>
            </nav>
            {ReactDOM.createPortal(<Modal showModal={modalContext.showModal} state={state} setState={setState} />, document.getElementById('bg-modal'))}
        </header>
    )
}

export default NavBar;