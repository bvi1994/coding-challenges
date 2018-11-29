// Brandon V

// # 1: MaxRangeSum

// Description
// Bob is developing a new strategy to get rich in the stock market. He wishes to invest his portfolio for 1 or more days, then sell it at the right time to maximize his earnings. Bob has painstakingly tracked how much his portfolio would have gained or lost for each of the last N days. Now he has hired you to figure out what would have been the largest total gain his portfolio could have achieved.
//
// Example: Bob kept track of the last 10 days in the stock market. On each day, the gains/losses are as follows: 7 -3 -10 4 2 8 -2 4 -5 -2. If Bob entered the stock market on day 4 and exited on day 8, his gains would have been 16 (4 + 2 + 8 + -2 + 4).
//
// Input
// The input consists of integers on a line separated by spaces. The input contains N, the number of days (0 < N < 10000), followed by N integers D (-10000 < D < 10000) indicating the gain or loss on that day.
//
// Output
// For each test case, print a line containing the maximum possible gain over the period. If no gain is possible, print 0.
// Test 1
// Input
// 10 7 -3 -10 4 2 8 -2 4 -5 -6
// Expected Output
// 16
//

function maxRangeSum(listOfIntegers){
  if(typeof listOfIntegers === 'string'){
    // Converting the string into an array
    listOfIntegers = listOfIntegers.split(' ').map(value => parseInt(value))
  }
  listOfIntegers.shift();
  let maxSum = 0;
  let tempSum = 0;
  for(let i = 0; i < listOfIntegers.length; i++){
    tempSum = Math.max(0, tempSum + listOfIntegers[i]);
    maxSum = Math.max(tempSum, maxSum)
  }
  console.log(maxSum);
  return maxSum;
}

// Test cases for #1

maxRangeSum('6 -1 -2 -3 4 6 7');
maxRangeSum('10 7 -3 -10 4 2 8 -2 4 -5 -6');
maxRangeSum('1 2 3 4 5 6 7 8 9 10');
maxRangeSum('-1 1 -1 -1 -1 -1 1 1 -1 1 -1 1 1 1 -1 1 -1 1');
maxRangeSum('-1 -1 -1 -1 -1 -1 -1 -1 -1 -1');
maxRangeSum([1,2,3,4,5,6,7,8,9]);
maxRangeSum([-1, -1, -1, -1, -1, -1]);

// # 2 Text Dollar

// Description
//
// You are given a positive integer number. This represents the sales made that day in your department store. The payables department however, needs this printed out in English. NOTE: The correct spelling of 40 is Forty. (NOT Fourty)
// Input
// Your program should read lines of text from standard input. Each line contains a positive integer.
//
// Output
// For each set of input print a single line to standard output which is the english textual representation of that integer. The output should be unspaced and in CamelCased. Always assume plural quantities. You can also assume that the numbers are < 1000000000 (1 billion). In case of ambiguities eg. 2200 could be TwoThousandTwoHundredDollars or TwentyTwoHundredDollars, always choose the representation with the larger base i.e. TwoThousandTwoHundredDollars.
// Test 1
// Input
// 3
// Expected Output
// ThreeDollars
// Test 2
// Input
// 466
// Expected Output
// FourHundredSixtySixDollars
// Test 3
// Input
// 1234
// Expected Output
// OneThousandTwoHundredThirtyFourDollars
// Test 4
// Input
// 10
// Expected Output
// TenDollars
// Test 5
// Input
// 21
// Expected Output
// TwentyOneDollars
//


function dollarText(number){
  // Here we are doing our input checks and then calling numberToText() and
  // append 'dollars' of the result of numberToText()
  if(!Number.isInteger(number) || number < 0){
    throw 'Input needs to be an integer and positive'
  }
  if(number > 1000000000){
    throw 'Input should be less than one billion (1,000,000,000)'
  }
  if(number === 0){
    console.log('ZeroDollars');
    return 'ZeroDollars'
  }
  if(number === 1){
    console.log('OneDollar');
    return 'OneDollar'
  }
  const text = numberToText(number); // Resulting conversion
  console.log(text + 'Dollars')
  return text + 'Dollars';
}

function numberToText(number){
  // The actual convert from number to text
  if(number === 1000000000){
    return('OneBillion');
  }
  const ones = ['',
                'One',
                'Two',
                'Three',
                'Four',
                'Five',
                'Six',
                'Seven',
                'Eight',
                'Nine',
              ]
  const teens = [ 'Ten',
                  'Eleven',
                  'Twelve',
                  'Thirteen',
                  'Fourteen',
                  'Fifteen',
                  'Sixteen',
                  'Seventeen',
                  'Eighteen',
                  'Nineteen',
                ]
  const tens = [ 'Twenty',
                 'Thirty',
                 'Forty',
                 'Fifty',
                 'Sixty',
                 'Seventy',
                 'Eighty',
                 'Ninety',
                ]

  const places = [ 'Hundred',
                   'Thousand',
                   'Million',
                 ]

  if(number < 10){
    return ones[number];
  }
  if(number < 20){
    return teens[number % 10];
  }
  if(number < 100){
    return tens[Math.floor(number / 10) - 2] + ones[number % 10];
  }
  if(number < 1000){
    return ones[Math.floor(number / 100)] + places[0] + numberToText(number % 100);
  }
  if(number < 100000){
    return numberToText(Math.floor(number / 1000)) + places[1] + numberToText(number % 1000);
  }
  if(number < 1000000){
    return numberToText(Math.floor(number / 100000)) + places[0] + numberToText(number % 100000);
  }
  if(number < 1000000000){
    return numberToText(Math.floor(number / 1000000)) + places[2] + numberToText(number % 1000000);
  }
}

// Test cases for #2

dollarText(451111111);
dollarText(999999999);
dollarText(123456789);
dollarText(1);
dollarText(0);
dollarText(1000000000);
dollarText(10);

// dollarText(1000000000000000123)
// dollarText(-1)
