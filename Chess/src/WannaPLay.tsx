import { BlackButton } from "./components/uiComponents/Button";
import { Chessboard } from "./assets";
import { useNavigate } from "react-router-dom";
export const WannaPlay= () => {
    const navigate = useNavigate();
    return (
      <div className="bg-black text-white flex min-h-screen justify-center gap-[200px] p-[90px] items-center">
        <img
          className="w-[512px] h-[512px] flex justify-center items-center"
          src={Chessboard}
        ></img>
        <BlackButton
          title="Play"
          titleSize="text-4xl"
          styles="p-5"
            onClick={()=>{navigate("/game")}}
        ></BlackButton>
      </div>
    );
}