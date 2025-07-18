"use client";

import CardS2 from "./CardS2";

export default function Section2() {
  const cardsData = [
    {
      imageSrc: "/Images/C1.jpg",
      imageAlt: "Modern gym floor with professional exercise equipment",
      title: "Personal Trainer",
      plans: [
        { name: "Basic", features: "Gym Access, Group Classes", price: "$30" },
        { name: "Premium", features: "Gym Access, Personal Trainer, Sauna", price: "$50" },
        { name: "Elite", features: "All Features, Nutrition Plan, 24/7 Access", price: "$80" },
      ],
    },
    {
      imageSrc: "/Images/C2.jpeg",
      imageAlt: "Yoga studio with serene environment",
      title: "Yoga Classes",
      plans: [
        { name: "Starter", features: "Group Yoga Sessions", price: "$25" },
        { name: "Advanced", features: "Private Sessions, Meditation", price: "$45" },
        { name: "Master", features: "All Features, Retreat Access", price: "$70" },
      ],
    },
    {
      imageSrc: "/Images/C2.jpeg",
      imageAlt: "Outdoor fitness bootcamp",
      title: "Bootcamp",
      plans: [
        { name: "Basic", features: "Group Workouts, Weekly Sessions", price: "$20" },
        { name: "Pro", features: "Daily Workouts, Coaching", price: "$40" },
        { name: "Elite", features: "All Features, Meal Prep Guide", price: "$65" },
      ],
    },
    {
      imageSrc: "/Images/C2.jpeg",
      imageAlt: "Swimming pool for fitness training",
      title: "Swim Training",
      plans: [
        { name: "Beginner", features: "Pool Access, Group Lessons", price: "$35" },
        { name: "Intermediate", features: "Private Coaching, Drills", price: "$55" },
        { name: "Advanced", features: "All Features, Competition Prep", price: "$85" },
      ],
    },
    {
      imageSrc: "/Images/C2.jpeg",
      imageAlt: "Group cycling class in studio",
      title: "Cycling Classes",
      plans: [
        { name: "Basic", features: "Group Rides, Basic Training", price: "$30" },
        { name: "Pro", features: "Personalized Rides, Analytics", price: "$50" },
        { name: "Elite", features: "All Features, Outdoor Rides", price: "$75" },
      ],
    },
    {
      imageSrc: "/Images/C2.jpeg",
      imageAlt: "Nutrition consultation room",
      title: "Nutrition Coaching",
      plans: [
        { name: "Starter", features: "Diet Plan, Weekly Check-ins", price: "$40" },
        { name: "Advanced", features: "Custom Meals, Daily Tracking", price: "$60" },
        { name: "Premium", features: "All Features, Supplements Guide", price: "$90" },
      ],
    },
  ];

  return (
    <section aria-labelledby="section-heading">
      <div className="w-full h-fit pt-20 md:pt-40 overflow-x-hidden">
        <div className="w-full flex items-center justify-center">
          <h2
            id="section-heading"
            className=" max-md:text-[10vw] md:text-[8vw] font-['f1'] font-extrabold uppercase tracking-tight text-center scale-x-[1.5] scale-y-[2]">
            Start Here
          </h2>
        </div>

        <div
          className="scrollbar-hide w-full px-4 sm:px-6 lg:px-10 md:-mt-10 xl:-mt-20 flex overflow-x-auto snap-x snap-mandatory scrollbar-thin"
          role="region"
          aria-label="Featured Fitness Programs Carousel"
        >
          <div className="w-full flex max-md:space-x-4 md:space-x-10">
            {cardsData.map((card, index) => (
              <CardS2
                key={`card-${index}`}
                imageSrc={card.imageSrc}
                imageAlt={card.imageAlt}
                title={card.title}
                plans={card.plans}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}