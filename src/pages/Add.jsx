// import React from 'react'
// import { assets } from '../assets/assets'
// import { useState } from 'react'
// import axios from 'axios'
// import { backendURL } from '../App'


// const Add = ({ token }) => {

//     const [image1, setImage1] = useState(false);
//     const [image2, setImage2] = useState(false);
//     const [image3, setImage3] = useState(false);
//     const [image4, setImage4] = useState(false);

//     const [name, setName] = useState("");
//     const [description, setDescription] = useState("");
//     const [price, setPrice] = useState("");
//     const [category, setCategory] = useState("Men");
//     const [subCategory, setSubCategory] = useState("Topwear");
//     const [bestseller, setBestseller] = useState(false);
//     const [sizes, setSizes] = useState([]);

//     const onSubmitHandler = async (e) => {
//         e.preventDefault();

//         try {
//             const formData = new FormData();


//             formData.append('name', name);
//             formData.append('description', description);
//             formData.append('price', price);
//             formData.append('category', category);
//             formData.append('subCategory', subCategory);
//             // formData.append('bestSeller', bestSeller);
//             formData.append('bestseller', bestseller ? "true" : "false");
//             formData.append('sizes', JSON.stringify(sizes));

//             image1 && formData.append('image1', image1);
//             image2 && formData.append('image2', image2);
//             image3 && formData.append('image3', image3);
//             image4 && formData.append('image4', image4);

//             const responce = await axios.post(backendURL + "/api/product/add", formData, { headers: { token } })

//             console.log(responce.data);

//         } catch (err) {

//         }
//     }

//     return (
//         <form onSubmit={onSubmitHandler} className='flex flex-col items-start gap-3'>
//             <div>
//                 <p className='mb-2'>Upload the image</p>
//                 <div className='flex gap-2'>
//                     <label htmlFor="image1" >
//                         <img className='w-20' src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt="upload_icon" />
//                         <input onChange={(e) => setImage1(e.target.files[0])} type="file" id='image1' hidden />
//                     </label>

//                     <label htmlFor="image2" >
//                         <img className='w-20' src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} alt="upload_icon" />
//                         <input onChange={(e) => setImage2(e.target.files[0])} type="file" id='image2' hidden />
//                     </label>

//                     <label htmlFor="image3" >
//                         <img className='w-20' src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} alt="upload_icon" />
//                         <input onChange={(e) => setImage3(e.target.files[0])} type="file" id='image3' hidden />
//                     </label>

//                     <label htmlFor="image4">
//                         <img className='w-20' src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} alt="upload_icon" />
//                         <input onChange={(e) => setImage4(e.target.files[0])} type="file" id='image4' hidden />
//                     </label>

//                 </div>
//             </div>

//             <div className='w-full'>
//                 <p className='mb-2'>Product Name</p>
//                 <input onChange={(e) => setName(e.target.value)} value={name} className='w-full max-w-[500px] px-3 py-2 border border-gray-300 rounded' type='text' placeholder='Type here' required />
//             </div>

//             <div className='w-full'>
//                 <p className='mb-2'>Product Description</p>
//                 <input onChange={(e) => setDescription(e.target.value)} value={description} className='w-full max-w-[500px] px-3 py-2 border border-gray-300 rounded' type='textarea' placeholder='Write Content here' required />
//             </div>

//             <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
//                 <div>
//                     <p className='mb-2'>Product Category</p>
//                     <select onChange={(e) => setCategory(e.target.value)} className='w-full px-3 py-2'>
//                         <option value="Men">Men</option>
//                         <option value="Women">Women</option>
//                         <option value="Kids">Kids</option>
//                     </select>
//                 </div>

//                 <div>
//                     <p className='mb-2'>Sub Category</p>
//                     <select onChange={(e) => setSubCategory(e.target.value)} className='w-full px-3 py-2'>
//                         <option value="Topwear">Topwear</option>
//                         <option value="Bottomwear">Bottomwear</option>
//                         <option value="Winterwear">Winterwear</option>
//                     </select>
//                 </div>

