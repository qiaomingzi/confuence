AJS.bind("init.rte",function(d){var b="editor-notification-container";var e="editor-notification-message";var a=AJS.$('<div class="editor-notifications-container"></div>').attr("id",b);var c=AJS.$("<div></div>").attr("id",e);a.append(c);AJS.$("#wysiwyg").after(a);AJS.Confluence.EditorNotification={notify:function(f,g,i){AJS.messages[f]("#"+e,{body:g,closeable:true,shadowed:true});var h=AJS.$(".aui-message",a).last();if(!i){i=5000}else{i*=1000}setTimeout(function(){h.fadeOut("fast",function(){h.closeMessage();h=null})},i)}}});