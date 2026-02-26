export default function CheckoutSteps() {
  return (
    <>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center">
            1
          </div>
          <span className="font-semibold text-gray-700">Shipping</span>
        </div>

        <div className="h-1 w-16 bg-gray-300"></div>

        <div className="flex items-center gap-2 opacity-50">
          <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
            2
          </div>
          <span>Review & Payments</span>
        </div>
      </div>
    </>
  );
}
