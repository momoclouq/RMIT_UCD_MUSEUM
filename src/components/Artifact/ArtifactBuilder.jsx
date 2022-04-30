const artifacts = [
    {
        index: 1,
        name: "Statue of the Buddha",
        description:
            "The statue is handcrafted by the gifted follower, the color and the structure represents the presence of buddha in the spiritual world",
        author: "Quang Chau",
        image: "",
        component: (
            <div className="custom-wrapper sketchfab-embed-wrapper"> 
                <iframe 
                    className="custom-iframe"
                    title="SF Asian Art Museum - Statue #4" 
                    frameBorder="0" 
                    allowfullscreen 
                    mozallowfullscreen="true" 
                    webkitallowfullscreen="true" 
                    allow="autoplay; fullscreen; xr-spatial-tracking" 
                    xr-spatial-tracking 
                    execution-while-out-of-viewport 
                    execution-while-not-rendered web-share 
                    src="https://sketchfab.com/models/2b0872d545f943e5aa1fcd23568cc405/embed"
                    > 
                </iframe>
            </div>
        ),
    },
    {
        index: 2,
        name: "artifact 2",
        description:
            "As Julia said, it was the most expressive artwork for her. It took only about 5 minutes to paint to have the result that she wanted. The idea was to reflect our social connection with each other.",
        author: "Julie",
        component: (
            <div className="sketchfab-embed-wrapper"> <iframe title="1972.158 Pair of Guardian Kings (Nio)" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/2b0872d545f943e5aa1fcd23568cc405/embed"> </iframe> </div>
        ),
    },
    {
        index: 3,
        name: "artifact 3",
        description:
            "As Julia said, it was the most expressive artwork for her. It took only about 5 minutes to paint to have the result that she wanted. The idea was to reflect our social connection with each other.",
        author: "Julie",
        component: (
            <div className="sketchfab-embed-wrapper">
                <iframe
                    title="1972.158 Pair of Guardian Kings (Nio)"
                    frameborder="0"
                    allowfullscreen
                    mozallowfullscreen="true"
                    webkitallowfullscreen="true"
                    allow="autoplay; fullscreen; xr-spatial-tracking"
                    xr-spatial-tracking
                    execution-while-out-of-viewport
                    execution-while-not-rendered
                    web-share
                    src="https://sketchfab.com/models/2b0872d545f943e5aa1fcd23568cc405/embed"
                >
                    {" "}
                </iframe>
            </div>
        ),
    },
    {
        index: 4,
        name: "artifact 4",
        description:
            "As Julia said, it was the most expressive artwork for her. It took only about 5 minutes to paint to have the result that she wanted. The idea was to reflect our social connection with each other.",
        author: "Julie",
        component: (
            <div className="Esther’s scroll in a cover">
                <iframe
                    title="Chesspiece"
                    frameborder="0"
                    allowfullscreen
                    mozallowfullscreen="true"
                    webkitallowfullscreen="true"
                    allow="autoplay; fullscreen; xr-spatial-tracking"
                    xr-spatial-tracking
                    execution-while-out-of-viewport
                    execution-while-not-rendered
                    web-share
                    src="https://sketchfab.com/models/21a13eba33cb4343bab56f0c0f982876/embed"
                >
                    {" "}
                </iframe>
            </div>
        ),
    },
    {
        index: 5,
        name: "Artifact 5",
        description:
            "As Julia said, it was the most expressive artwork for her. It took only about 5 minutes to paint to have the result that she wanted. The idea was to reflect our social connection with each other.",
        author: "Julie",
        component: (
            <div className="sketchfab-embed-wrapper">
                <iframe
                    title="Chesspiece"
                    frameborder="0"
                    allowfullscreen
                    mozallowfullscreen="true"
                    webkitallowfullscreen="true"
                    allow="autoplay; fullscreen; xr-spatial-tracking"
                    xr-spatial-tracking
                    execution-while-out-of-viewport
                    execution-while-not-rendered
                    web-share
                    src="https://sketchfab.com/models/e9c0b9d501204ddcacf8eb5e8600ce4e/embed"
                >
                    {" "}
                </iframe>
            </div>
        ),
    },
    {
        index: 6,
        name: "Artifact 6",
        description:
            "As Julia said, it was the most expressive artwork for her. It took only about 5 minutes to paint to have the result that she wanted. The idea was to reflect our social connection with each other.",
        author: "Julie",
        component: (
            <div className="sketchfab-embed-wrapper">
                <iframe
                    title="Chesspiece"
                    frameborder="0"
                    allowfullscreen
                    mozallowfullscreen="true"
                    webkitallowfullscreen="true"
                    allow="autoplay; fullscreen; xr-spatial-tracking"
                    xr-spatial-tracking
                    execution-while-out-of-viewport
                    execution-while-not-rendered
                    web-share
                    src="https://sketchfab.com/models/e9c0b9d501204ddcacf8eb5e8600ce4e/embed"
                >
                    {" "}
                </iframe>
            </div>
        ),
    },
];

export const artifactBuilder = (artifactId) => {
    artifactId = parseInt(artifactId);

    if (isNaN(artifactId) || artifactId <= 0) return artifacts[0];

    return artifacts[artifactId - 1];
};
