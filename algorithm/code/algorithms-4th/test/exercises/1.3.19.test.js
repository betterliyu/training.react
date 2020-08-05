const { expect } = require('chai');
const MyList = require('../../src/exercises/1.3.19.js');

describe('Exercises 1.3.19 Test', () => {
  it('should be null', () => {
    const list = new MyList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);

    list.deleteLast();
    expect(list.find(4)).to.equal(null);

    list.deleteLast();
    expect(list.find(3)).to.equal(null);

    list.deleteLast();
    expect(list.find(2)).to.equal(null);

    list.deleteLast();
    expect(list.find(1)).to.equal(null);
  });
});
