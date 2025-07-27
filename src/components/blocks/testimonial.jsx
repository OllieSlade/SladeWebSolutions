export default function project({reviewText, reviewerName, companyName, year, companyLink}) {
    return (
        <div class="bg-black text-offWhite py-8 px-8 flex flex-col justify-between">
            <p class="md:text-xl font-light">{reviewText}</p>
            <div class="justify-self-end">
                <p class="font-semibold text-2xl uppercase pt-3">{reviewerName}</p>
                <a target="_blank" class=" italic" href={companyLink}>{companyName}</a>
                <p>{year}</p>
            </div>
        </div>
    )
}