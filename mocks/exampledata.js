const mockShows = [
    {
        "title":"Modern Family",
        "category":"Comedia",
        "image":"https://fng-resizer-qp.foxplay.com/resizer/resizer?service=fng&surl=http://fng-vod-qp.foxplay.com/dl/vol1/s/FNG_CP/p5290/2019-06-14-00-00-00/6004_hero_1x1_69713.png&h=89F39D4F526F5CF72413F957E266F09393398FC741F7FEDAD40EC7EBD00931B6&height=300&width=1&scalingMode=matchHeight"
    },
    {
        "title":"Yo soy Simón",
        "category":"DRAMA",
        "image":"https://fng-resizer-qp.foxplay.com/resizer/resizer?service=fng&surl=http://fng-vod-qp.foxplay.com/dl/vol1/s/FNG_CP/p384951ph0165227/2019-03-29-20-30-00/T384951_QP_1x1.png&h=79273F2B11ACB35F4EAD983ED0957E9050ED6504AF2E63321C41B95AF9915C12&height=300&width=1&scalingMode=matchHeight"
    },
    {
        "title":"Gaycation",
        "category":"DOCUMENTAL",
        "image":"https://fng-resizer-qp.foxplay.com/resizer/resizer?service=fng&surl=http://fng-vod-qp.foxplay.com/dl/vol1/s/FNG_CP/p6148/2019-05-20-17-00-00/gaycation_QP_1x1_v2.png&h=AE309C52F2ACA60277B57F22C0A2C8D4CC046C6A864ED80C87786BCB6BCBCFC0&height=300&width=1&scalingMode=matchHeight"
    },
    {
        "title":"The passage",
        "category":"DRAMA",
        "image":"https://fng-resizer-qp.foxplay.com/resizer/resizer?service=fng&surl=http://fng-vod-qp.foxplay.com/dl/vol1/s/FNG_CP/p6328/2019-04-01-10-00-00/432221_432217_QP_1x1.png&h=8A30189FA3060C1073FA823984B1723FD0A0E28B52CD1673E1FD9265E1FEF7A3&height=300&width=1&scalingMode=matchHeight"
    },
    {
        "title":"ABC",
        "category":"DRAMA",
        "image":"https://fng-resizer-qp.foxplay.com/resizer/resizer?service=fng&surl=http://fng-vod-qp.foxplay.com/dl/vol1/s/FNG_CP/p6339/2019-04-15-06-30-00/400607_400606_QP_1x1.png&h=A3876069FB16FC07168B7ADA1C4B6FD7577EE8D8710F0E164EF450FBF8F82C73&height=300&width=1&scalingMode=matchHeight"
    },
    {
        "title":"Modern Family",
        "category":"Comedia",
        "image":"https://fng-resizer-qp.foxplay.com/resizer/resizer?service=fng&surl=http://fng-vod-qp.foxplay.com/dl/vol1/s/FNG_CP/p5290/2019-06-14-00-00-00/6004_hero_1x1_69713.png&h=89F39D4F526F5CF72413F957E266F09393398FC741F7FEDAD40EC7EBD00931B6&height=300&width=1&scalingMode=matchHeight&var=1"
    },
    {
        "title":"Yo soy Simón",
        "category":"DRAMA",
        "image":"https://fng-resizer-qp.foxplay.com/resizer/resizer?service=fng&surl=http://fng-vod-qp.foxplay.com/dl/vol1/s/FNG_CP/p384951ph0165227/2019-03-29-20-30-00/T384951_QP_1x1.png&h=79273F2B11ACB35F4EAD983ED0957E9050ED6504AF2E63321C41B95AF9915C12&height=300&width=1&scalingMode=matchHeight&var=1"
    },
    {
        "title":"Gaycation",
        "category":"DOCUMENTAL",
        "image":"https://fng-resizer-qp.foxplay.com/resizer/resizer?service=fng&surl=http://fng-vod-qp.foxplay.com/dl/vol1/s/FNG_CP/p6148/2019-05-20-17-00-00/gaycation_QP_1x1_v2.png&h=AE309C52F2ACA60277B57F22C0A2C8D4CC046C6A864ED80C87786BCB6BCBCFC0&height=300&width=1&scalingMode=matchHeight&var=1"
    },
    {
        "title":"The passage",
        "category":"DRAMA",
        "image":"https://fng-resizer-qp.foxplay.com/resizer/resizer?service=fng&surl=http://fng-vod-qp.foxplay.com/dl/vol1/s/FNG_CP/p6328/2019-04-01-10-00-00/432221_432217_QP_1x1.png&h=8A30189FA3060C1073FA823984B1723FD0A0E28B52CD1673E1FD9265E1FEF7A3&height=300&width=1&scalingMode=matchHeight&var=1"
    },
    {
        "title":"ABC",
        "category":"DRAMA",
        "image":"https://fng-resizer-qp.foxplay.com/resizer/resizer?service=fng&surl=http://fng-vod-qp.foxplay.com/dl/vol1/s/FNG_CP/p6339/2019-04-15-06-30-00/400607_400606_QP_1x1.png&h=A3876069FB16FC07168B7ADA1C4B6FD7577EE8D8710F0E164EF450FBF8F82C73&height=300&width=1&scalingMode=matchHeight&var=1"
    },
    {
        "title":"Modern Family",
        "category":"Comedia",
        "image":"https://fng-resizer-qp.foxplay.com/resizer/resizer?service=fng&surl=http://fng-vod-qp.foxplay.com/dl/vol1/s/FNG_CP/p5290/2019-06-14-00-00-00/6004_hero_1x1_69713.png&h=89F39D4F526F5CF72413F957E266F09393398FC741F7FEDAD40EC7EBD00931B6&height=300&width=1&scalingMode=matchHeight&var=2"
    },
    {
        "title":"Yo soy Simón",
        "category":"DRAMA",
        "image":"https://fng-resizer-qp.foxplay.com/resizer/resizer?service=fng&surl=http://fng-vod-qp.foxplay.com/dl/vol1/s/FNG_CP/p384951ph0165227/2019-03-29-20-30-00/T384951_QP_1x1.png&h=79273F2B11ACB35F4EAD983ED0957E9050ED6504AF2E63321C41B95AF9915C12&height=300&width=1&scalingMode=matchHeight&var=2"
    },
    {
        "title":"Gaycation",
        "category":"DOCUMENTAL",
        "image":"https://fng-resizer-qp.foxplay.com/resizer/resizer?service=fng&surl=http://fng-vod-qp.foxplay.com/dl/vol1/s/FNG_CP/p6148/2019-05-20-17-00-00/gaycation_QP_1x1_v2.png&h=AE309C52F2ACA60277B57F22C0A2C8D4CC046C6A864ED80C87786BCB6BCBCFC0&height=300&width=1&scalingMode=matchHeight&var=2"
    },
    {
        "title":"The passage",
        "category":"DRAMA",
        "image":"https://fng-resizer-qp.foxplay.com/resizer/resizer?service=fng&surl=http://fng-vod-qp.foxplay.com/dl/vol1/s/FNG_CP/p6328/2019-04-01-10-00-00/432221_432217_QP_1x1.png&h=8A30189FA3060C1073FA823984B1723FD0A0E28B52CD1673E1FD9265E1FEF7A3&height=300&width=1&scalingMode=matchHeight&var=2"
    },
    {
        "title":"ABC",
        "category":"DRAMA",
        "image":"https://fng-resizer-qp.foxplay.com/resizer/resizer?service=fng&surl=http://fng-vod-qp.foxplay.com/dl/vol1/s/FNG_CP/p6339/2019-04-15-06-30-00/400607_400606_QP_1x1.png&h=A3876069FB16FC07168B7ADA1C4B6FD7577EE8D8710F0E164EF450FBF8F82C73&height=300&width=1&scalingMode=matchHeight&var=2"
    }    
];

export default mockShows;