import { FC, Fragment, useState } from 'react'
import { Link } from 'react-router-dom';
import { Dialog, Disclosure, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { ArrowRightIcon, FilterIcon } from '@heroicons/react/solid'

interface Props {
}
const menus = [
  {
    id: 'myInformation',
    name: 'My information',
    href: '/myaccount'
  },
  {
    id: 'addNew',
    name: 'Add new',
    href: '/addnew'
  },
  {
    id: 'allPhotos',
    name: 'All photos',
    href: '/allphotos'
  },
]

const Main: FC<Props> = ({ children }) => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog as="div" className="fixed inset-0 flex z-40 lg:hidden" onClose={setMobileFiltersOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto">
                <div className="px-4 flex items-center justify-between">
                  <button
                    type="button"
                    className="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400"
                    onClick={() => setMobileFiltersOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Menu */}
                <form className="mt-4 border-t border-gray-200">
                  {menus.map((menu) => (
                    <Disclosure as="div" key={menu.id} className="border-t border-gray-200 px-4 py-6">
                      <Link to={menu.href}>
                        <h3 className="-mx-2 -my-3 flow-root">
                          <Disclosure.Button className="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">{menu.name}</span>
                            <span className="ml-6 flex items-center">
                              <ArrowRightIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                          </Disclosure.Button>
                        </h3>
                      </Link>
                    </Disclosure>
                  ))}
                </form>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 flex items-baseline justify-between pt-24 pb-6 border-b border-gray-200">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900" data-aos="zoom-y-out">My account</h1>

            <div className="flex items-center">
              <button
                type="button"
                className="p-2 -m-2 ml-4 sm:ml-6 text-gray-400 hover:text-gray-500 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FilterIcon className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="menu-heading" className="pt-6 pb-24">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
              {/* Menus */}
              <form className="hidden lg:block">
                {menus.map((menu) => (
                  <Disclosure as="div" key={menu.id} className="border-b border-gray-200 py-6">
                    <Link to={menu.href}>
                      <h3 className="-my-3 flow-root">
                        <Disclosure.Button className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500">
                          <span className="font-medium text-gray-900">{menu.name}</span>
                          <span className="ml-6 flex items-center">
                            <ArrowRightIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        </Disclosure.Button>
                      </h3>
                    </Link>
                  </Disclosure>
                ))}
              </form>

              <div className="lg:col-span-3">
                {/* Content */}
                <div className="border-4 border-dashed border-gray-200 rounded-lg min-h-full max-h-screen overflow-y-auto overflow-x-hidden">
                  <div className="bg-white">
                    {children}
                  </div>
                </div>
                {/* /End Content */}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default Main;