import Button from './Button';
import type { FromSplitBillProps } from '../types/item';

const FormSplitBill = ({ selectedFriend }: FromSplitBillProps) => {
  return (
    <form>
      <h2>Split Bill with {selectedFriend.name}</h2>
      <label>bill value</label>
      <input type="text" />e<label>Your expenses</label>
      <input type="text" />
      <label>{selectedFriend.name}'s expenses</label>
      <input type="text" disabled />
      <label>Who is paying the bill</label>
      <select>
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
};

export default FormSplitBill;
