(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"O365_CARTABNDMCON_USA_160x600_BAN_Retargeting_NA_NA_NA_ANI_BN_NA_1_atlas_", frames: [[0,318,214,173],[216,318,218,160],[0,0,256,316],[258,0,163,156]]}
];


// symbols:



(lib.building160 = function() {
	this.initialize(ss["O365_CARTABNDMCON_USA_160x600_BAN_Retargeting_NA_NA_NA_ANI_BN_NA_1_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.grass160 = function() {
	this.initialize(ss["O365_CARTABNDMCON_USA_160x600_BAN_Retargeting_NA_NA_NA_ANI_BN_NA_1_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.people160 = function() {
	this.initialize(ss["O365_CARTABNDMCON_USA_160x600_BAN_Retargeting_NA_NA_NA_ANI_BN_NA_1_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.tree160 = function() {
	this.initialize(ss["O365_CARTABNDMCON_USA_160x600_BAN_Retargeting_NA_NA_NA_ANI_BN_NA_1_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.white = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgpSCXwMAAAkvgMBSkAAAMAAAEvgg");
	this.shape.setTransform(264.25,406.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.white, new cjs.Rectangle(0,-564.3,528.5,1942.5), null);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("ABNA/YgaAagnAIghgOYgigOgWghAAgkYAAglAXghAigNYAigNAnAJAZAbIgWAUYgRgSgagGgWAJYgXAJgPAWAAAYYAAAYAOAWAXAKYAWAJAagFARgSg");
	this.shape.setTransform(1.25,0.05,0.8766,0.8766,135.0007,0,0,1.2,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgmgTIBNAAIgnAmg");
	this.shape_1.setTransform(-5.3,2.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.2,-7.8,18.4,15.8);


(lib.tree = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.instance = new lib.tree160();
	this.instance.parent = this;
	this.instance.setTransform(14,-58,1.18,1.18);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.tree, new cjs.Rectangle(14,-58,192.4,184.1), null);


(lib.people = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_4
	this.instance = new lib.people160();
	this.instance.parent = this;
	this.instance.setTransform(13,17,0.848,0.848);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.people, new cjs.Rectangle(13,17,217.1,268), null);


(lib.ms = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#737373").s().p("AANApIAAgvIggAAIAABKIgVAAIAAhKIgQAAIAAgSIAQAAIAAgMQAAgJADgJQAFgIAHgDQAIgEAKgBQAGAAAFACIABAAIAAATIgBAAQgFgCgEgBQgGABgEAEQgDADgBAJIAAALIAgAAIAAgUIABgBIAUgGIABAAIAAAbIAWAAIAAASIgWAAIAAArQAAAJADADQADADAHABIAIgDIABgBIAAASIAAABIgHACIgJABQgcgBAAgdg");
	this.shape.setTransform(30.7515,0.0002);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#737373").s().p("AgiAjQgMgMAAgWQAAgXAMgMQANgOAWAAQAWAAAMANQAMAMAAAXQABAVgNAOQgNAOgWAAQgVgBgNgNgAgRgWQgHAIAAAPQAAAOAHAHQAGAJALAAQANAAAGgJQAGgHAAgPQAAgNgGgJQgHgHgMgBQgLAAgGAIg");
	this.shape_1.setTransform(20.1013,2.2002);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#737373").s().p("AgSAvIgMgEIAAgVIABAAQAFAEAHADQAGACAGAAQAOAAAAgJQAAgDgCgDIgFgDIgKgGQgJgDgEgEQgEgCgDgFQgCgFAAgHQAAgNAKgHQAKgJAPAAIAKABIAKAEIABAAIAAAUIgBgBQgEgDgGgCIgLgBQgGAAgCACQgEACAAAFQAAAEADADQACADAKAEQANAGAFAFQAGAGAAAKQAAAMgKAIQgKAJgQAAIgNgCg");
	this.shape_2.setTransform(11.3262,2.2002);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#737373").s().p("AgiAjQgMgMAAgWQAAgXANgMQAMgOAWAAQAWAAAMANQAMANAAAWQABAVgNAOQgOAOgVAAQgVgBgNgNgAgRgWQgHAIAAAPQAAAOAHAHQAGAJAMAAQALAAAHgJQAGgIAAgOQAAgNgHgJQgGgHgMgBQgLAAgGAIg");
	this.shape_3.setTransform(2.451,2.2002);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#737373").s().p("AgaAvIAAhcIAWAAIAAARIAAAAQADgIAEgEQAHgGAIAAQAFAAADABIABAAIAAAXIgBgBIgFgCIgHgBQgIAAgGAHQgEAJAAAKIAAAvg");
	this.shape_4.setTransform(-5.1241,2.1002);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#737373").s().p("AgNAqQgLgFgFgLQgGgKAAgNQAAgOAGgMQAGgMALgGQALgGAPgBIAMACIAKADIAAABIAAAUIgBAAQgKgIgLAAQgMAAgHAJQgIAIAAAOQAAANAIAIQAGAJANAAQAFAAAGgCIAKgGIABgBIAAAUIAAAAQgLAHgPAAQgNAAgKgHg");
	this.shape_5.setTransform(-13.0742,2.2002);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#737373").s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgDAFgBQAGABAEADQADADAAAFQAAAFgEAEQgDADgGABQgFgBgDgDg");
	this.shape_6.setTransform(-19.2743,-5.0999);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#737373").s().p("AgKAuIAAhbIAVAAIAABbg");
	this.shape_7.setTransform(-19.2993,2.1752);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#737373").s().p("AAwBAIABhoIgBAAIgCALIgnBdIgOAAIgmhcIgDgMIgBAAIABBoIgVAAIAAh/IAgAAIAlBhIAohhIAeAAIAAB/g");
	this.shape_8.setTransform(-29.4745,0.3502);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ms, new cjs.Rectangle(-36.4,-7,72.9,14.1), null);


(lib.cta_arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgYBIIA4g1IiBAAIAAgkICBAAIg5g2IAuAAIBNBHIhNBIg");
	this.shape.setTransform(0.1794,0.0354,0.576,0.576);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.cta_arrow, new cjs.Rectangle(-5.4,-4.1,11.2,8.3), null);


(lib.cta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.logo_box = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEBA00").s().p("AgyAzIAAhlIBlAAIAABlg");
	this.shape.setTransform(5.6253,5.6753);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#03A5EA").s().p("AgyAzIAAhlIBlAAIAABlg");
	this.shape_1.setTransform(-5.6749,5.6753);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7CBB01").s().p("AgyAzIAAhlIBlAAIAABlg");
	this.shape_2.setTransform(5.6253,-5.6249);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F25022").s().p("AgyAzIAAhlIBlAAIAABlg");
	this.shape_3.setTransform(-5.6749,-5.6249);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_box, new cjs.Rectangle(-10.8,-10.7,21.6,21.5), null);


(lib.grass = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.grass160();
	this.instance.parent = this;
	this.instance.setTransform(20,93,1.15,1.1958);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.grass, new cjs.Rectangle(20,93,250.7,191.39999999999998), null);


(lib.cta_glare = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_9 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.478)","rgba(255,255,255,0)"],[0,0.51,1],-125.2,-0.1,-58.4,-0.1).s().p("Ao9CXIAAktIR6AAIAAEtg");
	this.shape.setTransform(57.35,15.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.478)","rgba(255,255,255,0)"],[0,0.51,1],58.5,-0.9,125.3,-0.9).s().p("Ao9CXIAAktIR6AAIAAEtg");
	this.shape_1.setTransform(57.35,15.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},7).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,114.7,30.3);


(lib.building = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_5
	this.instance = new lib.building160();
	this.instance.parent = this;
	this.instance.setTransform(-76,-51,1.1818,1.1818);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.building, new cjs.Rectangle(-76,-51,252.9,204.5), null);


(lib.arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgYBIIA4g1IiBAAIAAgkICBAAIg5g2IAuAAIBNBHIhNBIg");
	this.shape.setTransform(5.6294,4.1854,0.576,0.576);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.arrow, new cjs.Rectangle(0,0,11.3,8.4), null);


(lib.replay_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{out:0,over:1,down:2,hit:3});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer 6
	this.instance = new lib.Tween7("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-18.15,16.65,1.754,1.754);
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-18.65,y:16.55,alpha:1},1).to({_off:true},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.8,0,32.699999999999996,30.6);


(lib.ms_logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ms();
	this.instance.parent = this;
	this.instance.setTransform(64.45,10.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEBA00").s().p("AgyAzIAAhlIBlAAIAABlg");
	this.shape.setTransform(16.425,16.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#03A5EA").s().p("AgyAzIAAhlIBlAAIAABlg");
	this.shape_1.setTransform(5.125,16.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7CBB01").s().p("AgyAzIAAhlIBlAAIAABlg");
	this.shape_2.setTransform(16.425,5.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F25022").s().p("AgyAzIAAhlIBlAAIAABlg");
	this.shape_3.setTransform(5.125,5.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ms_logo, new cjs.Rectangle(0,0,100.9,21.6), null);


(lib.cta_arrowmo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_52 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(52).call(this.frame_52).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhIBJQgegfAAgqQAAgpAegfQAfgeApAAQAqAAAfAeQAeAfAAApQAAAqgeAfQgfAegqAAQgpAAgfgeg");

	// Layer 4
	this.instance = new lib.arrow();
	this.instance.parent = this;
	this.instance.setTransform(-18.15,0.05,1,1,0,0,0,5.6,4.2);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).to({x:2.15},8,cjs.Ease.get(1)).wait(1).to({x:2},0).wait(1).to({x:1.35},0).wait(1).to({x:0.4},0).wait(1).to({x:-0.4},0).wait(1).to({x:-0.9},0).wait(1).to({x:-1.05},0).wait(1).to({x:-0.95},0).wait(1).to({x:-0.6},0).wait(1).to({x:-0.15},0).wait(1).to({x:0.25},0).wait(1).to({x:0.5},0).wait(1).to({x:0.55},0).wait(2).to({x:0.4},0).wait(1).to({x:0.25},0).wait(1).to({x:0.1},0).wait(1).to({x:0},0).wait(1).to({x:-0.05},0).wait(1).to({x:0},0).wait(1).to({x:0.05},0).wait(1).to({x:0.1},0).wait(1).to({x:0.15},0).wait(11));

	// Layer 2
	this.instance_1 = new lib.arrow();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.15,0.05,1,1,0,0,0,5.6,4.2);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-1.15},8,cjs.Ease.get(1)).wait(2).to({x:19.85},8,cjs.Ease.get(-1)).to({_off:true},1).wait(34));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.2,-4.1,20.5,8.3);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ms();
	this.instance.parent = this;
	this.instance.setTransform(14,-0.35);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEBA00").s().p("AgyAzIAAhlIBlAAIAABlg");
	this.shape.setTransform(-34.0247,5.6753);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#03A5EA").s().p("AgyAzIAAhlIBlAAIAABlg");
	this.shape_1.setTransform(-45.3249,5.6753);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7CBB01").s().p("AgyAzIAAhlIBlAAIAABlg");
	this.shape_2.setTransform(-34.0247,-5.6249);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F25022").s().p("AgyAzIAAhlIBlAAIAABlg");
	this.shape_3.setTransform(-45.3249,-5.6249);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-50.4,-10.7,100.9,21.5), null);


(lib.introAnim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// image_1
	this.image_1 = new lib.people();
	this.image_1.name = "image_1";
	this.image_1.parent = this;
	this.image_1.setTransform(102.5,27,0.72,0.7199,0,0,0,83.8,87.6);

	this.timeline.addTween(cjs.Tween.get(this.image_1).wait(1));

	// image_3
	this.image_3 = new lib.grass();
	this.image_3.name = "image_3";
	this.image_3.parent = this;
	this.image_3.setTransform(102.6,26.9,0.72,0.72,0,0,0,84.8,87);

	this.timeline.addTween(cjs.Tween.get(this.image_3).wait(1));

	// image_4
	this.image_4 = new lib.tree();
	this.image_4.name = "image_4";
	this.image_4.parent = this;
	this.image_4.setTransform(102.6,26.9,0.72,0.72,0,0,0,83.4,88.6);

	this.timeline.addTween(cjs.Tween.get(this.image_4).wait(1));

	// image_5
	this.image_5 = new lib.building();
	this.image_5.name = "image_5";
	this.image_5.parent = this;
	this.image_5.setTransform(102.5,26.9,0.72,0.72,0,0,0,-4.9,96.8);

	this.timeline.addTween(cjs.Tween.get(this.image_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.introAnim, new cjs.Rectangle(51.4,-79.5,185.1,248.6), null);


(lib.MSFT_Logocopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.logo = new lib.logo();
	this.logo.name = "logo";
	this.logo.parent = this;
	this.logo.setTransform(-0.35,1.4);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

}).prototype = getMCSymbolPrototype(lib.MSFT_Logocopy, new cjs.Rectangle(-50.8,-9.3,100.9,21.5), null);


(lib.MSFT_logo_sq = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.logo_box = new lib.logo_box();
	this.logo_box.name = "logo_box";
	this.logo_box.parent = this;
	this.logo_box.setTransform(-40,1.4);

	this.timeline.addTween(cjs.Tween.get(this.logo_box).wait(1));

}).prototype = getMCSymbolPrototype(lib.MSFT_logo_sq, new cjs.Rectangle(-50.8,-9.3,21.599999999999998,21.5), null);


(lib.MSFT_Logo_anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.ms.cache(-101,-22,202,44,1.8)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.ms = new lib.ms_logo();
	this.ms.name = "ms";
	this.ms.parent = this;
	this.ms.setTransform(-0.3,1.45,1,1,0,0,0,50.5,10.8);

	this.timeline.addTween(cjs.Tween.get(this.ms).wait(1));

}).prototype = getMCSymbolPrototype(lib.MSFT_Logo_anim, new cjs.Rectangle(-50.8,-9.3,100.9,21.5), null);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_71 = function() {
		exportRoot.tl1.play()
	}
	this.frame_85 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(71).call(this.frame_71).wait(14).call(this.frame_85).wait(2));

	// Layer_2
	this.instance_1 = new lib.MSFT_logo_sq();
	this.instance_1.parent = this;
	this.instance_1.setTransform(76.4,342,0.2471,0.2471,0,0,0,-39.9,1.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({regX:-40,regY:1.4,scaleX:4.0861,scaleY:4.0861,x:76.45,y:341.8},13,cjs.Ease.quadOut).to({x:-85.75},12,cjs.Ease.quadInOut).to({_off:true},1).wait(60));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_14 = new cjs.Graphics().p("AwFeMIAAtyMAz5AAAIAANyg");
	var mask_graphics_15 = new cjs.Graphics().p("AwReMIAAtyMAz6AAAIAANyg");
	var mask_graphics_16 = new cjs.Graphics().p("AwzeMIAAtyMAz6AAAIAANyg");
	var mask_graphics_17 = new cjs.Graphics().p("AxreMIAAtyMAz5AAAIAANyg");
	var mask_graphics_18 = new cjs.Graphics().p("Ay7eMIAAtyMAz6AAAIAANyg");
	var mask_graphics_19 = new cjs.Graphics().p("A0heMIAAtyMAz6AAAIAANyg");
	var mask_graphics_20 = new cjs.Graphics().p("A2eeMIAAtyMAz6AAAIAANyg");
	var mask_graphics_21 = new cjs.Graphics().p("A4aeMIAAtyMAz5AAAIAANyg");
	var mask_graphics_22 = new cjs.Graphics().p("A58eMIAAtyMAz5AAAIAANyg");
	var mask_graphics_23 = new cjs.Graphics().p("A58eMIAAtyMAz5AAAIAANyg");
	var mask_graphics_24 = new cjs.Graphics().p("A58eMIAAtyMAz5AAAIAANyg");
	var mask_graphics_25 = new cjs.Graphics().p("A58eMIAAtyMAz5AAAIAANyg");
	var mask_graphics_26 = new cjs.Graphics().p("A58eMIAAtyMAz5AAAIAANyg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(14).to({graphics:mask_graphics_14,x:229.2245,y:193.1532}).wait(1).to({graphics:mask_graphics_15,x:228.0904,y:193.1532}).wait(1).to({graphics:mask_graphics_16,x:224.6884,y:193.1532}).wait(1).to({graphics:mask_graphics_17,x:219.0182,y:193.1532}).wait(1).to({graphics:mask_graphics_18,x:211.08,y:193.1532}).wait(1).to({graphics:mask_graphics_19,x:200.8738,y:193.1532}).wait(1).to({graphics:mask_graphics_20,x:188.3995,y:193.1532}).wait(1).to({graphics:mask_graphics_21,x:175.9252,y:193.1532}).wait(1).to({graphics:mask_graphics_22,x:165.3116,y:193.1532}).wait(1).to({graphics:mask_graphics_23,x:149.4352,y:193.1532}).wait(1).to({graphics:mask_graphics_24,x:138.095,y:193.1532}).wait(1).to({graphics:mask_graphics_25,x:131.2908,y:193.1532}).wait(1).to({graphics:mask_graphics_26,x:129.0227,y:193.1532}).wait(1).to({graphics:null,x:0,y:0}).wait(60));

	// Layer 3
	this.instance_2 = new lib.MSFT_Logocopy();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-85.15,336.9,4.0861,4.0861,0,0,0,0.1,0.2);
	this.instance_2._off = true;

	this.instance_3 = new lib.MSFT_Logo_anim();
	this.instance_3.parent = this;
	this.instance_3.setTransform(78.1,336.9,4.0861,4.0861,0,0,0,0.1,0.2);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_2,this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).to({_off:true,x:78.1},12,cjs.Ease.quadInOut).wait(61));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},12,cjs.Ease.quadInOut).wait(32).to({scaleX:2.2943,scaleY:2.2943,x:-10.35,y:-546.1},22,cjs.Ease.quadInOut).to({_off:true},6).wait(1));

	// white
	this.instance_4 = new lib.white();
	this.instance_4.parent = this;
	this.instance_4.setTransform(297.95,339.3,1,1,0,0,0,485.4,406.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(62).to({x:-254.25},21,cjs.Ease.quadIn).to({_off:true},3).wait(1));

	// white copy
	this.instance_5 = new lib.white();
	this.instance_5.parent = this;
	this.instance_5.setTransform(297.95,339.3,1,1,0,0,0,485.4,406.9);
	this.instance_5.alpha = 0.6016;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(64).to({x:-244},21,cjs.Ease.quadIn).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-739.6,-631.9,1080.7,1942.5);