//                 <div >
//                     <p className='mb-2'>Product Price</p>
//                     <input onChange={(e) => setPrice(e.target.value)} value={price} className='w-full px-3 py-2 sm:w-[120px]' type='number' placeholder='0' />
//                 </div>
//             </div>

//             <div>
//                 <p className='mb-2'>Product Sizes</p>
//                 <div className='flex gap-3'>
//                     <div onClick={() => setSizes(prev => prev.includes("S") ? prev.filter(item => item !== "S") : [...prev, "S"])}>
//                         <p className={`${sizes.includes("S") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>S</p>
//                     </div>

//                     <div onClick={() => setSizes(prev => prev.includes("M") ? prev.filter(item => item !== "M") : [...prev, "M"])}>
//                         <p className={`${sizes.includes("M") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>M</p>
//                     </div>

//                     <div onClick={() => setSizes(prev => prev.includes("L") ? prev.filter(item => item !== "L") : [...prev, "L"])}>
//                         <p className={`${sizes.includes("L") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>L</p>
//                     </div>

//                     <div onClick={() => setSizes(prev => prev.includes("XL") ? prev.filter(item => item !== "XL") : [...prev, "XL"])}>
//                         <p className={`${sizes.includes("XL") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>XL</p>
//                     </div>

//                     <div onClick={() => setSizes(prev => prev.includes("XXL") ? prev.filter(item => item !== "XXL") : [...prev, "XXL"])}>
//                         <p className={`${sizes.includes("XXL") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>XXL</p>
//                     </div>
//                 </div>
//             </div>

//             <div className='flex gap-2 mt-2'>
//                 <input onChange={() => setBestseller(prev => !prev)} checked={bestseller} type="checkbox" id='bestseller' />
//                 <label className='cursor-pointer' htmlFor='bestseller'>Add to Best Seller</label>
//             </div>

//             <button className='bg-black text-white px-5 py-2 rounded mt-4' type='submit'>Add Product</button>

//         </form>
//     )
// }

// export default Add


import React from 'react'
import { assets } from '../assets/assets'
import { useState } from 'react'
import axios from 'axios'
import { backendURL } from '../App'


