import Image from "next/image";

const Info = () => {
    return (
        <div id="model-info" className="text-white w-full h-screen grid items-center content-center snap-start z-10 px-24 pt-12">
            <h1 className="text-6xl font-bold">Model Info</h1>
            <hr className="w-1/3 my-2" />
            <p>
                初めまして、松尾海秀です。<br />
                大学時代にはソフトウェア工学だけでなく、３DCGも学んできました。<br />
                この作品は私の３DCGモデリング作品の一つの<b>「Spaceship」</b>になります。<br />
            </p>
            <h2 className="font-bold text-2xl mt-4">Tools:</h2>
            <ul className="px-6 list-disc">
                <li>Autodesk Maya</li>
                <li>Adobe Substance Painter</li>
            </ul>
            <div className="w-1/3 relative flex justify-between gap-4 mt-4">
                <div className="w-1/2">
                    <h3 className="font-bold">Ambient Oculution</h3>
                    <div className="w-full aspect-video overflow-hidden relative border border-white">
                        <Image src="/img/AO.png" fill alt="ao" className="object-cover" />
                    </div>
                </div>
                <div className="w-1/2">
                    <h3 className="font-bold">Wireframe</h3>
                    <div className="w-full aspect-video overflow-hidden relative border border-white">
                        <Image src="/img/wire.png" fill alt="wire" className="object-cover" />
                    </div>
                </div>
            </div>
            <div className="w-1/3 mt-4 aspect-video overflow-hidden relative border border-white">
                <Image src="/img/render.png" fill alt="render" className="object-cover" />
            </div>
        </div>
    );
}

export default Info;