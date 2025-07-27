export default function project({reviewText, reviewerName, companyName, year, companyLink}) {
    return (
        <div className="bg-black text-offWhite py-8 px-8 flex flex-col justify-between">
            <p className="md:text-xl font-light">{reviewText}</p>
            <div className="justify-self-end">
                <p className="font-semibold text-2xl uppercase pt-3">{reviewerName}</p>
                <a target="_blank" className=" italic" href={companyLink}>{companyName}</a>
                <p>{year}</p>
            </div>
        </div>
    )
}