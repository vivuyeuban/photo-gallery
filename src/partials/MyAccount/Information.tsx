const Information = () => {
  return (
    <form data-aos="zoom-y-out">
      <div className="shadow overflow-hidden sm:rounded-md">
        <div className="px-4 py-5 bg-white sm:p-6">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                First name
              </label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                placeholder="First name"
                className="mt-2 py-1 px-2 focus:ring-blue-400 focus:border-blue-400 block w-full border border-gray-300 rounded-sm"
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                Last name
              </label>
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                placeholder="Last name"
                className="mt-2 py-1 px-2 focus:ring-blue-400 focus:border-blue-400 block w-full border border-gray-300 rounded-sm"
              />
            </div>

            <div className="col-span-6">
              <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                placeholder="Email address"
                className="mt-2 py-1 px-2 focus:ring-blue-400 focus:border-blue-400 block w-full border border-gray-300 rounded-sm"
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                Country
              </label>
              <select
                id="country"
                name="country"
                autoComplete="country-name"
                className="mt-2 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>

            <div className="col-span-6">
              <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                Street address
              </label>
              <input
                type="text"
                name="street-address"
                id="street-address"
                autoComplete="street-address"
                placeholder="Street address"
                className="mt-2 py-1 px-2 focus:ring-blue-400 focus:border-blue-400 block w-full border border-gray-300 rounded-sm"
              />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                City
              </label>
              <input
                type="text"
                name="city"
                id="city"
                autoComplete="address-level2"
                placeholder="City"
                className="mt-2 py-1 px-2 focus:ring-blue-400 focus:border-blue-400 block w-full border border-gray-300 rounded-sm"
              />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                State / Province
              </label>
              <input
                type="text"
                name="region"
                id="region"
                autoComplete="address-level1"
                placeholder="State / Province"
                className="mt-2 py-1 px-2 focus:ring-blue-400 focus:border-blue-400 block w-full border border-gray-300 rounded-sm"
              />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                ZIP / Postal code
              </label>
              <input
                type="text"
                name="postal-code"
                id="postal-code"
                autoComplete="postal-code"
                placeholder="ZIP / Postal code"
                className="mt-2 py-1 px-2 focus:ring-blue-400 focus:border-blue-400 block w-full border border-gray-300 rounded-sm"
              />
            </div>
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  )
}

export default Information;