const Modal = ({ showModal, closeModal }) => {
  return (
    <dialog open={showModal} className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-2xl">您好!</h3>
        <p className="py-4 text-xl">請先登入，再加商品至購物車哦!!</p>
      </div>
      <form
        method="dialog"
        className="modal-backdrop bg-black/50 dark:bg-white/50 "
      >
        <button onClick={closeModal}>Close</button>
      </form>
    </dialog>
  );
};

export default Modal;
