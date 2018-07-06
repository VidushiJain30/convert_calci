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
