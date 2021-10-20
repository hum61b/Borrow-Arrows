function Health(x, y,value,length,color1,color2) {
    this.x = x || 0;
    this.y = y || 0;
    this.color1 = color1 || "#696969";//填充颜色
	this.color2 = color2 || "#999999";//描边颜色
	this.value = value;//当前值
	this.length = length;//最大值
}
Health.prototype = {
   stroke: function (cxt) {
        cxt.save();
        cxt.translate(this.x, this.y);
        cxt.fillStyle = this.color1;
		cxt.strokeStyle = this.color2;
        cxt.lineWidth = 2;
		for(var i = 0;i<this.value;i++)
			cxt.fillRect(i*20,0,20,20);  
		for(var i = 0;i<this.length;i++)
			cxt.strokeRect(i*20,0,20,20);  				
        cxt.restore();
    },
    fill: function (cxt) {
        cxt.save();
        cxt.translate(this.x, this.y);
        cxt.fillStyle = this.color1;
		cxt.strokeStyle = this.color2;
        cxt.lineWidth = 2;
		for(var i = 0;i<this.value;i++)
			cxt.fillRect(i*20,0,20,20);  
		for(var i = 0;i<this.length;i++)
			cxt.strokeRect(i*20,0,20,20);  				
        cxt.restore();
    }
	
};
