function Arrow(x,y,color,angle)
{
    this.x = x||0;
    this.y = y||0;
    this.color = color||"black";
    this.angle = angle||0;
}
Arrow.prototype = {
   /* stroke:function(cxt){
        cxt.save();
        cxt.translate(this.x,this.y);
        cxt.rotate(this.angle);
        cxt.strokeStyle=this.color;
        cxt.beginPath();
        cxt.moveTo(0,0);
		cxt.lineTo(-35,0);
		cxt.moveTo(0,0);
		cxt.lineTo(-7,-7);
		cxt.moveTo(0,0);
		cxt.lineTo(-7,7);
		cxt.moveTo(-30,0);
		cxt.lineTo(-37,-7);
		cxt.moveTo(-30,0);
		cxt.lineTo(-37,7);
		cxt.moveTo(-25,0);
		cxt.lineTo(-32,-7);
		cxt.moveTo(-25,0);
		cxt.lineTo(-32,7);
		cxt.moveTo(-35,0);
		cxt.lineTo(-42,-7);
		cxt.moveTo(-35,0);
		cxt.lineTo(-42,7);
        cxt.closePath();
        cxt.stroke();
        cxt.restore();
    },*/
	fill:function(cxt){
        cxt.save();
        cxt.translate(this.x,this.y);
        cxt.rotate(this.angle);
        cxt.strokeStyle=this.color;
		cxt.lineWidth = 1;
        cxt.beginPath();
		
        cxt.moveTo(0,0);
		cxt.lineTo(-35,0);
		cxt.moveTo(0,0);
		cxt.lineTo(-7,-7);
		cxt.moveTo(0,0);
		cxt.lineTo(-7,7);
		cxt.moveTo(-30,0);
		cxt.lineTo(-37,-7);
		cxt.moveTo(-30,0);
		cxt.lineTo(-37,7);
		cxt.moveTo(-25,0);
		cxt.lineTo(-32,-7);
		cxt.moveTo(-25,0);
		cxt.lineTo(-32,7);
		cxt.moveTo(-35,0);
		cxt.lineTo(-42,-7);
		cxt.moveTo(-35,0);
		cxt.lineTo(-42,7);
		
		cxt.moveTo(-42,7);
		cxt.lineTo(-32,7);
		cxt.moveTo(-42,-7);
		cxt.lineTo(-32,-7);
        cxt.closePath();
       	cxt.stroke();
        cxt.restore();
    },
};