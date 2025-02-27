import { Plus } from "lucide-react";

export default function LeftFooter() {
  const items = [
    { id: 1, title: "Data Science & AI" },
    { id: 2, title: "Product Management" },
    { id: 3, title: "Business Analytics" },
    { id: 4, title: "Digital Transformation" },
    { id: 5, title: "Business Management" },
    { id: 6, title: "Project Management" },
    { id: 7, title: "Strategy & Leadership" },
    { id: 8, title: "Senior Management" },
    { id: 9, title: "Fintech" },
  ];

  return (
    <div className="flex flex-row justify-center mt-8 w-full">
      <div className="flex flex-col items-start w-full">
        <h3 className="ml-2 text-xl font-bold tracking-normal text-white whitespace-nowrap max-md:ml-2.5">
          Programs
        </h3>
        <div className="flex flex-col w-full p-2 gap-2">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between w-full py-2"
            >
              <h2 className="text-lg font-bold text-white">{item.title}</h2>
              <Plus className="w-5 h-5 text-white" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
