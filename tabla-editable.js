function tablaEditable(datos,div){
	var tabla=$("<table/>");
	var cols=[];
	$(tabla).addClass("myT");
	$(div).append(tabla);
	if(datos.length>0){
		var tr=$("<tr/>");
		$(tabla).append(tr);
		$(Object.keys(datos[0])).each(function(){
			var th=$("<th/>");
			$(th).html(this);
			$(tr).append(th);
			cols.push(this.toString().replace(/ /g,'_'));
		});
		$(tr).append("<th></th><th></th>");
	}
	
	$(datos).each(function(){
		var tr=$("<tr onclick='selectRow(this);'/>");
		$(tabla).append(tr);
		var filaDatos=this;
		var i=0;
		$(Object.values(filaDatos)).each(function(){
			var td=$("<td id='"+cols[i]+"'/>");
			i+=1;
			$(td).html(this);
			$(tr).append(td);
		});
		var imgEdit="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAzMDAgMzAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMDAgMzAwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTE0OS45OTYsMEM2Ny4xNTcsMCwwLjAwMSw2Ny4xNjEsMC4wMDEsMTQ5Ljk5N1M2Ny4xNTcsMzAwLDE0OS45OTYsMzAwczE1MC4wMDMtNjcuMTYzLDE1MC4wMDMtMTUwLjAwMyAgICBTMjMyLjgzNSwwLDE0OS45OTYsMHogTTIyMS4zMDIsMTA3Ljk0NWwtMTQuMjQ3LDE0LjI0N2wtMjkuMDAxLTI4Ljk5OWwtMTEuMDAyLDExLjAwMmwyOS4wMDEsMjkuMDAxbC03MS4xMzIsNzEuMTI2ICAgIGwtMjguOTk5LTI4Ljk5Nkw4NC45MiwxODYuMzI4bDI4Ljk5OSwyOC45OTlsLTcuMDg4LDcuMDg4bC0wLjEzNS0wLjEzNWMtMC43ODYsMS4yOTQtMi4wNjQsMi4yMzgtMy41ODIsMi41NzVsLTI3LjA0Myw2LjAzICAgIGMtMC40MDUsMC4wOTEtMC44MTcsMC4xMzUtMS4yMjQsMC4xMzVjLTEuNDc2LDAtMi45MS0wLjU4MS0zLjk3My0xLjY0N2MtMS4zNjQtMS4zNTktMS45MzItMy4zMjItMS41MTItNS4yMDNsNi4wMjctMjcuMDM1ICAgIGMwLjM0LTEuNTE3LDEuMjg2LTIuNzk4LDIuNTc4LTMuNTgybC0wLjEzNy0wLjEzN0wxOTIuMyw3OC45NDFjMS42NzgtMS42NzUsNC40MDQtMS42NzUsNi4wODIsMC4wMDVsMjIuOTIyLDIyLjkxNyAgICBDMjIyLjk4MiwxMDMuNTQxLDIyMi45ODIsMTA2LjI2NywyMjEuMzAyLDEwNy45NDV6IiBmaWxsPSIjOTFEQzVBIi8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==";
		var imgDel="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMS4xLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI3Ljk2NSAyNy45NjUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI3Ljk2NSAyNy45NjU7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPGc+Cgk8ZyBpZD0iYzE0Ml94Ij4KCQk8cGF0aCBkPSJNMTMuOTgsMEM2LjI1OSwwLDAsNi4yNjEsMCwxMy45ODNjMCw3LjcyMSw2LjI1OSwxMy45ODIsMTMuOTgsMTMuOTgyYzcuNzI1LDAsMTMuOTg1LTYuMjYyLDEzLjk4NS0xMy45ODIgICAgQzI3Ljk2NSw2LjI2MSwyMS43MDUsMCwxMy45OCwweiBNMTkuOTkyLDE3Ljc2OWwtMi4yMjcsMi4yMjRjMCwwLTMuNTIzLTMuNzgtMy43ODYtMy43OGMtMC4yNTksMC0zLjc4MywzLjc4LTMuNzgzLDMuNzggICAgbC0yLjIyOC0yLjIyNGMwLDAsMy43ODQtMy40NzIsMy43ODQtMy43ODFjMC0wLjMxNC0zLjc4NC0zLjc4Ny0zLjc4NC0zLjc4N2wyLjIyOC0yLjIyOWMwLDAsMy41NTMsMy43ODIsMy43ODMsMy43ODIgICAgYzAuMjMyLDAsMy43ODYtMy43ODIsMy43ODYtMy43ODJsMi4yMjcsMi4yMjljMCwwLTMuNzg1LDMuNTIzLTMuNzg1LDMuNzg3QzE2LjIwNywxNC4yMzksMTkuOTkyLDE3Ljc2OSwxOS45OTIsMTcuNzY5eiIgZmlsbD0iI0Q4MDAyNyIvPgoJPC9nPgoJPGcgaWQ9IkNhcGFfMV8xMDRfIj4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K";

		$(tr).append("<td><a href='#' onclick='Editar(this);'><img src='"+imgEdit+"'/></a></td><td><a onclick='confirmBorrar();' href='#'><img src='"+imgDel+"'/></a></td>");
		$(tabla).append(tr);
	});
	var estilo=$('<style>input{border-radius:3px;border:1px solid #ddd;padding:5px;}input:hover{box-shadow:1px 1px 4px #acf;}.myBtn{border-radius:3px;border:1px solid #aaa;background-image:linear-gradient(to bottom,rgb(250,250,250)0%,#bbb 100%);text-decoration:none;padding:5px;margin:5px;color:#555;text-shadow:1px 1px 0 #eee;}.myBtn:hover{box-shadow:1px 1px 3px #58f;text-shadow:1px 1px 0 #acf;}.myT{border-collapse:collapse;font-family:Arial;font-size:12px;}.myT tr{border:1px solid #ddd;}.myT tr:nth-child(odd){background-color:rgb(252,252,252);}.myT tr:hover{background-color:#f3ffea;color:black;}.myT tr th,.myT tr td{padding:3px;cursor:default;}.myT tr th{background-image:linear-gradient(to bottom,rgb(250,250,250) 0%,#eee 100%);text-align:left;padding:5px 3px 5px 3px;text-shadow:1px 1px 0 white;}.selected-row{background-color:#e0eeff;color:blue;}</style>');
	var head=$("head");
	$(head).append(estilo);
}
function selectRow(row){
	$(row).closest('table').find("tr td").removeClass("selected-row");
	$(row).find("td").addClass("selected-row");
}

