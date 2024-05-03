
"use client"

import Image from "next/image";
import React from "react";
import Router from "next/navigation";
import { useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";
import { UserButton } from "@clerk/clerk-react";
import Link from "next/link";

type HandleLearnMoreClick = (destination: string) => void;

export default function Home() {
  const router = useRouter(); 

  const {isSignedIn} = useAuth(); 



 
  const handleLearnMoreClick: HandleLearnMoreClick = (destination) => {
    

    const encodedDestination = encodeURIComponent(destination);
   
    window.location.href = `https://www.google.com/maps/search/${encodedDestination}`;
  };

 
  function handleLogin(){
router.push('/sign-in'); 

  }

  return (
    <div>
    <div style={{
      backgroundImage: `url(${"/pic.png"})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100vh",
      width: "100%"
    }}>
      <nav className=" ">
        <ul className=" flex flex-row-reverse p-4 cursor-pointer text-black">
          <li className=" m-4">{
            isSignedIn?( 
            <div>
                 
            <UserButton />
         
        </div>):(
                <div>
                  <Link href={"/sign-up"}>
                    <button>Login</button>
                  </Link>
                </div>
              )
          } </li>
          <li  className=" m-4">Contect</li>
          <li  className=" m-4">About</li>
          <li  className=" m-4">Home </li>
        </ul>
      </nav>
      <Image src={"/foreground 1.png"}
      alt="boy image"
      height={50}
      width={500}
      className=" flex justify-center items-center "
      ></Image>
    
    </div>
    <hr />


<div className=" flex flex-row">
 
<div className=" ml-4 mt-10">
     <h1>The Himalayas</h1>
     <hr />

     <p>The Himalayas, or Himalaya, is a mountain range in Asia, <br /> separating the plains of the Indian subcontinent from the Tibetan Plateau. <br /> The range has some of the planet's highest peaks, <br /> including the very highest, Mount Everest. <br /> Over 100 peaks exceeding 7,200 m in elevation lie in the Himalayas. </p>


     <button
        className="border-dotted border-4 border-light-blue-500 m-5 p-4"
        onClick={() => handleLearnMoreClick("The Himalayas")}
      >
        Learn More
      </button>
    </div>
  <div className=" flex ">
<Image 
src={"/01_Bike.jpg"}
alt="bike"
height={400}
width={400}
className="  rounded-xl mt-10 mr-10"
></Image>
<Image 
src={"/Manali-Ladakh-Motorcycle-Tour.webp"}
alt="bike"
height={400}
width={400}
className="  rounded-xl mt-10 mr-10"
></Image>

  </div>
</div>


<hr />



<div className=" flex flex-row">
 
<div className=" ml-4 mt-10">
     <h1>Goa</h1>
     <hr />

     <p>Goa, a coastal paradise nestled along the azure Arabian Sea on India's <br /> western coast, is a destination that truly <br /> captivates the soul. Its sun-kissed beaches, framed by<br /> swaying palms and golden sands, invite visitors <br /> to unwind and soak in the laid-back coastal vibe. Beyond <br /> its breathtaking natural beauty, Goa is a melting pot <br /> of cultures, evident in its rich tapestry of  <br />colonial architecture, ancient temples, and bustling markets. <br /> Whether you're seeking vibrant beach parties pulsating <br /> with energy or serene yoga retreats offering inner <br /> peace, Goa caters to every traveler's desires. And let's <br /> not forget the culinary delights Goa has to offer—indulge <br /> in fresh seafood curries, fiery vindaloos, and sweet <br /> treats like Bebinca, ensuring that every meal is <br /> a delightful journey into Goan flavors</p>


     <button
        className="border-dotted border-4 border-light-blue-500 m-5 p-4"
        onClick={() => handleLearnMoreClick("Goa")}
      >
        Learn More
      </button>
    </div>
  <div className=" flex ">
<Image 
src={"/baga.jpg"}
alt="goa"
height={400}
width={430}
className="  rounded-xl mt-10 mr-10"
></Image>
<Image 
src={"/Master.webp"}
alt="bike"
height={400}
width={430}
className="  rounded-xl mt-10 mr-10"
></Image>

  </div>
  <hr />
</div>
    

    <div>
     <hr />
    </div>
    
    </div>
  
  );
}
