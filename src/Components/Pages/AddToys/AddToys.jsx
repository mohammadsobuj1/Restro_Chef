
const AddToys = () => {

    const SubmitHandelar = (event) => {
        event.preventDefault()
        const from = event.target;
        const name = from.name.value;
        const photo = from.photo.value;
        const categorey = from.categorey.value;
        const price = from.price.value;
        const quantity = from.quantity.value;
        const data = { name, photo, categorey, price, quantity }
        console.log(data)

    }


    return (
        <>
            <form onSubmit={SubmitHandelar}>

                <div className="grid md:grid-cols-2 gap-5  w-[90%] mx-auto">

                    <div className="">
                        <div className="flex items-center justify-between">
                            <label className="block text-sm font-medium leading-6 text-gray-900">Name</label>

                        </div>
                        <div className="mt-2">
                            <input id="name" name="name" type="text" required className="block w-full rounded-md px-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />

                        </div>
                    </div>
                    <div className="">
                        <div className="flex items-center justify-between">
                            <label className="block text-sm font-medium leading-6 text-gray-900">Photo Url</label>

                        </div>
                        <div className="mt-2">
                            <input id="photo" name="photo" type="text" autoComplete="current-password" required className="block w-full rounded-md px-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />

                        </div>
                    </div>
                    <div className="">
                        <div className="flex items-center justify-between">
                            <label className="block text-sm font-medium leading-6 text-gray-900">Price</label>

                        </div>
                        <div className="mt-2">
                            <input id="price" name="price" type="text" autoComplete="current-password" required className="block w-full rounded-md px-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />

                        </div>
                    </div>
                    <div className="">
                        <div className="flex items-center justify-between">
                            <label className="block text-sm font-medium leading-6 text-gray-900">Categorey</label>

                        </div>
                        <div className="mt-2">
                            <input id="Categorey" name="categorey" type="text" autoComplete="current-password" required className="block w-full rounded-md px-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />

                        </div>
                    </div>
                    <div className="">
                        <div className="flex items-center justify-between">
                            <label className="block text-sm font-medium leading-6 text-gray-900">Available Quantity</label>

                        </div>
                        <div className="mt-2">
                            <input id="Quantity" name="quantity" type="text" autoComplete="current-password" required className="block w-full rounded-md px-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />

                        </div>
                    </div>
                    <br />
                    <div className="text-center">
                        <input className="btn btn-primary" type="submit" value="Submit" />
                    </div>
                </div>
            </form>

        </>
    );
};

export default AddToys;