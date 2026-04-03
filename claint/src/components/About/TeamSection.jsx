import { Linkedin, Facebook, Instagram, Twitter } from "lucide-react";

import member1 from "../../assets/images/team-person-1.png";
import member2 from "../../assets/images/team-person-2.png";
import member3 from "../../assets/images/team-person-3.png";
import member4 from "../../assets/images/team-person-4.png";

export default function TeamSection() {
  const team = [
    { name: "Jenny Wilson", role: "Managing Director", img: member1 },
    { name: "Jenny Wilson", role: "Managing Director", img: member2 },
    { name: "Jenny Wilson", role: "Managing Director", img: member3 },
    { name: "Jenny Wilson", role: "Managing Director", img: member4 },
  ];

  return (
    <section className="mt-10 py-10">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-3xl font-semibold text-gray-900 mb-3">
            Meet Our Team
          </h2>
          <p className="text-sm text-gray-500">
            Join thousands of happy customers from around the globe.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-[30px] p-4 text-center hover:shadow-md transition"
            >
              <div className="bg-gray-100 rounded-[25px] p-4 mb-6">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-[260px] object-cover rounded-[20px]"
                />
              </div>

              <h4 className="font-semibold text-gray-900">
                {member.name}
              </h4>

              <p className="text-sm text-gray-500 mt-1 mb-6">
                {member.role}
              </p>

              <div className="flex justify-center gap-4">
                <button className="w-10 h-10 bg-[#088178] text-white rounded-full flex items-center justify-center hover:bg-[#056d6e] transition">
                  <Linkedin size={16} />
                </button>
                <button className="w-10 h-10 bg-[#088178] text-white rounded-full flex items-center justify-center hover:bg-[#056d6e] transition">
                  <Facebook size={16} />
                </button>
                <button className="w-10 h-10 bg-[#088178] text-white rounded-full flex items-center justify-center hover:bg-[#056d6e] transition">
                  <Instagram size={16} />
                </button>
                <button className="w-10 h-10 bg-[#088178] text-white rounded-full flex items-center justify-center hover:bg-[#056d6e] transition">
                  <Twitter size={16} />
                </button>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}