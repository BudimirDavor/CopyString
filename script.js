function copyText() 
{
	var sourceInput = document.getElementById("source");
	var targetInput = document.getElementById("target");
	targetInput.value = sourceInput.value.replace(/[0-9]*/g, '');
}