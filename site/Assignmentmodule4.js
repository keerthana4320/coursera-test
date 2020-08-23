<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>page</title>
</head>
<script>
var names = ["james", "John", "Haripriya"];
for(var i=0; i < names.length; i++)
{
	if(names[i][0]=='j'||names[i][0]=='J')
	{
		console.log("Goodbye " + names[i]);
	}
	else
	{
		console.log("Hello " + names[i]);
	}
}

</script>
</html>