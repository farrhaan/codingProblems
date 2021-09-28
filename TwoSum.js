//the function returns the indices of 2 array elements that sum up to give answer as 'target' variable. Exactly one solution exists

const twoSum = (arr, target) => {
    let n={};
    for(let i = 0; i<arr.length; i++)
        {
            let thisNum = arr[i];
            n[thisNum] = i;
        }
    for(let i = 0; i<arr.length; i++)
        {
            let difference = target - arr[i];
            if(n.hasOwnProperty(difference) && n[difference] !== i)
                {
                    return [i, n[difference]];
                }
        }
}


console.log(twoSum([2,7,11,15], 9));

//expected output= [0,1]
