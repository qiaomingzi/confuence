AJS.toInit(function(d){var a=d("#confluence-about-link"),b;var c=function(){var f=AJS.Meta.get("version-number").match(/^\d+\.\d+/),h=AJS.I18n.getText("aboutpage.section.title",f),g=AJS.Meta.get("context-path")+"/aboutconfluence.action",e=new AJS.ConfluenceDialog({id:"about-confluence-dialog",closeOnOutsideClick:true});e.addHeader(h);e.addCancel(AJS.I18n.getText("close.name"),function(){e.hide()});d.get(g,function(i){e.addPanel("default",i,"about-page-content")});return e};a.click(function(f){f.preventDefault();AJS.$(document).focus();if(b==null){b=c()}b.show()})});