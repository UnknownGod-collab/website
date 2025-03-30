import React from "react";

const contributors = [
    { 
        name: "pataccon", 
        email: "",
        contact:"https://github.com/pataccon",
        image: "https://avatars.githubusercontent.com/u/159620533?v=4", 
        description: "Dev"
    },
    { 
        name: "SkillerSoul", 
        email: "",
        contact:"https://github.com/SkillerSoul",
        image: "https://avatars.githubusercontent.com/u/205003724?v=4", 
        description: "Dev"
    },
    { 
        name: "Grillo", 
        email: "", 
        contact:"https://github.com/",
        image: "https://imgs.search.brave.com/0UbG4XOGV__MhzDnZciqioKm2tdIWnX_87z5lLLqMxU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4w/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvc2V0LXVpLWFw/cC1hbmRyb2lkLzMy/LzgtNTEyLnBuZw", 
        description: "Artist"
    },
    { 
        name: "JBruni", 
        email: "", 
        contact:"https://github.com/",
        image: "https://imgs.search.brave.com/0UbG4XOGV__MhzDnZciqioKm2tdIWnX_87z5lLLqMxU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4w/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvc2V0LXVpLWFw/cC1hbmRyb2lkLzMy/LzgtNTEyLnBuZw", 
        description: "Artist"
    }
];

function Cards() {
    return (
        <div className="row row-cols-1 row-cols-md-2 g-4 m-5">
            {contributors.map((contributor, index) => (
                <a href={contributor.contact}>
                <div key={index} className="col">
                    <div className="card">
                        <div className="card-body m-1">
                            <h4 className="card-title">{contributor.name}</h4>
                            <div className="text-center">
                                <img 
                                    src={contributor.image} 
                                    className="rounded-circle" 
                                    alt={contributor.name} 
                                    height="150" 
                                    width="150" 
                                    />
                            </div>
                            <p className="card-text m-3">{contributor.description}</p>
                        </div>
                    </div>
                </div>
                </a>
            ))}
        </div>
    );
}

export default Cards;
