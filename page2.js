$(document).ready(function()
{

$("#burger").click(function()
{
var X=$(this).attr('id');
if(X==1)
{
$("#menu").hide();
$(this).attr('id', '0'); 
}
else
{
$("#menu").show();
$(this).attr('id', '1');
}

});

$("#menu").mouseup(function()
{
return true
});

$("#burger").mouseup(function()
{
return true
});

$(document).mouseup(function()
{
$(".submenu").hide();
$(".account").attr('id', '');
});

});



