import Image from "next/image";

export default function Logo() {
  return (
    <div className={`logo flex flex-row items-center leading-none `}>
      <Image
        src="/Logo.png"
        width={200} // required
        height={200}
        alt="CodeHug Logo"
        className="h-15 w-15"
        priority
      />
      <h1 className="text-2xl text-primary">CodeHug</h1>
    </div>
  );
}
