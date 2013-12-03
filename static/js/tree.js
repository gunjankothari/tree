var remove_node=0;
function clickbutton(id)
{
	//alert('#'+id+'-vline');
	if(document.getElementById(id+"-child").value!=0)
	{
		if(document.getElementById(id+"-vline").style.display=='none')
		{
			document.getElementById(id+"-vline").style.display='block';
			document.getElementById(id).style.background='#D1F1FA';
			$('#'+id+'-arrow').removeClass("arrow-close");
			$('#'+id+'-arrow').addClass("arrow-open");
			
		}
		else
		{
			document.getElementById(id+"-vline").style.display='none';
			document.getElementById(id).style.background='#F9EEAF';
				$('#'+id+'-arrow').removeClass("arrow-open");
				$('#'+id+'-arrow').addClass("arrow-close");
		}
	$('#'+id+'-inner').toggle();
	}
}
function selectLocation(id)
{
	//alert(id);
	$(".box").removeClass("selected");	
	$("#"+id).addClass("selected");
			//alert(id.split("-").length);

	if(id.split("-").length==5)
	{
		document.getElementById('content_4').style.display='block';
		document.getElementById('content_3').style.display='none';
		document.getElementById('content_2').style.display='none';
	}
	else if(id.split("-").length==4)
	{
		document.getElementById('content_4').style.display='none';
		document.getElementById('content_3').style.display='block';
		document.getElementById('content_2').style.display='none';			
	}
	else
	{
		document.getElementById('content_4').style.display='none';
		document.getElementById('content_3').style.display='none';
		document.getElementById('content_2').style.display='block';					
	}
}
function focusLost(id)
{
	if(document.getElementById(id).value=='')
		document.getElementById(id).value='untitled';
}
function addNode(parent)
{
	total_node=parseInt(document.getElementById(parent.replace('-add','-child')).value);
	new_id=parent.replace('add','')+(total_node+1);	
	if(total_node==0)
	{
		document.getElementById(parent.replace('-add','-vline')).style.display='block';
	}
	$("#"+parent.replace('-add','-inner')).append("<div id='"+new_id+"-outer' class='box-outer'>"+
												  		"<div class='hline2'></div>"+
														"<div id='"+new_id+"-vline2' class='vline2' style='display: none;'></div>"+
														"<div id='"+new_id+"-box' class='box' onclick='selectLocation(this.id)'>"+
															"<div id='"+new_id+"-vline' class='vline' style='display:none'></div>"+
															"<div id='"+new_id+"' class='button_toggle' onclick='clickbutton(this.id)'>"+
																"<div id='"+new_id+"-arrow' class='arrow-open'></div>"+
															"</div>"+
															"<input id='"+new_id+"-number' type='text' size='3' placeholder='No.' class='txt-box-number'>"+
															"<input id='"+new_id+"-title' type='text'  placeholder='Text Here' class='txt-box' >"+
															"<input id='"+new_id+"-child' type='hidden' value='0'>"+
															"<div id='"+new_id+"-add' class='add_btn tooltip_msg' onclick='addNode(this.id)' onMouseOver=\"tooltip_add_display(\'"+new_id+"\-tooltip-add',\'"+new_id+"\-txt')\" onMouseOut=\"tooltip_add_hide(\'"+new_id+"\-tooltip-add')\"></div>"+
															"<div class='seprator1'></div>"+
															"<div id='"+new_id+"-remove' class='remove_btn' onclick='del_confirm(this.id)' onMouseOver=\"tooltip_remove_display(\'"+new_id+"\-tooltip-remove',\'"+new_id+"\-txt')\" onMouseOut=\"tooltip_remove_hide(\'"+new_id+"\-tooltip-remove')\"></div>"+

/*Add button Tooltip*/																																																																																																																																																																																																																																																																																																																														
															"<div id='"+new_id+"-tooltip-add' class='tooltip-add'>"+
																"<img  src='static/images/black_up-03.png' style='left: 45px;position: relative;float: left;height: 20px;width: 30px; z-index:1'>"+
																"<div class='tooltip-add-inner'>"+
																	"<div>"+
																		"<span id='"+new_id+"-tooltip-add-txt' class='tooltip-add-txt'></span>"+
																	"</div>"+
																"</div>"+
															"</div>"+

/*Remove button Tooltip*/																																																																																																																																																																																																																																																																																																																																																																																																																																																																																"<div id='"+new_id+"-tooltip-remove' class='tooltip-remove'>  <img  src='static/images/red_up-03.png' style='left: 72px;position: relative;float: left;height: 20px;width: 30px; z-index:1'><div style='position: relative; float: left; background: none repeat scroll 0% 0% #ED1C24; border-radius: 7px 7px 7px 7px; box-shadow: 0px 0px 5px #4D4D4D; padding:12px'><div>	<span id='"+new_id+"-tooltip-remove-txt' style='position: relative; font-family: Droid Sans,serif; float: left; font-size: 12px; color: rgb(255, 255, 255); text-align:left'></span></div></div></div>"+

/*Inner Box*/
"</div><div id='"+new_id+"-inner' class='box-inner'></div></div>");
	
	
	
	
	
	if(total_node!=0)
	{
		document.getElementById(parent.replace('add','')+total_node+'-vline2').style.display='block';
	}
	//alert("before : "+document.getElementById(parent.replace('-add','-child')).value);
	document.getElementById(parent.replace('-add','-child')).value=parseInt(document.getElementById(parent.replace('-add','-child')).value)+1;
	document.getElementById(new_id+"-number").focus();
	//alert("after : "+document.getElementById(parent.replace('-add','-child')).value);
	return new_id;
}
function del_confirm(node)
{
	document.getElementById('del-notification').style.display='block';
	remove_node=node;
}
function removeNode(node)
{
	node_id=node.replace('-remove','');
	parent_id=node.substring(0, node_id.length - 2);
	node=node.replace('-remove','-outer');
	element = document.getElementById(node);
	element.parentNode.removeChild(element);
	var i=document.getElementById(parent_id+'-child').value;
	str=node_id;
	while(i>0)
	{
		//alert((parent_id+"-"+i));
		if(document.getElementById(parent_id+"-"+i))
			break;
		i--;	
	}
	document.getElementById(parent_id+'-child').value=i;
	if(i!=0)
		document.getElementById(parent_id+"-"+i+'-vline2').style.display='none';
	if(document.getElementById(parent_id+"-child").value==0)
	{
		document.getElementById(parent_id+"-vline").style.display='none';
	}
	remove_node=0;
	document.getElementById('del-notification').style.display='none'
}
function tooltip_add_display(id,txtid)
{
	
	txt=document.getElementById(txtid).value;
	document.getElementById(id+"-txt").innerHTML="Add new Element - \""+txt+"\"";	
	document.getElementById(id).style.display='block';	 
}
function tooltip_add_hide(id)
{
	document.getElementById(id).style.display='none';	 
}
function tooltip_remove_display(id,txtid)
{
	txt=document.getElementById(txtid).value;
	document.getElementById(id+"-txt").innerHTML="Remove Element - \""+txt+"\"";
	document.getElementById(id).style.display='block';	 
}
 function tooltip_remove_hide(id)
{
	document.getElementById(id).style.display='none';	 
}