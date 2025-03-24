import Image from "next/image";
import DynamicGridShowcase from "./projects/page";
import Cursor from "@/components/home/Hero";

export default function Home() {
  return (
    <>
    <Cursor />
    <DynamicGridShowcase />
    <div className="bg-gray-50 text-center p-4 text-black text-sm">
      All Photos &copy; Ritika {new Date().getFullYear()}
    </div>
    </>
  );
}
