import Image from "next/image";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-2">
      <div className="flex items-center space-x-3">
        <Image
          src="/xReservation.png"
          alt="xReservation Logo"
          width="50"
          height="50"
        />
        <h3 className="text-xl font-semibold">xReservation</h3>
      </div>
      <div className="m-2">
      <Navigation />
      </div>
    </header>
  );
}
