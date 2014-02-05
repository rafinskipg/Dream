/*

  Music is by The XX
  @see http://thexx.info

  This is best viewed in Chrome since there is a bug in Safari
  when using getByteFrequencyData with MediaElementAudioSource

  @see http://goo.gl/6WLx1
*/
/* Copyright (C) 2013 Justin Windle, http://soulwire.co.uk */
var Sketch=function(){"use strict";function e(e){return"[object Array]"==Object.prototype.toString.call(e)}function t(e){return"function"==typeof e}function n(e){return"number"==typeof e}function o(e){return"string"==typeof e}function r(e){return E[e]||String.fromCharCode(e)}function i(e,t,n){for(var o in t)(n||!e.hasOwnProperty(o))&&(e[o]=t[o]);return e}function u(e,t){return function(){e.apply(t,arguments)}}function a(e){var n={};for(var o in e)n[o]=t(e[o])?u(e[o],e):e[o];return n}function c(e){function n(n){t(n)&&n.apply(e,[].splice.call(arguments,1))}function u(e){for(_=0;_<J.length;_++)G=J[_],o(G)?O[(e?"add":"remove")+"EventListener"].call(O,G,k,!1):t(G)?k=G:O=G}function c(){L(T),T=I(c),U||(n(e.setup),U=t(e.setup),n(e.resize)),e.running&&!j&&(e.dt=(B=+new Date)-e.now,e.millis+=e.dt,e.now=B,n(e.update),e.autoclear&&K&&e.clear(),n(e.draw)),j=++j%e.interval}function l(){O=Y?e.style:e.canvas,D=Y?"px":"",e.fullscreen&&(e.height=w.innerHeight,e.width=w.innerWidth),O.height=e.height+D,O.width=e.width+D,e.retina&&K&&X&&(O.height=e.height*X,O.width=e.width*X,O.style.height=e.height+"px",O.style.width=e.width+"px",e.scale(X,X)),U&&n(e.resize)}function s(e,t){return N=t.getBoundingClientRect(),e.x=e.pageX-N.left-w.scrollX,e.y=e.pageY-N.top-w.scrollY,e}function f(t,n){return s(t,e.element),n=n||{},n.ox=n.x||t.x,n.oy=n.y||t.y,n.x=t.x,n.y=t.y,n.dx=n.x-n.ox,n.dy=n.y-n.oy,n}function g(e){if(e.preventDefault(),W=a(e),W.originalEvent=e,W.touches)for(M.length=W.touches.length,_=0;_<W.touches.length;_++)M[_]=f(W.touches[_],M[_]);else M.length=0,M[0]=f(W,V);return i(V,M[0],!0),W}function h(t){for(t=g(t),q=(Q=J.indexOf(z=t.type))-1,e.dragging=/down|start/.test(z)?!0:/up|end/.test(z)?!1:e.dragging;q;)o(J[q])?n(e[J[q--]],t):o(J[Q])?n(e[J[Q++]],t):q=0}function p(t){F=t.keyCode,H="keyup"==t.type,Z[F]=Z[r(F)]=!H,n(e[t.type],t)}function v(t){e.autopause&&("blur"==t.type?b:C)(),n(e[t.type],t)}function C(){e.now=+new Date,e.running=!0}function b(){e.running=!1}function P(){(e.running?b:C)()}function A(){K&&e.clearRect(0,0,e.width,e.height)}function S(){R=e.element.parentNode,_=x.indexOf(e),R&&R.removeChild(e.element),~_&&x.splice(_,1),u(!1),b()}var T,k,O,R,N,_,D,B,G,W,z,F,H,q,Q,j=0,M=[],U=!1,X=w.devicePixelRatio,Y=e.type==m,K=e.type==d,V={x:0,y:0,ox:0,oy:0,dx:0,dy:0},J=[e.element,h,"mousedown","touchstart",h,"mousemove","touchmove",h,"mouseup","touchend",h,"click",y,p,"keydown","keyup",w,v,"focus","blur",l,"resize"],Z={};for(F in E)Z[E[F]]=!1;return i(e,{touches:M,mouse:V,keys:Z,dragging:!1,running:!1,millis:0,now:0/0,dt:0/0,destroy:S,toggle:P,clear:A,start:C,stop:b}),x.push(e),e.autostart&&C(),u(!0),l(),c(),e}for(var l,s,f="E LN10 LN2 LOG2E LOG10E PI SQRT1_2 SQRT2 abs acos asin atan ceil cos exp floor log round sin sqrt tan atan2 pow max min".split(" "),g="__hasSketch",h=Math,d="canvas",p="webgl",m="dom",y=document,w=window,x=[],v={fullscreen:!0,autostart:!0,autoclear:!0,autopause:!0,container:y.body,interval:1,globals:!0,retina:!1,type:d},E={8:"BACKSPACE",9:"TAB",13:"ENTER",16:"SHIFT",27:"ESCAPE",32:"SPACE",37:"LEFT",38:"UP",39:"RIGHT",40:"DOWN"},C={CANVAS:d,WEB_GL:p,WEBGL:p,DOM:m,instances:x,install:function(t){if(!t[g]){for(var o=0;o<f.length;o++)t[f[o]]=h[f[o]];i(t,{TWO_PI:2*h.PI,HALF_PI:h.PI/2,QUATER_PI:h.PI/4,random:function(t,o){return e(t)?t[~~(h.random()*t.length)]:(n(o)||(o=t||1,t=0),t+h.random()*(o-t))},lerp:function(e,t,n){return e+n*(t-e)},map:function(e,t,n,o,r){return(e-t)/(n-t)*(r-o)+o}}),t[g]=!0}},create:function(e){return e=i(e||{},v),e.globals&&C.install(self),l=e.element=e.element||y.createElement(e.type===m?"div":"canvas"),s=e.context=e.context||function(){switch(e.type){case d:return l.getContext("2d",e);case p:return l.getContext("webgl",e)||l.getContext("experimental-webgl",e);case m:return l.canvas=l}}(),e.container.appendChild(l),C.augment(s,e)},augment:function(e,t){return t=i(t||{},v),t.element=e.canvas||e,t.element.className+=" sketch",i(e,t,!0),c(e)}},b=["ms","moz","webkit","o"],P=self,A=0,S="AnimationFrame",T="request"+S,k="cancel"+S,I=P[T],L=P[k],O=0;O<b.length&&!I;O++)I=P[b[O]+"Request"+S],L=P[b[O]+"Cancel"+T];return P[T]=I=I||function(e){var t=+new Date,n=h.max(0,16-(t-A)),o=setTimeout(function(){e(t+n)},n);return A=t+n,o},P[k]=L=L||function(e){clearTimeout(e)},C}();

