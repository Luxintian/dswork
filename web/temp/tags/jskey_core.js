﻿var $jskey=$jskey||{};
;!function(){"use strict";
$jskey.on=function($e,et,fn){$e.attachEvent ? $e.attachEvent('on'+et,function(){fn.call($e,window.event);}):$e.addEventListener(et,fn,false);return $jskey;};$jskey.$=function(id){return document.getElementById(id);};$jskey.$isDOM=(typeof HTMLElement==='object')?function(o){return o instanceof HTMLElement;}:function(o){return o&&typeof o==='object'&&o.nodeType===1&&typeof o.nodeName==='string';};$jskey.$byName=function(name){return document.getElementsByName(name);};$jskey.$byTagName=function(name){return document.getElementsByTagName(name);};$jskey.$dateFormat=function(d,f){var t={"y+":d.getFullYear(),"M+":d.getMonth()+1,"d+":d.getDate(),"H+":d.getHours(),"m+":d.getMinutes(),"s+":d.getSeconds(),"S+":d.getMilliseconds()};var _t;for(var k in t){while(new RegExp("("+k+")").test(f)){_t=(RegExp.$1.length==1)? t[k]:("0000000000".substring(0,RegExp.$1.length)+t[k]).substr((""+t[k]).length);f=f.replace(RegExp.$1,_t+"");}}return f;};$jskey.$replace=function(str,t,u){str=str+"";var i=str.indexOf(t);var r="";while(i !=-1){r+=str.substring(0,i)+u;str=str.substring(i+t.length,str.length);i=str.indexOf(t);}r=r+str;return r;};$jskey.$show=function(msg){if((msg||"").length>0){alert(msg);}};$jskey.$url=function(){var _p=window.location.pathname;return _p.substring(0,_p.lastIndexOf("/"));};$jskey.$random=function(){return(new Date().getTime())+"";};$jskey.$link=function(path){var k=document.createElement("link");k.rel="stylesheet";k.type="text/css";k.href=path;document.getElementsByTagName("head")[0].appendChild(k);k=null;};
$jskey.$src=$jskey.$replace($jskey.$byTagName("script")[$jskey.$byTagName("script").length-1].src+"","\\","/");$jskey.$path=$jskey.$src.substring(0,$jskey.$src.lastIndexOf("/")+1);try{if($jskey.$path.length>7&&$jskey.$path.substring($jskey.$path.length-7)!="/jskey/"){$jskey.$path="/web/js/jskey/";}}catch(e){}
$jskey.checkbox={getSelected:function(name,msg){var _a=[];var _e=$jskey.$byName(name);for(var i=0;i<_e.length;i++){if(_e[i].checked){_a[_a.length]={"id":_e[i].getAttribute("id"),"value":_e[i].value};}}if(_a.length==0){$jskey.$show(msg);}return _a;},countSelected:function(name){return(this.getSelected(name)).length;},getSelectedBySeparator:function(name,sep){var _v="";var _a=this.getSelected(name);for(var i=0;i<_a.length;i++){_v+=((_v=="")? "":sep)+_a[i].value;}return _v;},getSelectedIdBySeparator:function(name,sep){var _v="";var _a=this.getSelected(name);for(var i=0;i<_a.length;i++){_v+=((_v=="")? "":sep)+_a[i].id;}return _v;},getSingleSelected:function(name,msg){var _o=null;var _e=$jskey.$byName(name);for(var i=0;i<_e.length;i++){if(_e[i].checked){if(_o==null){_o={"id":_e[i].getAttribute("id"),"value":_e[i].value};}else{$jskey.$show(msg);_o=null;break;}}}return _o;},isSelected:function(name){var _e=$jskey.$byName(name);for(var i=0;i<_e.length;i++){if(_e[i].checked){return true;}}return false;},reselect:function(name,chk){var _e=$jskey.$byName(name);if(chk==null){for(var i=0;i<_e.length;i++){_e[i].checked=!(_e[i].checked);}}else{chk=(chk)? true:false;for(var i=0;i<_e.length;i++){_e[i].checked=chk;}}}};
$jskey.radio={getSelected:function(name,msg){var _o=null;var _e=$jskey.$byName(name);for(var i=0;i<_e.length;i++){if(_e[i].checked){_o={"id":_e[i].getAttribute("id"),"value":_e[i].value};break;}}if(_o==null){$jskey.$show(msg);}return _o;},getId:function(name,defaultValue){var _a=this.getSelected(name);return(_a==null)?defaultValue:_a.id;},getValue:function(name,defaultValue){var _a=this.getSelected(name);return(_a==null)?defaultValue:_a.value;},reselect:function(name,value,isDisabled){var _c=false;var _e=$jskey.$byName(name);for(var i=0;i<_e.length;i++){if(_e[i].value==value){_e[i].disabled=false;_e[i].checked=true;_c=true;}else{_e[i].disabled=isDisabled||false;}}if(!_c){_e[0].disabled=false;_e[0].checked=true;}return _c;},reset:function(name,isDisabled){isDisabled=isDisabled ? true:false;var _e=$jskey.$byName(name);for(var i=0;i<_e.length;i++){_e[i].disabled=isDisabled;_e[i].checked=false;}}};
$jskey.select={$fnSwap:function(o1,o2){var _t=o1.value;o1.value=o2.value;o2.value=_t;_t=o1.text;o1.text=o2.text;o2.text=_t;_t=o1.selected;o1.selected=o2.selected;o2.selected=_t;},exist:function(id,v){var _o=$jskey.$(id);for(var i=0;i<_o.options.length;i++){if(v==_o.options[i].value){return true;}}return false;},add:function(id,t,v){var _o=$jskey.$(id);_o.options[_o.options.length]=new Option(t,v);},copy:function(fromID,toID,isSelected,isClear){var _o1=$jskey.$(fromID);var _o2=$jskey.$(toID);if(_o1.options.length>-1){if(isSelected){if(_o1.selectedIndex>-1){if(isClear){_o2.options.length=0;}for(var i=0;i<_o1.options.length;i++){if(_o1.options[i].selected&&!this.exist(toID,_o1.options[i].value)){_o2.options[_o2.options.length]=new Option(_o1.options[i].text,_o1.options[i].value);}}}}else{if(isClear){_o2.options.length=0;}for(var i=0;i<_o1.options.length;i++){_o2.options[_o2.options.length]=new Option(_o1.options[i].text,_o1.options[i].value);}}}},move:function(id,count,isWay){var _o=$jskey.$(id);var _a=_o.options;if(count==0){var _t=null;if(isWay){for(var i=0;i<_a.length;i++){if(_a[i].selected&&_t){_o.insertBefore(_a[i],_t);}else if(!_t&&!_a[i].selected){_t=_a[i];}}}else{for(var i=_a.length-1;i>-1;i--){if(_a[i].selected){if(_t){_t=_o.insertBefore(_a[i],_t);}else{_t=_o.appendChild(_a[i]);}}}}}else{if(isWay){for(var j=0;j<count;j++){for(var i=1;i<_a.length;i++){if(_a[i].selected&&!_a[i-1].selected){this.$fnSwap(_a[i],_a[i-1]);}}}}else{for(var j=0;j<count;j++){for(var i=_a.length-2;i>-1;i--){if(_a[i].selected&&!_a[i+1].selected){this.$fnSwap(_a[i],_a[i+1]);}}}}}},remove:function(id,isSelected){var _o=$jskey.$(id);if(isSelected){for(var i=_o.length-1;i>=0;i--){if(_o.options[i].selected){_o.remove(i);}}}else{_o.options.length=0;}},reselect:function(id,isSelected){var _o=$jskey.$(id);var _a=_o.options;if(isSelected==null){for(var i=0;i<_a.length;i++){_a[i].selected=!_a[i].selected;}}else{isSelected=(isSelected)? true:false;for(var i=0;i<_a.length;i++){_a[i].selected=isSelected;}}},swap:function(fromID,toID,isSelected){var _o1=$jskey.$(fromID);var _o2=$jskey.$(toID);if(_o1.options.length>-1){var _a=[];if(isSelected){if(_o1.selectedIndex>-1){for(var i=_o1.length-1;i>=0;i--){if(_o1.options[i].selected){_a[_a.length]=new Option(_o1.options[i].text,_o1.options[i].value);_o1.remove(i);}}for(var i=0;i<_a.length;i++){_o2.options[_o2.options.length]=_a[i];}}}else{for(var i=_o1.length-1;i>=0;i--){_a[_a.length]=new Option(_o1.options[i].text,_o1.options[i].value);_o1.remove(i);}for(var i=0;i<_a.length;i++){_o2.options[_o2.options.length]=_a[i];}}}}};
$jskey.dialog={returnValue:null,dialogArguments:null,close:function(){},callback:function(){},showDialog:function(){var o=arguments[0];if(typeof(o)!="object"){o={};}var defaults={"id":"dsworkDialog","title":"Window","url":"","width":400,"height":300,"args":{"data":{},"url":""},"iconCls":'icon_system',"maximizable":false,"minimizable":false,"collapsible":false,"resizable":true,"modal":true,"zIndex":9999};var opts=$.extend(defaults,o);if(opts.args&&opts.args.url){if(opts.args.url.indexOf("/")!=0&&opts.args.url.indexOf("http:")!=0&&opts.args.url.indexOf("https:")!=0&&o.url.indexOf("file:")!=0&&o.url.indexOf(":")!=1){opts.args.url=$jskey.$url()+"/"+opts.args.url;}}$jskey.dialog.dialogArguments={url:opts.url,args:opts.args};var $win=$('#'+opts.id);$jskey.dialog.returnValue=null;var url=opts.url+((opts.url.indexOf("?")==-1)? "?jskey=":"&jskey=")+$jskey.$random();if($win.length){$('iframe',$win)[0].contentWindow.location.href=url;$win.dialog('open');}else{$win=$('<div id="'+opts.id+'" style="overflow:hidden;"></div>').appendTo('body');opts.onClose=function(){$jskey.dialog.dialogArguments=null;$win.dialog('destroy');try{if(o.callback&&typeof(o.callback)=="function"){o.callback();}else{$jskey.dialog.callback();}}catch(e){}};opts.content='<iframe scrolling="auto" src="" width="100%" height="100%" style="width:100%;height:100%;border:0;" frameborder="0"></iframe>';$win.dialog(opts);$('iframe',$win)[0].contentWindow.location.href=url;}$jskey.dialog.close=function(){$win.dialog('close');};},showModalDialog:function(url,args,width,height,status,scroll,resizable){url+=((url.indexOf("?")==-1)? "?jskey=":"&jskey=")+$jskey.$random();return window.showModalDialog(url,args,("help:no;center:yes;dialogWidth:"+width+"px;dialogHeight:"+height+"px;status:"+status+";scroll:"+scroll+";resizable:"+resizable+";dialogTop:"+((window.screen.availHeight-height)/ 3)+";dialogLeft:"+((window.screen.availWidth-width)/ 2)));},show:function(){var o=arguments[0];if(typeof(o)!="object"){o={};}o.url=o.url||arguments[2]||"";if(o.url.indexOf("/")!=0&&o.url.indexOf("http:")!=0&&o.url.indexOf("https:")!=0&&o.url.indexOf("file:")!=0&&o.url.indexOf(":")!=1){o.url=$jskey.$url()+"/"+o.url;}o.height=o.height||arguments[5]||450;$jskey.dialog.returnValue=null;var reValue=this.showModalDialog($jskey.$path+"themes/dialog/jskey_dialog.html",{title:o.title||arguments[1]||"",url:o.url,args:o.args||arguments[3]||"",height:o.height},o.width||arguments[4]||600,o.height,o.status||arguments[7]||"no",o.scroll||arguments[8]||"auto",o.resizable||arguments[9]||"yes");if(o.reload||arguments[6]||false){window.location.reload();}else{var v=reValue;$jskey.dialog.returnValue=v;$jskey.dialog.callback();return v;}},openWindow:function(url,target,width,height,top,left,status,scroll,resizable,menubar,fullscreen,toolbar,location,directories,channelmode){url+=((url.indexOf("?")==-1)? "?jskey=":"&jskey=")+$jskey.$random();window.open(url,target,("width="+width+",height="+height+",top:"+top+",left:"+left+",status="+status+",scrollbars="+scroll+",resizable="+resizable+",menubar="+menubar+",fullscreen="+fullscreen+",toolbar="+toolbar+",location="+location+",directories="+directories+",channelmode="+channelmode));},open:function(){var o=arguments[0];if(typeof(o)!="object"){o={};}o.width=o.width||arguments[3]||600;o.height=o.height||arguments[4]||450;o.top=o.top||arguments[5]||((window.screen.availHeight-o.height)/ 3);o.left=o.left||arguments[6]||((window.screen.availWidth-o.width)/ 2);this.openWindow(o.url||arguments[1]||"",o.target||arguments[2]||"",o.width,o.height,o.top,o.left,o.status||arguments[7]||"no",o.scroll||arguments[8]||"yes",o.resizable||arguments[9]||"yes",o.menubar||arguments[10]||"no",o.fullscreen||arguments[11]||"no",o.toolbar||arguments[12]||"no",o.location||arguments[13]||"no",o.directories||arguments[14]||"no",o.channelmode||arguments[15]||"no");}};
$jskey.dialog.showChoose=function(m){m.url=$jskey.$path+"themes/dialog/jskey_choose.html";return $jskey.dialog.showDialog(m);};
$jskey.dialog.showChooseKey=function(m){m.url=$jskey.$path+"themes/dialog/jskey_choose_key.html";return $jskey.dialog.showDialog(m);};
$jskey.Map=function(){this.$v=[];};$jskey.Map.prototype={$fnChk:function(v){return(typeof(v)!="string")? v+"":v.replace(/(^\s*)|(\s*$)/g,"");},put:function(k,v){k=this.$fnChk(k);if(k.length>0){for(var i=0;i<this.$v.length;i++){if(k==this.$v[i][0]){this.$v[i][1]=v;return false;}}this.$v[this.$v.length]=[k,v];return true;}},putTry:function(k,v){k=this.$fnChk(k);if(k.length>0){for(var i=0;i<this.$v.length;i++){if(k==this.$v[i][0]){return false;}}this.$v[this.$v.length]=[k,v];return true;}return false;},remove:function(k){k=this.$fnChk(k);if(k.length>0){for(var i=0;i<this.$v.length;i++){if(k==this.$v[i][0]){this.$v.splice(i,1);break;}}}},get:function(k){k=this.$fnChk(k);if(k.length>0){for(var i=0;i<this.$v.length;i++){if(k==this.$v[i][0]){return this.$v[i][1];}}}return null;},getKeyArray:function(){var _a=[];for(var i=0;i<this.$v.length;i++){_a[_a.length]=this.$v[i][0];}return _a;},getValueArray:function(){var _a=[];for(var i=0;i<this.$v.length;i++){_a[_a.length]=this.$v[i][1];}return _a;},size:function(){return this.$v.length;},containsKey:function(k){k=this.$fnChk(k);if(k.length>0){for(var i=0;i<this.$v.length;i++){if(k==this.$v[i][0]){return true;}}}return false;}};
$jskey.validator={"Char":{"v":/^[A-Za-z0-9_]+$/,"msg":"允许字母、数字、下划线"},"Chinese":{"v":/^[\u4e00-\u9fa5]+$/,"msg":"只允许中文"},"Email":{"v":/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,"msg":"格式错误"},"English":{"v":/^[A-Za-z]+$/,"msg":"只允许字母"},"Mobile":{"v":/^(1\d{10})$/,"msg":"请输入手机号码(纯数字)"},"Money":{"v":/^(([1-9](\d+)?)|0)(\.\d+)?$/,"msg":"请输入金额"},"Numeral":{"v":/^\d+$/,"msg":"请输入数字"},"Phone":{"v":/^((0\d{2,3})|(\(0\d{2,3}\)))?(-)?[1-9]\d{6,10}(([\-0-9]+)?[^\D]{1})?$/,"msg":"请输入电话号码"},"Require":{"v":/\S+/,"msg":"必填"},"RequireCompact":{"v":/^\S+$/,"msg":"必填(无空格)"},"RequireTrim":{"v":/(^[^\s]{1}(.+)?[^\s]{1}$)|(^[^\s]{1}$)/,"msg":"必填(无前后空格)"},"Url":{"v":/^http(s)?:\/\/[\w\-]+(\.[\w\-]+)*(:(6553[0-5]|655[0-2]\d|65[0-4]\d{2}|6[0-4]\d{3}|[1-5]\d{4}|[1-9]\d{1,3}|[1-9]))?(\/[\d\w\-\/\=\!\@\#\$\%\~\&\(\)\[\]\{\};\?\*\+\.]*)?$/,"msg":"格式错误"},"Zip":{"v":/^[1-9]\d{5}$/,"msg":"邮政编码不存在"},"Number":{"v":"this._Number(x.value)","msg":"请输入数值"},"NumberPlus":{"v":"this._NumberPlus(x.value)","msg":"请输入正数"},"NumberMinus":{"v":"this._NumberMinus(x.value)","msg":"请输入负数"},"Integer":{"v":"this._Integer(x.value)","msg":"请输入整数"},"IntegerPlus":{"v":"this._IntegerPlus(x.value)","msg":"请输入正整数"},"IntegerMinus":{"v":"this._IntegerMinus(x.value)","msg":"请输入负整数"},"Custom":{"v":"this._Custom(x.value,x.getAttribute('regexp'))","msg":""},"DateCheck":{"v":"this._DateCheck(x.value,x.getAttribute('operator'),$jskey.$(x.getAttribute('to')).value,x.getAttribute('require'))","msg":"日期不正确"},"Filename":{"v":"this._Filename(x.value)","msg":"不能为空,且不能包含下列字符 \\ \/ \:\* \? \"<>"},"Filter":{"v":"this._Filter(x.value,x.getAttribute('accept'))","msg":""},"Function":{"v":"this._Function(x.value,x.getAttribute('fn'))","msg":""},"Group":{"v":"this._Group(x.getAttribute('name'),x.getAttribute('min'),x.getAttribute('max'))","msg":""},"IdCard":{"v":"this._IdCard(x.value)","msg":"身份证号码错误"},"Limit":{"v":"this._Limit(x.value.length,x.getAttribute('min'),x.getAttribute('max'))","msg":""},"LimitB":{"v":"this._Limit(this._LenB(x.value),x.getAttribute('min'),x.getAttribute('max'))","msg":""},"OrgCode":{"v":"this._OrgCode(x.value)","msg":"组织机构代码错误"},"Password":{"v":"this._Password(x.value)","msg":"密码不符合安全规则"},"Repeat":{"v":"x.value==$jskey.$(x.getAttribute('to')).value","msg":"输入不一致"},"Range":{"v":"this._Range(x.value,x.getAttribute('min'),x.getAttribute('max'))","msg":"请输入正确整数"},"UnitCode":{"v":"this._UnitCode(x.value)","msg":"统一社会信用代码错误"},"UploadFile":{"v":"this._UploadFile(x.value)","msg":"请上传文件"},"UploadFileCheck":{"v":"this._UploadFileCheck(x.value)","msg":"请上传文件或取消(清空上传内容)"},"UserCard":{"v":"this._UserCard(x.value)","msg":"身份证号码错误"},$ErrorObj:[],$ErrorMsg:["\u4ee5\u4e0b\u539f\u56e0\u5bfc\u81f4\u63d0\u4ea4\u5931\u8d25\uff1a\t\t\t\t"],$AlertMsg:["\u4ee5\u4e0b\u539f\u56e0\u5bfc\u81f4\u63d0\u4ea4\u5931\u8d25\uff1a\t\t\t\t"],$num:1,$Array:function(formID,inputID,inputObject){var m=null;if(formID.length==0){m={arr:[]};var _o=(inputID.length>0 ? $jskey.$(inputID):inputObject);this.$Clear(_o);var _dt=_o.getAttribute("datatype")||_o.getAttribute("dataType");if(typeof(_dt)=="object"||typeof(this[_dt])=="undefined"){return m;}m.arr.push(_o);}else{m=$jskey.$(formID)||event.srcElement;if(m.arr !=null){for(var i=0;i<m.arr.length;i++){this.$Clear(m.arr[i]);}}m.arr=[];var _t=m.getElementsByTagName('*');var _dt;for(var i=0;i<_t.length;i++){this.$Clear(_t[i]);if(_t[i].getAttribute){_dt=_t[i].getAttribute("datatype")||_t[i].getAttribute("dataType");if(typeof(_dt)=="object"||typeof(this[_dt])=="undefined"){continue;}m.arr.push(_t[i]);}}}return m;},$OnBlur:function(obj,mode,show){this.Validate(null,mode,null,obj,show);},$OnFocus:function(obj){this.$Clear(obj);},Init:function(){var formID=arguments[0]||"";var mode=arguments[1]||"";var inputID=arguments[2]||"";var inputObject=arguments[3]||"";var show=arguments[4];if(show==null){show=true;}show=show ? true:false;var obj=this.$Array(formID,inputID,inputObject);var count=obj.arr.length;var e=this;for(var i=0;i<count;i++){var v=obj.arr[i];var _dt=v.getAttribute("datatype")||v.getAttribute("dataType");if(typeof(_dt)=="object"||typeof(this[_dt])=="undefined"||v.JskeyValidatorTrans){continue;}v.JskeyValidatorTrans=true;v.JskeyValidatorBlur=v.onblur;v.JskeyValidatorFocus=v.onfocus;v.JskeyValidatorShow=show;v.JskeyValidatorMode=3;v.onblur=function(){e.$OnBlur(this,this.JskeyValidatorMode,this.JskeyValidatorShow);if(typeof(this.JskeyValidatorBlur)=='function'){this.JskeyValidatorBlur();}};v.onfocus=function(){e.$OnFocus(this);if(typeof(this.JskeyValidatorFocus)=='function'){this.JskeyValidatorFocus();}};if(_dt=="Group"){var _g=document.getElementsByName(v.getAttribute("name"));for(var j=_g.length-1;j>=0;j--){_g[j].JskeyValidatorObj=v;if(!_g[j].JskeyValidatorTrans){_g[j].JskeyValidatorTrans=true;_g[j].JskeyValidatorBlur=_g[j].onblur;_g[j].JskeyValidatorFocus=_g[j].onfocus;_g[j].JskeyValidatorShow=show;_g[j].JskeyValidatorMode=mode;_g[j].onblur=function(){e.$OnBlur(this.JskeyValidatorObj,this.JskeyValidatorMode,this.JskeyValidatorShow);if(typeof(this.JskeyValidatorBlur)=='function'){this.JskeyValidatorBlur();}};_g[j].onfocus=function(){e.$OnFocus(this.JskeyValidatorObj);if(typeof(this.JskeyValidatorFocus)=='function'){this.JskeyValidatorFocus();}};}}}}},Validate:function(){var formID=arguments[0]||"";var mode=arguments[1]||"";var inputID=arguments[2]||"";var inputObject=arguments[3]||"";var show=arguments[4];if(show==null){show=true;}show=show ? true:false;this.Init(formID,mode,inputID,inputObject,show);var obj=this.$Array(formID,inputID,inputObject);var count=obj.arr.length;var errMsg="";var alertMsg="";this.$ErrorMsg.length=1;this.$AlertMsg.length=1;this.$ErrorObj.length=1;this.$ErrorObj[0]=obj;for(var i=0;i<count;i++){var x=obj.arr[i];var _dt=x.getAttribute("datatype")||x.getAttribute("dataType");if(typeof(_dt)=="object"||typeof(this[_dt])=="undefined"){continue;}if(x.getAttribute("require")=="false"&&x.value==""){continue;}if(x.getAttribute("msg")==null){errMsg=this[_dt].msg;}else{errMsg=x.getAttribute("msg");}if(x.getAttribute("alertMsg")==null||typeof(x.getAttribute("alertMsg"))=="undefined"){alertMsg=errMsg;}else{alertMsg=x.getAttribute("alertMsg");}switch(_dt){case "Number":case "NumberPlus":case "NumberMinus":case "Integer":case "IntegerPlus":case "IntegerMinus":case "Custom":case "DateCheck":case "Filename":case "Filter":case "Function":case "Group":case "IdCard":case "Limit":case "LimitB":case "OrgCode":case "Password":case "Repeat":case "Range":case "UnitCode":case "UploadFile":case "UploadFileCheck":case "UserCard":if(!eval(this[_dt].v)){this.$AddError(i,errMsg,alertMsg);}break;default:if(!this[_dt].v.test(x.value)){this.$AddError(i,errMsg,alertMsg);}break;}}if(this.$ErrorMsg.length>1){mode=mode||3;if(mode<3){mode=3;}var _c=this.$ErrorObj.length;switch(mode){case 4:alert(this.$AlertMsg.join("\n"));case 3:var _temp=(typeof(jQuery)=="function"&&$jskey.tooltip);for(var i=1;i<_c;i++){try{var _o=document.createElement("SPAN");this.$num++;_o.id="__ErrorMsgPanel"+this.$num;_o.style.color="#ff0000";this.$Clear(this.$ErrorObj[i]);this.$ErrorObj[i].JskeyValidator=_o.id;this.$ErrorObj[i].parentNode.appendChild(_o);_o.innerHTML=this.$ErrorMsg[i].replace(/\d+:/,"");if(_temp){var v=jQuery("#"+_o.id);var m=$("<img style=\"vertical-align:middle;\" src=\""+$jskey.$path+"themes/tooltip/tipx.gif"+"\"/>").attr("msg",v.html());v.html(m);m.tipx();if(show){m.tipx("show");}}}catch(e){alert(e.description);}}break;default:alert(this.$AlertMsg.join("\n"));break;}return false;}return true;},$Clear:function(o){try{o.parentNode.removeChild($jskey.$(o.JskeyValidator));o.JskeyValidator=null;}catch(e){}},$AddError:function(index,emsg,amsg){this.$ErrorObj[this.$ErrorObj.length]=this.$ErrorObj[0].arr[index];this.$ErrorMsg[this.$ErrorMsg.length]=this.$ErrorMsg.length+":"+emsg;this.$AlertMsg[this.$AlertMsg.length]=this.$AlertMsg.length+":"+amsg;},_Number:function(v){if(!isNaN(v)){if(v.length==0||v.indexOf("+")!=-1){return false;}if(v.indexOf(".")==0||v.indexOf("-.")==0||v.indexOf("00")==0||v.indexOf("-00")==0||v.lastIndexOf(".")==v.length-1){return false;}return true;}return false;},_NumberPlus:function(v){if(this._Number(v)){if(v.indexOf("-")!=-1){return false;}return true;}return false;},_NumberMinus:function(v){if(this._Number(v)){if(v.indexOf("-")!=-1){return true;}}return false;},_Integer:function(v){if(this._Number(v)){if(v.indexOf(".")!=-1){return false;}return true;}return false;},_IntegerPlus:function(v){if(this._Integer(v)){if(v.indexOf("-")!=-1){return false;}return true;}return false;},_IntegerMinus:function(v){if(this._Integer(v)){if(v.indexOf("-")!=-1){return true;}}return false;},_Custom:function(op,reg){return new RegExp(reg,"g").test(op);},_DateCheck:function(op1,operator,op2,require){if(require=="false"&&op2.length==0){return true;}try{if(op1.length==0||op2.length==0){return false;}var d1=_$ToDate(op1);var d2=_$ToDate(op2);if(typeof(d1)!="object"||typeof(d2)!="object"){return false;}switch(operator){case "==":return(d1==d2);case "!=":return(d1 !=d2);case ">":return(d1>d2);case ">=":return(d1>=d2);case "<":return(d1<d2);case "<=":return(d1<=d2);default:return(d1>=d2);}}catch(e){}return false;function _$ToDate(op){try{var o,_y,_M,_d;o=op.match(new RegExp("^(\\d{4})([-./])(\\d{1,2})\\2(\\d{1,2})"));_d=o[4];_M=o[3]* 1;_y=o[1];if(!parseInt(_M)){return "";}_M=_M==0 ? 12:_M;return new Date(_y,_M-1,_d);}catch(ee){}return "";}},_Filename:function(v){if(v.length==0){return false;}if(v.indexOf("\\")==-1&&v.indexOf("\/")==-1&&v.indexOf("\:")==-1&&v.indexOf("\*")==-1&&v.indexOf("\?")==-1&&v.indexOf("\"")==-1&&v.indexOf("<")==-1&&v.indexOf(">")==-1&&v.indexOf(".")!=0&&v.lastIndexOf(".")!=(v.length-1)){return true;}return false;},_Filter:function(input,filter){return new RegExp("^.+\.(?=EXT)(EXT)$".replace(/EXT/g,filter.split(/\s*,\s*/).join("|")),"gi").test(input);},_Function:function(value,fn){var result=false;value=$jskey.$replace(value,"\"","\\\"");value=$jskey.$replace(value,"\r","");value=$jskey.$replace(value,"\n","");eval("result="+fn+"(\""+$jskey.$replace(value,"\"","\\\"")+"\")");return result;},_Group:function(name,min,max){var _g=document.getElementsByName(name);var chk=0;min=min||1;max=max||_g.length;for(var i=_g.length-1;i>=0;i--){if(_g[i].checked){chk++;}}return min<=chk&&chk<=max;},_ID_CN:function(v){var _iSum=0;if(!(/^\d{17}([X\d]{1})$/i.test(v))){return false;}v=v.replace(/[X]{1}$/i,"a");if("11_12_13_14_15_21_22_23_31_32_33_34_35_36_37_41_42_43_44_45_46_50_51_52_53_54_61_62_63_64_65_71_81_82_91".indexOf(v.substr(0,2))==-1){return false;}var _bd=v.substr(6,4)+"/"+v.substr(10,2)+"/"+v.substr(12,2);if(_bd !=$jskey.$dateFormat(new Date(_bd),"yyyy/MM/dd")){return false;}for(var i=17;i>=0;i--){_iSum+=(Math.pow(2,i)% 11)* parseInt(v.charAt(17-i),11);}if(_iSum%11 !=1){return false;}return true;},_ID_HK:function(v){if(!(/^([A-Z]{1})\d{6}\(([0-9A]{1})\)$/.test(v))){return false;}var i1=v.charCodeAt(0)-64;var i2=v.charCodeAt(1)-48;var i3=v.charCodeAt(2)-48;var i4=v.charCodeAt(3)-48;var i5=v.charCodeAt(4)-48;var i6=v.charCodeAt(5)-48;var i7=v.charCodeAt(6)-48;var i8=v.charCodeAt(8);i8=i8-(i8==65 ? 55:48);var _iSum=i1*8+i2*7+i3*6+i4*5+i5*4+i6*3+i7*2+i8;if(_iSum%11 !=0){return false;}return true;},_ID_TW:function(v){if(!(/^([A-Z]{1})([12]{1})\d{8}$/.test(v))){return false;}var d1=parseInt(("ABCDEFGHJKLMNPQRSTUVXYWZIO".indexOf(v.charAt(0))+10),10);var x1=parseInt(d1/10,10);var x2=d1%10;var d2=parseInt(v.charAt(1),10);var d3=parseInt(v.charAt(2),10);var d4=parseInt(v.charAt(3),10);var d5=parseInt(v.charAt(4),10);var d6=parseInt(v.charAt(5),10);var d7=parseInt(v.charAt(6),10);var d8=parseInt(v.charAt(7),10);var d9=parseInt(v.charAt(8),10);var d10=parseInt(v.charAt(9),10);var _iSum=x1+x2*9+d2*8+d3*7+d4*6+d5*5+d6*4+d7*3+d8*2+d9;if(d10==10-_iSum%10){return true;}return false;},_ID_MO:function(v){if(!(/^([157]{1})\d{6}\(\d{1}\)$/.test(v))){return false;}return true;},_IdCard:function(v){return this._ID_CN(v);},_Limit:function(len,min,max){min=min||0;max=max||Number.MAX_VALUE;return min<=len&&len<=max;},_LenB:function(v){return v.replace(/[^\x00-\xff]/g,"***").length;},_OrgCode:function(v){if(!(/^([A-Z\d]{9})$/.test(v))){return false;}var CC="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";var WW=[3,7,9,10,5,8,4,2];var iSum=0;for(var i=0;i<8;i++){iSum+=CC.indexOf(v.charAt(i))* WW[i];}var C9=11-iSum%11;if(C9==11){C9=0;}if(C9==10){C9='X';}if(C9==v.charAt(8)){return true;}return false;},_Password:function(v){return !(/^(([A-Z]*|[a-z]*|\d*|[-_\~!@#\$%\^&\*\.\(\)\[\]\{\}<>\?\\\/\'\"]*)|.{0,5})$|\s/.test(v));},_Range:function(v,min,max){min=min||(-1 * Number.MAX_VALUE);max=max||Number.MAX_VALUE;return this._Integer(v)&&parseInt(min)<=parseInt(v)&&parseInt(v)<=parseInt(max);},_UnitCode:function(v){if(!(/^([ABCDEFGHJKLMNPQRTUWXY\d]{18})$/.test(v))){return false;}if(!this._OrgCode(v.substr(8,9))){return false;}if("11_12_13_19_21_31_41_51_52_53_59_61_71_81_91_92_93_99_A1_B1_C1_D1_E1_F1_G1_Y1".indexOf(v.substr(0,2))==-1){return false;}var CC="0123456789ABCDEFGHJKLMNPQRTUWXY0";var WW=[1,3,9,27,19,26,16,17,20,29,25,13,8,24,10,30,28];var iSum=0;for(var i=0;i<17;i++){iSum+=CC.indexOf(v.charAt(i))* WW[i];}if(CC.charAt(31-iSum%31)==v.charAt(17)){return true;}return false;},_UploadFile:function(v){if(v !=""){if(v=="0"){return false;}return true;}return false;},_UploadFileCheck:function(v){return v=="";},_UserCard:function(v){if(this._ID_CN(v)){return true;}else if(this._ID_HK(v)){return true;}else if(this._ID_TW(v)){return true;}else if(this._ID_MO(v)){return true;}return false;},submit:function(containerid,submitid,type){if(this.Validate(containerid,3)){if(type==null||type !="select"){var _msg="是否确定提交?";if(type=="insert")_msg="是否确定提交?";else if(type=="update")_msg="是否确定保存?";if(!confirm(_msg)){return false;}}$jskey.$(submitid).click();return true;}return false;}};
if(true){(new Image()).src=$jskey.$path+"themes/tooltip/tipx.gif";}
}();
"function"===typeof define ? define(function(){return $jskey;}):"undefined" !=typeof exports ? module.exports=$jskey:window.$jskey=$jskey;
