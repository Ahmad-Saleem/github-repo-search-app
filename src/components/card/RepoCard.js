import React from 'react';

const RepoCard = (props) => {
    const { name, owner: {avatar_url, login}, html_url, language, forks, open_issues, description, stargazers_count} = props.data;

    return(
            <div className='card'>
                <div className='card-header'>
                    <span>
                        <img src={avatar_url} style={{width: 36}} alt='' />
                    </span>
                    <span>
                        <h4>{login}</h4>
                    </span>
                    <span>  {stargazers_count} stars </span>
                </div>
                <div className='card-body'>
                    <h3><a href={html_url}>{name}</a></h3>
                    <p>
                        {description}
                    </p>
                </div>
                <div className='card-footer'>
                    <span> {open_issues} open issues </span>
                    <span> {forks} forks </span>
                    <span> {language} </span>
                </div>                
            </div>                
    )
}

export default RepoCard;