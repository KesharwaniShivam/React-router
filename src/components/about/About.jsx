import React from 'react'


export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12 md:mt-20 md:mb-20">
                  <div className="md:5/12 lg:w-5/12 ">
                      <img
                      
                          src="https://images.unsplash.com/photo-1622675363311-3e1904dc1885?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRldmVsb3BlcnN8ZW58MHx8MHx8fDA%3D"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12 ">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl mb-12">
                          React development is carried out by passionate developers
                      </h2>
                      <p className="mt-6 text-gray-600">
                      React is a JavaScript library for building user interfaces, known for its declarative syntax and efficient rendering. It uses a component-based architecture and a virtual DOM to optimize performance. 

                     </p>
                      <p className="mt-4 text-gray-600">
                      React is widely used for creating interactive and scalable web applications, offering a modular approach to UI development and enjoying popularity in the developer community.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}