(function() {
  var ALPHA, AudioAnalyser, COLORS, MP3_PATH, NUM_BANDS, NUM_PARTICLES, Particle, SCALE, SIZE, SMOOTHING, SPEED, SPIN;

  NUM_PARTICLES = 150;

  NUM_BANDS = 128;

  SMOOTHING = 0.5;

  MP3_PATH = 'http://rvpg.me/experiments/dream/dream.mp3';

  SCALE = {
    MIN: 5.0,
    MAX: 80.0
  };

  SPEED = {
    MIN: 0.2,
    MAX: 1.0
  };

  ALPHA = {
    MIN: 0.8,
    MAX: 0.9
  };

  SPIN = {
    MIN: 0.001,
    MAX: 0.005
  };

  SIZE = {
    MIN: 0.5,
    MAX: 1.25
  };

  COLORS = ['#69D2E7', '#1B676B', '#BEF202', '#EBE54D', '#00CDAC', '#1693A5', '#F9D423', '#FF4E50', '#E7204E', '#0CCABA', '#FF006F'];

  AudioAnalyser = (function() {
    AudioAnalyser.AudioContext = self.AudioContext || self.webkitAudioContext;

    AudioAnalyser.enabled = AudioAnalyser.AudioContext != null;

    function AudioAnalyser(audio, numBands, smoothing) {
      var src,
        _this = this;
      this.audio = audio != null ? audio : new Audio();
      this.numBands = numBands != null ? numBands : 256;
      this.smoothing = smoothing != null ? smoothing : 0.3;
      if (typeof this.audio === 'string') {
        src = this.audio;
        this.audio = new Audio();
        this.audio.controls = true;
        this.audio.src = src;
      }
      this.context = new AudioAnalyser.AudioContext();
      this.jsNode = this.context.createJavaScriptNode(2048, 1, 1);
      this.analyser = this.context.createAnalyser();
      this.analyser.smoothingTimeConstant = this.smoothing;
      this.analyser.fftSize = this.numBands * 2;
      this.bands = new Uint8Array(this.analyser.frequencyBinCount);
      this.audio.addEventListener('canplay', function() {
        _this.source = _this.context.createMediaElementSource(_this.audio);
        _this.source.connect(_this.analyser);
        _this.analyser.connect(_this.jsNode);
        _this.jsNode.connect(_this.context.destination);
        _this.source.connect(_this.context.destination);
        return _this.jsNode.onaudioprocess = function() {
          _this.analyser.getByteFrequencyData(_this.bands);
          if (!_this.audio.paused) {
            return typeof _this.onUpdate === "function" ? _this.onUpdate(_this.bands) : void 0;
          }
        };
      });
    }

    AudioAnalyser.prototype.start = function() {
      return this.audio.play();
    };

    AudioAnalyser.prototype.stop = function() {
      return this.audio.pause();
    };

    return AudioAnalyser;

  })();

  Particle = (function() {
    function Particle(x, y) {
      this.x = x != null ? x : 0;
      this.y = y != null ? y : 0;
      this.reset();
    }

    Particle.prototype.reset = function() {
      this.level = 1 + floor(random(4));
      this.scale = random(SCALE.MIN, SCALE.MAX);
      this.alpha = random(ALPHA.MIN, ALPHA.MAX);
      this.speed = random(SPEED.MIN, SPEED.MAX);
      this.color = random(COLORS);
      this.size = random(SIZE.MIN, SIZE.MAX);
      this.spin = random(SPIN.MAX, SPIN.MAX);
      this.band = floor(random(NUM_BANDS));
      if (random() < 0.5) {
        this.spin = -this.spin;
      }
      this.smoothedScale = 0.0;
      this.smoothedAlpha = 0.0;
      this.decayScale = 0.0;
      this.decayAlpha = 0.0;
      this.rotation = random(TWO_PI);
      return this.energy = 0.0;
    };

    Particle.prototype.move = function() {
      this.rotation += this.spin;
      return this.y -= this.speed * this.level;
    };

    Particle.prototype.draw = function(ctx) {
      var alpha, power, scale;
      power = exp(this.energy);
      scale = this.scale * power;
      alpha = this.alpha * this.energy * 1.5;
      this.decayScale = max(this.decayScale, scale);
      this.decayAlpha = max(this.decayAlpha, alpha);
      this.smoothedScale += (this.decayScale - this.smoothedScale) * 0.3;
      this.smoothedAlpha += (this.decayAlpha - this.smoothedAlpha) * 0.3;
      this.decayScale *= 0.985;
      this.decayAlpha *= 0.975;
      ctx.save();
      ctx.beginPath();
      ctx.translate(this.x + cos(this.rotation * this.speed) * 250, this.y);
      ctx.rotate(this.rotation);
      ctx.scale(this.smoothedScale * this.level, this.smoothedScale * this.level);
      ctx.moveTo(this.size * 0.5, 0);
      ctx.lineTo(this.size * -0.5, 0);
      ctx.lineWidth = 1;
      ctx.lineCap = 'round';
      ctx.globalAlpha = this.smoothedAlpha / this.level;
      ctx.strokeStyle = this.color;
      ctx.stroke();
      return ctx.restore();
    };

    return Particle;

  })();

  Sketch.create({
    particles: [],
    setup: function() {
      var analyser, error, i, intro, particle, warning, x, y, _i, _ref,
        _this = this;
      for (i = _i = 0, _ref = NUM_PARTICLES - 1; _i <= _ref; i = _i += 1) {
        x = random(this.width);
        y = random(this.height * 2);
        particle = new Particle(x, y);
        particle.energy = random(particle.band / 256);
        this.particles.push(particle);
      }
      if (AudioAnalyser.enabled) {
        try {
          analyser = new AudioAnalyser(MP3_PATH, NUM_BANDS, SMOOTHING);
          analyser.onUpdate = function(bands) {
            var _j, _len, _ref1, _results;
            _ref1 = _this.particles;
            _results = [];
            for (_j = 0, _len = _ref1.length; _j < _len; _j++) {
              particle = _ref1[_j];
              _results.push(particle.energy = bands[particle.band] / 256);
            }
            return _results;
          };
          analyser.start();
          document.body.appendChild(analyser.audio);
          intro = document.getElementById('intro');
          intro.style.display = 'none';
          if (/Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent)) {
            warning = document.getElementById('warning2');
            return warning.style.display = 'block';
          }
        } catch (_error) {
          error = _error;
        }
      } else {
        warning = document.getElementById('warning1');
        return warning.style.display = 'block';
      }
    },
    draw: function() {
      var particle, _i, _len, _ref, _results;
      this.globalCompositeOperation = 'lighter';
      _ref = this.particles;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        particle = _ref[_i];
        if (particle.y < -particle.size * particle.level * particle.scale * 2) {
          particle.reset();
          particle.x = random(this.width);
          particle.y = this.height + particle.size * particle.scale * particle.level;
        }
        particle.move();
        _results.push(particle.draw(this));
      }
      return _results;
    }
  });

}).call(this);
