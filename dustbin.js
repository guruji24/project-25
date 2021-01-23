class Dustbin{
	constructor(x,y){
		var options = {
			isStatic:true
		}

		this.w = 40;
		this.h = 180;
		this.x=x;
		this.y=y;
		this.left = Bodies.rectangle(this.x-60,this.y,40,100, options);
		this.right = Bodies.rectangle(this.x+60,this.y,40,100, options);
		this.bottom= Bodies.rectangle(this.x,this.y+40,100,20, options);
	
		this.image=loadImage("dustbin.png")
		World.add(world,this.left);
		World.add(world,this.right);
		World.add(world,this.bottom);
		}
		display(){
		push();
		translate(this.x,this.y);
		imageMode(CENTER);
		fill("yellow");
		image(this.image,0,0,this.h,this.h+20)
		pop();
		}
}