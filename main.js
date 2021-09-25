Webcam.set({
    height:350,
    width:350,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("Camera");
Webcam.attach('#camera');

function takesnapshot(){
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML = '<img id = "Captured_image" src = "'+data_uri+'">';
    });
}

console.log('ml5 version:',ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/VPtAZXT-E/',modelLoaded);

function modelLoaded(){
    console.log('model Loaded!');
}

function check(){
    img = document.getElementById('Captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
if(error){
    console.error(error);
    
}
else{
console.log(results);
document.getElementById("result_object_name").innerHTML = results[0].label;
document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
}
}