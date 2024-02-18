

const KnowMoreSection = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen gap-10">
            <h3 className='font-mograch text-5xl'>So... do you want to know more about <span className='text-accent'>me?</span></h3>

            <div className="flex gap-5">
                <KnowMoreButton label='No' href='#contact-me' />
                <KnowMoreButton label='Yes' href='#about-me' />
            </div>
        </div>
    )
}

const KnowMoreButton = ({label, href = "#"}: {label: string, href: string}) => {
    return (
        <a className='text-2xl border border-off-white py-2 px-4 rounded-md hover:bg-off-white hover:text-background' href={href}>{label}</a>
    )
}

export { KnowMoreSection }