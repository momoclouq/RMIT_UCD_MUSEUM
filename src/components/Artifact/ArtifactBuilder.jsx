import image1 from "../../images/artifact_1.png";
import image2 from "../../images/artifact_2.png";
import image3 from "../../images/artifact_3.png";
import image4 from "../../images/artifact_4.png";
import image5 from "../../images/artifact_5.png";
import image6 from "../../images/artifact_6.jpg"


const artifacts = [
    {
        index: 1,
        name: "Chalcolithic pottery",
        description: "In the stone age, this item belonged to ancient communities in Portugal. It was found in a cave located on the top of a hill where it is safe for people to settle and live. The item is likely equipment that is used for their daily activities.",
        author: "Unknown",
        image: image1,
        component: (
            <div className="custom-wrapper sketchfab-embed-wrapper"> 
                <iframe 
                    className="custom-iframe"
                    title="Chalcolithic Pottery, Escoural Cave, Portugal" 
                    frameBorder="0" 
                    allowfullscreen 
                    mozallowfullscreen="true" 
                    webkitallowfullscreen="true" 
                    allow="autoplay; fullscreen; xr-spatial-tracking" 
                    xr-spatial-tracking 
                    execution-while-out-of-viewport 
                    execution-while-not-rendered web-share 
                    src="https://sketchfab.com/models/c4331247c68d45248932796d9c53f81f/embed"
                    > 
                </iframe>
            </div>
        ),
    },
    {
        index: 2,
        name: "copper furnace",
        description:
            "Group of objects of household appliances and musical instruments in the collection of fine art bronzes collected between 1913 and 1922, as a tribute to the members of the Citadel of Ho Chi Minh City - the who contributed a lot of effort and enthusiasm to the birth of Khai Dinh Museum, the predecessor of the Hue Museum of Royal Antiquities today. Through the furnaces of the Nguyen Dynasty, we can see a link in the growth of the kitchen king in the history of mankind in general and the history of our nation in particular. Some bronze furnaces were collected by Hoi Citadel in the early 20th century.",
        author: "Unknown",
        image: image2,
        component: (
            <div className="sketchfab-embed-wrapper"> <iframe title="1972.158 Pair of Guardian Kings (Nio)" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/2b0872d545f943e5aa1fcd23568cc405/embed"> </iframe> </div>
        ),
    },
    {
        index: 3,
        name: "Qianlong Emperor Incense Burner",
        description:
            "This burner is a gift of the Qianlong Emperor to a grand imperial temple. It is made of bronze and designed based on the vessel in the 1700s. The burner is decorated with many popular details of Chinese culture like the dragon and lion head.",
        author: "Unknown",
        image: image3,
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
        name: "Bronze age spearhead",
        description:
            "This spearhead represents the highest tradition of the British Bronze Age. The piece is undeniably beautiful: its shape is elegant and spare to the point of evoking modern art. The socket of the spearhead is hollow and includes two peg holes. These would allow the shaft of the spear to be replaced often without undue difficulty; a possession such as this would be much too valuable not to use again and again. When given to the Museum, there was in fact a small section of wood still remaining inside.",
        author: "Unknown",
        image: image4,
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
                    src="https://sketchfab.com/models/21a13eba33cb4343bab56f0c0f982876/embed"
                >
                    {" "}
                </iframe>
            </div>
        ),
    },
    {
        index: 5,
        name: "Crown of Napoleon",
        description:
            "The Crown of Napoleon was a coronation crown manufactured for Napoleon and used in his coronation as Emperor of the French on December 2, 1804. Napoleon called this crown the \"Crown of Charlemagne\", which was the name of the ancient royal coronation crown of France that had been destroyed during the French Revolution. This name allowed Napoleon to compare himself to the famed medieval monarch Charlemagne, King of the Franks and Holy Roman Emperor.",
        author: "Unknown",
        image: image5,
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
        name: "War Mask",
        description:
            "Masks for use in ritual dances and other ceremonies are well known in Tibet and Mongolia, and were made from papier-mâché, leather, or gilt copper. This mask is exceptionally rare, however, because it was made of iron for use in battle, and is one of only two known masks of this type with distinctly Mongolian or Tibetan features. Bronze and silver war masks were used during the Roman Empire and in the Ancient Near East. Iron war masks dating from the 10th to 13th century are known from southern Ukraine and Russia, from Iran during the 13th century to the 16th century, and Japan, where they were worn by Samurai warriors from the 15th to the 19th century. This example provides a unique Central Asian link in the use of war masks from the western steppes of Europe to the eastern edges of Asia.",
        author: "Mongolian or Tibetan ",
        image: image6,
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
