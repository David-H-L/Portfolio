import React, { useState, useRef, useEffect} from "react";

type Command = {
    text: string
    found: boolean
}

export function Bash() {
    const [command, setCommand ] = useState<Command[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const addCommand = (e:React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Enter"){
            let input = e.target as HTMLInputElement
            let value = input.value
            if(value === "clear"){
                setCommand([])
            }else {
                if(value !== ""){
              
                    setCommand([...command,{text: value, found:true}, {text: `bash: ${value}: command not found`, found:false}])
                }else {
         
                    setCommand([...command, {text: value, found: true}])
                }
                
            }
            input.value = ""
        }
        
    }

    useEffect(() => {
        if (containerRef.current) {
        containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [command]);

    const handleClickTerminal = () => {
        inputRef.current?.focus();
    };

    return(
        <div ref={containerRef} onClick={handleClickTerminal} className="h-55 overflow-y-hidden sm:h-65">
            
            {command && (
                command.map((item, i) => (
                <div key={i} className="flex font-bold text-[14px] gap-0.5 mx-1 overflow-hidden" > 
                    {item.found && (
                        <>
                            <p className="text-green-400">david@david</p>
                            <span className="text-white">:</span>
                            <span className="text-blue-500">~</span>
                            <span className="text-white">$</span>
                        </>
                    )}
                    <p className="text-white text-[14px] font-normal">{item.text}</p>
                </div>
                ))
                
            )}
         
            <div className="flex font-bold text-[14px] gap-0.5 mx-1 overflow-hidden" >
                <p className="text-green-400">david@david</p>
                <span className="text-white">:</span>
                <span className="text-blue-500">~</span>
                <span className="text-white">$</span>
                <input type="text" ref={inputRef} onKeyDown={addCommand} className="flex-1 outline-none font-normal text-white text-[14px]" />
            </div>
        </div>
    )
}