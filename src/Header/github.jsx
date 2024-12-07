export default function Sosmed() {
  return (
    <div className="w-[400px] h-full flex items-center justify-end gap-3">
      {/* Github */}
      <a
        href="#"
        className="group w-[40px] h-[40px] bg-transparent hover:bg-black flex flex-col items-center justify-center rounded-md backdrop-blur-lg ease-in-out duration-300 relative"
      >
        <i className="bi bi-github text-2xl group-hover:text-white ease-in-out duration-300"></i>
        <p
          className="absolute bottom-[-40px] text-center text-[13px] mt-2 text-black py-1 px-4 rounded-lg opacity-0 invisible
        group-hover:visible group-hover:opacity-100 ease-in-out duration-300"
        >
          Github
        </p>
      </a>
    </div>
  );
}
