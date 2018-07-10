function select_unit (y)
	{
		var x=document.getElementById("len_sel");
		x.style.display="none";
		var x=document.getElementById("ar_sel");
		x.style.display="none";
		var x=document.getElementById("vol_sel");
		x.style.display="none";
		if (y=='len')
		{var x=document.getElementById("len_sel");
		x.style.display="block";}
		else if(y=='area')
		{var x=document.getElementById("ar_sel");
		x.style.display="block";}
		else if(y=='vol')
			{var x=document.getElementById("vol_sel");
		x.style.display="block";}	
	}
function sub()
{
	var opt=document.getElementById("hid").value;
	var field1=document.getElementById("number").value;
	if (opt=="mf")
		{
			var result=field1*3.2808;
			result=Math.round(result*100)/100;
			document.getElementById("sh").innerHTML=result;
		}
		else if(opt=="fm")
		{
			var result=field1*0.3048;
			result=Math.round(result*100)/100;
			document.getElementById("sh").innerHTML=result;	
		}
		else if(opt=="ic")
		{
			var result=field1*2.54;
			result=Math.round(result*100)/100;
			document.getElementById("sh").innerHTML=result;	
		}
		else if(opt=="ci")
		{
			var result=field1*0.393701;
			result=Math.round(result*100)/100;
			document.getElementById("sh").innerHTML=result;	
		}
	
		else if (opt=="sqcmf")
		{
			var result=field1*10.7639;
			result=Math.round(result*100)/100;
			document.getElementById("sh").innerHTML=result;
		}
		else if(opt=="sqfcm")
		{
			var result=field1*0.092903;
			result=Math.round(result*100)/100;
			document.getElementById("sh").innerHTML=result;	
		}
		else if(opt=="sqic")
		{
			var result=field1*6.4516;
			result=Math.round(result*100)/100;
			document.getElementById("sh").innerHTML=result;	
		}
		else if(opt=="sqci")
		{
			var result=field1*0.155;
			result=Math.round(result*100)/100;
			document.getElementById("sh").innerHTML=result;	
		} 

		else if (opt=="cmf")
		{
			var result=field1*35.3147;
			result=Math.round(result*100)/100;
			document.getElementById("sh").innerHTML=result;
		}
		else if(opt=="cfm")
		{
			var result=field1*0.0283168;
			result=Math.round(result*100)/100;
			document.getElementById("sh").innerHTML=result;	
		}
		else if(opt=="cic")
		{
			var result=field1*16.3871;
			result=Math.round(result*100)/100;
			document.getElementById("sh").innerHTML=result;	
		}
		else if(opt=="cci")
		{
			var result=field1*0.0610237;
			result=Math.round(result*100)/100;
			document.getElementById("sh").innerHTML=result;	
		} 
	
}
function sendValue(a)
{
	var b=document.getElementById("hid");
	b.value=a;
	var x=document.getElementById("number");
		x.value="";
	var y=document.getElementById("sh");
		y.innerHTML="";
		
}
