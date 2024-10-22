import ReactModal from 'react-modal';
import style from './OrderModal.module.css'


export function OrderModal({modalIsOpen, setModalIsOpen, productName} ){
    function closeModal(){
        setModalIsOpen(false);
    }
    return(
      <>
      <ReactModal className={style.modal} isOpen={modalIsOpen} >
 <p class={style.s}>Хотите заказать этот товар? </p>
 <p>{productName}</p>
 <button onClick={closeModal} className={style.btnn}>закрыть</button>
      </ReactModal>
        
        </>
    )
}
