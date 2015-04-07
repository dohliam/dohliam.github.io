g.shaderSource(A=g.createShader(35633),"attribute vec2 P;void main(){gl_Position=vec4(P,0,1);}");
g.shaderSource(B=g.createShader(35632),"precision mediump float;uniform vec2 R;uniform float T;float M(vec3 p){for(int i=0;i<20;i++){vec3 a=vec3(T,.05*T,.005*T),s=sin(a),c=cos(a);p*=mat3(c.y*c.z,c.y*-s.z,-s.y,s.x*s.y*c.z+c.x*s.z,s.x*s.y*-s.z+c.x*c.z,s.x*c.y,c.x*s.y*c.z-s.x*s.z,c.x*s.y*-s.z-s.x*c.z,c.x*c.y);if(p.x+p.y<.0)p.xy=-p.yx;if(p.y+p.z<.0)p.yz=-p.zy;if(p.z+p.x<.0)p.zx=-p.xz;p=p*1.3-.3*(1.3-1.);}return length(p)*pow(1.3,-20.0);}void main(){vec3 a=vec3(0,0,-1),b=vec3((2.*gl_FragCoord.xy-R)/R.yy,1),c=vec3(1.-dot(b,b)*.1),p;float t=.0,d;for(int i=0;i<32;i++){p=a+b*t;d=M(p);t+=d;if(t>2.0)break;if(d<.01){vec3 s=vec3(.01,0,0);c=normalize(vec3(M(p+s.xyy)-M(p-s.xyy),M(p+s.yxy)-M(p-s.yxy),M(p+s.yyx)-M(p-s.yyx)));break;}}gl_FragColor=vec4(c,1);}");

g.compileShader(A);
g.compileShader(B);
g.attachShader(P=g.createProgram(),A);
g.attachShader(P,B);
g.linkProgram(P);
g.useProgram(P);
g.bindBuffer(A=34962,B=g.createBuffer());
g.bufferData(A,new Float32Array([-1,-1,1,-1,-1,1,1,-1,1,1,-1,1]),35044);
g.enableVertexAttribArray(B);
g.vertexAttribPointer(0,2,5126,0,0,0);
g.uniform2f(g.getUniformLocation(P,"R"),a.width*=1/a.height*(a.height=300),a.height);
a=new Date;

setInterval('g.uniform1f(g.getUniformLocation(P,"T"),(new Date-a)*.001);g.drawArrays(4,0,6)',16)
