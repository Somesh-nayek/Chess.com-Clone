import {useNavigate } from "react-router-dom"
import { BlackButton, GreenButton } from "../uiComponents/Button";
import { pawn } from "../../assets";
export default function Hero1(){
    const navigate=useNavigate();
    return <div className="flex rounded-lg">
        <div>
            <img src="https://www.chess.com/bundles/web/images/offline-play/standardboard.1d6f9426.png" 
            className="h-[500] w-[500px]  rounded" />
        </div>
        <div className="pl-[100px]">
            <div className="text-[50px] text-white font-bold flex flex-col">Play Chess Online <span
            className="flex justify-center -translate-y-5">
                on the #1 Site!
                </span>
                </div>
            <div className=" flex justify-between mb-3">
                <div className="text-gray-400" >
                    <b className="text-white">15,878,229 </b>
                    Games Today
                </div>
                <div className="text-gray-400">
                    <b className="text-white">125,424 </b>
                    Playing Now
                </div>
            </div>
            <div className="flex flex-col">
                <GreenButton 
                title="Play Online" 
                subtitle="Play with someone at your level"
                onClick={()=>{navigate("/wannaPlay")}} 
                img={pawn}
                styles="px-7 mt-7 py-4 gap-8 "
                titleSize="text-3xl"
                subtitleSize=" text-sm "
                />
                <BlackButton
                title="Play Bots"
                subtitle="Play vs customizable training bots"
                onClick={()=>{}}
                img={pawn}
                styles="px-7 mt-7 py-4 gap-8"
                titleSize="text-3xl"
                subtitleSize="text-sm"
                />
            </div>
        </div>
    </div>
}