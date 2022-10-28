import { useContext } from 'react'
import ModalContext from '../../store/modal-context'
import Button from './Button'
import styles from './ModalControls.module.css'

const ModalControls = () => {

    const modalContext = useContext(ModalContext);

    const closeHandler = () => {
        modalContext.enableScroll()
        modalContext.setShowModal(false)
    }

    const orderHandler = () => {
        console.log("Ordering....")
        modalContext.enableScroll()
        modalContext.setShowModal(false)
    }

    return <div className={styles['modal-controls']}>
        <Button className={styles['modal-btn']} onClickHandler={closeHandler}>Close</Button>
        <Button className={styles['modal-btn']} onClickHandler={orderHandler}>Order</Button>
    </div>
}

export default ModalControls