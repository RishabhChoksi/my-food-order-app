import { useContext, useEffect } from 'react';
import ModalContext from '../../store/modal-context';
import ModalMeals from '../Meals/ModalMeals';
import Card from './Card';
import styles from './Modal.module.css'
import ModalControls from './ModalControls';

const Modal = ({ showModal, state, setState }) => {

    const modalContext = useContext(ModalContext);

    const backdropHandler = () => {
        modalContext.enableScroll();
        modalContext.setShowModal(false)
    }

    useEffect(() => {
        state.cart.length === 0 && modalContext.setShowModal(false)
    }, [showModal, state.cart.length])

    return <div className={` ${styles['modal-parent']}  ${styles[showModal ? ' ' : 'hide-modal']} `} onClick={backdropHandler} >
        <Card className={styles['modal-card']} >
            <ModalMeals state={state} setState={setState} >
                <ModalControls />
            </ModalMeals>
        </Card>
    </div >
}

export default Modal;