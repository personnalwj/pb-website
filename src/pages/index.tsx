import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Navbar from "@/components/layouts/navbar";
import Footer from "@/components/layouts/footer";
import FeatureIconLeftTitleText from "@/components/layouts/features";
import CardHorizontal from "@/components/layouts/banner";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className="container mx-auto pb-24  bg-indigo-100">
          <div className="flex flex-col items-center justify-around min-h-screen m-0 p-0">
            <section>
              <div className="container px-6 m-auto">
                <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12 mb-4">
                  <div className="col-span-4 md:col-span-8 lg:col-span-12">
                    <h1 className="text-4xl font-bold text-center mt-10 mb-2">
                      Bienvenue sur TPL Helper
                    </h1>
                    <p className="text-center text-lg text-slate-500">
                      Une application qui vous permettra de gérer les différents
                      aspects du TPL. Vous pourrez avoir des statistiques sur
                      votre utilisation des spots. Trouvez des frères et soeurs pour vous
                      accompagner et affichez vos disponibilités. Trouvez des spots disponibles et tenez vous informé des événements à venir.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <CardHorizontal />
            <FeatureIconLeftTitleText />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
