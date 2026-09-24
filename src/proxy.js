import { NextResponse } from "next/server"

export const proxy = request => {
    const {pathname}= request.nextUrl;
    if(!pathname.startsWith('/api/feedback')) {
        return NextResponse.json({
            status: 404
        })
    }
    return NextResponse.next()
}


// 404 status error dibe, 

export const config = {
    matcher: '/api/:path*'
}


// let say ami bollam raat 11 Tar por kawk access korte dibo na