xPing = "";
yPing = "";
rws = "";

function setup()
{
    canvas = createCanvas(700,600);
    canvas.parent('canvas');

    video = createCapture(VIDEO);
    video.size(700, 600);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}


function draw()
{
    image(video, 0, 0, 700, 600);

    if(rws > 0.2)
    {
      fill('#eb3474');
      stroke('#000000');
      circle(rightWristX, rightWristY, 30);
    }
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    yPing = results[0].pose.rightWrist.y;
    xPing = results[0].pose.rightWrist.x;
    rws =  results[0].pose.keypoints[10].score;
    console.log(scoreRightWrist);
  }
}