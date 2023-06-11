import { render, screen } from 'test/utilities';
import PackingList from '.';

it('renders the Packing List application', () => {
  render(<PackingList />);
});

it('has the correct title', async () => {
  render(<PackingList />);
  screen.getByText('Packing List');
});

it.todo('has an input field for a new item', () => {});

it.todo(
  'has a "Add New Item" button that is disabled when the input is empty',
  () => {},
);

it.todo(
  'enables the "Add New Item" button when there is text in the input field',
  async () => {},
);

it('adds a new item to the unpacked item list when the clicking "Add New Item"', async () => {
  const { user } = render(<PackingList />);
  const addNewItemButton = screen.getByRole('button', {
    name: 'Add New Item',
  });
  const newItemInput = screen.getByLabelText('New Item Name');

  await user.type(newItemInput, 'new task');
  await user.click(addNewItemButton);

  //only inputs with type="checkbox" or type="radio" or elements with role="checkbox", role="menuitemcheckbox", role="menuitemradio", role="option", role="radio", role="switch" or role="treeitem" and a valid aria-checked attribute can be used with .toBeChecked(). Use .toHaveValue() instead
  const newItem = screen.getByLabelText('New Item Name');
  await user.click(newItem);
  expect(newItem).toBeDefined();
  expect(newItem).not.toBeChecked();
});
