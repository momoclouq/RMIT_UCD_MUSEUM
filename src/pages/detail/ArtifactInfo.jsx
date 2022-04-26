const ArtifactInfo = ({name, description, author}) => {
    return (
        <div className="bg-stone-700 text-white basis-full md:basis-2/5 p-10">
            <div className="text-4xl font-light pb-10 text-right">{name}</div>
            <div className="font-extralight pb-10 text-right">{description}</div>
            <div className="text-right hover:underline hover:underline-offset-8">{author}</div>
        </div>
    )
}

export default ArtifactInfo;