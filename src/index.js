const express = require('express')
const app = express()

app.get('/', function (req, res) {
  let result = []
  result.push(`<br /><pre>
  _____                                _____         _
  |  _  |___ ___ ___ ___ ___ ___ ___   | __  |___ ___| |_ ___    _ _ ___ _ _
  |   __|  _| . | . |  _| -_|_ -|_ -|  |    -| . |  _| '_|_ -|  | | | . | | |
  |__|  |_| |___|_  |_| |___|___|___|  |__|__|___|___|_,_|___|  |_  |___|___|
                |___|                                           |___|

  </pre><br />
  `)
  res.header('X-LAGOON' , process.env.HOSTNAME )
  res.send(result.join("<br />"))
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
