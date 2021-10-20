function Ball(x,y,radius,color){
    this.x=x||0;
    this.y=y||0;
    this.radius = radius||12;
    this.color=color||"#393939";

    this.scaleX=1;
    this.scaleY=1;
}
Ball.prototype = {
    windFill:function(cxt){
        cxt.save();
        cxt.scale(this.scaleX,this.scaleY);
        cxt.strokeStyle=this.color;
        cxt.beginPath();
        cxt.arc(this.x,this.y,this.radius,0,360*Math.PI/180,false);
		cxt.font ="bold 20px 宋体";
		//cxt.fillText("风",this.x-cxt.measureText("风").width/2,this.y-cxt.measureText("风").height/2,cxt.measureText("风").width);
        cxt.closePath();
		cxt.fillText("风",this.x-cxt.measureText("风").width/2,this.y+this.radius/2,cxt.measureText("风").width);
        cxt.stroke();
        cxt.restore();
    },
	waterFill:function(cxt){
        cxt.save();
        cxt.scale(this.scaleX,this.scaleY);
        cxt.strokeStyle=this.color;
        cxt.beginPath();
        cxt.arc(this.x,this.y,this.radius,0,360*Math.PI/180,false);
		cxt.font ="bold 20px 宋体";
		//cxt.fillText("风",this.x-cxt.measureText("风").width/2,this.y-cxt.measureText("风").height/2,cxt.measureText("风").width);
        cxt.closePath();
		cxt.fillText("水",this.x-cxt.measureText("水").width/2,this.y+this.radius/2,cxt.measureText("水").width);
        cxt.stroke();
        cxt.restore();
    },
    addFill:function(cxt){
        cxt.save();
        cxt.scale(this.scaleX,this.scaleY);
        cxt.strokeStyle=this.color;
        cxt.beginPath();
		cxt.lineWidth = 1;
        cxt.arc(this.x,this.y,this.radius,0,360*Math.PI/180,false);
        cxt.closePath();
		cxt.stroke();
		
		cxt.beginPath();
		cxt.lineWidth = 2;
		cxt.moveTo(this.x-this.radius/2,this.y);
		cxt.lineTo(this.x+this.radius/2,this.y);
		cxt.moveTo(this.x,this.y-this.radius/2);
		cxt.lineTo(this.x,this.y+this.radius/2);
		cxt.stroke();
       
        cxt.restore();
    },
	starFill:function(cxt){
        cxt.save();
        cxt.scale(this.scaleX,this.scaleY);
        cxt.strokeStyle=this.color;
        cxt.beginPath();
		for(var i = 0; i<5; i++){
			cxt.lineTo(Math.cos((18+i*72)*Math.PI/180)*this.radius+this.x,-Math.sin((18+i*72)*Math.PI/180)*this.radius+this.y);
			cxt.lineTo(Math.cos((54+i*72)*Math.PI/180)*this.radius/2+this.x,-Math.sin((54+i*72)*Math.PI/180)*this.radius/2+this.y);
		}
	cxt.closePath();
        cxt.stroke();
        cxt.restore();
    }
};
