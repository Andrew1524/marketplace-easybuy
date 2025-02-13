const Orders = () => {
  return (
    <>
      <h1 >My orders</h1>
      <div className="orders-sorting-and-search d-flex justify-content-space-between">
        <select name="status" id="status" className="form-select w-20 ">
            <option selected>All</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
            <option value="cancelled">Cancelled</option>
            <option value="awaiting">Awaiting shipment</option>
        </select>
        <input type="text" className="form-input py-3 ms-4 border rounded bg-white" placeholder=" Order search" />
      </div>
      <div className="orders">

      </div>
    </>
  );
};

export default Orders;
