function CommonDialog(){
	this.aa="AA";
}
/*
 * <body> must contain <div id='dialog-confirm'/>
 * wisaruthk.
 */
CommonDialog.showConfirm = function(_strTitle,_strMsg,fnConfirm,fnCancle){
	if(_strTitle==null){
		_strTitle=="";
	}
	if(_strMsg==null){
		_strMsg=="";
	}
	var dConfirm = jQuery("#dialog-confirm");
	dConfirm.html("<p style='font-size:12px'>"+_strMsg+"</p>");
	dConfirm.dialog({
		draggable:false,
		zIndex:3000,
		title:_strTitle,
		resizable:false,
		height:250,
		modal:true,
		autoOpen:true,
		buttons:{
			"confirm":function(){
					jQuery(this).dialog("close");
					if(fnConfirm!=null){fnConfirm();};
				},
			"cancel":function(){
					jQuery(this).dialog("close");
					if(fnCancel!=null){fnCancel();};
				}
		}
	});
	return dConfirm;
};

CommonDialog.showMessage = function(_strMsg){
	if(_strMsg==null){
		_strMsg=="";
	}
	var dDialog = jQuery("#dialog-message");
	dDialog.html("<p style='font-size:12px'>"+_strMsg+"</p>");
	dDialog.dialog({
		draggable:false,
		zIndex:3000,
		title:"Information",
		resizable:false,
		height:250,
		modal:true,
		autoOpen:true,
		buttons:{
			"ok":function(){
					jQuery(this).dialog("close");
				}
		}
	});
	return dDialog;
};