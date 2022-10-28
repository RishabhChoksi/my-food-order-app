import React from "react";



const ModalContext = React.createContext({
    setShowModal: () => { },
    showModal: false,
    disableScroll: () => { },
    enableScroll: () => { }
})

export default ModalContext;