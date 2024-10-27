'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import bg from "images/bg.webp";



// const DumbbellAnimation: React.FC = () => {
//   const mountRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     if (!mountRef.current || typeof window.THREE === 'undefined') return

//     const THREE = window.THREE
//     // Scene setup
//     const scene = new THREE.Scene()
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
//     const renderer = new THREE.WebGLRenderer({ alpha: true })
//     renderer.setSize(window.innerWidth, window.innerHeight)
//     mountRef.current.appendChild(renderer.domElement)

//     // Create dumbbell
//     const createDumbbell = () => {
//       const group = new THREE.Group()

//       // Bar
//       const barGeometry = new THREE.CylinderGeometry(0.1, 0.1, 2, 32)
//       const barMaterial = new THREE.MeshPhongMaterial({ color: 0x333333 })
//       const bar = new THREE.Mesh(barGeometry, barMaterial)
//       group.add(bar)

//       // Weights
//       const weightGeometry = new THREE.CylinderGeometry(0.4, 0.4, 0.5, 32)
//       const weightMaterial = new THREE.MeshPhongMaterial({ color: 0x666666 })
//       const weight1 = new THREE.Mesh(weightGeometry, weightMaterial)
//       const weight2 = new THREE.Mesh(weightGeometry, weightMaterial)
//       weight1.position.y = 1
//       weight2.position.y = -1
//       group.add(weight1)
//       group.add(weight2)

//       return group
//     }

//     const dumbbell = createDumbbell()
//     scene.add(dumbbell)

//     // Lighting
//     const light = new THREE.PointLight(0xffffff, 1, 100)
//     light.position.set(0, 0, 10)
//     scene.add(light)

//     camera.position.z = 5

//     // Animation
//     const animate = () => {
//       requestAnimationFrame(animate)
//       dumbbell.rotation.x += 0.01
//       dumbbell.rotation.y += 0.01
//       renderer.render(scene, camera)
//     }
//     animate()

//     // Handle resize
//     const handleResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight
//       camera.updateProjectionMatrix()
//       renderer.setSize(window.innerWidth, window.innerHeight)
//     }
//     window.addEventListener('resize', handleResize)

//     // Cleanup
//     return () => {
//       window.removeEventListener('resize', handleResize)
//       mountRef.current?.removeChild(renderer.domElement)
//     }
//   }, [])

//   return <div ref={mountRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }} />
// }

export function Page() {
  return (
    <>
      {/* <Script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js" strategy="beforeInteractive" /> */}
      <div className="min-h-screen bg-gray-100">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden">
          {/* <DumbbellAnimation />` */}
          <Image
            src={bg}
            alt="Gym background"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 mix-blend-overlay"
            priority
          />
          <div className="relative z-10 text-center space-y-6 px-4">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
              Transform Your Body
              <span className="block text-blue-400">Transform Your Life</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Join FitHub Gym and start your fitness journey today. Expert trainers, state-of-the-art equipment, and a supportive community await you.
            </p>
            <Link 
              href="/join" 
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              Join Now
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Why Choose FitHub?</h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold">State-of-the-art Equipment</h3>
                <p className="text-gray-600">Access to the latest fitness technology and equipment to maximize your workouts.</p>
              </div>
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold">Expert Trainers</h3>
                <p className="text-gray-600">Our certified trainers are here to guide and motivate you every step of the way.</p>
              </div>
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold">Flexible Schedule</h3>
                <p className="text-gray-600">From early morning to late night, we offer classes that fit your busy lifestyle.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Class Schedule Section */}
        <section className="py-20 px-4 bg-gray-100">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Upcoming Classes</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: 'Yoga Flow', time: '7:00 AM', trainer: 'Emma Wilson', spots: 5 },
                { name: 'HIIT Blast', time: '12:00 PM', trainer: 'John Davis', spots: 3 },
                { name: 'Strength Training', time: '6:00 PM', trainer: 'Sarah Thompson', spots: 8 },
              ].map((cls, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 space-y-4">
                  <h3 className="text-2xl font-semibold">{cls.name}</h3>
                  <p className="text-gray-600">Time: {cls.time}</p>
                  <p className="text-gray-600">Trainer: {cls.trainer}</p>
                  <p className="text-gray-600">Available Spots: {cls.spots}</p>
                  <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
                    Book Now
                  </button>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link 
                href="/schedule" 
                className="inline-block bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out"
              >
                View Full Schedule
              </Link>
            </div>
          </div>
        </section>

        {/* Membership Plans Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Membership Plans</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: 'Basic', price: '$29.99', features: ['Access to gym equipment', 'Locker room access', '2 group classes per month'] },
                { name: 'Pro', price: '$59.99', features: ['Full gym access', 'Unlimited group classes', 'Personal trainer consultation', 'Access to sauna'] },
                { name: 'Elite', price: '$99.99', features: ['24/7 gym access', 'Unlimited group classes', 'Weekly personal training session', 'Nutrition planning', 'Access to all amenities'] },
              ].map((plan, index) => (
                <div key={index} className="bg-gray-100 rounded-lg shadow-md p-6 space-y-4 flex flex-col">
                  <h3 className="text-2xl font-semibold text-center">{plan.name}</h3>
                  <p className="text-4xl font-bold text-center text-blue-500">{plan.price}<span className="text-sm text-gray-600">/month</span></p>
                  <ul className="space-y-2 flex-grow">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <svg className="h-5 w-5 text-green-500 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out mt-4">
                    Choose Plan
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 bg-gray-100">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-12">What Our Members Say</h2>
    <div className="grid md:grid-cols-2 gap-12">
      {[
        {
          name: 'Alex Johnson',
          quote: 'Joining FitHub was the best decision I&apos;ve made for my health. The trainers are amazing and the community is so supportive!',
          avatar: '/placeholder.svg?height=100&width=100',
        },
        {
          name: 'Maria Garcia',
          quote: 'I&apos;ve tried many gyms, but FitHub stands out. The variety of classes keeps me motivated, and I&apos;ve seen incredible results.',
          avatar: '/placeholder.svg?height=100&width=100',
        },
      ].map((testimonial, index) => (
        <div key={index} className="bg-white rounded-lg p-6 space-y-4 shadow-md">
          <p className="text-gray-600 italic">&quot;{testimonial.quote}&quot;</p>
          <div className="flex items-center space-x-4">
            <Image
              src={testimonial.avatar}
              alt={testimonial.name}
              width={50}
              height={50}
              className="rounded-full"
            />
            <p className="font-semibold">{testimonial.name}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      </div>
    </>
  )
}