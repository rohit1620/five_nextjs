"use client"
import { usePathname } from "next/navigation"

export default function WebDev({children}){
   const currentPath= usePathname();
   console.log("currentPath",currentPath);
   
    return(
        <>
        {currentPath!== "/web_developer/backend"?<h1 style={{color:"yellow",backgroundColor:"black"}}>Comman Layout for Web development</h1>:null}
        
        {children}
        </>
    )
}