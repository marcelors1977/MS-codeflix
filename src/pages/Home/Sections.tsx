import React from "react";
import SectionSlider from "../../components/Video/SectionSlider";

const Sections: React.FunctionComponent = (props) => {
    return (
        <div>
            <SectionSlider title="Documentários" videos={[]}/>
            <SectionSlider title="Filmes" videos={[]}/>
            <SectionSlider title="Séries" videos={[]}/>
            <SectionSlider title="Novelas" videos={[]}/>
            <SectionSlider title="Esportes" videos={[]}/>
            <SectionSlider title="Comédia" videos={[]}/>
        </div>
    );
};

export default Sections;