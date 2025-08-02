export default async function Home() {

    return (
        <div className="container mx-auto">
            <div className="py-10 flex flex-col gap-10">
                <div className="flex flex-col gap-2">
                    <p className="text-6xl font-sync font-bold">Colors</p>
                    <div className="flex gap-5">
                        <div className="flex flex-col gap-1">
                            <h2 className="text-base tracking-wider font-titillium font-thin" >Primary Color (Background)</h2>
                            <div className="w-60 h-20 bg-yellow rounded-xl p-4 text-black border-yellow border">
                                Primary
                                #FFCC00
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h2 className="text-base tracking-wider font-titillium font-thin " >Secondary Color (Accent/Highlights)</h2>
                            <div className="w-60 h-20 bg-cod-gray rounded-xl text-white p-4 border border-mine-shaft">
                                Secondary
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h2 className="text-base tracking-wider font-titillium font-thin" >Text Color (Headings)</h2>
                            <div className="w-60 h-20 rounded-xl p-4 border border-gray">
                                Text
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h2 className="text-base tracking-wider font-titillium font-thin" >Text Color (Body)</h2>
                            <div className="w-60 h-20 bg-white/40 rounded-xl p-4">
                                Accent
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="flex flex-col gap-2">
                    <p className="text-6xl font-sync font-bold">Background Color</p>
                    <div className="flex  gap-5">
                        <div className="grid  gap-2">
                            <div className="h-20 w-20 rounded-xl bg-sunset-orange">
                            </div>
                            <div className="h-20 w-20 rounded-xl bg-web-orange">
                            </div>
                            <div className="h-20 w-20 rounded-xl bg-green-haze">
                            </div>
                        </div>
                        <div className="w-60 h-20 bg-yellow rounded-xl p-4 text-black ">
                            Button Color
                        </div>
                        <div className="w-100 h-20 rounded-xl border border-mine-shaft p-5 text-sm bg-cod-gray-2">
                            Background Color (Cards/Containers)
                        </div>

                        <div className="w-60 h-20 rounded-xl p-4 text-silver-chalice">
                            Label Color 2
                        </div>
                        <div className="w-60 h-20 rounded-xl p-4">
                            Transparent Color 1
                        </div>
                        <div className="w-60 h-20 rounded-xl p-4">
                            Transparent Color 2
                        </div>
                        <div className="w-60 h-20 rounded-xl p-4">
                            Black
                        </div>
                    </div>
                </div>
                <hr />
                <div className="flex flex-col gap-2">
                    <p className="text-6xl font-sync font-bold">Typography</p>
                    <div className="flex flex-col gap-3">
                        <h2 className="text-xl tracking-wider font-titillium font-thin" >Extra Large Title / H2</h2>
                        <p className="text-6xl font-sync font-bold">Aa</p>
                        <p className="text-5xl font-sync font-normal">Syne Regular</p>
                        <p className="text-5xl font-sync font-semibold">Syne Semi Bold</p>
                        <p className="text-xl font-sync font-bold">Syne Bold</p>
                        <p className="text-lg tracking-widest font-sync font-thin">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac efficitur elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam bibendum neque nec mauris fermentum, non ultrices enim varius. Fusce dapibus est in lacus sagittis dignissim.
                        </p>
                    </div>
                    <hr className="my-5" />
                    <div className="flex flex-col gap-3">
                        <p className="text-6xl font-titillium font-bold">Aa</p>
                        <p className="text-5xl font-titillium font-normal">Titillium Web Regular</p>
                        <p className="text-5xl font-titillium font-semibold">Titillium Web Semi Bold</p>
                        <p className="text-xl font-titillium font-bold">Titillium Web Bold</p>
                        <h2 className="text-xl font-titillium tracking-wider font-thin" >Extra Large Title / H2</h2>
                    </div>
                    <hr className="my-5" />
                    <div className="flex flex-col gap-3">
                        <p className="text-6xl font-nunito font-bold">Aa</p>
                        <p className="text-5xl font-nunito font-normal">Nunito Regular</p>
                        <p className="text-5xl font-nunito font-semibold">Nunito Semi Bold</p>
                        <p className="text-xl font-nunito font-bold">Nunito Bold</p>
                        <h2 className="text-xl font-nunito font-thin tracking-wider" >Extra Large Title / H2</h2>

                    </div>
                    <hr className="my-5" />
                    <div className="flex flex-col gap-3">
                        <p className="text-6xl font-rajdhani font-bold">Aa</p>
                        {/* <p className="text-5xl font-nunito font-normal">Nunito Regular</p>
                        <p className="text-5xl font-nunito font-semibold">Nunito Semi Bold</p>
                        <p className="text-xl font-nunito font-bold">Nunito Bold</p>
                        <h2 className="text-xl font-nunito font-thin tracking-wider" >Extra Large Title / H2</h2>
                        <p className="text-6xl font-rajdhani font-bold">The five boxing wizards jump quickly.</p> */}
                    </div>

                </div>
                <div className="text-4xl font-sync">
                    https://99webpage.com/theme-review/landingpage/smooth/index.html
                </div>
                <div className="text-4xl font-sync">
                    https://www.warp.dev/
                </div>
                <div className="text-4xl font-sync">
                    https://readyplayer.me/
                </div>


            </div>

        </div>
    )
}