function mincost(arr)
{ 
//write your code here
	let pq=[];
	for(let ele of arr){
		pq.push(ele);
	}
	pq.sort(function(a,b){
		return a-b;
	});
	let sum=0;
	while(pq.length>1){
		let a=pq.shift();
		let b=pq.shift();
		sum+=(a+b);
		pq.push((a+b));
		pq.sort(function(a,b) {
			return a-b;
		});
	}
// return the min cost
  return sum;
}

module.exports=mincost;
