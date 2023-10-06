import { render, fireEvent } from '@testing-library/react';
import { Pagination } from './index';
import '@testing-library/jest-dom';

describe('Pagination', () => {
  const onPageChange = jest.fn();

  beforeEach(() => {
    onPageChange.mockClear();
  });

  it('renders the current page and total pages', () => {
    const { getByText } = render(
      <Pagination
        currentPage={2}
        totalPages={5}
        onPageChange={onPageChange}
        itemsPerPage={12}
        totalItems={60}
      />
    );
    expect(getByText('Page 2 of 5')).toBeInTheDocument();
  });

  it('disables the previous button on the first page', () => {
    const { getByLabelText } = render(
      <Pagination
        currentPage={1}
        totalPages={5}
        onPageChange={onPageChange}
        itemsPerPage={12}
        totalItems={60}
      />
    );
    const previousButton = getByLabelText('Previous');
    expect(previousButton).toBeDisabled();
    fireEvent.click(previousButton);
    expect(onPageChange).not.toHaveBeenCalled();
  });

  it('disables the next button on the last page', () => {
    const { getByLabelText } = render(
      <Pagination
        currentPage={5}
        totalPages={5}
        onPageChange={onPageChange}
        itemsPerPage={12}
        totalItems={60}
      />
    );
    const nextButton = getByLabelText('Next');
    expect(nextButton).toBeDisabled();
    fireEvent.click(nextButton);
    expect(onPageChange).not.toHaveBeenCalled();
  });

  it('calls the onPageChange function with the new page number when a button is clicked', () => {
    const { getByLabelText } = render(
      <Pagination
        currentPage={3}
        totalPages={5}
        onPageChange={onPageChange}
        itemsPerPage={12}
        totalItems={60}
      />
    );
    const previousButton = getByLabelText('Previous');
    const nextButton = getByLabelText('Next');
    fireEvent.click(previousButton);
    expect(onPageChange).toHaveBeenCalledWith(2);
    onPageChange.mockClear();
    fireEvent.click(nextButton);
    expect(onPageChange).toHaveBeenCalledWith(3);
  });
});
