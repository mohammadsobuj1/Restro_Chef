import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import DynamicTytile from '../DyanamicTitle/DynamicTytile';

const UpdateData = () => {
    const UpdatedUser = useLoaderData()

    const SubmitHandelar = (event) => {

        event.preventDefault()
        const from = event.target;
        const name = from.name.value;
        const photo = from.photo.value;
        const price = from.price.value;
        const quantity = from.quantity.value;
        const description = from.description.value;

        console.log(UpdatedUser._id)
        const datas = { name, photo, price, quantity, description }
        console.log(datas)


        fetch(`https://assainment-11-sarver.vercel.app/update/${UpdatedUser?._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(datas)
        })
            .then(res => res.json())
            .then(data => {

                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Your toy has been Updated',
                        showConfirmButton: false,
                        timer: 1500

                    })
                }
                from.reset();


            })


    }

    return (
        <div className='bg-slate-300'>
             <DynamicTytile title="Update_TOys" />
            <h1 className=' text-center font-semibold font-herder text-orange-500 py-5 md:text-5xl'>  update your  toys</h1>
            <form onSubmit={SubmitHandelar}>

                <div className="grid md:grid-cols-2 gap-5  w-[90%] mx-auto">

                    <div className="">
                        <div className="flex items-center justify-between">
                            <label className="block text-sm font-medium leading-6 text-gray-900">Name</label>

                        </div>
                        <div className="mt-2">
                            <input id="name" defaultValue={UpdatedUser?.name} name="name" type="text" required className="block w-full text-xl bg-gray-100 font-semibold font-italic rounded-md px-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />

                        </div>
                    </div>

                    <div className="">
                        <div className="flex items-center justify-between">
                            <label className="block text-sm font-medium leading-6 text-gray-900">Photo Url</label>

                        </div>
                        <div className="mt-2">
                            <input id="photo" name="photo" type="text" defaultValue={UpdatedUser?.photo} autoComplete="current-password" required className="block w-full text-xl bg-gray-100 font-semibold font-italic rounded-md px-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />

                        </div>
                    </div>
                    <div className="">
                        <div className="flex items-center justify-between">
                            <label className="block text-sm font-medium leading-6 text-gray-900">Price</label>

                        </div>
                        <div className="mt-2">
                            <input id="price" name="price" type="text" autoComplete="current-password" defaultValue={UpdatedUser?.price} required className="block w-full text-xl bg-gray-100 font-semibold font-italic  rounded-md px-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />

                        </div>
                    </div>

                    <div className="">
                        <div className="flex items-center justify-between">
                            <label className="block text-sm font-medium leading-6 text-gray-900">Available Quantity</label>

                        </div>
                        <div className="mt-2">
                            <input id="Quantity" name="quantity" type="text" autoComplete="current-password" defaultValue={UpdatedUser?.quantity} required className="block w-full text-xl bg-gray-100 font-semibold font-italic rounded-md px-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />

                        </div>
                    </div>

                    <br />

                </div>
                <div className="w-[75%] mx-auto">
                    <div className="flex items-center justify-between">
                        <label className="block text-sm font-medium leading-6 text-gray-900"> Description </label>

                    </div>
                    <div className="mt-2">

                        <textarea id="description" name="description" defaultValue={UpdatedUser?.description} cols="60" rows="5"
                            className="block w-full text-xl bg-gray-100 font-semibold font-italic rounded-md px-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        ></textarea>

                    </div>
                </div>
                <div className="text-center mt-5 w-[50%] mx-auto">
                    <input className="btn btn-block mb-8" type="submit" value="Update" />
                </div>
            </form>

        </div>
    );
};

export default UpdateData;
