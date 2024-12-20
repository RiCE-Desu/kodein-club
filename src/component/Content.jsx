import { englishCamp, kajianIslam, kodein, kodeinClub, quranCamp, tahfidzQuran } from "../assets";

const Content = () => {
    return (
      <>
        <div className="mx-5 flex flex-col lg:flex-row gap-5 mt-10">
          {/* Content */}
          <div className="content flex-[2] lg:mr-5">
            {/* English Camp */}
            <div className="card bg-white border border-gray-300 rounded-lg p-5 shadow-md mb-5">
              <h3 className="text-lg font-bold mb-2">English Camp</h3>
              <img src={englishCamp} className="w-full bg-gray-200 rounded mb-4"></img>
              <p className="text-sm text-gray-600 leading-relaxed">
                Contrary to popular belief, Lorem Ipsum is not simply random text.
                It has roots in a piece of classical Latin literature from 45 BC,
                making it over 2000 years old.
              </p>
            </div>
  
            {/* Kodein Club */}
            <div className="card bg-white border border-gray-300 rounded-lg p-5 shadow-md mb-5">
              <h3 className="text-lg font-bold mb-2">Kodein Club</h3>
              <img src={kodeinClub} className="w-full bg-gray-200 rounded mb-4"></img>
              <p className="text-sm text-gray-600 leading-relaxed">
                Contrary to popular belief, Lorem Ipsum is not simply random text.
                It has roots in a piece of classical Latin literature from 45 BC,
                making it over 2000 years old.
              </p>
            </div>
  
            {/* Quran Camp */}
            <div className="card bg-white border border-gray-300 rounded-lg p-5 shadow-md mb-5">
              <h3 className="text-lg font-bold mb-2">Quran Camp</h3>
              <img src={quranCamp} className="w-full bg-gray-200 rounded mb-4"></img>
              <p className="text-sm text-gray-600 leading-relaxed">
                Contrary to popular belief, Lorem Ipsum is not simply random text.
                It has roots in a piece of classical Latin literature from 45 BC.
              </p>
  
              {/* Subsection */}
              <div className="sub-section border-t border-gray-300 pt-3 mt-3">
                <h4 className="text-md font-semibold mb-2">Tahfidz Quran</h4>
                <img src={tahfidzQuran} className="w-full bg-gray-200 rounded mb-4"></img>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical.
                </p>
              </div>
  
              <div className="sub-section border-t border-gray-300 pt-3 mt-3">
                <h4 className="text-md font-semibold mb-2">Kajian Islam</h4>
                <img src={kajianIslam} className="w-full bg-gray-200 rounded mb-4"></img>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical.
                </p>
              </div>
            </div>
          </div>
  
          {/* Side Bar */}
          <div className="sidebar flex-[1]">
            <div className="sidebar-card bg-white border border-gray-300 rounded-lg p-5 shadow-md">
              <img src={kodein} className="w-full bg-gray-200 rounded mb-4"></img>
              <h3 className="text-lg font-bold text-center mb-3">
                Sekolah Developer Indonesia
              </h3>
              <p className="text-sm text-gray-600 font-semibold mb-2">
                Informasi Lainnya
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-1">
                <strong>Alamat:</strong> Contrary to popular belief, Lorem Ipsum
                is not simply random text.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                <strong>Telepon:</strong> 854xxxx
              </p>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Content;