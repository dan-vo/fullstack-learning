describe('Practice Week 1 - JS basic', function () {
  it('minus function', function () {
    let result = minus(5, 4);

    expect(result).toEqual(1);
  });

  it('checkExamResult fuction', function () {
    let test1 = checkExamResult(70);

    expect(test1).toEqual('Pass');
  });

  it('sum function', function () {
    let test1 = sum([1, 2, 3]);

    expect(test1).toEqual(6);
  });

  it('getArrayAverage function', function () {
    let test1 = getArrayAverage([1, 2]);

    expect(test1).toEqual(1.5);
  });
  it('addFromOneUntil function', function () {
    let test1 = addFromOneUntil(10);

    expect(test1).toEqual(55);

    expect(addFromOneUntil(-10)).toEqual(-10);

    expect(addFromOneUntil(false)).toEqual(false);
    expect(addFromOneUntil('this is a beautiful day')).toEqual(false);
  });
});
