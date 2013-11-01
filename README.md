CommonDialog-jQuery
===================

easy and simple Confirm dialog box</br>
![alt tag](https://raw.github.com/wisaruthk/CommonDialog-jQuery/master/sample-img.png)

`````html
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<link rel="stylesheet" href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css" type="text/css"/>
		<script language="JavaScript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.js" type="text/javascript"></script>
		<script language="JavaScript" src="http://code.jquery.com/ui/1.10.3/jquery-ui.js" type="text/javascript"></script>
		<script language="JavaScript" src="CommonDialog.js" type="text/javascript"></script>
		<script type="text/javascript">
			$(document).ready(function(){
				/* Confirm Dialog */
				$("#show-confirm-dialog").button().click(function(){
					var fnConfirm=function(){
						alert("Confirm");
					};
					var fnCancel=function(){
						//do nothing
					};
					CommonDialog.showConfirm(
						"Confirm",
						"Do you want to <b>Action </b> THIS",
						fnConfirm,
						fnCancel);
				});
				
				/*Message Dialog*/
				$("#show-msg-dialog").button().click(function(){
					CommonDialog.showMessage("Hello");
				});
			});
				
			
		</script>
	</head>
	<body>
		<div id="dialog-confirm"></div>
		<div id="dialog-message"></div>
		<button id="show-confirm-dialog">show confirm dialog</button>
		<button id="show-msg-dialog">show message dialog</button>
	</body>
</html>
`````
