import Footer from "@/components/guvenFinans/Footer";
import Header from "@/components/guvenFinans/Header";
import SubHeader from "@/components/guvenFinans/SubHeader";
import "../../app/globals.css"
export default function GuvenFinans({
  children,
}: {
  children: React.ReactNode;
}) 
{
  return (
    <>
      <div className={` guven-bg-image ` }>
        <div className="  min-h-screen">
          <SubHeader />
          <Header />

          <main className="px-[86px]">{children}</main>
        </div>
        <Footer />
      </div>
    </>
  );
}
