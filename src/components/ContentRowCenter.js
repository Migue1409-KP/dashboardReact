import React from 'react';
import LastMovieInDb from './LastMovieInDb';
import GenresInDb from './GenresInDb';
import LastUser from './lastUser';
import Chart from './Chart';

function ContentRowCenter(){
    return (
        <div className="row">
            
            {/*<!-- Last Movie in DB -->*/}
            <LastMovieInDb />
            <LastUser />
            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- Genres in DB -->*/}
            <GenresInDb />

            <Chart name = "user"/>

        </div>
    )
}

export default ContentRowCenter;