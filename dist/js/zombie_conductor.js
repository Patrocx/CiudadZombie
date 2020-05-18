//Objeto zombie conductor

var ZombieConductor = function(sprite, x, y, ancho, alto, velocidad, rangoMov, direccion) {
  Enemigo.call(this,sprite, x, y, ancho, alto, velocidad, rangoMov);
  this.direccion = direccion;
  
}
ZombieConductor.prototype = Object.create(Enemigo.prototype);
ZombieConductor.prototype.constructor = ZombieConductor;

ZombieConductor.prototype.mover = function(){
  //determina la direccion 
  if (this.direccion == "h") {
    this.x += this.velocidad;
  } else {
    this.y += this.velocidad;
  }
  
  //rangos de movimiento
  if ((this.x < this.rangoMov.desdeX) || (this.x > this.rangoMov.hastaX)){
    this.velocidad *= -1;
  }
  if ((this.y < this.rangoMov.desdeY) || (this.y > this.rangoMov.hastaY)) {
    this.y = this.rangoMov.desdeY;
  }
};