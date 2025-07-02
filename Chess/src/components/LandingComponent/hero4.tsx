import { hero4Items, item } from "../../constants";
import { GreenButton } from "../uiComponents/Button";

export default function Hero4() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div
        className="text-white font-bold flex flex-col justify-center mb-6 text-[34px] items-center
        px-3"
      >
        Follow the 2024 FIDE World Championship LIVE with the BEST
        <span>coverage.</span>
      </div>
      <div className=" flex flex-wrap">
        {hero4Items.map((item, key) => {
          return <Card key={key} {...item} />;
        })}
      </div>
      <GreenButton
        title="Chess Today"
        onClick={() => {}}
        titleSize="text-[25px]"
        styles="px-[25px] py-[10px] m-4"
      />
    </div>
  );
}

function Card({ img, link, title, subtitle, tag, video }: item) {
  return (
    <a className="mt-8 mx-[17px] hover:opacity-80" href={link}>
      <div className="relative">
        <img className="w-full h-full object-cover" src={img} />
        {video && (
          <button className="absolute inset-0 flex items-center justify-center  rounded-lg">
            <svg
              className="w-12 h-12 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <path d="M10 8l6 4-6 4V8z" fill="currentColor" />
            </svg>
          </button>
        )}
      </div>
      <div
        className="text-white font-bold px-8 pt-7 text-center hover:text-textColor break-words justify-center 
        items-center whitespace-normal w-[500px]"
      >
        {title}
      </div>

      <div className="flex text-textColor font-bold justify-center items-center gap-1 m-1">
        {tag && (
          <div className="bg-red-900 rounded-sm text-[12px] flex justify-center items-center p-0.25 font-bold">
            {tag}
          </div>
        )}
        <div className="text-sm">{subtitle}</div>
      </div>
    </a>
  );
}
