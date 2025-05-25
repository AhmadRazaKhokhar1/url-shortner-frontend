// Utils
import { DivProps, ICustomPaddedViewProps } from "@/utils";

export default function CustomPaddedView({
  children,
  ...props
}: ICustomPaddedViewProps & DivProps) {
  return (
    <div
      {...props}
      className="dark:bg-[#09182f] bg-white"
      style={{ padding: 4 }}
    >
      {children}
    </div>
  );
}
