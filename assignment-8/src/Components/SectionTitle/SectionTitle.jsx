const SectionTitle = ({ sectionTitle="", sectionBody = "" }) => {
    // console.log(sectionTitle)
    return (
        <div className="mb-5 text-2xl font-bold font-serif">
            <h1>{sectionTitle}</h1>
        </div>
    );
};

export default SectionTitle;