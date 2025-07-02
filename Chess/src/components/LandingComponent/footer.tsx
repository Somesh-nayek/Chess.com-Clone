import { footerItems, platform, socials } from "../../constants";

export const Footer = () => {
  return (
    <div>
      <div className="flex text-textColor justify-center items-center">
        {footerItems.map((item, key) => {
          return (
            <div
              className="flex justify-center items-center text-[#989795] font-bold"
              key={key}
            >
              <a className="text-[12px] font-bold" href={item.link}>
                {item.title}
              </a>
              {key != footerItems.length - 1 && (
                <span className="m-1 text-[#989795] text-lg font-bold">·</span>
              )}
            </div>
          );
        })}
      </div>
      <div className="flex justify-center items-center mt-2">
        <div className="flex justify-end items-end gap-3">
          {platform.map((element,key)=>{
            return<a key={key} href={element.link} className="flex justify-center items-center">
              <img className="w-6 h-6" src={element.icon}/>
            </a>
          })}
        </div>
        <div className="text-[#454340] mx-4 text-2xl flex justify-center items-center">|</div>
        <div className="flex justify-center items-center gap-3">
          {socials.map((soc,key)=>{
            return<a key={key} href={soc.link} className="flex justify-center items-center">
              <img className="w-6 h-6 flex justify-center items-center" src={soc.icon}/>
              </a>})
          }
         </div> 
      </div>
    </div>
  );
};
