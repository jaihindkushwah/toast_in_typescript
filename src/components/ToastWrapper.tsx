import { ToastPositionType, ToastProps } from "../@types/toast";
import Toast from "./Toast";
import "./index.css";

type ToastWrapperProps = {
  toastList: ToastProps[];
  removeHandler: (delay: number) => void;
  position: ToastPositionType;
};

function ToastWrapper({
  toastList,
  removeHandler,
  position,
}: ToastWrapperProps) {
  return (
    <div className={`toastWrapper ${position}`}>
      {toastList.length > 0 &&
        toastList.map((toast) => (
          <Toast
            key={toast.delay}
            title={toast.title}
            message={toast.message}
            status={toast.status}
            removeHandler={() => removeHandler(toast.delay)}
          />
        ))}
    </div>
  );
}

export default ToastWrapper;
