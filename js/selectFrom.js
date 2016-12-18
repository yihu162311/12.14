function createSelect(option){
	var element = option.element,
		data = option.data,
		len = data.length,
		fragment = document.createDocumentFragment(),
		images = data.map(function(item){
			return fragment.appendChild(createImage(item));
		}),
		a = 0;
	function dg(id){
		var a = document.getElementById(id);
		return a;
	}
	var display = dg("display");
	/*创建图片信息盒子*/
	function createImage(item){
		var container = document.createElement("li");
		container.className = "image_info";
		container.sign = item.sign;
		container.style.background = "url(" + item.url + ")";
		container.onmousemove = function(){
			console.log(666);
		};
		return container;
	}
	
	/*创建过滤筛选*/
	function createScreen(){
		element.forEach(function(item){
			item.onclick = function(){
				images.filter(function(item1){
				fragment.appendChild(return item1.sign.split("-")[0] < = item.sign && item.sign < = item1.sign.split("-")[1]);
			});
			}
			
		})
	}
}
var library = {
	element:[
		{
			element : "ALL",
			sign : "8"
		},
		{
			element : "Design",
			sign : "18"
		},
		{
			element : "Development",
			sign : "28"
		},
		{
			element : "Fronted",
			sign : "38"
		},
		{
			element : "Dashboard",
			sign : "11"
		},
		{
			element : "Flat",
			sign : "30"
		}	
	],
	data:[
		{
			sign : "1-10",
			url : "./img/img1.jpg"
		},
		{
			sign : "10-20",
			url : "./img/img2.jpg"
		},
		{
			sign : "20-30",
			url : "./img/img3.jpg"
		},
		{
			sign : "30-40",
			url : "./img/img4.jpg"
		},
		{
			sign : "5-15",
			url : "./img/img5.jpg"
		},
		{
			sign : "15-25",
			url : "./img/img7.jpg"
		},
		{
			sign : "25-35",
			url : "./img/img1.jpg"
		},
		{
			sign : "35-40",
			url : "./img/img2.jpg"
		},
		{
			sign : "4-9",
			url : "./img/img1.jpg"
		},
		{
			sign : "14-19",
			url : "./img/img3.jpg"
		},
		{
			sign : "24-29",
			url : "./img/img5.jpg"
		}
	]
}
