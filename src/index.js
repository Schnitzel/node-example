const express = require('express')
const app = express()

app.get('/', function (req, res) {
  let result = []
  result.push(`<br /><pre>
  ___                                 _        ______           _         __   __          
 / _ \                               (_)       | ___ \         | |        \ \ / /          
/ /_\ \_ __ ___   __ _ _______  ___   _  ___   | |_/ /___   ___| | _____   \ V /___  _   _ 
|  _  | '_ ` _ \ / _` |_  / _ \/ _ \ | |/ _ \  |    // _ \ / __| |/ / __|   \ // _ \| | | |
| | | | | | | | | (_| |/ /  __/  __/_| | (_) | | |\ \ (_) | (__|   <\__ \   | | (_) | |_| |
\_| |_/_| |_| |_|\__,_/___\___|\___(_)_|\___/  \_| \_\___/ \___|_|\_\___/   \_/\___/ \__,_|
                                                                                           
                                                                                          
</pre><br />

  `)
  res.header('X-LAGOON' , process.env.HOSTNAME )
  res.send(result.join("<br />"))
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
