import SearchBar from '../components/SearchBar'
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { ImAttachment } from "react-icons/im";
import { BsFillSendFill } from "react-icons/bs";

const Home = () => {

    const persons = [
        {
            img: "https://static.vecteezy.com/system/resources/previews/046/010/371/non_2x/man-with-glasses-and-scarf-photo.jpg",
            name: "John Doe",
            lastMsg: "Hii there, How are you?",
            time: "09:35",
            totalMsg: 6,
            online: true
        },
        {
            img: "https://img.freepik.com/premium-photo/south-indian-girl-with-long-black-hair-is-standing-crowd_905085-76.jpg",
            name: "Jessie Woo",
            lastMsg: "Working With you like Dream!",
            time: "08:50",
            totalMsg: 2,
            online: true
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbzC8_xOljjozO2AtZtdmFHdEr17FtKaa5Sw&s",
            name: "Amelia Nelson",
            lastMsg: "Hii there, How are you?",
            time: "09:35",
            totalMsg: 3,
            online: true
        },
        {
            img: "https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg",
            name: "Alex Doe",
            lastMsg: "Cool!!, Look's good...",
            time: "08:35",
            totalMsg: 1,
            online: true
        },
        {
            img: "https://img.freepik.com/premium-photo/south-indian-girl-with-long-black-hair-is-standing-crowd_905085-76.jpg",
            name: "Jessie Woo",
            lastMsg: "Working With you like Dream!",
            time: "08:50",
            totalMsg: 2,
            online: true
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbzC8_xOljjozO2AtZtdmFHdEr17FtKaa5Sw&s",
            name: "Amelia Nelson",
            lastMsg: "Hii there, How are you?",
            time: "09:35",
            totalMsg: 3,
            online: true
        },
    ]

    return (
        <main className='flex justify-between gap-10 p-8'>
            <section className='w-[37%]'>
                <SearchBar />

                <div className="bg-[#8173ac] p-2 rounded-xl mt-4">

                    {
                        persons.map((i, index) => (
                            <div key={index} className="my-4 bg-transparent flex gap-3 text-white px-4 cursor-pointer">

                                <img src={i.img} alt="img" width={12} height={12} className='w-14 h-12 object-cover rounded-full' />

                                <div className="flex bg-[#8173ac] justify-between w-full border-b">
                                    <div className="">
                                        <h3 className='font-semibold'>{i.name}</h3>
                                        <p className='text-xs text-gray-300'>{i.lastMsg}</p>
                                    </div>

                                    <div className="bg-transparent">
                                        <p className='p-1 text-xs'>{i.time}</p>
                                    </div>
                                </div>


                            </div>
                        ))
                    }

                </div>
            </section>

            <section className='bg-transparent flex flex-col items-end w-[57%]'>
                <div className="flex gap-4 text-white uppercase">
                    <button className='p-1 px-4 border-2 rounded-full border-gray-300 hover:text-orange-400 hover:border-orange-400 duration-200'>Clear Chat</button>
                    <button className='p-1 px-4 border-2 rounded-full border-gray-300 hover:text-orange-400 hover:border-orange-400 duration-200'>More</button>
                </div>

                <div className="bg-[#8173ac] w-full p-5 mt-6 rounded-t-xl h-full">
                    {/* //msgs */}
                    <div className="flex gap-3 text-white items-center">
                        <img src="https://static.vecteezy.com/system/resources/previews/046/010/371/non_2x/man-with-glasses-and-scarf-photo.jpg" alt="img"
                            width={12}
                            height={12}
                            className='w-12 h-12 object-cover rounded-full'
                        />
                        <p className='p-3 bg-slate-700 opacity-75 text-xs rounded-xl px-6'>Hi there, How are you?</p>
                    </div>
                    <p className='p-3 bg-slate-700 opacity-75 text-xs rounded-xl px-6 text-white my-1 w-3/4 ml-14'>Waiting for your reply. As I have to go back soon. I have to travel long distance.</p>

                    {/* form him */}
                    <div className="flex gap-3 text-white items-center p-3 rounded-xl px-6 bg-orange-500 ml-44">
                        <p className=' opacity-95 text-xs  text-white my-1 w-3/4'>Hi, I am coming there in few
                            minutes. Please wait!! I am in taxi right now.</p>
                    </div>
                    {/* msg */}
                    <div className="flex gap-3 text-white items-center">
                        <img src="https://static.vecteezy.com/system/resources/previews/046/010/371/non_2x/man-with-glasses-and-scarf-photo.jpg" alt="img"
                            width={12}
                            height={12}
                            className='w-12 h-12 object-cover rounded-full'
                        />
                        <p className='p-3 bg-slate-700 opacity-75 text-xs rounded-xl px-6 text-white my-1 w-3/4'>Thank you very much, I am waiting here at
                            StarBuck cafe.</p>
                    </div>
                </div>

                <div className="bg-[#8173ac] p-5 w-full flex rounded-b-xl">
                    <div className="bg-white flex gap-2 w-full items-center p-3 rounded-full">
                        <button>
                            <MdOutlineEmojiEmotions className='text-2xl' />

                        </button>
                        <input type="text" placeholder='Type a message' className='w-full outline-none' />
                        <button className='px-4'><ImAttachment /></button>
                    </div>
                    <button className='bg-cyan-400 p-4 rounded-full mx-2 text-white'><BsFillSendFill /></button>
                </div>

            </section>
        </main>
    )
}

export default Home