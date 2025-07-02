type Props = {
  img?: string;
  title: string;
  subtitle?: string;
  onClick: () => void;
  styles: string;
  titleSize:string,
  subtitleSize?: string,
};
export const GreenButton = ({
  img,
  title,
  subtitle,
  onClick,
  styles,
  titleSize,
  subtitleSize
}: Props) => {
  const buttonClass = `bg-primary hover:bg-glow1 
        hover:shadow-[0px_0px_34px_0px_rgba(255,255,255,0.2)] border-b-4 
        border-greenBorder ${styles} rounded-lg flex justify-start items-center cursor-pointer`;
  return (
    <div className={buttonClass} onClick={onClick}>
      {img && <img src={img} className="w-8 h-10" />}
      <div className="gap-1 flex flex-col">
        <div
          className={`flex flex-col font-bold justify-start  ${titleSize} text-lg text-white`}
        >
          {title}
        </div>
        <div
          className={`flex flex-col justify-start items-center ${subtitleSize} text-white`}
        >
          {subtitle}
        </div>
      </div>
    </div>
  );
};
export const BlackButton = ({
  img,
  title,
  subtitle,
  onClick,
  styles,
  titleSize,
  subtitleSize
}: Props) => {
  const buttonClass = `bg-secondary hover:bg-glow2 hover:shadow-[0px_0px_34px_0px_rgba(255,255,255,0.2)] border-b-4 
     border-greyBorder ${styles}
     rounded-lg flex justify-start items-center cursor-pointer`;
  return (
    <div className={buttonClass} onClick={onClick}>
      {img && <img src={img} className="w-8 h-10" />}
      <div className="gap-1 flex flex-col">
        <div
          className={`flex flex-col font-bold justify-start ${titleSize} text-textColor`}
        >
          {title}
        </div>
        <div
          className={`flex flex-col justify-start items-center ${subtitleSize} text-textColor`}
        >
          {subtitle}
        </div>
      </div>
    </div>
  );
};

