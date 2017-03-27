function validateNumber(event) {
	var longitud =("#number-input").length;
    var e = window.event;
    var key = e.keyCode || e.which;
    if (event.keyCode === 8 || event.keyCode === 46) {
        return true;
    } else if ( key < 48 || key > 57 ) {
    	alert("Ingrese solo numeros");
		return false;
    }else {
        return true;
    }
};
function insertar(numeros){
    boton.removeClass("disabled");
    boton.attr("disabled",false);
    var input= $("#number-input").val();
    var nums =input.split('');
    for ( var i = 0; i < nums.length; i++ ){
        var cardBlock =$('<div class="card-block"/>').text(nums[i]);
        $(".card1").append(cardBlock);
    }
};
function ordenar(nums){
    var input= $("#number-input").val();
    var nums =input.split('');
    var numsOrd =nums.sort();
    var input= $("#number-input").val();
    var nums =input.split('');
    var numsOrd =nums.sort();
    var obj={};   
    var n = numsOrd.length; 
    var i;
    for(  i=0 ; i<n ; i++ ) {
        obj[numsOrd[i]] = 0;  
    }
    for( i in obj ){ 
        var cardBlock =$('<div class="card-block">').text(i);
        $(".card2").append(cardBlock); 
    } 
};
//sort con bubble sort 
// function ordenar(nums){
//     var input= $("#number-input").val();
//     var nums =input.split('');
//     var swapped;
//     do {
//         swapped = false;
//         for (var i=0; i < nums.length-1; i++) {
//             if (nums[i] > nums[i+1]) {
//                 var temp = nums[i];
//                 nums[i] = nums[i+1];
//                 nums[i+1] = temp;
//                 swapped = true;
//             }
//             var cardBlock =$('<div class="card-block">').text(nums[i]);
//             $(".card2").append(cardBlock); 
//         }
//     } while (swapped);
// }

var boton =$("#ordena");
$(document).ready(function(){
    boton.attr("disabled",true);
    $("#number-input").keypress(validateNumber);
    $("#inserta").click(insertar);
    $("#ordena").click(ordenar);
});