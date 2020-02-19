!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.particlejs=t():e.particlejs=t()}(window,function(){return a={},n.m=i=[function(e,t,i){e.exports=i(1)},function(e,t,i){"use strict";i.r(t);var a,n,r,o={},s=window.createjs;a=o=o||{},n=s=s||{},a.properties={width:550,height:400,fps:24,color:"#999999",manifest:[]},(a.triangle=function(){this.initialize(),this.shape=new n.Shape,this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-.7,-27.8).lineTo(32,27.1).lineTo(-32,27.8).closePath(),this.shape.setTransform(0,-7),this.addChild(this.shape)}).prototype=r=new n.Container,r.nominalBounds=new n.Rectangle(-32,-34.8,64,55.7),(a.star_10=function(){this.initialize(),this.shape=new n.Shape,this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.3,18.3).lineTo(-19.9,29.3).lineTo(-14.1,10.3).lineTo(-32,10.3).lineTo(-19.7,.7).lineTo(-31.2,-8.7).lineTo(-15.2,-8.8).lineTo(-21.7,-26.4).lineTo(-5.4,-16.4).lineTo(-.2,-31.8).lineTo(4.4,-17.6).lineTo(17.8,-27.4).lineTo(13.1,-8.5).lineTo(30.3,-8.1).lineTo(19.9,.1).lineTo(32,8.4).lineTo(12.8,9.5).lineTo(18.2,29.8).lineTo(4.9,20).lineTo(1.4,31.8).closePath(),this.addChild(this.shape)}).prototype=r=new n.Container,r.nominalBounds=new n.Rectangle(-32,-31.7,64,63.6),(a.star=function(){this.initialize(),this.shape=new n.Shape,this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-.2,17.3).lineTo(-20.2,31.5).lineTo(-13,7.4).lineTo(-32,-8).lineTo(-7.8,-8.4).lineTo(.3,-32).lineTo(8,-8.2).lineTo(32,-7.4).lineTo(12.8,7.5).lineTo(19.4,32).closePath(),this.addChild(this.shape)}).prototype=r=new n.Container,r.nominalBounds=new n.Rectangle(-32,-32,64,64),(a.square=function(){this.initialize(),this.shape=new n.Shape,this.shape.graphics.beginFill().beginStroke("#FFFFFF").setStrokeStyle(8,1,1).moveTo(-32,-32).lineTo(32,-32).lineTo(32,32).lineTo(-32,32).closePath(),this.addChild(this.shape)}).prototype=r=new n.Container,r.nominalBounds=new n.Rectangle(-36,-36,72,72),(a.reverse_blur_circle=function(){this.initialize(),this.shape=new n.Shape,this.shape.graphics.beginFill().beginStroke("#FFFFFF").setStrokeStyle(8,1,1).moveTo(32,0).curveTo(32,13.2,22.6,22.6).curveTo(13.3,32,0,32).curveTo(-13.2,32,-22.7,22.6).curveTo(-32,13.2,-32,0).curveTo(-32,-13.3,-22.7,-22.7).curveTo(-13.2,-32,0,-32).curveTo(13.3,-32,22.6,-22.7).curveTo(32,-13.3,32,0).closePath(),this.addChild(this.shape)}).prototype=r=new n.Container,r.nominalBounds=new n.Rectangle(-36,-36,72,72),(a.kirakira2=function(){this.initialize(),this.shape=new n.Shape,this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4,9.5).curveTo(-7.8,0,-13.4,-.1).curveTo(-7.8,-.2,-4,-9.9).curveTo(-.1,-19.2,0,-32).curveTo(.1,-19.2,4,-9.9).curveTo(8,-.2,13.4,-.1).curveTo(8,0,4,9.5).curveTo(.1,19,0,32).curveTo(-.1,19,-4,9.5).closePath(),this.addChild(this.shape)}).prototype=r=new n.Container,r.nominalBounds=new n.Rectangle(-13.4,-32,26.8,64),(a.kirakira=function(){this.initialize(),this.shape=new n.Shape,this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-9.6,9.3).curveTo(-18.9,0,-32,-.1).curveTo(-18.9,-.2,-9.6,-9.6).curveTo(-.2,-19,-.1,-32).curveTo(0,-19,9.4,-9.6).curveTo(18.9,-.2,32,-.1).curveTo(18.9,0,9.4,9.3).curveTo(0,18.8,-.1,32).curveTo(-.2,18.8,-9.6,9.3).closePath(),this.addChild(this.shape)}).prototype=r=new n.Container,r.nominalBounds=new n.Rectangle(-32,-32,64,64),(a.heart=function(){this.initialize(),this.shape=new n.Shape,this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-20.2,10).lineTo(-24.8,3.5).curveTo(-27,.1,-28.5,-3.1).curveTo(-30.1,-6.4,-31.1,-9.5).curveTo(-32,-13,-32,-16).curveTo(-32,-19.7,-30.4,-22.7).curveTo(-29.1,-25.4,-26.6,-27.4).curveTo(-24,-29.1,-21,-30.1).curveTo(-18.1,-31.1,-15,-31.1).curveTo(-11.7,-31.1,-8.8,-29.9).curveTo(-6.4,-29,-4.5,-27.4).curveTo(-3,-25.9,-1.7,-23.9).lineTo(0,-20.8).lineTo(1.7,-23.9).curveTo(3,-25.9,4.5,-27.4).curveTo(6.6,-29.1,8.8,-29.9).curveTo(11.7,-31.1,15.2,-31.1).curveTo(18.4,-31.1,21.3,-30.1).curveTo(24.2,-29.1,26.7,-27.2).curveTo(29.1,-25.3,30.5,-22.6).curveTo(32,-19.7,32,-16.1).curveTo(32,-13.3,31,-9.7).curveTo(30.2,-6.5,28.5,-3.2).curveTo(27.1,0,24.9,3.3).lineTo(20.3,9.7).curveTo(13.4,17.7,9.7,21.6).lineTo(0,31).curveTo(-13.6,18.3,-20.2,10).closePath(),this.addChild(this.shape)}).prototype=r=new n.Container,r.nominalBounds=new n.Rectangle(-32,-31,64,62.1),(a.flower=function(){this.initialize(),this.shape=new n.Shape,this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(4,27.3).curveTo(.5,23.7,.5,18.9).lineTo(.5,15.2).lineTo(-.5,15.2).lineTo(-.7,18.9).curveTo(-.9,24,-4.1,27.6).curveTo(-7.4,31.1,-12.1,31.1).curveTo(-17,31.1,-20.8,27.5).curveTo(-24.7,23.7,-24.7,19.1).curveTo(-24.7,15.3,-22.2,12.1).curveTo(-19.7,8.8,-16.1,7.7).lineTo(-12.5,6.4).lineTo(-12.7,5.8).lineTo(-13,5.4).lineTo(-16.5,6.6).lineTo(-20.2,7.1).curveTo(-25.3,7.1,-28.7,4).curveTo(-32,.7,-32,-4.1).curveTo(-32,-9.4,-28.7,-13).curveTo(-25.5,-16.8,-20.6,-16.8).curveTo(-17.8,-16.8,-15,-15.4).curveTo(-12.2,-14,-10.5,-11.6).lineTo(-8.4,-8.7).lineTo(-8,-8.8).lineTo(-7.4,-9.3).lineTo(-9.6,-12.2).curveTo(-10.7,-14,-11.3,-15.8).curveTo(-11.9,-17.9,-12,-19.9).curveTo(-12,-24.7,-8.5,-28).curveTo(-5.3,-31.1,-.1,-31.1).curveTo(5.2,-31.1,8.5,-28).curveTo(11.7,-24.7,11.8,-19.9).curveTo(11.7,-17.7,11.2,-15.7).curveTo(10.7,-13.8,9.5,-12.2).lineTo(7.4,-9.3).lineTo(7.8,-9).lineTo(8.2,-8.7).lineTo(10.5,-11.6).curveTo(12.2,-14,14.8,-15.4).curveTo(17.6,-16.8,20.4,-16.8).curveTo(25.3,-16.8,28.5,-13).curveTo(32,-9.4,32,-4.1).curveTo(32,.8,28.5,4).curveTo(25.3,7.1,20,7.1).lineTo(16.4,6.6).lineTo(12.9,5.5).curveTo(12.8,5.6,12.8,5.6).curveTo(12.7,5.7,12.7,5.7).curveTo(12.7,5.8,12.7,5.8).curveTo(12.7,5.9,12.7,6).lineTo(12.5,6.4).lineTo(15.9,7.7).curveTo(19.7,9.1,22.1,12.2).curveTo(24.5,15.3,24.5,19.1).curveTo(24.5,23.7,20.8,27.5).curveTo(16.9,31.1,11.9,31.1).curveTo(7.4,31.1,4,27.3).closePath().moveTo(-7.7,-5.9).curveTo(-10.9,-2.7,-10.9,1.8).curveTo(-10.9,6.3,-7.7,9.4).curveTo(-4.6,12.5,-.1,12.5).curveTo(4.4,12.5,7.6,9.4).curveTo(10.6,6.3,10.6,1.8).curveTo(10.6,-2.7,7.6,-5.9).curveTo(4.4,-9,-.1,-9).curveTo(-4.6,-9,-7.7,-5.9).closePath(),this.addChild(this.shape)}).prototype=r=new n.Container,r.nominalBounds=new n.Rectangle(-32,-31,64,62.2),(a.circle=function(){this.initialize(),this.shape=new n.Shape,this.shape.graphics.beginFill("#FFFFFF").beginStroke().drawEllipse(-10.8,-10.8,21.7,21.7),this.shape.setTransform(0,0,2.949,2.949),this.addChild(this.shape)}).prototype=r=new n.Container,r.nominalBounds=new n.Rectangle(-32,-32,64,64),(a.blur_circle=function(){this.initialize(),this.shape=new n.Shape,this.shape.graphics.beginRadialGradientFill(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,11).beginStroke().drawEllipse(-10.8,-10.8,21.7,21.7),this.shape.setTransform(0,0,3,3),this.addChild(this.shape)}).prototype=r=new n.Container,r.nominalBounds=new n.Rectangle(-32.5,-32.5,65.1,65.1),(a.assetshapes=function(){this.initialize(),this.instance=new a.triangle,this.instance.setTransform(323.6,39.6),this.instance_1=new a.square,this.instance_1.setTransform(518,151.5),this.instance_2=new a.kirakira2,this.instance_2.setTransform(420.8,32.6),this.instance_3=new a.kirakira,this.instance_3.setTransform(32,151.5),this.instance_4=new a.flower,this.instance_4.setTransform(396.5,151.5),this.instance_5=new a.star_10,this.instance_5.setTransform(518,32.6),this.instance_6=new a.star,this.instance_6.setTransform(275,151.5),this.instance_7=new a.circle,this.instance_7.setTransform(226.4,32.6),this.instance_8=new a.reverse_blur_circle,this.instance_8.setTransform(153.5,151.5),this.instance_9=new a.blur_circle,this.instance_9.setTransform(129.2,32.6),this.instance_10=new a.heart,this.instance_10.setTransform(32,32.6),this.addChild(this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance)}).prototype=r=new n.Container,r.nominalBounds=new n.Rectangle(275,200,554,187.5);var c=(l.prototype.generateShape=function(e){return new o[e]},l);function l(){}var h,u,p=function(){this.hue=0,this.hueVariance=0,this.saturation=0,this.saturationVariance=0,this.luminance=0,this.luminanceVariance=0};(u=h=h||{})[u.Normal=0]="Normal",u[u.Random=1]="Random";var f=(d.prototype.importFromJson=function(e){this.setData(e,function(e){return"width"==e||"height"==e||"bgColor"==e})},d.prototype.importData=function(e){this.setData(e,function(e){return"width"==e||"height"==e||"startX"==e||"startY"==e})},d.checkReflectEnable=function(){try{return!(!Reflect||!Reflect.has)}catch(e){return!1}},d.prototype.setData=function(e,t){if(d.ENABLE_REFLECT){for(var i in e)if(!t(i)&&1==Reflect.has(this,i)){var a=e[i];Reflect.set(this,i,a)}}else for(var i in e)t(i)||this.hasOwnProperty(i)&&(this[i]=e[i])},d.ENABLE_REFLECT=d.checkReflectEnable(),d);function d(e){void 0===e&&(e=null),this.bgColor="",this.width=0,this.height=0,this.emitFrequency=0,this.startX=0,this.startXVariance=0,this.startY=0,this.startYVariance=0,this.initialDirection=0,this.initialDirectionVariance=0,this.initialSpeed=0,this.initialSpeedVariance=0,this.friction=0,this.accelerationSpeed=0,this.accelerationDirection=0,this.startScale=0,this.startScaleVariance=0,this.finishScale=0,this.finishScaleVariance=0,this.lifeSpan=0,this.lifeSpanVariance=0,this.startAlpha=0,this.startAlphaVariance=0,this.finishAlpha=0,this.finishAlphaVariance=0,this.shapeIdList=[""],this.startColor=new p,this.blendMode=!0,this.alphaCurveType=h.Normal,e&&this.importFromJson(e)}function g(){this.assetList=["blur_circle","circle","flower","heart","kirakira","kirakira2","reverse_blur_circle","square","star","star_10","triangle"]}var v=(T.BLUR_CIRCLE="blur_circle",T.CIRCLE="circle",T.FLOWER="flower",T.HEART="heart",T.KIRAKIRA="kirakira",T.KIRAKIRA2="kirakira2",T.REVERSE_CIRCLE="reverse_blur_circle",T.SQUARE="square",T.STAR="star",T.STAR_10="star_10",T.TRIANGLE="triangle",T);function T(){}var _=function(){this.particleShape=new createjs.Container,this.startColor=new p},m="1.0.0";var w=(b.prototype.isPlaying=function(){return this._playing},b.prototype.setData=function(e){this._drawingData=e},b.prototype.importFromJson=function(e){!function(e){var t=m.split(".");if(t.length<=2)return console.log("繝舌�繧ｸ繝ｧ繝ｳ陦ｨ險倥お繝ｩ繝ｼ縺檎匱逕溘＠縺ｾ縺励◆縲�"),!1;if(!e)return"0"==t[0]&&"1"==t[1];var i=e.split(".");return t[0]==i[0]&&t[1]==i[1]}(e.VERSION||"")&&console.warn("隱ｭ縺ｿ霎ｼ繧薙□JSON繝輔ぃ繧､繝ｫ縺ｨParticleJS縺ｮ繝舌�繧ｸ繝ｧ繝ｳ縺檎焚縺ｪ繧翫∪縺吶�\nhttps://github.com/ics-creative/ParticleJS"),this._drawingData.importFromJson(e)},b.prototype.update=function(){this._playing&&(this.emit(),this.animate(),this.lifeCheck())},b.prototype.animate=function(){for(var e=createjs.Matrix2D.DEG_TO_RAD*this._drawingData.accelerationDirection,t=Math.cos(e)*this._drawingData.accelerationSpeed,i=Math.sin(e)*this._drawingData.accelerationSpeed,a=0;a<this._activeParticles.length;a++){var n=this._activeParticles[a];n.vx+=t,n.vy+=i,n.vx*=1-this._drawingData.friction,n.vy*=1-this._drawingData.friction,n.x+=n.vx,n.y+=n.vy,n.particleShape.x=n.x,n.particleShape.y=n.y;var r=n.currentLife/n.totalLife;switch(Number(n.alphaCurveType)){case h.Random:var o=Math.min(n.finishAlpha,n.startAlpha),s=Math.max(n.finishAlpha,n.startAlpha);n.particleShape.alpha=Math.random()*(s-o)+o;break;case h.Normal:default:var c=this.calcCurrentValue(n.startAlpha,n.finishAlpha,r);n.particleShape.alpha=c}var l=this.calcCurrentValue(n.startScale,n.finishScale,r);n.particleShape.scaleX=n.particleShape.scaleY=l,n.currentLife<0&&(n.isAlive=!1),n.currentLife--}},b.prototype.lifeCheck=function(){for(var e=0;e<this._activeParticles.length;e++)if(!this._activeParticles[e].isAlive){var t=this._activeParticles[e];this.container.removeChild(t.particleShape),this._activeParticles.splice(e,1),this._particlesPool.push(t),e--}},b.prototype.clear=function(){for(var e=0;e<this._activeParticles.length;e++){var t=this._activeParticles[e];t.isAlive=!1,this.container.removeChild(t.particleShape),this._activeParticles.splice(e,1),this._particlesPool.push(t),e--}},b.prototype.dispose=function(){for(var e=0;e<this._activeParticles.length;e++){var t=this._activeParticles[e];t.isAlive=!1,this.container.removeChild(t.particleShape)}this._activeParticles.splice(0,this._activeParticles.length),this._particlesPool.splice(0,this._particlesPool.length),this._activeParticles=null,this._particlesPool=null,this.container=null},b.prototype.emit=function(){for(var e=Math.round(createjs.Ticker.framerate),t=this._frameCount%e,i=this._drawingData.emitFrequency,a=0==i?0:Math.floor(i/e),n=0;n<a;n++)this.emitParticle();var r=i/e-a;0!=i&&t%Math.floor(1/r)==0&&this.emitParticle(),this._frameCount++,this._frameCount>=e&&(this._frameCount=0)},b.prototype.emitParticle=function(){var e=this.generateParticle();this.container.addChild(e.particleShape),this._activeParticles.push(e)},b.prototype.generateParticle=function(){var e=null;return e=1<=this._particlesPool.length?this._particlesPool.shift():new _,this.setParticleParameter(e),e},b.prototype.setParticleParameter=function(e){e.particleShape.removeAllChildren(),e.isAlive=!0,e.x=this.calcRandomValueWithVariance(this._drawingData.startX,this._drawingData.startXVariance,!1),e.y=this.calcRandomValueWithVariance(this._drawingData.startY,this._drawingData.startYVariance,!1),this.generateShape(e,this._drawingData.shapeIdList),e.totalLife=Math.max(1,this.calcRandomValueWithVariance(this._drawingData.lifeSpan,this._drawingData.lifeSpanVariance,!0)),e.currentLife=e.totalLife;var t=Math.max(0,this.calcRandomValueWithVariance(this._drawingData.initialSpeed,this._drawingData.initialSpeedVariance,!1)),i=createjs.Matrix2D.DEG_TO_RAD*this.calcRandomValueWithVariance(this._drawingData.initialDirection,this._drawingData.initialDirectionVariance,!1);e.vx=Math.cos(i)*t,e.vy=Math.sin(i)*t,e.startAlpha=this.calcRandomValueWithRange(0,1,this.calcRandomValueWithVariance(this._drawingData.startAlpha,this._drawingData.startAlphaVariance,!1)),e.finishAlpha=this.calcRandomValueWithRange(0,1,this.calcRandomValueWithVariance(this._drawingData.finishAlpha,this._drawingData.finishAlphaVariance,!1)),e.startScale=Math.max(0,this.calcRandomValueWithVariance(this._drawingData.startScale,this._drawingData.startScaleVariance,!1)),e.finishScale=Math.max(0,this.calcRandomValueWithVariance(this._drawingData.finishScale,this._drawingData.finishScaleVariance,!1)),e.particleShape.compositeOperation=1==this._drawingData.blendMode?"lighter":null,e.alphaCurveType=this._drawingData.alphaCurveType},b.prototype.generateShape=function(e,t){e.particleShape.removeAllChildren();var i=this._drawingData.startColor;e.startColor.hue=this.calcRandomValueWithVariance(i.hue,i.hueVariance,!1)%360,e.startColor.luminance=this.calcRandomValueWithVariance(i.luminance,i.luminanceVariance,!1),e.startColor.saturation=this.calcRandomValueWithVariance(i.saturation,i.saturationVariance,!1);var a=Number(e.startColor.hue),n=Number(e.startColor.saturation),r=Number(e.startColor.luminance),o="hsl("+a+", "+n+"%, "+r+"%)",s=Math.floor(Math.random()*this._drawingData.shapeIdList.length),c=0==this._drawingData.shapeIdList.length?"":this._drawingData.shapeIdList[s];e.colorCommand=null;var l=this.shapeGenerator.generateShape(c);e.particleShape.addChild(l);var h=l.getChildAt(0);if(null!=h){var u=h.graphics.instructions;if(u&&0<u.length)for(var p=0;p<u.length;p++){var f=u[p];if(f instanceof createjs.Graphics.Fill)if(f.style instanceof CanvasGradient){var d=f.style,g=b.HELPER_GRAPHICS.beginRadialGradientFill([o,"hsla("+a+", "+n+"%, "+r+"%, 0)"],d.props.ratios,d.props.x0,d.props.y0,d.props.r0,d.props.x1,d.props.y1,d.props.r1).command;u[p]=g}else f.style=o,e.colorCommand=f;else f instanceof createjs.Graphics.Stroke&&(f.style=o,e.colorCommand=f)}}},b.prototype.pause=function(){this._playing=!1},b.prototype.resume=function(){this._playing=!0},b.prototype.calcRandomValueWithRange=function(e,t,i){return Math.min(t,Math.max(e,i))},b.prototype.calcRandomValueWithVariance=function(e,t,i){var a=Number(e)+(Math.random()-.5)*t;return 1==i?Math.floor(a):a},b.prototype.calcCurrentValue=function(e,t,i){return Number(e)*i+Number(t)*(1-i)},Object.defineProperty(b.prototype,"emitFrequency",{get:function(){return this._drawingData.emitFrequency},set:function(e){this._drawingData.emitFrequency=e},enumerable:!0,configurable:!0}),Object.defineProperty(b.prototype,"startX",{get:function(){return this._drawingData.startX},set:function(e){this._drawingData.startX=e},enumerable:!0,configurable:!0}),Object.defineProperty(b.prototype,"startXVariance",{get:function(){return this._drawingData.startX},set:function(e){this._drawingData.startXVariance=e},enumerable:!0,configurable:!0}),Object.defineProperty(b.prototype,"startY",{get:function(){return this._drawingData.startY},set:function(e){this._drawingData.startY=e},enumerable:!0,configurable:!0}),Object.defineProperty(b.prototype,"startYVariance",{get:function(){return this._drawingData.startYVariance},set:function(e){this._drawingData.startYVariance=e},enumerable:!0,configurable:!0}),Object.defineProperty(b.prototype,"initialDirection",{get:function(){return this._drawingData.initialDirection},set:function(e){this._drawingData.initialDirection=e},enumerable:!0,configurable:!0}),Object.defineProperty(b.prototype,"initialDirectionVariance",{get:function(){return this._drawingData.initialDirectionVariance},set:function(e){this._drawingData.initialDirectionVariance=e},enumerable:!0,configurable:!0}),Object.defineProperty(b.prototype,"initialSpeed",{get:function(){return this._drawingData.initialSpeed},set:function(e){this._drawingData.initialSpeed=e},enumerable:!0,configurable:!0}),Object.defineProperty(b.prototype,"initialSpeedVariance",{get:function(){return this._drawingData.initialSpeedVariance},set:function(e){this._drawingData.initialSpeedVariance=e},enumerable:!0,configurable:!0}),Object.defineProperty(b.prototype,"friction",{get:function(){return this._drawingData.friction},set:function(e){this._drawingData.friction=e},enumerable:!0,configurable:!0}),Object.defineProperty(b.prototype,"accelerationSpeed",{get:function(){return this._drawingData.accelerationSpeed},set:function(e){this._drawingData.accelerationSpeed=e},enumerable:!0,configurable:!0}),Object.defineProperty(b.prototype,"accelerationDirection",{get:function(){return this._drawingData.accelerationDirection},set:function(e){this._drawingData.accelerationDirection=e},enumerable:!0,configurable:!0}),Object.defineProperty(b.prototype,"startScale",{get:function(){return this._drawingData.startScale},set:function(e){this._drawingData.startScale=e},enumerable:!0,configurable:!0}),Object.defineProperty(b.prototype,"startScaleVariance",{get:function(){return this._drawingData.startScaleVariance},set:function(e){this._drawingData.startScaleVariance=e},enumerable:!0,configurable:!0}),Object.defineProperty(b.prototype,"finishScale",{get:function(){return this._drawingData.finishScale},set:function(e){this._drawingData.finishScale=e},enumerable:!0,configurable:!0}),Object.defineProperty(b.prototype,"finishScaleVariance",{get:function(){return this._drawingData.finishScaleVariance},set:function(e){this._drawingData.finishScaleVariance=e},enumerable:!0,configurable:!0}),Object.defineProperty(b.prototype,"lifeSpan",{get:function(){return this._drawingData.lifeSpan},set:function(e){this._drawingData.lifeSpan=e},enumerable:!0,configurable:!0}),Object.defineProperty(b.prototype,"lifeSpanVariance",{get:function(){return this._drawingData.lifeSpanVariance},set:function(e){this._drawingData.lifeSpanVariance=e},enumerable:!0,configurable:!0}),Object.defineProperty(b.prototype,"startAlpha",{get:function(){return this._drawingData.startAlpha},set:function(e){this._drawingData.startAlpha=e},enumerable:!0,configurable:!0}),Object.defineProperty(b.prototype,"startAlphaVariance",{get:function(){return this._drawingData.startAlphaVariance},set:function(e){this._drawingData.startAlphaVariance=e},enumerable:!0,configurable:!0}),Object.defineProperty(b.prototype,"finishAlpha",{get:function(){return this._drawingData.finishAlpha},set:function(e){this._drawingData.finishAlpha=e},enumerable:!0,configurable:!0}),Object.defineProperty(b.prototype,"finishAlphaVariance",{get:function(){return this._drawingData.finishAlphaVariance},set:function(e){this._drawingData.finishAlphaVariance=e},enumerable:!0,configurable:!0}),Object.defineProperty(b.prototype,"shapeIdList",{get:function(){return this._drawingData.shapeIdList},set:function(e){this._drawingData.shapeIdList=e},enumerable:!0,configurable:!0}),Object.defineProperty(b.prototype,"startColor",{get:function(){return this._drawingData.startColor},set:function(e){this._drawingData.startColor=e},enumerable:!0,configurable:!0}),Object.defineProperty(b.prototype,"blendMode",{get:function(){return this._drawingData.blendMode},set:function(e){this._drawingData.blendMode=e},enumerable:!0,configurable:!0}),Object.defineProperty(b.prototype,"alphaCurveType",{get:function(){return this._drawingData.alphaCurveType},set:function(e){this._drawingData.alphaCurveType=e},enumerable:!0,configurable:!0}),b.HELPER_GRAPHICS=new createjs.Graphics,b);function b(){this._frameCount=0,this._drawingData=new f,this._particlesPool=[],this._activeParticles=[],this.container=new createjs.Container,this.container.mouseChildren=!1,this.container.mouseEnabled=!1,this._playing=!0,this.shapeGenerator=new c}i.d(t,"ParticleSystem",function(){return w}),i.d(t,"Particle",function(){return _}),i.d(t,"VERSION",function(){return m}),i.d(t,"DrawingData",function(){return f}),i.d(t,"ColorData",function(){return p}),i.d(t,"ShapeData",function(){return g}),i.d(t,"ShapeGenerator",function(){return c}),i.d(t,"AlphaCurveType",function(){return h}),i.d(t,"ShapeType",function(){return v}),i.d(t,"Assets",function(){return o})}],n.c=a,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(i,a,function(e){return t[e]}.bind(null,a));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0);function n(e){if(a[e])return a[e].exports;var t=a[e]={i:e,l:!1,exports:{}};return i[e].call(t.exports,t,t.exports,n),t.l=!0,t.exports}var i,a});