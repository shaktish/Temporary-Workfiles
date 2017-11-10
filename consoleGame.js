<!DOCTYPE html>
<html>
<head>
	<title>Constructor</title>
</head>
<body>
<script type="text/javascript">
// (function () {

// })();
debugger;
	function Question (question,options, answer){
		this.question = question,
		this.options = options,
		this.answer = answer
	}
	Question.prototype.displayQuestion = function () {
		console.log(this.question);
	}

	Question.prototype.displayOptions = function () {
		for(var i=0; i < this.options.length; i++){
				console.log(i +1 + ' ' + this.options[i]);
		}
	}
	Question.prototype.displayAnswer = function () {
		return this.answer;
	}

	var q1 = new Question ('The \'Black flag\' signifies?', ['revolution/danger','peace','protest','love'],3);
	var q2 = new Question ('How do you call a function named "myFunction"?', ['call function myFunction()','myFunction()','call myFunction()'],2);
	var q3 = new Question ('What is the correct syntax for referring to an external script called "xxx.js?', ['<script src="xxx.js">','<script href="xxx.js">','<script name="xxx.js">'],1);
	//var score = 0;

	function scoreFunc () {

		var score = 0;
		return function (userAnswer, correctAnswer) {
			if (parseInt(userAnswer) === correctAnswer) {
				score++;
				console.log('---------------------')
				console.log('Your score ' + score);
				console.log('---------------------')
				console.log('right');
			} else {
				console.log('---------------------')
				console.log('Your score ' + score);
				console.log('---------------------');
			}
				// console.log(userAnswer)
				// console.log(correctAnswer)
				// console.log(score);

				// score++;
				// console.log(score);
		}
	}
	
	var getScore = scoreFunc();

	function nextQuestion () {
		var qArr = [q1,q2,q3];
		var random = Math.floor(Math.random() * qArr.length);

		qArr[random].displayQuestion();
		qArr[random].displayOptions();

		var ans = prompt('what is the answer, please type the number');
		var getAns = qArr[random].displayAnswer();

		
		if (parseInt(ans) !== getAns) {
			getScore(parseInt(ans), getAns);
			if (ans !== 'exit') {
				nextQuestion();	
			}
		} else {
			getScore(ans,getAns);
			if (ans !== 'exit') {
				nextQuestion();	
			}
		}
	}
	nextQuestion();









</script>
</body>
</html>
