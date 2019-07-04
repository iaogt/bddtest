const Video = () => (
    <div>
        <div class="jumbotron" align="center">
            <img src="https://fng-resizer-qp.foxplay.com/resizer/resizer?service=fng&surl=http://fng-vod-qp.foxplay.com/dl/vol1/s/FNG_CP/p6328/2019-04-01-10-00-00/432221_432217_QP_1x1.png&h=8A30189FA3060C1073FA823984B1723FD0A0E28B52CD1673E1FD9265E1FEF7A3&height=400&width=1&scalingMode=matchHeight&var=1"/>
        </div>
        <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item">
                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#content" role="tab" aria-controls="home" aria-selected="true">Content Details</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="profile-tab" data-toggle="tab" href="#season" role="tab" aria-controls="profile" aria-selected="false">Season</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="messages-tab" data-toggle="tab" href="#clips" role="tab" aria-controls="messages" aria-selected="false">Clips</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="settings-tab" data-toggle="tab" href="#related" role="tab" aria-controls="settings" aria-selected="false">Related</a>
            </li>
        </ul>
        <div class="tab-content">
            <div class="tab-pane active" id="content" role="tabpanel" aria-labelledby="home-tab">
            <ul>
                <li>Name</li>
                <li>Description</li>
                <li>Rating</li>
            </ul>
            </div>
            <div class="tab-pane" id="season" role="tabpanel" aria-labelledby="profile-tab"></div>
            <div class="tab-pane" id="clips" role="tabpanel" aria-labelledby="messages-tab"></div>
            <div class="tab-pane" id="related" role="tabpanel" aria-labelledby="settings-tab"></div>
        </div>
    </div>
);

export default Video;