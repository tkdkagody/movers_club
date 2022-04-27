import React,{ useState, useRef, useEffect} from "react";

export default function withClickOutside(WrappedComponent) {
    const Component = (props)=> {
        const [dropOpen, setDropOpen] = useState(false);
        const ref = useRef();

        useEffect(()=> {
            const handleClickOutside = (e) => {
                if(!ref.current.contains(e.target)) {
                    setDropOpen(false);
                }
                
            }
            document.addEventListener("mousedown", handleClickOutside);
        }, [ref]);
        //console.log(ref.current,"ref")
        return (
            <WrappedComponent 
                dropOpen={dropOpen} 
                setDropOpen={setDropOpen}
                ref={ref}
                {...props}
            />
        );

    };
    return Component
}

//스크립트 삭제 예정 => Register/SelectDropDown 주석 확인