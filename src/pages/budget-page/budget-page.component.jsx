// current expenses and due dates. include calculator function and way to track things we want to save for. Track income and loan payments

import Budget from '../../components/budget-components/budget/budget.component';

const BudgetPage = () => {
  return (
    <div className='budget'>
      <h1>Budget</h1>
      <Budget />
    </div>
  );
};

export default BudgetPage;