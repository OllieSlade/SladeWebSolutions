export default function project({imageSrc, imageAlt, projectName, projectLink}) {
    return (
        <div className=" px-8 text-center max-w-full">
            <div className="relative h-auto mx-auto border-gray-800 bg-gray-800 border-[8px] rounded-t-xl max-w-[301px] md:max-w-[512px]">
                <div className="rounded-lg overflow-hidden h-auto bg-gray-800">								
                        <img loading="lazy" src={imageSrc} width="854" height="474" className="block w-full rounded-lg" alt={imageAlt}/>
                </div>
            </div>
            <div className="relative mx-auto bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
                <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
            </div>
            <p className="font-semibold text-xl uppercase pt-3 pb-6">{projectName}</p>
            <a className="button text-lg" target="_blank" href={projectLink}>Visit Website</a>
        </div>
    )
        
}