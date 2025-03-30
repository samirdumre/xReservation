import Image from "next/image";

export default function Logo() {
  return (
    <div>
      <span>
        <Image
          src="/xReservation.png"
          alt="xReservation Logo"
          width="50"
          height="50"
        />
        <h3 className="text-xl font-semibold">xReservation</h3>
      </span>
    </div>
  );
}