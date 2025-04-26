import Footer from "@/components/guvenFinans/Footer";
import Header from "@/components/guvenFinans/Header";
import SubHeader from "@/components/guvenFinans/SubHeader";
import "../../app/globals.css";
export default function GuvenFinans({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="w-full">
        <div className="guven-bg-image relative z-0 ">
          <div className="relative z-10 min-h-screen ">
            <SubHeader />
            <Header />
            <main className="px-[40px] md:px-[86px]">{children}</main>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
