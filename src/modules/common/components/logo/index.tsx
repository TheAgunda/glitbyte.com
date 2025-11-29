"use client";
import Image from "next/image";
const Logo = () => {
    return (
        <div className="logo" style={{ fontFamily: "Gugi" }}>
            <Image src={'/svg/logo/logo.svg'} width={100} height={100} alt="" className="h-11 w-full" />
            {/* Glit<span className="text-white">Byte</span> */}
        </div>
    )
}

export default Logo;