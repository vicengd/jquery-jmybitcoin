## Description

jMyBitcoin: A jQuery Bitcoin plugin.  Shows the value of bitcoin in the currency of our choice.

This plugin uses the API of blockchain.info and the data is cached for 15 min. The "cache" folder must have read and write permissions (chmod 777).

## Getting Started

1. Include the JS file into your page after jQuery:
```
<script src="http://code.jquery.com/jquery.min.js"></script>
<script src="jquery.jmybitcoin.js"></script>
```

2. Create you empty container and give it a class:
```
	<div>Un bitcoin vale actualmente <span class="jbtc"></span> €</div>
```

3. Call the jmybitcoin function to any element:
```
	<script>
		$(function()
		{
			$('.jbtc').jmybitcoin('EUR');
		});
	</script>
```

## License
Copyright (c) 2014 Vicente García. Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)