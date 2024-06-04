let xBolinha=100;
let yBolinha=200;
let diametro=15;
let raio=diametro/2;


let velocidadexBolinha =4;
let velocidadeyBolinha=4;

//variáveis da raquete

let xraquete=5;
let yraquete=150;
let raqueteComprimento=10;
let raqueteAltura=90;


//variáveis do oponenente
let xraqueteOponente=585;
let yraqueteOponente=150;
let velocidadeYOponente;


//placar d jogo
let meusPontos=0;
let pontosOponente=0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xraquete,yraquete);
  mostraRaquete(xraqueteOponente,yraqueteOponente);
  movimentaMinhaRaquete();
  movimentaMinhaRaquete();
  verificaColisaoRaquete();
   verificaColisaoRaqueteOponente();
  movimentaRaqueteOponente();
  incluirPlacar();
  marcaPontos();

}

function mostraBolinha(){
   circle(xBolinha,yBolinha,diametro);
}

function movimentaBolinha(){
   xBolinha+=velocidadexBolinha;
  yBolinha+=velocidadeyBolinha;
}

function verificaColisaoBorda(){
 if(xBolinha+raio>width ||xBolinha-raio<0){
   velocidadexBolinha*=-1;
 }
  if(yBolinha+raio>height||yBolinha-raio<0){
   velocidadeyBolinha*=-1;
 }
}


function mostraRaquete(x,y){
  rect(x,y,raqueteComprimento,raqueteAltura);
}



function movimentaMinhaRaquete(){
  if (keyIsDown(UP_ARROW) && yraquete-raqueteComprimento>=0){
    yraquete-=10;
  }
   if (keyIsDown(DOWN_ARROW)&&yraquete+raqueteComprimento<350){
    yraquete+=10;
   
  } 
}

function verificaColisaoRaquete(){
  if((xBolinha-raio<xraquete+raqueteComprimento) && 
     (yBolinha-raio<yraquete+raqueteAltura) && (yBolinha+raio>yraquete)){
    velocidadexBolinha*=-1; 
  }
}

function verificaColisaoRaqueteOponente(){
  
  if(xBolinha-raio>xraqueteOponente-raqueteComprimento)    {
    velocidadexBolinha*=-1; 
  }
}




 function movimentaRaqueteOponente(){
   velocidadeYOponente=yBolinha-yraqueteOponente+raqueteComprimento/2 -50;
   yraqueteOponente+=velocidadeYOponente;
 }

function incluirPlacar(){
  textSize(16);
  textAlign(CENTER);
  fill("white")
  text(meusPontos,278,26);
  text(pontosOponente,321,26);
  
}

function marcaPontos(){
  if(xBolinha>590){
    meusPontos+=1;
  }
  
  if(xBolinha<5){
    pontosOponente+=1;
  }
}