import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActive } from "../store/modalSlice";
const Modal = ({ children }) => {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal.active);
  useEffect(() => {
    console.log(modal);
  }, [modal]);
  return (
    <div
      style={modal ? { display: "flex" } : { display: "none" }}
      className="modal"
      onClick={() => void dispatch(setActive(false))}
    >
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  );
};
export default Modal;
