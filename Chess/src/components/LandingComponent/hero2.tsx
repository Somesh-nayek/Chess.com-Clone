import { GreenButton } from "../uiComponents/Button";

export default function Hero2(){
    return<div className="bg-grey3 gap-32 flex h-[496px] rounded px-14 py-8 justify-between">
        <div className="flex justify-center items-center flex-col gap-10">
            <div className="text-white font-bold text-[35px] mt-6">Solve Chess Puzzles</div>
            <GreenButton title="Solve Puzzles"
            onClick={()=>{}}
            styles="px-[20px] py-[10px]"
            titleSize="text-[25px]"
            />
            <div className="flex mt-7 gap-10">
                <img src="https://www.chess.com/bundles/web/images/faces/hikaru-nakamura.e1ca9267.jpg"/>
                <div className="text-white flex justify-center flex-col items-start gap-3">
                    <div>"Puzzles are the best way to improve pattern recognition, 
                        and no site does it better."</div>
                    <div className="text-white flex gap-2">
                        <span className="bg-red-900 rounded-sm text-[12px] flex justify-center items-center p-0.25 font-bold">GM</span>
                        <span>Hikaru Nakamura</span>
                    </div>
                </div>
            </div>
        </div>
        <img className="w-[400px] h-[410px]" 
        src="https://www.chess.com/bundles/web/images/web/board-puzzles.4a54c49f@2x.png"/>
    </div>
}