import { ICustomScreenHeaderProps } from "@/utils";


export default function ScreenHeader({title}: ICustomScreenHeaderProps) {
  return <p className="font-bold text-xl">{title}</p>;
};