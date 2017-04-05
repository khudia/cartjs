<?
$goods = array_chunk(array_splice($_POST,5), 4);
	$price = 0;
		for ($i=0; $i < count($goods); $i++) { 
			$price = $price + ($goods[$i][1]*$goods[$i][2]);
			$options = explode(',',$goods[$i][3]);
			$params = [];
			for ($o=0; $o < count($options); $o++) 
				{ 
					if($o==0){
						$item_id =  explode(': ', $options[$o]);
						$item_id = $item_id[1];
					}
					/* IN DEVELOPMENT */
					// $option = explode(': ', $options[$o]);
					// $params[$o]['option_name'] = trim($option[0]);
					// $params[$o]['option_value'] = $option[1];
					/* IN DEVELOPMENT */
				}
		$items[$i]['name'] = $goods[$i][0];
		$items[$i]['id'] = $item_id;
		$items[$i]['count'] = $goods[$i][1];
		$items[$i]['price'] = $goods[$i][2];
		/* IN DEVELOPMENT */
		//$items[$i]['options'] = $params;
		/* IN DEVELOPMENT */
	}
$order['items']=$items;
$order['count']=count($items);
$order['total']=$price;
$order['order']='ordernumber';
?>

<pre>
<?
var_dump($order);
?>
</pre>




