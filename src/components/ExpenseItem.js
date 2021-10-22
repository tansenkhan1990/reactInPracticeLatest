import './ExpenseItem.css';
function ExpenseItem() {
    const dates = '09/01/1992';
    const insurance = 'Car Insurance';
    const price = '$256';
    return (
       <div className="expense-item">
           <div>{dates}</div>
           <div className="expense-item__description">
               <h2>
                {insurance}
               </h2>
           
           <div className="expense-item__price">{price}</div>
           </div>
       </div>
    );
};

export default ExpenseItem;