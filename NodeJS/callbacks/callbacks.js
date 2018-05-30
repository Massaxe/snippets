var fs = require("fs")

function GetBears(filepath, done) {
	fs.readFile(filepath, (err, bears) => {
		if (err) return done(err)

		fs.readFile("bears.dictionary", (err, dict) => {
			if (err) return done(err)

			CompareBears(bears, dict)
		})
	})

	function CompareBears(bears, dict) {
		dict = dict.toString().split("\n")
		bears = bears.toString().split("\n").filter(bear => {
			return dict.indexOf(bear) !== -1
		})

		done(null, bears)
	}
}

GetBears("bears.txt", (err, bears) => {
	console.log(bears);
})