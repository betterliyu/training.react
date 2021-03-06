import { expect } from 'chai';
import { find } from '../../../src/fundamentals/exercises/1.3.21';
import { LinkedList } from '../../../src/fundamentals/apis/LinkedList';

describe('Exercises 1.3.21 Test', () => {
  it('should find it', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);

    expect(find(list, 1)).to.equal(true);
    expect(find(list, 2)).to.equal(true);
    expect(find(list, 4)).to.equal(true);
  });

  it('should find nothing', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);

    expect(find(list, 0)).to.equal(false);
  });
});
