noseX=0;
noseY=0;
function preload(){
    clown_nose=loadImage("https://i.postimg.cc/SRp0SxYF/Clown-nose-large-removebg-preview.png")
}
function draw(){
    image(video,0,0,300,300);
    image(clown_nose,noseX-19,noseY-19,40,40);
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotResults);
}
function take_snapshot(){
    save("myfilter.png");
}
function modelLoaded(){
    console.log("poseNet is Initialized");
}
function gotResults(results){
if(results.length>0){
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("noseX="+results[0].pose.nose.x);
    console.log("noseY="+results[0].pose.nose.y);
}
}