import React from 'react';

const SingleData = ({animal}) => {
    // const{animal} = props;
    console.log(animal);
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl bg-cyan-300 mt-4 text-black">
                <figure className="px-10 pt-10">
                    <img src={animal.avatar} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{animal.first_name} {animal.last_name}</h2>
                    <p>Technical Skill: {animal.key_skill}</p>
                    <p>Title: {animal.employment.title}</p>
                    <div className="card-actions">
                        <button className="btn btn-secondary">Added</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleData;