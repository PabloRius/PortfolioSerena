import Flags from "../data/flags";

export default function ({ flag }: { flag: string }) {
  const Flag = Flags[flag];
  return <Flag className="w-7" />;
}
