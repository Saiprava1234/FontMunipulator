leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(450,400);
    video.position(30, 190);

    canvas = createCanvas(450,400);
    canvas.position(680,180);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('PoseNet is Initialized!');
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);
    }
}
function draw(){
    background('#ffff9b');
    textSize(difference);
    fill('#800080');
    text('Saiprava', 50, 350);
    document.getElementById("fontsize").innerHTML = "Size of the text will be = " + difference + "px";
}
