const Modal = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
          
          <div className="relative bg-white p-6 rounded-xl min-h-[200px] w-[80%] max-w-[500px] shadow-lg">
            
            <div className="flex justify-end">
              <i
                onClick={onClose}
                className="fa-solid fa-xmark text-2xl cursor-pointer active:scale-95"
              ></i>
            </div>

            {children}

          </div>

        </div>
      )}
    </>
); 
};

export default Modal;