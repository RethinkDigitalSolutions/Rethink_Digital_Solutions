import React from 'react'

const AboutSection2 = () => {
    const ValuesContent = [
        {
            lable: "1/.",
            title: "Clarity First",
            description:
                "We explain the why behind every recommendation and decision so you can trust the path forward."
        },
        {
            lable: "2/.",
            title: "Quality Over Speed",
            description:
                "We take the time to build right: clean code, thoughtful UX, and features that last."
        },
        {
            lable: "3/.",
            title: "Your Success Is Ours",
            description:
                "We're invested in your business outcomes, not just billing hours. Your goals are our roadmap."
        },
        {
            lable: "4/.",
            title: "Continuous Learning",
            description:
                "Tech and design move fast; we stay current so you always get modern, best-practice solutions."
        },
        {
            lable: "5/.",
            title: "Transparent Partnership",
            description:
                "No surprises, no jargon. Regular updates, honest budgets, and realistic timelines."
        }
    ];

    return (
        <div className='h-full w-full '>
            <div className='flex lg:flex-row flex-col'>
                <div className="left lg:w-[50%] w-full ">
                    <h1 className='lg:text-[10rem] text-[5rem] font-extrabold lg:px-10 lg:py-30 px-10 py-10 lg:leading-30 leading-28'>What<br /> &nbsp; &nbsp; &nbsp; We<br /> Stand<br /> &nbsp;  &nbsp; &nbsp; For</h1>
                </div>
                <div className="right lg:w-[50%] w-full lg:flex lg:items-center  text-[#716d6d] ">
                    <p className='lg:px-5 px-3 lg:text-4xl text-2xl font-bold'>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;Our mission is to help ambitious brands level up with digital products that are fast, stunning, secure, and actually useful. No fluff, no cookie-cutter templates—just clean builds, sharp design, and tech that works the way people do. We create tools that help businesses move quicker, look better, and deliver real value in every click.</p>
                </div>
            </div>
            <div className="h-fit flex flex-col relative lg:mt-0 mt-8">
                {ValuesContent.map((steps, index) => (
                    <div
                        key={index}
                        className="w-full border-b-2 border-slate-600 bg-reveal border-wipe flex lg:flex-row flex-col lg:gap-10 gap-5 lg:justify-between lg:items-center lg:px-15 px-5 lg:py-15 relative transition-all duration-500 hover:text-black py-8" >

                        <h1 className="relative z-10 lg:text-8xl text-4xl font-bold lg:w-[55%] w-full transition-all duration-500">
                            {steps.title}
                        </h1>

                        <p className="relative z-10 lg:text-3xl text-2xl lg:w-[45%] w-full font-medium text-[#716d6d] transition-all duration-500">
                            {steps.description}
                        </p>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default AboutSection2