export default function OrderSummary() {
  return (
    <div className="bg-white p-6 rounded shadow sticky top-10">

      <h3 className="text-lg font-semibold mb-4">
        ORDER SUMMARY
      </h3>

      <p className="text-gray-600 mb-4">
        1 Item in Cart
      </p>

      <div className="border-t pt-4 space-y-3 text-sm">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>$100.00</span>
        </div>

        <div className="flex justify-between">
          <span>Shipping</span>
          <span>$5.00</span>
        </div>

        <div className="flex justify-between font-semibold text-base border-t pt-3">
          <span>Total</span>
          <span>$105.00</span>
        </div>
      </div>
    </div>
  );
}