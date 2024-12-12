import { useNavigate } from "react-router-dom"

export const Landing=()=>{
    const navigate=useNavigate();
    return(
        <div className="flex">
            <div className="bg-[#262421] h-screen w-[9%]">
                side bar
            </div>
            <div className="bg-[#302e2b] h-screen w-[91%]">
                <div className="pt-[50px] px-[150px]">
                    <div className="flex">
                        <div>
                            <img src="https://www.chess.com/bundles/web/images/offline-play/standardboard.1d6f9426.png" 
                            className="h-[500] w-[500px]" />
                        </div>
                        <div className="pl-[100px]">
                            <div className="text-[50px] text-white"><b>Play Chess Online</b></div>
                            <div className="text-white text-[50px] flex justify-center"><b>on the #1 Site!</b></div>
                            <div className="pt-[20px] flex justify-between">
                                <div className="text-gray-400" >
                                    <b className="text-white">15,878,229 </b>
                                    Games Today
                                </div>
                                <div className="text-gray-400">
                                    <b className="text-white">125,424 </b>
                                    Playing Now
                                </div>
                            </div>
                            <div className="flex flex-col pt-[50]">
                                <button className="bg-[#81b64c] text-white rounded-[5px] flex flex-col justify-start p-[10px] mt-[40px]"
                                onClick={()=>{navigate("./Game")}} >
                                    <b className="text-[30px]">Play Online</b>
                                    Play with someone at your level
                                </button>
                                <button className="bg-[#454341]  text-white rounded-[5px] flex flex-col justify-start mt-7 p-[10px]">
                                <b className="text-[30px]">Play Computer</b>
                                Play vs customizable training bots
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}