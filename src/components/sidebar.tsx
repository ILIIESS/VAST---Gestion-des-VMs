import Link from "next/link";

const Sidebar: React.FC = () => {
  return (
    <div className="bg-gray-800 text-white w-[320px] h-screen fixed">
      <div className="p-4">
        <h2 className="text-2xl font-semibold">Sidebar</h2>
      </div>

      <nav>
        <ul className="flex flex-col ">
          <Link href="/" className="px-4 py-2 hover:bg-gray-700">
            Platforms
          </Link>

          <Link href="/os" className="px-4 py-2 hover:bg-gray-700">
            Os
          </Link>
          <Link href="/vcenter" className="px-4 py-2 hover:bg-gray-700">
            V Center
          </Link>
          <Link href="/clients" className="px-4 py-2 hover:bg-gray-700">
            Clients
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
