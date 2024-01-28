import React from 'react'
import Link from 'next/link'

const Courses = () => {
  return (
    <div className="p-4">
      <div className='flex justify-between'>
      <div>
      <h2 className="text-2xl font-bold pt-4 hover:text-orange-500">Trending Courses</h2>
      </div>
      <div className="text-center p-3">
        <Link href="/school">
          <button className="btn bg-orange-500 text-white">View all courses</button>
        </Link>
      </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 overflow-x-auto md:overflow-visible">
        <div className="card card-compact w-full md:w-96 bg-base-100 shadow-xl hover:shadow-sm">
          <figure><img src="https://res.cloudinary.com/dt3czltxx/image/upload/v1706415006/course_-_Video_Thumbnail_y6cjqp.png" alt="Course 1" /></figure>
          <div className="card-body">
            <h2 className="card-title text-orange-600">Basic Cookery Course</h2>
            <p>This is a beginner's class for persons that are interested in learning the basics of what it takes to be a professional in this career path and as well the food service industry at large. This course cuts across different recipes from different parts and continents of the world.</p>
            <div className="card-actions justify-end">
              <button className="btn text-white bg-orange-500">Register</button>
            </div>
          </div>
        </div>

        <div className="card card-compact w-full md:w-96 bg-base-100 shadow-xl">
          <figure><img src="https://res.cloudinary.com/dt3czltxx/image/upload/v1706415001/sandwich_mzdhqe.jpg" alt="Course 2" /></figure>
          <div className="card-body">
            <h2 className="card-title text-orange-600">Intermediate Culinary Course</h2>
            <p>This course involves a wide range of recipes and other classes that are taught in this field. This class involves a lot of practice as students will be tasked to perform certain duties during this course. This is basically an advanced level from the basic cookery course.</p>
            <div className="card-actions justify-end">
              <button className="btn text-white bg-orange-500">Register</button>
            </div>
          </div>
        </div>

        <div className="card card-compact w-full md:w-96 bg-base-100 shadow-xl">
          <figure><img src="https://res.cloudinary.com/dt3czltxx/image/upload/v1706192658/The_Chefs_Culiground_nvcmqd.jpg" alt="Course 3" /></figure>
          <div className="card-body">
            <h2 className="card-title text-orange-600">Professional Diploma in Pastry & Cake Crafting</h2>
            <p>This course offers a combination of Basic Intercontinental Course, African & Intercontinental Arts.</p>
            <div className="card-actions justify-end">
              <button className="btn text-white bg-orange-500">Register</button>
            </div>
          </div>
        </div>

        <div className="card card-compact w-full md:w-96 bg-base-100 shadow-xl">
          <figure><img src="https://res.cloudinary.com/dt3czltxx/image/upload/v1706415004/WhatsApp_Image_2024-01-28_at_4.59.09_AM_1_ieaejz_-_Video_Thumbnail_vt0njs.png" alt="Course 4" /></figure>
          <div className="card-body">
            <h2 className="card-title text-orange-600">Intercontinental & Asian Cuisines</h2>
            <p>This course contains a wide range of recipes from across the African continent. From Ghanaian food to Kenyan meals to expand your food knowledge. It also contains meals from across different continent across the African continent.</p>
            <div className="card-actions justify-end">
              <button className="btn text-white bg-orange-500">Register</button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Courses
