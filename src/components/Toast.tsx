import "./index.css";
import { ToastStatusType } from "../@types/toast";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaRegCheckCircle } from "react-icons/fa";
import { BiError } from "react-icons/bi";
import { PiWarningDiamond } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";

type Props = {
  title: string;
  message?: string;
  removeHandler?: () => void;
  status: ToastStatusType;
};

function Toast({ status, message, title, removeHandler }: Props) {
  const classNameString = `toast ${status}`;

  return (
    <div className={classNameString}>
      {status === "info" && <IoIosInformationCircleOutline />}
      {status === "success" && <FaRegCheckCircle />}
      {status === "error" && <BiError />}
      {status === "warning" && <PiWarningDiamond />}

      <div>
        <h4>{title}</h4>
        <p>{message}</p>
      </div>
      <RxCross2 cursor={"pointer"} onClick={removeHandler} />
    </div>
  );
}

export default Toast;
