import Sosmed from "./github";
import Icon from "./Icon";

export default function Header() {
  return (
    <section className="w-screen absolute top-0 left-0 z-10 flex justify-between items-center py-2 px-[100px]">
      <Icon />
      <Sosmed />
    </section>
  );
}
