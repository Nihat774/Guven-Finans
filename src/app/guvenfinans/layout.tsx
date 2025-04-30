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
        <div className="relative w-full h-screen bg-center bg-no-repeat bg-[url('/guvenfinans/guvenfinans-background.png')]">
          <div className="absolute inset-0 bg-[#0F2F73]/60 z-0"></div>

          <div className="relative z-10 min-h-screen">
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
