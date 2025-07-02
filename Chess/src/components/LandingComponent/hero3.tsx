import { GreenButton } from "../uiComponents/Button";

export default function Hero3(){
    return<div className="bg-grey3 gap-32 flex h-[496px] rounded px-14 py-8 justify-between">
        <img className="w-[400px] h-[410px]" 
        src="https://www.chess.com/bundles/web/images/web/board-lessons.825946d3@2x.png"/>
        <div className="flex justify-center items-center flex-col gap-10">
            <div className="text-white font-bold text-[35px] mt-6">Take Chess Lessons</div>
            <GreenButton title="Start Lessons"
            onClick={()=>{}}
            styles="px-[20px] py-[10px]"
            titleSize="text-[25px]"
            />
            <div className="flex mt-7 gap-10">
                <img src="https://www.chess.com/bundles/web/images/faces/anna-rudolf.193d08a5.jpg"/>
                <div className="text-white flex justify-center flex-col items-start gap-3">
                    <div>"Chess.com lessons make it easy to learn to play, then challenge you to continue growing."</div>
                    <div className="text-white flex gap-2">
                        <span className="bg-red-900 rounded-sm text-[12px] flex justify-center items-center p-0.25 font-bold">IM</span>
                        <span>Anna Rudolf</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
}