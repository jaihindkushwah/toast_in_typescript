export type ToastPositionType =
  | "top"
  | "bottom"
  | "left"
  | "right"
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "center";
export type ToastStatusType = "success" | "error" | "info" | "warning";
export type ToastProps = {
  position?: ToastPositionType;
  status: ToastStatusType;
  message: string;
  delay: number;
  title: string;
};