(lib.arrowMain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 1
	this.arrow = new lib.cta_arrow();
	this.arrow.name = "arrow";
	this.arrow.parent = this;
	this.arrow.setTransform(10.75,10.75);

	this.arrow_1 = new lib.cta_arrowmo();
	this.arrow_1.name = "arrow_1";
	this.arrow_1.parent = this;
	this.arrow_1.setTransform(10.75,10.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.arrow}]}).to({state:[{t:this.arrow_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.5,0.5,20.5,20.5);


(lib.CTA_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.arrow = new lib.arrowMain();
	this.arrow.name = "arrow";
	this.arrow.parent = this;
	this.arrow.setTransform(24.65,2.05,0.92,0.92,0,0,0,10.9,10.6);

	this.timeline.addTween(cjs.Tween.get(this.arrow).wait(1));

	// CTA_text
	this.cta_glare = new lib.cta_glare();
	this.cta_glare.name = "cta_glare";
	this.cta_glare.parent = this;
	this.cta_glare.setTransform(0.05,0.1,1,1,0,0,0,57.4,15.1);

	this.timeline.addTween(cjs.Tween.get(this.cta_glare).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D83B01").s().p("AsKCZIAAkxIYVAAIAAExg");
	this.shape.setTransform(15.5,0.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CTA_btn, new cjs.Rectangle(-62.4,-15.1,155.8,30.6), null);


(lib.mainMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MSFT Logo intro
	this.logo = new lib.logo_1();
	this.logo.name = "logo";
	this.logo.parent = this;
	this.logo.setTransform(56.9,19.15,0.312,0.312);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// replay
	this.replay_btn = new lib.replay_btn();
	this.replay_btn.name = "replay_btn";
	this.replay_btn.parent = this;
	this.replay_btn.setTransform(142.85,-170.2,0.3475,0.3475,0,0,180,-0.3,0);

	this.timeline.addTween(cjs.Tween.get(this.replay_btn).wait(1));

	// CTA text
	this.txtCta = new lib.cta();
	this.txtCta.name = "txtCta";
	this.txtCta.parent = this;
	this.txtCta.setTransform(99.2,395.95,0.4964,0.4964,0,0,0,2,2.4);

	this.timeline.addTween(cjs.Tween.get(this.txtCta).wait(1));

	// CTA
	this.cta = new lib.CTA_btn();
	this.cta.name = "cta";
	this.cta.parent = this;
	this.cta.setTransform(116.9,394.45,0.9433,0.9433,0,0,0,0.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(1));

	// white
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgOeAw4IAAyxIcHAAIAASxgAufmoMAAAgqPIc+AAMAAAAqPg");
	this.shape.setTransform(81.7,127.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// image ppl
	this.anim = new lib.introAnim();
	this.anim.name = "anim";
	this.anim.parent = this;
	this.anim.setTransform(-59.1,151.55);

	this.timeline.addTween(cjs.Tween.get(this.anim).wait(1));

}).prototype = getMCSymbolPrototype(lib.mainMC, new cjs.Rectangle(-11,-185.4,215.9,625.5), null);


// stage content:
(lib.O365_CARTABNDMCON_USA_160x600_BAN_Retargeting_NA_NA_NA_ANI_BN_NA_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var mc = exportRoot.mainMC
		
		this.initBanner = function (data) {
		
			Object.keys = function(obj) {
				var keys = [];
		
				for (var i in obj) {
				  if (obj.hasOwnProperty(i)) {
					keys.push(i);
				  }
				}
				return keys
			}
			var keys = Object.keys(data)
			
				for (var i in keys) {
					var id = keys[i].substr(0, 4);
						if (id == "head") {
							exportRoot['' + keys[i]] = new Array()
							exportRoot.fillHead(data[keys[i]], exportRoot['' + keys[i]])
						} else if (id == "smal" && data[keys[i]].length > 1) {
							exportRoot['' + keys[i]] = new Array()
							exportRoot.fillHead(data[keys[i]], exportRoot['' + keys[i]])
						} else if (id == "flag" && data[keys[i]].length > 1) {
							exportRoot['' + keys[i]] = new Array()
							exportRoot.fillFlag(data[keys[i]], parseInt(keys[i].substr((keys[i].length-1), keys[i].length)))
						} else if (id == "CTA" && data[keys[i]].length > 1) {
							exportRoot.fillCta(data[keys[i]])
						} else if (id == "CTAa") {
							mc.cta.arrow.visible = data[keys[i]][0]
							mc.cta.arrow.x += data[keys[i]][1]
							mc.cta.arrow.y += data[keys[i]][2]
						}
				}
		}
		
		
		this.fillHead = function (txtDetails, aVar) {
			var text = txtDetails[0]
			var size = txtDetails[1]
			var xOffset = txtDetails[2]
			var yOffset = txtDetails[3]
			var lineSpacing = txtDetails[4]
			var lineWidth = txtDetails[5]
			var align = txtDetails[6]
		
			var aSentenceLine = this.getTheSentences(text, size, xOffset, yOffset, lineSpacing, lineWidth, align)
		
			for (var i = 0; i < aSentenceLine.length; i++) {
				var mc = new createjs.MovieClip();
				mc.y = (i * parseInt(lineSpacing))
				mc.y += yOffset
				mc.y += parseInt(size)
				mc.x += xOffset
		
				var txtWidth = 0
				for (var j = 0; j < aSentenceLine[i].length; j++) {
					var text = new createjs.Text(aSentenceLine[i][j].txt, "normal " + size + " Segoe Pro", aSentenceLine[i][j].color);
					text.textAlign = "Left"
					text.x = txtWidth
					text.textBaseline = "alphabetic"
					txtWidth += (text.getTransformedBounds().width)
					mc.addChild(text)
				}
				if (align == "center") mc.x = mc.x - mc.getTransformedBounds().width / 2
				if (align == "right") mc.x = mc.x - mc.getTransformedBounds().width
				if (mc.getTransformedBounds()) mc.cache(mc.getTransformedBounds().width*-1,mc.getTransformedBounds().height*-1,mc.getTransformedBounds().width*2,mc.getTransformedBounds().height*2,1.5)
				stage.addChild(mc);
				aVar.push(mc)
			}
		}
		
		
		
		this.fillCta = function (txtDetails) {
			var text = txtDetails[0]
			var size = txtDetails[1]
			var xOffset = txtDetails[2]
			var yOffset = txtDetails[3]
			var lineSpacing = txtDetails[4]
			var lineWidth = txtDetails[5]
			var align = txtDetails[6]
		
		
			var aSentenceLine = this.getTheSentences(text, size, xOffset, yOffset, lineSpacing, lineWidth, align)
		
			for (var i = 0; i < aSentenceLine.length; i++) {
				var mc = new createjs.MovieClip();
				mc.y = (i * parseInt(lineSpacing))
				mc.y += yOffset
				mc.y += (parseInt(size) * 0.90)
				mc.x += xOffset
		
				var txtWidth = 0
				for (var j = 0; j < aSentenceLine[i].length; j++) {
					var text = new createjs.Text(aSentenceLine[i][j].txt, "normal " + size + " Segoe Pro", aSentenceLine[i][j].color);
					text.textAlign = "Left"
					text.x = txtWidth
					text.textBaseline = "alphabetic"
					txtWidth += (text.getTransformedBounds().width)
					mc.addChild(text)
				}
				if (align == "center") mc.x = mc.x - mc.getTransformedBounds().width / 2
				if (align == "right") mc.x = mc.x - mc.getTransformedBounds().width
				mc.y = mc.y - (mc.getTransformedBounds().height / 2)
				if (mc.getTransformedBounds()) mc.cache(mc.getTransformedBounds().width*-1,mc.getTransformedBounds().height*-1,mc.getTransformedBounds().width*2,mc.getTransformedBounds().height*2,1.5)
				this.mainMC.txtCta.addChild(mc);
			}
		}
		
		this.getTheSentences = function (text, size, xOffset, yOffset, lineSpacing, lineWidth, align) {
			var sentences = new Array()
			var aSentenceLine = new Array()
			var aStr = text.substr(0);
			sentences = aStr.split("|");
			var lastColor = "#000000"
		
			
			for (var i = 0; i < sentences.length; i++) {
				var aS = sentences[i].substr(0);
				var aSplit = new Array()
				aSplit = aS.split("<");
				aSplit = aSplit.filter(Boolean)
				var wholeSentence = new Array()
		
				for (var j = 0; j < aSplit.length; j++) {
		
					var checkColor = aSplit[j].indexOf("#")
					var color = (checkColor == -1) ? lastColor : aSplit[j].substr(0, 7);
					lastColor = color
					var txt = (checkColor == -1) ? aSplit[j].substr(0) : aSplit[j].substr(8);
					var subSentence = {
						color: color,
						txt: txt
					};
					wholeSentence.push(subSentence)
				}
				aSentenceLine.push(wholeSentence)
			}
			return aSentenceLine
		}
		
		
		
		
		var mc = exportRoot.mainMC
		
		this.runBanner = function() {
			
			exportRoot.tlFH = new TimelineLite();
		    exportRoot.tlSH = new TimelineLite();
		    exportRoot.tl1 = new TimelineLite();
			
			
			for (var i = 0; i < exportRoot.headline1.length; i++) {
				if(i==0)exportRoot.tlFH.from(exportRoot.headline1[i], 0.6, {	x: "+=300",	alpha: 0, ease:Power4.easeOut});
				if(i!=0)exportRoot.tlFH.from(exportRoot.headline1[i], 0.6, {	x: "+=300",	alpha: 0, ease:Power4.easeOut}, "-=0.5");
			}
			exportRoot.tlFH.stop()
		
			for (var i = 0; i < exportRoot.headline2.length; i++) {
				if(i==0)exportRoot.tlSH.from(exportRoot.headline2[i], 0.6, {	x: "+=300",	alpha: 0, ease:Power4.easeOut});
				if(i!=0)exportRoot.tlSH.from(exportRoot.headline2[i], 0.6, {	x: "+=300",	alpha: 0, ease:Power4.easeOut}, "-=0.5");
			}
			exportRoot.tlSH.stop()
			
			
			TweenLite.delayedCall(3, function(){exportRoot.tlFH.play()})
			TweenLite.delayedCall(3.5, function(){exportRoot.tlSH.play()})
			
		    
			exportRoot.tl1.from(mc.anim.image_1, 1.3, { scaleX:0.93, scaleY:0.93, x: "-=0", y: "+=0", ease:Power1.easeInOut}, "+=0.8")
			exportRoot.tl1.from(mc.anim.image_3, 1.3, { scaleX:0.85, scaleY:0.85, x: "-=0", y: "+=0", ease:Power1.easeInOut}, "-=1.3")
			exportRoot.tl1.from(mc.anim.image_4, 1.2, { scaleX:0.8, scaleY:0.8, x: "-=0", y: "+=0", ease:Power1.easeInOut}, "-=1.2")	
			exportRoot.tl1.from(mc.anim.image_5, 1.1, { scaleX:0.77, scaleY:0.77, x: "-=0", y: "+=0", ease:Power1.easeInOut}, "-=1.1")
		
			exportRoot.tl1.from(mc.txtCta, 0.7, { alpha: 1,	x: "+=300",	 ease:Power4.easeOut}, "-=0");
			exportRoot.tl1.from(mc.cta, 0.7, {	alpha: 1,	x: "+=300",	 ease:Power4.easeOut}, "-=0.7");
			
			
			exportRoot.tl1.stop()
		
			mc.logo.gotoAndPlay(1)
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// mainMC
	this.mainMC = new lib.mainMC();
	this.mainMC.name = "mainMC";
	this.mainMC.parent = this;
	this.mainMC.setTransform(0,175.1,1,1,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.mainMC).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(69,289.6,135.9,325.5);
// library properties:
lib.properties = {
	id: '90A26FE74B042E4A89CA750D1DA2DF1F',
	width: 160,
	height: 600,
	fps: 40,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/O365_CARTABNDMCON_USA_160x600_BAN_Retargeting_NA_NA_NA_ANI_BN_NA_1_atlas_.png?1541781176562", id:"O365_CARTABNDMCON_USA_160x600_BAN_Retargeting_NA_NA_NA_ANI_BN_NA_1_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['90A26FE74B042E4A89CA750D1DA2DF1F'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;