export default function RightFooter() {
  const info = [
    "About",
    "Career",
    "Blog",
    "Admission Policy",
    "Referral Policy",
    "Privacy Policy",
    "Terms Of Service",
    "Master FAQs",
  ];

  return (
    <div className="flex flex-col justify-start w-full text-white mt-9 px-4">
      <h3 className="text-xl font-bold mb-3">Accredian</h3>
      <ul className="space-y-2 text-sm">
        {info.map((item, index) => (
          <li key={index}>
            <a href="#" className="hover:underline">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
