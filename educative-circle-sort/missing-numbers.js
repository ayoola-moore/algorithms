for (let i = 0; i < nums.length; i++) {
	let el = nums[i];
	while (el !== i + 1) {
		[nums[el -1], nums[i]] = [nums[i], nums[el-1]]
		el = nums[i]
	}
}

function findMissingNumbers(nums) {
	let i = 0;
	while (i < nums.length) {
		const j = nums[i] - 1;
		if (nums[i] !== nums[j]) { // this implies the elements are not in the right position
			[nums[j], nums[i]] = [nums[i], nums[j]] // swap
			// [nums[i], nums[j]] = [nums[j], nums[i]] // either approach of swap doesn't matter
		} else {
			i += 1
		}
	}

	// nums.sort((a, b)=>a-b) //and combination of set

	missingNumbers = [];

	console.log(nums)

	for (i = 0; i < nums.length; i++) {
		if (nums[i] !== i + 1) {
			missingNumbers.push(i + 1)
		}
	}

	return missingNumbers
}
// console.log(findMissingNumbers([3, 1, 1]));
console.log(findMissingNumbers([2, 3, 1, 8, 2, 3, 5, 1]));
// console.log(findMissingNumbers([2, 4, 1, 2]));
// console.log(findMissingNumbers([2, 3, 2, 1]));