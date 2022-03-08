import React from 'react';
import LastMovieInDb from './LastMovieInDb';
import GenresInDb from './GenresInDb';
import LastUser from './lastUser';

function ContentRowCenter(){
    return (
        <div className="row">
            
            {/*<!-- Last Movie in DB -->*/}
            <LastMovieInDb />
            <LastUser />
            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- Genres in DB -->*/}
            <GenresInDb lg = "12"/>

        </div>
    )
}

export default ContentRowCenter;