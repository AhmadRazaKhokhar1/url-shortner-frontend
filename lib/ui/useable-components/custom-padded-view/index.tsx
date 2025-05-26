// Utils
import { DivProps, ICustomPaddedViewProps } from "@/utils";

export default function CustomPaddedView({
  children,
  ...props
}: ICustomPaddedViewProps & DivProps) {
  return (
    <div
      {...props}
      style={{ padding: 4 }}
    >
      {children}
    </div>
  );
}
