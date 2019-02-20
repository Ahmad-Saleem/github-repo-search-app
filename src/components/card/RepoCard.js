import React from 'react';

const RepoCard = (props) => {
    return(
            <div className='card'>
                <div className='card-header'>
                    <span>
                        <img src='https://avatars1.githubusercontent.com/u/34805763?v=4' style={{width: 36}} alt='' />
                    </span>
                    <spn>
                        Owner Name
                    </spn>
                    <span>  100 stars </span>
                </div>
                <div className='card-body'>
                    <h3><a href='#'>Repo Title</a></h3>
                    <p>
                        description ..
                    </p>
                </div>
                <div className='card-footer'>
                    <span> 23 open issues </span>
                    <span> 7 forks </span>
                    <span> Javascript </span>
                </div>                
            </div>                
    )
}

export default RepoCard;