const Add = ({ token }) => {

    const [image1, setImage1] = useState(false);
    const [image2, setImage2] = useState(false);
    const [image3, setImage3] = useState(false);
    const [image4, setImage4] = useState(false);

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("Men");
    const [subCategory, setSubCategory] = useState("Topwear");
    const [bestseller, setBestseller] = useState(false);
    const [sizes, setSizes] = useState([]);

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();

            formData.append('name', name);
            formData.append('description', description);
            formData.append('price', price);
            formData.append('category', category);
            formData.append('subCategory', subCategory);
            formData.append('bestseller', bestseller ? "true" : "false");
            formData.append('sizes', JSON.stringify(sizes));

            image1 && formData.append('image1', image1);
            image2 && formData.append('image2', image2);
            image3 && formData.append('image3', image3);
            image4 && formData.append('image4', image4);

            const responce = await axios.post(backendURL + "/api/product/add", formData, { headers: { token } })
            console.log(responce.data);

        } catch (err) {

        }
    }

    return (
        <form 
            onSubmit={onSubmitHandler} 
            className="flex flex-col items-start gap-6 bg-white p-6 rounded-xl shadow-md w-full max-w-3xl"
        >
            <div className="w-full">
                <p className="mb-2 font-semibold text-gray-700">Upload Images</p>
                <div className="flex gap-3 flex-wrap">
                    <label htmlFor="image1" className="cursor-pointer">
                        <img 
                            className="w-24 h-24 rounded-lg object-cover border-2 border-gray-200 hover:border-gray-400 transition" 
                            src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} 
                            alt="upload_icon" 
                        />
                        <input onChange={(e) => setImage1(e.target.files[0])} type="file" id='image1' hidden />
                    </label>

                    <label htmlFor="image2" className="cursor-pointer">
                        <img 
                            className="w-24 h-24 rounded-lg object-cover border-2 border-gray-200 hover:border-gray-400 transition" 
                            src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} 
                            alt="upload_icon" 
                        />
                        <input onChange={(e) => setImage2(e.target.files[0])} type="file" id='image2' hidden />
                    </label>

                    <label htmlFor="image3" className="cursor-pointer">
                        <img 
                            className="w-24 h-24 rounded-lg object-cover border-2 border-gray-200 hover:border-gray-400 transition" 
                            src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} 
                            alt="upload_icon" 
                        />
                        <input onChange={(e) => setImage3(e.target.files[0])} type="file" id='image3' hidden />
                    </label>

                    <label htmlFor="image4" className="cursor-pointer">
                        <img 
                            className="w-24 h-24 rounded-lg object-cover border-2 border-gray-200 hover:border-gray-400 transition" 
                            src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} 
                            alt="upload_icon" 
                        />
                        <input onChange={(e) => setImage4(e.target.files[0])} type="file" id='image4' hidden />
                    </label>
                </div>
            </div>

            <div className="w-full">
                <p className="mb-2 font-semibold text-gray-700">Product Name</p>
                <input 
                    onChange={(e) => setName(e.target.value)} 
                    value={name} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black outline-none" 
                    type='text' 
                    placeholder='Type here' 
                    required 
                />
            </div>

            <div className="w-full">
                <p className="mb-2 font-semibold text-gray-700">Product Description</p>
                <input 
                    onChange={(e) => setDescription(e.target.value)} 
                    value={description} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black outline-none" 
                    type='textarea' 
                    placeholder='Write content here' 
                    required 
                />
            </div>

            <div className="flex flex-col sm:flex-row gap-6 w-full">
                <div className="w-full">
                    <p className="mb-2 font-semibold text-gray-700">Category</p>
                    <select 
                        onChange={(e) => setCategory(e.target.value)} 
                        className="w-full px-3 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-black outline-none"
                    >
                        <option value="Men">Men</option>
                        <option value="Women">Women</option>
                        <option value="Kids">Kids</option>
                    </select>
                </div>

                <div className="w-full">
                    <p className="mb-2 font-semibold text-gray-700">Sub Category</p>
                    <select 
                        onChange={(e) => setSubCategory(e.target.value)} 
                        className="w-full px-3 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-black outline-none"
                    >
                        <option value="Topwear">Topwear</option>
                        <option value="Bottomwear">Bottomwear</option>
                        <option value="Winterwear">Winterwear</option>
                    </select>
                </div>

                <div className="w-full">
                    <p className="mb-2 font-semibold text-gray-700">Price</p>
                    <input 
                        onChange={(e) => setPrice(e.target.value)} 
                        value={price} 
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-black outline-none" 
                        type='number' 
                        placeholder='0' 
                    />
                </div>
            </div>

            <div className="w-full">
                <p className="mb-2 font-semibold text-gray-700">Product Sizes</p>
                <div className="flex gap-3">
                    {["S","M","L","XL","XXL"].map(size => (
                        <div 
                            key={size}
                            onClick={() => 
                                setSizes(prev => prev.includes(size) ? prev.filter(i => i !== size) : [...prev, size])
                            }
                        >
                            <p className={`${sizes.includes(size) ? "bg-black text-white" : "bg-gray-200 text-gray-700"} 
                                px-4 py-1 rounded-lg cursor-pointer transition`}>
                                {size}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex gap-2 mt-2 items-center">
                <input 
                    onChange={() => setBestseller(prev => !prev)} 
                    checked={bestseller} 
                    type="checkbox" 
                    id='bestseller' 
                    className="w-4 h-4"
                />
                <label className="cursor-pointer text-gray-700 font-medium" htmlFor='bestseller'>
                    Add to Best Seller
                </label>
            </div>

            <button 
                className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition mt-4"
                type='submit'
            >
                Add Product
            </button>

        </form>
    )
}

export default Add
