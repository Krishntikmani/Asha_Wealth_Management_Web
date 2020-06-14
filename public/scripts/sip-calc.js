var val = document.querySelectorAll('.fill-values .thumbnail input');
var netInvest = document.querySelector('.net-invest');
var exp = document.querySelector('.exp-ret');
document.getElementById("tester").style.display="inline-block";
	var monthlyInvest = Number(val[0].value);
	var noYear = Number(val[1].value);
	var returnExp = Number(val[2].value);
	netInvest.textContent = monthlyInvest*noYear*12;
	
	var data_x = [];
	var investment = [];
	var invest_return =[];
	
	for(var i=0;i<=noYear;i++){
		data_x.push(i);
	}
	
	investment.push(0);
	for(var i=1;i<data_x.length;i++){
		investment.push(investment[i-1]+(12*monthlyInvest));
	}
	invest_return.push(0);
	for(var i=1;i<=noYear;i++){
		var interest = parseFloat((0.01*returnExp))/parseFloat(12);
		var a = Math.pow(parseFloat(1+interest),(i*12));
		console.log(a);
		var M = monthlyInvest*((a-1)/interest)*(1+interest);
		console.log(M);
		console.log(monthlyInvest);
		console.log(interest);
		
		invest_return.push(M);
	}
	
	var trace1 = {
		x: data_x,
		y: investment,
		mode: 'lines+markers',
		type: 'scatter',
		name: 'Investment',
		fill: 'tozeroy'
	};
	var trace2 = {
		x: data_x,
		y: invest_return,
		mode: 'lines+markers',
		type: 'scatter',
		name: 'Expected Return',
		fill: 'tonexty'
	};
	
	var layout={
		title: 'Systematic Investment Plan Growth Chart'
	};
	
	var data = [trace1,trace2];
	var TESTER = document.getElementById('tester');
	Plotly.newPlot( TESTER, data,layout );
	exp.textContent = Math.round(invest_return[noYear]);

for(var j =0;j<3;j++){
	val[j].addEventListener('change',function(){
	
	document.getElementById("tester").style.display="inline-block";
	var monthlyInvest = Number(val[0].value);
	var noYear = Number(val[1].value);
	var returnExp = Number(val[2].value);
	netInvest.textContent = monthlyInvest*noYear*12;
	
	var data_x = [];
	var investment = [];
	var invest_return =[];
	
	for(var i=0;i<=noYear;i++){
		data_x.push(i);
	}
	
	investment.push(0);
	for(var i=1;i<data_x.length;i++){
		investment.push(investment[i-1]+(12*monthlyInvest));
	}
	invest_return.push(0);
	for(var i=1;i<=noYear;i++){
		var interest = parseFloat((0.01*returnExp))/parseFloat(12);
		var a = Math.pow(parseFloat(1+interest),(i*12));
	
		var M = monthlyInvest*((a-1)/interest)*(1+interest);
	
		invest_return.push(M);
	}
	
	var trace1 = {
		x: data_x,
		y: investment,
		mode: 'lines+markers',
		type: 'scatter',
		name: 'Investment',
		fill: 'tozeroy'
	};
	var trace2 = {
		x: data_x,
		y: invest_return,
		mode: 'lines+markers',
		type: 'scatter',
		name: 'Expected Return',
		fill: 'tonexty'
	};
	
	var layout={
		title: 'Systematic Investment Plan Growth Chart'
	};
	
	var data = [trace1,trace2];
	var TESTER = document.getElementById('tester');
	Plotly.newPlot( TESTER, data,layout );
	exp.textContent = Math.round(invest_return[noYear]);	
	
});

}





	


