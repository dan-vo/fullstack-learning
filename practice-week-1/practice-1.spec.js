describe('Practice Week 1 - JS basic', function () {
  it('add function should return the total of x + y', function () {
    let test1 = add(5, 4);

    expect(test1).toEqual(9);
  });

  it('minus function', function () {
    let test2 = minus(6, 2);

    expect(test2).toEqual(4);
  });

  //check Exam Result test

  it('check exam result function', function () {
    let examResult = checkExamResult(50);

    expect(examResult).toEqual('Pass');
  });

  // test devide function
  it('check devide function', function () {
    let devideResult = devide(9, 3);

    expect(devideResult).toEqual(3);
  });

  //test getAverage function
  it('check get Average function', function () {
    let averageResult = getAverage(9, 3);

    expect(averageResult).toEqual(6);
  });
  // test get Grade function
  it('check get Grade function', function () {
    let getResult = getGrade(98);

    expect(getResult).toEqual('A');
  });

  // test get Numbers larger than ten
  it('check the numbers in the array, If number larger than ten add to array', function () {
    let getResultNumbersLargerThanTen = getNumbersLargerThanTen([
      9, 11, 13, 18, 5,
    ]);

    expect(getResultNumbersLargerThanTen).toEqual([11, 13, 18]);
  });

  it('add all the numbers in array', function () {
    let sumResult = sum([3, 4, 5]);

    expect(sumResult).toEqual(12);
  });

  it('average of the arrage', function () {
    let averageResult = getArrayAverage([7, 4, 10]);

    expect(averageResult).toEqual(7);
  });

  it('remove duplciates from an array', function () {
    let resultUniqueItems = uniqueItems([7, 4, 10, 'lion', 'dance', 10, 4]);

    expect(resultUniqueItems).toEqual([7, 4, 10, 'lion', 'dance']);
  });

  // Test reverse array
  it('reverse an array', function () {
    let resultReverseArray = reverse([7, 4, 10, 'lion', 'dance']);

    expect(resultReverseArray).toEqual(['dance', 'lion', 10, 4, 7]);
  });

  // Test reverse String
  it('reverse an string', function () {
    let resultReverseString = reverseString(['Lion is the cage!']);

    expect(resultReverseString).toEqual(['!cage the is Lion']);
  });

  //test addFromOneUntil(number) function

  it('unique in order', function () {
    let resultUniqueInOrder = uniqueInOrder([1, 2, 2, 3, 3]);

    expect(resultUniqueInOrder).toEqual([1, 2, 3]);
  });

  //test function addFromOneUntil
  it('function add from one until', function () {
    let resultAddFromOneUntil = addFromOneUntil(10);

    expect(resultAddFromOneUntil).toEqual(55);
  });
});