function Editar(sender){
	var tr=$(sender).closest("td").closest("tr");
	var tds=$(tr).find("td");
	var t=$("<table/>");
	$(tds).each(function(){
		if($(this).attr("id")!=undefined){
			var strId=$(this).attr("id").toString();
			var tr2=$("<tr/>");
			$(t).append(tr2);
			var th=$("<th style='text-align:left;'>"+strId.replace(/_/g,' ')+":</th>");
			$(tr2).append(th);
			var td=$("<td><input id='txt"+strId+"' type='text' value='"+$(this).html()+"'/></td>");
			$(tr2).append(td);
		}
	});
	var botones=$("<a href='#' class='myBtn' onclick='cambiarTdValue();'>Aceptar</a><a href='#' class='myBtn' onclick='cerrarModal();'>Cancelar</a>");
	showModal("Editar",t,botones);
}

function confirmBorrar(){
	var icono="<img src='data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMS4xLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDMyMC44MyAzMjAuODMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMyMC44MyAzMjAuODM7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMjEuNjE3LDI5MC4yNDZoMjc3LjYwNGM5LjQ2OSwwLDE3LjAxMy00LjU1MywyMC4xNjgtMTIuMTg0YzIuOTA0LTcuMDExLDEuMzYtMTQuOC00LjEwNy0yMS4yMTIgICAgTDE4MC40OTcsMzkuNjg0bC0xLjMzMy0xLjMzM2MtNS4wMDktNS4wMDktMTEuNjY3LTcuNzY3LTE4Ljc0OC03Ljc2N2MtNy4wODIsMC0xMy43MzksMi43NTgtMTguNzQzLDcuNzY3bC0xLjMzMywxLjMzMyAgICBMNS41NSwyNTYuODQ0Yy01LjQ2Niw2LjQxMy03LjAxNiwxNC4yMDctNC4xMDYsMjEuMjEyQzQuNjAzLDI4NS42ODgsMTIuMTQyLDI5MC4yNDYsMjEuNjE3LDI5MC4yNDZ6IE0xNjAuNDE2LDY5LjIxMyAgICBsMTE2LjkzNCwxODguMzkzSDQzLjQ4N0wxNjAuNDE2LDY5LjIxM3oiIGZpbGw9IiNEODAwMjciLz4KCQk8cGF0aCBkPSJNMTYwLjQxNiwxMDUuMzQ1Yy05LjE5NywwLTE2LjY1NCw3LjQ1Ny0xNi42NTQsMTYuNjU0djcxLjM4OGMwLDkuMTk3LDcuNDU3LDE2LjY1NCwxNi42NTQsMTYuNjU0ICAgIHMxNi42NTQtNy40NTcsMTYuNjU0LTE2LjY1NHYtNzEuMzg4QzE3Ny4wNzYsMTEyLjgwMiwxNjkuNjE5LDEwNS4zNDUsMTYwLjQxNiwxMDUuMzQ1eiIgZmlsbD0iI0Q4MDAyNyIvPgoJCTxjaXJjbGUgY3g9IjE2MC4yNDgiIGN5PSIyMzQuOTAzIiByPSIxNi40ODYiIGZpbGw9IiNEODAwMjciLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K' />"
	showModal("Borrar",icono+"<h3> Se borrará el registro seleccionado</h3>","<a href='#' class='myBtn' onclick='Borrar();'>Aceptar</a><a href='#' class='myBtn' onclick='cerrarModal();'>Cancelar</a>");
}
function Borrar(){
	var tr=$(".selected-row").closest("tr");
	$(tr).remove();
	cerrarModal();
}
function showModal(titulo,contenido,botones){
	var divModal=$("<div id='divModal' style='position:fixed;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,0.3);zIndex:9998;display:none;font-family:Arial'/>");
	var divEdit=$("<div id='divEdit' style='text-align:center;display:none;position:absolute;left:50%;margin-left:-180px;margin-top:100px;zIndex:9999;background-color:white;border-radius:5px;border:1px solid gray;box-shadow:1px 1px 5px #666;width:360px;height:260px;'/>");
	$(divModal).append(divEdit);
	var cuerpo=$("<div class='modal-body' style='padding:10px;overflow:auto;font-size:12px;border:1px solid #eee;border-width:1px 0 1px 0;height:144px;margin-top:1px;'/>");
	$(divEdit).append(cuerpo);
	var title=$("<div id='modal-title' style='text-shadow:1px 1px 0 white;font-weight:bold;border-radius:5px 5px 0 0;padding:10px;text-align:center;background-image:linear-gradient(to top,rgb(250,250,250)0%,#ddd 100%);font-size:16px;'>"+titulo+"</div>");
	$(divEdit).append(title);
	$(cuerpo).append(contenido);
	$(divEdit).append(cuerpo);
	var pie=$("<div id='modal-footer' style='font-size:12px;text-align:right;background-image:linear-gradient(to bottom,rgb(250,250,250)0%,#ddd 100%);padding:20px 10px;position:absolute;bottom:0;width:340px;border-radius:0 0 5px 5px;'></div>");
	$(pie).append(botones);
	$(divEdit).append(pie);
	$("body").append(divModal);
	$(divModal).fadeIn("fast");
	$(divEdit).slideToggle("fast");
}
function cerrarModal(){
	var modal=$("#divModal");
	$("#divEdit").slideToggle('fast');
	$(modal).fadeOut("fast");
	setTimeout(function(){$(modal).remove();},250);

}
function cambiarTdValue(){
	var tds=$(".selected-row");
	$(tds).each(function(){
		var valor=$("#txt"+$(this).attr("id")).val();
		$(this).html(valor);
	});
	cerrarModal();
}