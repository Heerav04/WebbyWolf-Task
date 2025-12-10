"use client"

import React, { useRef, useEffect } from 'react'
import Hero from '../components/Hero'
import { ArrowRight, Phone, Motorbike } from 'lucide-react'
import Coolbg from '../components/Coolbg'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import _ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)

const Landing = () => {
  const textRef = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from(".cards", {
      y: 80,
      scale: 0.9,
      scrollTrigger: {
        trigger: ".cards",
        scrub: true,
      }
    })

    gsap.from(textRef.current, {
      x: -100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 50%",
      }
    })
    gsap.from(imgRef.current, {
      x: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: imgRef.current,
        start: "top 50%",
      }
    })

    gsap.from(".cover-2", {
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".cover-2",
        start: "top 50%",
      }
    })
  })

  const cards = [
    {
      img: "/about/img1.png",
      title: "Lorem ipsum dolor sit amet consectetur.",
      desc: "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.",
    },
    {
      img: "/about/img2.png",
      title: "Lorem ipsum dolor sit amet consectetur.",
      desc: "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.",
    },
    {
      img: "/about/img3.png",
      title: "Lorem ipsum dolor sit amet consectetur.",
      desc: "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.",
    },
    {
      img: "/about/img4.png",
      title: "Lorem ipsum dolor sit amet consectetur.",
      desc: "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.",
    },
  ];

  return (
    <div className=''>
      <Hero />

      <div className="cover-2 p-4 sm:p-10">
        <h2 className="text-blue-600 font-semibold text-xl sm:text-2xl">
          Lorem ipsum dolor sit.
        </h2>

        <div className="main flex flex-col lg:flex-row gap-10 mt-6">
          {/* LEFT CONTENT */}
          <div className="content w-full lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Lorem ipsum <br /> dolor sit amet.
            </h2>

            <p className="text-gray-700 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, sed harum
              inventore earum fugit soluta officiis rerum accusantium ex esse alias non
              minus vitae temporibus unde, beatae pariatur! Quaerat repellendus distinctio
              voluptas adipisci eaque accusantium beatae commodi? Aut facere, nemo possimus
              voluptate porro nihil mollitia voluptatum? Deserunt aperiam est ex numquam
              voluptates earum dolores dicta corrupti sint voluptatibus rerum, sunt inventore
              similique omnis possimus vitae iusto voluptatem animi! Enim aut quibusdam,
              neque iure fugit voluptates aliquam ut aspernatur asperiores ipsa laborum dolore
              quo, veniam a? Perferendis aut fuga, tenetur consectetur nulla quod id nisi
              dolorem, debitis, vero possimus. Modi, saepe.
            </p>

            {/* SHOWCASE ITEMS */}
            <div className="showcase flex flex-col sm:flex-row items-start sm:items-center gap-5 p-2 mt-4">
              <img className="size-50" src="/sc1.png" alt="" />
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et in excepturi
                dignissimos, odit voluptate molestias ratione dolor quis obcaecati commodi
                itaque enim saepe unde neque ipsam animi, ex optio tenetur reiciendis
                necessitatibus. Dolor, distinctio. Recusandae dolores dicta laboriosam
                nesciunt ut.
              </p>
            </div>

            <div className="showcase flex flex-col sm:flex-row items-start sm:items-center gap-5 p-2">
              <img className="size-50" src="/sc3.png" alt="" />
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et in excepturi
                dignissimos, odit voluptate molestias ratione dolor quis obcaecati commodi
                itaque enim saepe unde neque ipsam animi, ex optio tenetur reiciendis
                necessitatibus. Dolor, distinctio. Recusandae dolores dicta laboriosam
                nesciunt ut.
              </p>
            </div>

            <div className="showcase flex flex-col sm:flex-row items-start sm:items-center gap-5 p-2">
              <img className="size-50" src="/sc2.png" alt="" />
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et in excepturi
                dignissimos, odit voluptate molestias ratione dolor quis obcaecati commodi
                itaque enim saepe unde neque ipsam animi, ex optio tenetur reiciendis
                necessitatibus. Dolor, distinctio. Recusandae dolores dicta laboriosam
                nesciunt ut.
              </p>
            </div>

            {/* BUTTONS */}
            <div className="buttons flex flex-col sm:flex-row py-5 px-2 gap-4 sm:gap-8">
              <button className="bg-blue-500 flex items-center gap-2 font-semibold px-7 py-2 text-white rounded-lg drop-shadow-2xl">
                Contact <ArrowRight />
              </button>
              <button className="text-blue-500 flex items-center gap-2 font-semibold">
                <Phone />
                123456789
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <img
            className="
        h-60 sm:h-80 md:h-[32rem] lg:h-screen 
        w-full lg:w-1/2 
        object-cover 
        rounded-lg lg:rounded-none
      "
            src="/cover2.png"
            alt=""
          />
        </div>
      </div>



      <section
        className="
    w-full 
    px-5 sm:px-10 
    py-16 sm:py-20 
    grid 
    grid-cols-1 
    lg:grid-cols-2 
    gap-10 
    overflow-hidden
  "
      >
        {/* LEFT TEXT */}
        <div ref={textRef} className="space-y-6">
          <h4 className="text-blue-600 font-semibold text-lg">
            Lorem ipsum dolor sit amet
          </h4>

          <h1 className="text-3xl sm:text-4xl font-extrabold leading-snug">
            LOREM IPSUM DOLOR SIT <br /> AMET CONSECTETUR. EU <br /> ELIT.
          </h1>

          <p className="text-gray-700 leading-relaxed max-w-xl">
            Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper etiam leo
            eleifend condimentum in vitae faucibus. Amet massa malesuada sit pretium.
            Donec pharetra erat lacus suspendisse ornare.
          </p>

          {/* FEATURES LIST */}
          <div className="space-y-6 overflow-hidden">

            {/* ITEM 1 */}
            <div className="flex flex-col sm:flex-row items-start gap-4 overflow-hidden">
              <Motorbike width={50} height={50} />
              <div>
                <h3 className="font-bold">
                  Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.
                </h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non
                  viverra. Risus quam mattis senectus vitae interdum odio ornare gravida
                  vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.
                </p>
              </div>
            </div>

            {/* ITEM 2 */}
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Motorbike width={50} height={50} />
              <div>
                <h3 className="font-bold">
                  Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.
                </h3>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non
                  viverra. Risus quam mattis senectus vitae interdum odio ornare gravida
                  vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.
                </p>
              </div>
            </div>

            {/* ITEM 3 */}
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Motorbike width={50} height={50} />
              <div>
                <h3 className="font-bold">
                  Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.
                </h3>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non
                  viverra. Risus quam mattis senectus vitae interdum odio ornare gravida
                  vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div ref={imgRef} className="flex justify-center lg:justify-end">
          <img
            src="/cover3.png"
            alt=""
            width={600}
            height={500}
            className="
        rounded-lg 
        object-cover 
        w-full 
        max-w-[450px] 
        sm:max-w-[550px] 
        lg:max-w-[600px]
      "
          />
        </div>
      </section>


      <Coolbg />

      <div className="max-w-6xl mx-auto px-4 py-12 relative">
        {/* top text */}
        <p className="text-blue-600 font-medium mb-2">Lorem ipsum dolor sit amet</p>

        <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase">
          LOREM IPSUM DOLOR SIT
        </h2>

        <p className="text-gray-600 max-w-3xl mb-8 text-sm leading-relaxed">
          Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui.
          Mi porttitor ut aliquam mattis maecenas eget integer in nam. Non nisl iaculis at
          felis aliquet. Hendrerit tellus at purus lectus.
        </p>

        {/* Grid */}
        <div className="grid cards md:grid-cols-2 gap-8">
          {cards.map((c, i) => (
            <div
              key={i}
              className="bg-white rounded-md shadow-md overflow-hidden border"
            >
              <img src={c.img} alt="" className="w-full h-52 object-cover" />

              <div className="p-5">
                <h3 className="font-semibold text-sm mb-2">{c.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {c.desc}
                </p>
                <a
                  href="#"
                  className="text-blue-600 text-sm font-semibold hover:underline"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Background wave (your faint lines background) */}
        <div className="absolute right-0 top-0 w-72 h-full opacity-20 pointer-events-none">
          <img
            src="/bg-lines.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>


      <section className="relative w-full h-[70vh] md:h-[80vh] lg:h-screen overflow-hidden">

        {/* Background image */}
        <img
          src="/coolbg2.png"
          alt="studio background"
          className="absolute inset-0 w-full h-full object-fit"
        />
        <div className="absolute inset-0 bg-black/20"></div>

        {/*logo */}
        <div className="relative z-10 p-8">
          <div className="bg-gray-200 text-black font-bold text-2xl px-6 py-3 inline-block rounded">
            LOGO
          </div>
        </div>

        {/* Center Text */}
        <div className="relative z-10 h-full flex items-center justify-center px-6 text-center">
          <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight max-w-3xl">
            DOLOR SIT AMET CONSECTETUR. QUIS ADIPISCING PURUS EGESTAS ALIQUAM VIVERRA MI.
            DOLOR SIT AMET CONSECTETUR. QUIS
          </h1>
        </div>
      </section>
    </div>
  )
}

export default Landing
