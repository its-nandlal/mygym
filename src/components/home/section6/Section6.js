"use client";
import MembershipCard from "./MembershipCard";
import SectionHeader from "./SectionHeader";



export default function Section6() {
  const memberships = [
    {
      name: "Basic",
      price: "$29/month",
      features: [
        "Full gym equipment access",
        "Group fitness classes (yoga, spin)",
        "Locker room with showers",
        "Mobile app for booking",
      ],
      buttonText: "Join Basic",
      highlight: false,
    },
    {
      name: "Premium",
      price: "$49/month",
      features: [
        "All Basic features",
        "2 personal trainer sessions/month",
        "Sauna and steam room access",
        "Priority class booking",
        "1 guest pass/month",
      ],
      buttonText: "Join Premium",
      highlight: true,
    },
    {
      name: "Elite",
      price: "$79/month",
      features: [
        "All Premium features",
        "Unlimited personal trainer sessions",
        "Nutrition consultation (monthly)",
        "VIP locker and towel service",
        "2 guest passes/month",
        "Access to exclusive workshops",
      ],
      buttonText: "Join Elite",
      highlight: false,
    },
  ];

  return (
    <section
      className=" w-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-b-[5rem] max-md:rounded-b-3xl overflow-hidden"
      aria-label="Gym Membership Plans"
    >
      <div className=" w-full max-md:pt-5 px-4 sm:px-6 md:px-10 pb-16 max-md:pb-[40vw] md:pb-44 bg-zinc-900/40 backdrop-blur-3xl">
        <SectionHeader />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {memberships.map((membership) => (
            <MembershipCard key={membership.name} membership={membership} />
          ))}
        </div>
      </div>
    </section>
  );
}