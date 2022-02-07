import { SEARCH } from "../../svg";

export default function InputSearch({
  height,
  width,
  backgroundColor,
  placeholder,
}) {
  return (
    <div className="flex overflow-hidden rounded-xl">
      <div
        className="p-2 text-gray-400 flex justify-center items-center"
        style={{ backgroundColor: backgroundColor }}
      >
        <SEARCH />
      </div>
      <input
        type="search"
        name="search"
        id="search"
        placeholder={placeholder}
        className="text-black focus:outline-none"
        style={{
          height: height,
          width: width,
          backgroundColor: backgroundColor,
        }}
      />
    </div>
  );
}
