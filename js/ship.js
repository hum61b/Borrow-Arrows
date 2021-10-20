function Ship(x,y,angle,r,t)
{
    this.x = x||0;
    this.y = y||0;
    this.angle = angle||0;
	this.r = r || 0;
	this.t = t || 0;
}
Ship.prototype = {
    stroke:function(cxt){
        cxt.save();
        cxt.translate(this.x,this.y);
        cxt.rotate(this.angle);
		if(this.r == 1){
			cxt.fillStyle = "red";
			cxt.strokeStyle = "red";
		}
		if(this.r == 0)
			cxt.strokeStyle = "black";
		if(this.r == 0)
    		cxt.fillStyle = "#999999";
		cxt.fillRect(65,0,35,20);
		cxt.fillRect(0,0,35,20);
		if(this.r == 0)
			cxt.fillStyle = "#696969";
		cxt.fillRect(0,20,100,10);
		if(this.r == 0)
			cxt.fillStyle = "#767676";
		cxt.fillRect(50,10,10,10);
			//cxt.beginPath();
		cxt.moveTo(43,20);
		cxt.lineTo(43,10);
		cxt.lineTo(55,10);
		cxt.lineTo(55,0);
		cxt.moveTo(45,10);
		cxt.lineTo(55,3);
		cxt.stroke();
		cxt.beginPath();
		cxt.arc(52,-3,5,0,Math.PI*2,true);
		cxt.closePath();
		cxt.stroke();
		
		if(this.t > 0){
			cxt.beginPath();
			cxt.arc(50,0,15,0,Math.PI,true);
			//cxt.closePath();
		}
        cxt.stroke();
        cxt.restore();
		
    },
	 checkMouse:function(mouse)
    {
        if(mouse.x<this.x+100&&mouse.x>this.x&&mouse.y>this.y&&mouse.y<this.y+30)
			return true;
		else
			return false;
    }
	
};