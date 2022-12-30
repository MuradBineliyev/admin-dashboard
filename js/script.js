const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});




// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})







const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})





if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})



const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})

function edit_row(no) {
	document.getElementById("edit_button" + no).style.display = "none";
	document.getElementById("save_button" + no).style.display = "block";
   
	var name = document.getElementById("name_row" + no);
	var intern_area = document.getElementById("intern_area_row" + no);
	var point = document.getElementById("point_row" + no);
   
	var name_data = name.innerHTML;
	var intern_area_data = intern_area.innerHTML;
	var point_data = point.innerHTML;
   
	name.innerHTML =
	 "<input type='text' id='name_text" + no + "' value='" + name_data + "'>";
	intern_area.innerHTML =
	 "<input type='text' id='intern_area_text" +
	 no +
	 "' value='" +
	 intern_area_data +
	 "'>";
	point.innerHTML =
	 "<input type='text' id='point_text" + no + "' value='" + point_data + "'>";
   }
   
   function save_row(no) {
	var name_val = document.getElementById("name_text" + no).value;
	var intern_area_val = document.getElementById("intern_area_text" + no).value;
	var point_val = document.getElementById("point_text" + no).value;
   
	document.getElementById("name_row" + no).innerHTML = name_val;
	document.getElementById("intern_area_row" + no).innerHTML = intern_area_val;
	document.getElementById("point_row" + no).innerHTML = point_val;
   
	document.getElementById("edit_button" + no).style.display = "block";
	document.getElementById("save_button" + no).style.display = "none";
   }
   
   function delete_row(no) {
	document.getElementById("row" + no + "").outerHTML = "";
   }
   
   function add_row() {
	var new_name = document.getElementById("new_name").value;
	var new_intern_area = document.getElementById("new_intern_area").value;
	var new_point = document.getElementById("new_point").value;
   
	var table = document.getElementById("data_table");
	var table_len = table.rows.length - 1;
	var row = (table.insertRow(table_len).outerHTML =
	 "<tr id='row" +
	 table_len +
	 "'><td id='name_row" +
	 table_len +
	 "'>" +
	 new_name +
	 "</td><td id='intern_area_row" +
	 table_len +
	 "'>" +
	 new_intern_area +
	 "</td><td id='point_row" +
	 table_len +
	 "'>" +
	 new_point +
	 "</td><td><input type='button' id='edit_button" +
	 table_len +
	 "' value='Edit' class='edit' onclick='edit_row(" +
	 table_len +
	 ")'> <input type='button' id='save_button" +
	 table_len +
	 "' value='Save' class='save' onclick='save_row(" +
	 table_len +
	 ")'> <input type='button' value='Delete' class='delete' onclick='delete_row(" + table_len + ")'></td></tr>");
   
	document.getElementById("new_name").value = "";
	document.getElementById("new_intern_area").value = "";
	document.getElementById("new_point").value = "";
   }
   