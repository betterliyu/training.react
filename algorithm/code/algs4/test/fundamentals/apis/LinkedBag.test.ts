import { expect } from 'chai';
import { LinkedBag } from '../../../src/fundamentals/apis/LinkedBag';

describe('LinkedBag Test', () => {
  it('should output right sentence', () => {
    const input = 'to be or not to - be - - that - - - is';
    const inputs = input.split(' ');
    const bag = new LinkedBag();
    let output = '';

    for (let i = 0; i < inputs.length; i += 1) {
      const ele = inputs[i];
      bag.add(ele);
    }

    for (const item of bag) {
      output += `${item} `;
    }

    output += `(size of bag = ${bag.size()})`;
    expect(output).to.equal('is - - - that - - be - to not or be to (size of bag = 14)');
  });
});
