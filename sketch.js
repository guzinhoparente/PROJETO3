let cor;
let circuloY;
let circuloX;

function setup() {
  createCanvas(400, 400);
   background("rgb(228,50,50)");
  cor=color(random(0,255),random(0,255),random(0,255));
  circuloX = [0,0,0];
  circuloY = [random(height),random(height),random(height)]
}
  
function draw() {
  for (let quantos in circuloX){
    circle(circuloX[quantos],circuloY[quantos] ,50)
    
    circuloX[quantos]+= random(0,3);
    circuloY[quantos]+= random(-3,3);
    
    if (circuloX[quantos] >= width){
    circuloX[quantos] = 0;
    circuloY[quantos] = random(height);
  }

    
  }

  
   fill(cor);
  
  if(mouseIsPressed) {
    
    cor=color(random(0,255),random(0,255),random(0,255),random(0,100));
    
 }
  

}
