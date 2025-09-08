"use client";

const clients = [
  {
    name: "DHS",
    src: "/assets/DHS.png",
    url: "https://defencehousingsociety.com/",
  },
  {
    name: "RRPL",
    src: "/assets/clientlogo.png",
    url: "https://rajavrukshagroup.in/",
  },
  {
    name: "Plumeria",
    src: "/assets/Plumeria.png",
    url: "https://plumeriaresort.in/",
  },
  {
    name: "SriMatru",
    src: "/assets/SriMathru2.jpg",
    url: "https://srimatru.in/",
  },
  {
    name: "Gnanasamrudhi",
    src: "/assets/gnanasamrudhi.png",
    // url: "https://gnanasamrudhicharitabletrust.com/",
  },
];

const OurClients = () => {
  return (
    <div className="mt-16 md:mt-20">
      <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8">
        {clients.map((client, idx) => (
          <a
            key={idx}
            href={client.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center p-4 bg-white/10 backdrop-blur-md rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <img
              src={client.src}
              alt={client.name}
              className="h-12 sm:h-16 md:h-20 object-contain"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default OurClients;
