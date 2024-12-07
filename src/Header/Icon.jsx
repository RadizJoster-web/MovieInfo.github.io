export default function Icon() {
  return (
    <div className="flex justify-center items-center gap-2 ">
      <img
        src="../public/Icon Paimon.jpeg"
        alt="Icon"
        className="object-contain w-[50px] rounded-full"
      />
      <span className="flex flex-col justify-start items-start">
        <h1 className="font-myFont text-[20px]">Film Info</h1>
        <p className="text-[13px]">10M+ Info about film or anime</p>
      </span>
    </div>
  );
}
