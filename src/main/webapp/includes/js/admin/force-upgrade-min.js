AJS.toInit(function(b){var a=function(){var d=b(this);var c=d.parent().find(".description");c.html(AJS.I18n.getText("upgrade.description.loading")).addClass("loading");AJS.log("User selected value: "+d.val());AJS.safe.ajax({url:AJS.Meta.get("context-path")+"/admin/get-upgrade-description.action",data:{upgradeTaskToRun:d.val()},method:"GET",dataType:"json",error:function(){c.removeClass("loading").text("")},success:function(e){if(e.description){c.text(e.description).removeClass("loading")}}})};b("#upgradeTaskToRun").change(a)});