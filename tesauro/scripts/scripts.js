var popUpWin=0;
function popUpWindow(URLStr, width, height) {
	var left = (screen.width - width) / 2;
	var right = (screen.height - height) / 2;
  if(popUpWin)
  {
    if(!popUpWin.closed) popUpWin.close();
  }
  popUpWin = open(URLStr, 'popUpWin', 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,copyhistory=yes,width='+width+',height='+height+',left='+left+', top='+right+',screenX='+left+',screenY='+top+'');
}