(function(){var b=function(e){var d=function(){};d.prototype=e;return new d()};var a=false,c=/xyz/.test(function(){xyz})?/\b_super\b/:/.*/;this.Class=function(){};Class.extend=function(){var k;var h=this.prototype;if(arguments.length>1){var j=AJS.$.makeArray(arguments);k=j.pop();var i;AJS.$.each(j,function(m,l){if(i){i=i.extend(l)}else{i=l}});return i.extend(this.prototype).extend(k)}else{k=arguments[0]}a=true;var g=new this();a=false;for(var f in k){if(g[f]=typeof k[f]=="function"&&typeof h[f]=="function"&&c.test(k[f])){g[f]=(function(l,m){return function(){var o=this._super;this._super=h[l];var n=m.apply(this,arguments);this._super=o;return n}})(f,k[f])}else{if(typeof h[f]==="object"){var e=b(k[f]);AJS.$.each(h[f],function(m,n){if(!e[m]){e[m]=n}else{if(typeof e[m]==="object"){var l=b(e[m]);AJS.$.each(n,function(p,o){if(!l[p]){l[p]=o}});e[m]=l}}});g[f]=e}else{g[f]=k[f]}}}function d(){if(!a&&this.init){this.init.apply(this,arguments)}}d.prototype=g;d.constructor=d;d.extend=arguments.callee;return d}})();