import React, { createContext, useContext, useEffect, useState } from "react";
import { ToastPositionType, ToastProps } from "../@types/toast";
import ToastWrapper from "../components/ToastWrapper";

type ToastProviderProps = {
  children: React.ReactNode;
};

type ToastContextType = {
  toastHandler: (props: ToastProps) => void;
};

const ToastContext = createContext<ToastContextType>({
  toastHandler: () => {},
});

function ToastProvider({ children }: ToastProviderProps) {
  const [toastList, setToastList] = useState<ToastProps[]>([]);
  const [position, setPosition] = useState<ToastPositionType>("top-right");

  const toastHandler = ({
    status,
    title,
    message,
    delay,
    position,
  }: ToastProps) => {
    if (status && title && message && delay && position) {
      setToastList([
        ...toastList,
        { status, title, message, delay: Date.now() + delay },
      ]);
      setPosition(position);
    }
  };

  useEffect(() => {
    var timer: any;
    if (toastList.length > 0) {
      timer = setInterval(() => {
        const filterData = toastList.filter((data) => data.delay > Date.now());
        setToastList(filterData);
      }, 100);
    }
    return () => clearInterval(timer);
  }, [toastList]);

  const removeHandler = (delay: number) => {
    const filterData = toastList.filter((data) => data.delay !== delay);
    setToastList(filterData);
  };

  return (
    <ToastContext.Provider value={{ toastHandler }}>
      <ToastWrapper
        position={position}
        toastList={toastList}
        removeHandler={removeHandler}
      />
      {children}
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}

export default ToastProvider;
