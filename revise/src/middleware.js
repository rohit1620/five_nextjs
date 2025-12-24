import { NextResponse } from "next/server";
const isLoging=false;
export function middleware(request){
    // if(!isLoging && request.nextUrl.pathname!=='/home'){
     
    return NextResponse.redirect(new URL("/home",request.url))
    // }
}

export const config={
    matcher:["/web_developer/:path"]
}