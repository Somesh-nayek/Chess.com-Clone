import { logo} from "../../assets";
import { Search } from "../../assets/search";
import { Support } from "../../assets/support";
import { World } from "../../assets/world";
import { sidebar } from "../../constants";
import { BlackButton, GreenButton } from "../uiComponents/Button";

export const Sidebar = () => {
  return (
    <div className="flex flex-col text-white p-3 justify-between h-screen overflow-hidden">
      <div>
      <a className="" href="https://www.chess.com/"><img className="w-[120px] h-[37px]" src={logo}></img></a>
      <ul className="flex flex-col items-center justify-center gap-6 my-6">
        {sidebar.map((item,key) => {
          return <a key={key} className="flex w-full items-center gap-2 font-bold"
          href={item.link}><img className="w-6 h-6" src={item.icon}></img>{item.title}</a> 
        })}
      </ul>
      <div className="flex rounded-sm bg-grey2 pl-3 py-1 placeholder:text-textColor border-[1px] border-textColor" >
        <input className="bg-grey2 w-[70px] text-textColor w-xs border-none" placeholder="Search"></input>
        <Search/>
      </div>
      <GreenButton title="SignUp" onClick={()=>{} } styles="flex mt-6 mb-3 rounded-md justify-center items-center px-1 py-[8px]" titleSize="text-sm"></GreenButton>
      <BlackButton title="Log In" onClick={()=>{}} styles="flex rounded-md justify-center items-center px-1 py-[8px]" titleSize="text-sm"></BlackButton>
      </div>
      <div>
        <div className="flex text-textColor items-center gap-1">
          <World/>
          <span className="text-sm">English</span>
        </div>
        <div className="flex text-textColor items-center gap-1">
          <Support/>
          <span className="text-sm">Support</span>
        </div>
      </div>
    </div>
  );
};
