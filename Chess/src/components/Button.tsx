export const Button=({onClick,children}:{onClick:()=> void,children:React.ReactNode})=>{
    return <div className="bg-[#262522] w-[200px] h-[100px] flex justify-center items-center rounded-[10px]">
                <button onClick={onClick} className="text-[20px]">{children}</button>
    </div>
}