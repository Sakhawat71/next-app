import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

const CommonLayout = ({ children }) => {

    return (
        <div>
            <Navbar />
            <main className="container mx-auto p-4 flex-grow min-h-[75vh]">{children}</main>
            <Footer />
        </div>
    );
};

export default CommonLayout;