import { FaCameraRetro, FaPhotoVideo } from 'react-icons/fa';
import './Gallarey.css'

const Gallarey = () => {
    return (
        <div className='body py-32'>
            <div className="flex justify-center gap-4">

                <FaPhotoVideo className='text-3xl md:text-5xl text-orange-400 ' />
                <h1 className=' text-3xl md:text-5xl  font-italic font-bold uppercase underline text-red-500'> Super Hero's galarey</h1>
                <FaCameraRetro className='text-3xl md:text-5xl text-orange-400 ' ></FaCameraRetro>
            </div>
            <div className="gallery w-[100%] mx-auto mt-16">
                <span style={{ '--i': 1 }}><img src="https://cdn.pixabay.com/photo/2018/05/08/11/36/avenger-3382834_640.jpg" alt="" /></span>
                <span style={{ '--i': 2 }}><img src="https://img.freepik.com/premium-vector/spiderman-vector-illustration_677433-78.jpg?size=626&ext=jpg&ga=GA1.2.1318835724.1670345660&semt=sph" alt="" /></span>

                <span style={{ '--i': 3 }}><img src="https://img.freepik.com/premium-vector/silhouette-japanese-samurai-with-sword-standing-sunset_218660-576.jpg?size=626&ext=jpg&ga=GA1.1.1318835724.1670345660&semt=ais" alt="" /></span>

                <span style={{ '--i': 4 }}><img src="https://img.freepik.com/free-vector/superhero-character-with-pop-art-style_197582-180.jpg?size=626&ext=jpg&ga=GA1.2.1318835724.1670345660&semt=ais" alt="" /></span>


                <span style={{ '--i': 5 }}><img src="https://cdn.pixabay.com/photo/2017/07/19/17/26/gabriel-2519793_640.jpg" alt="" /></span>

                <span style={{ '--i': 6 }}><img src="https://img.freepik.com/free-vector/red-superhero-pop-art-poster_603843-516.jpg?size=626&ext=jpg&ga=GA1.2.1318835724.1670345660&semt=ais" alt="" /></span>

                <span style={{ '--i': 7 }}><img src="https://cdn.pixabay.com/photo/2021/07/20/14/59/iron-man-6480952_640.jpg" alt="" /></span>

                <span style={{ '--i': 8 }}><img src="https://img.freepik.com/free-vector/realistic-samurai-illustrated-background_52683-69460.jpg?size=626&ext=jpg&ga=GA1.1.1318835724.1670345660&semt=ais" alt="" /></span>

            </div>



        </div>
    );
};

export default Gallarey;