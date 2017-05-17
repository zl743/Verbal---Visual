
<!DOCTYPE html>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<html>
<body>

<?php

$sum = 0;
for($num = 1; $num < 1000; $num++){
  if($num % 3 == 0 || $num % 5 == 0){

	$sum += $num;
  }
}
print $sum;
?>

<p>The first step to solving this problem was to find all multiples of 3 and 5 between 1 and 1000. Using a for loop, I iterated over each number between 1 and 1000 and checked if either 3 or 5 were factors through modulos in an if statement.</p>
<p>If the number modulo 3 or 5 equaled 0, then I added that number to the accumulation variable $sum. I then printed this sum after completing the for loop.</p>

</body>
</html>
