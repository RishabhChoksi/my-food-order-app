import styles from './App.module.css';
import DisplayCard from './components/DisplayCard/DisplayCard';
import Meals from './components/Meals/Meals';
import NavBar from './components/NavBar/NavBar';
import ModalContext from './store/modal-context';
import { useState } from 'react';


function App() {

  const meals = [
    { id: 'f1', title: 'Sushi', description: 'Finesh fish and veggies', amount: '22.99', qty: 0 },
    { id: 'f2', title: 'Schnitzel', description: 'A german specialty!', amount: '16.50', qty: 0 },
    { id: 'f3', title: 'Barbecue Burger', description: 'American, raw, meaty', amount: '12.99', qty: 0 },
    { id: 'f4', title: 'Green Bown', description: 'Healthy...and green...', amount: '18.99', qty: 0 }
  ]

  const [showModal, setShowModal] = useState(false)
  const [state, setState] = useState({ meals: meals, cart: [] })
  const [effect, setEffect] = useState('')

  const disableScroll = () => {
    // Get the current page scroll position
    console.log('disabling scroll')
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    // if any scroll is attempted, set this to the previous value
    window.onscroll = () => {
      window.scrollTo(scrollLeft, scrollTop);
    };
  }

  const enableScroll = () => {
    console.log('enabling scroll')

    window.onscroll = () => { };
  }



  return <ModalContext.Provider value={{ setShowModal: setShowModal, showModal: showModal, enableScroll: enableScroll, disableScroll: disableScroll }}>
    <div className={styles['app']}>
      <NavBar state={state} setState={setState} effect={effect} />
      <DisplayCard />
      <Meals state={state} setState={setState} setEffect={setEffect} />
    </div>
  </ModalContext.Provider >
}

export default App;
