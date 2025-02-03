import { WidgetType } from '../constants';

const FinanceWidget = ({ widget }: { widget: WidgetType }) => {
  return (
    <div className="text-white">
      <h2 className="text-[.9rem] md:text[1rem] lg:text-[1.2rem]">{widget.title}</h2>
      <div className="mt-1 space-y-2 text-[.8rem] md:text-[.9rem] lg:text-[1rem]">
        <p className="font-semibold text-green-400">Income: {widget.data.income}</p>
        <p className="font-semibold text-red-400">Expenses: {widget.data.expenses}</p>
        <p className="font-semibold text-yellow-400">Savings: {widget.data.savings}</p>
      </div>
    </div>
  );
};

export default FinanceWidget;
